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
$videos =  array_filter(explode("\n", shell_exec("ls -tr $projectPath/*.webm")));
$videosFile = "";
foreach($videos as $video) {
	$videosFile .= "file ". "'{$video}'\n";
}
var_dump($videosFile);
file_put_contents("$projectPath/videosFile.txt", $videosFile);
echo(shell_exec("cd $projectPath && ffmpeg -f concat -safe 0 -i videosFile.txt -c copy assembled.webm && ffmpeg -i assembled.webm -i ../..$musicPath -filter_complex ' [1:0] apad ' -shortest -y output.webm"));