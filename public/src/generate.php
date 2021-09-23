<?php
declare(strict_types = 1);
array_shift($argv); // remove script name in $argv[0]
$parameters = array_reduce($argv, function($carry, $arg) {
	$tokens = explode('=', $arg);
	$carry[$tokens[0]] = $tokens[1];
	return $carry;
}, []);
$projectPath = $parameters['projectPath'];
$musicPath = $parameters['musicPath'];
$fontPath = getcwd() . "/public/fonts/cobol/Cobol-Bold.ttf";
$logoPath = getcwd() . "/public/images/saintex.jpg";
$carnetLogoPath = getcwd() . "/public/images/CarnetTitre.jpg";
// Adding descriptions for each clip and fade in and fade out filters
$clipsToDescribe =  glob("$projectPath/*.webm");
$clipFrameRate = (int) shell_exec("cd $projectPath && ffprobe -v error -select_streams v -of default=noprint_wrappers=1:nokey=1 -show_entries stream=r_frame_rate $clipsToDescribe[0]");
$clipFrameRate = $clipFrameRate > 60 ? 30 : $clipFrameRate;
for($i = 1; $i <= count($clipsToDescribe); $i++) {
	$clipIndex = $i - 1;
	$clipFrames = (int) shell_exec("cd $projectPath && ffprobe -v error -select_streams v:0 -count_packets -show_entries stream=nb_read_packets -of csv=p=0 $clipsToDescribe[$clipIndex]");
	$clipDuration = (float) ($clipFrames / $clipFrameRate) - 0.5;
	file_put_contents("$projectPath/clip${i}_desc.txt", $parameters["clip${i}_desc"]);
	shell_exec("cd $projectPath && ffmpeg -i $clipsToDescribe[$clipIndex] -vf 'drawtext=fontfile=$fontPath: textfile=clip${i}_desc.txt: fontcolor=white: fontsize=46: box=1: boxcolor=black@0.5: boxborderw=5: x=(w-text_w)/2: y=(h-text_h-50): fix_bounds=true, fade=t=in:st=0:d=0.5,fade=t=out:st=$clipDuration:d=0.5' -b:v 3000K -b:a 192K clip${i}.webm");	
	// shell_exec("cd $projectPath && ffmpeg -i $clipsToDescribe[$clipIndex] -vf 'drawtext=fontfile=$fontPath: textfile=clip${i}_name.txt: fontcolor=white: fontsize=46: box=1: boxcolor=black@0.5: boxborderw=5: x=(w-text_w)/2: y=(h-text_h-500): fix_bounds=true, fade=t=in:st=0:d=0.5,fade=t=out:st=$clipDuration:d=0.5' -b:v 3000K -b:a 192K clip${i}.webm");
}
array_map('unlink', glob("$projectPath/*desc.txt"));

shell_exec("cd $projectPath && ffmpeg -t 2 -f lavfi -i color=c=black:s=1280x720 -r 30 blank.webm");
shell_exec("cd $projectPath && ffmpeg -i blank.webm -i $carnetLogoPath -filter_complex '[0:v][1:v] overlay=(main_w/2)-(overlay_w/2):(main_h/2)-(overlay_h/2)' -pix_fmt yuv420p -c:a copy logo.webm");

$workshop = $parameters["workshop_type"];
$title = $parameters["title"];
shell_exec("cd $projectPath && ffmpeg -f lavfi -i color=size=1280x720:duration=5:rate=30:color=black -vf 'drawtext=text=$workshop:fontfile=$fontPath:fontcolor=white:fontsize=46:x=(w-text_w)/2:y=(h-text_h)/2, drawtext=text=$title:fontfile=$fontPath:fontcolor=white:fontsize=46:x=(w-text_w)/2:y=((h-text_h)/2)+lh+5' opening.webm");
unlink("$projectPath/blank.webm");

$videosFile = "file 'logo.webm'\n";
$videosFile .= "file 'opening.webm'\n";{
	file_put_contents("$projectPath/project_desc.txt", $parameters["project_desc"]);
	shell_exec("cd $projectPath && ffmpeg -f lavfi -i color=size=1280x720:duration=5:rate=30:color=black -vf 'drawtext=fontfile=$fontPath:fontsize=46:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:textfile=project_desc.txt' project_desc.webm");
	unlink("$projectPath/project_desc.txt");
	$videosFile .= "file 'project_desc.webm'\n";
} 
if(array_key_exists("participants", $parameters)) {
	file_put_contents("$projectPath/participants.txt", "Participants :\n" . $parameters["participants"]);
	shell_exec("cd $projectPath && ffmpeg -f lavfi -i color=size=1280x720:duration=2:rate=30:color=black -vf 'drawtext=fontfile=$fontPath:fontsize=46:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:textfile=participants.txt' participants.webm");
	unlink("$projectPath/participants.txt");
}

$videos =  glob("$projectPath/clip*.webm");
foreach($videos as $video) {
	if($video != "originalVideos") {
		$videosFile .= "file ". "'{$video}'\n";
	}
} 
if(array_key_exists("participants", $parameters)) {
	$videosFile .= "file '$projectPath/participants.webm'";
}
array_map('unlink', glob("$projectPath/*webm.txt"));
file_put_contents("$projectPath/videosFile.txt", $videosFile);
if($musicPath == "/_musics/") {
	echo(shell_exec("cd $projectPath && ffmpeg -f concat -safe 0 -i videosFile.txt -b:v 10000K -crf 20 -b:a 192K output.webm"));
} else {
	echo(shell_exec("cd $projectPath && ffmpeg -f concat -safe 0 -i videosFile.txt -b:v 10000K -crf 20 -b:a 192K assembled.webm && ffmpeg -i assembled.webm -i ../..$musicPath -filter_complex ' [1:0] apad ' -shortest -y -b:v 3000K -b:a 192K output.webm"));
}