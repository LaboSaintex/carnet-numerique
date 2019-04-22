module.exports = (function() {
  // Ready translated locale messages
  const messages = {
    fr: {
      ascending: 'Croissant',
      descending: 'Décroissant',
      create_a_project: 'Créer un projet',
      create_a_publication: 'Créer une publication',
      publication: 'Publication',
      name: 'Nom',
      project_name: 'Nom du projet',
      created_date: 'Date de création',
      uploaded: 'Importation',
      created: 'Création',
      edited: 'Édition',
      sent_date: 'Date d’envoi',
      for_the_placement_on_timeline: '(pour le placement sur la timeline)',
      type: 'Type',
      color: 'Couleur',
      keywords: 'Mots-clés',
      share: 'Partage',
      author: 'Auteur(s)',
      download: 'Télécharger',
      caption: 'Légende',
      formatting: 'Mise en forme',
      smoothing: 'Lissage',
      onion_skin: 'Pelure d’oignon',
      'file:': 'Fichier&nbsp;:',
      add_to_project: 'Ajouter au projet&nbsp;:',
      input_password: 'Renseigner le mot de passe ci-dessous :',
      validate_with_enter: 'Valider avec la touche ENTRÉE.',
      no_stopmotion_created_yet:
        'Les animations créées apparaîtront dans ce panneau.',

      cooking_pot: 'La marmite',
      text_overflow: 'Texte en excès',
      move_to_foreground: 'Mettre au premier plan',
      move_to_background: 'Mettre à l’arrière plan',
      show_all: 'Tout afficher',
      cooking_pot_instructions:
        'Mélangez des médias pour en créer des nouveaux !',
      untitled: 'Sans titre',
      mix_audio_and_video: 'Ajoutez (ou remplacez) du son sur une vidéo',
      add_sound_video_file:
        'Ajoutez ici un média <b>son</b> et un média <b>vidéo</b> pour créer une vidéo.',
      add_multiple_videos_files:
        'Ajoutez plusieurs médias <b>vidéo</b> pour créer une vidéo.',
      add_multiple_images:
        'Ajoutez plusieurs médias <b>image</b> pour créer une vidéo.',
      style: 'style',
      css: 'css',
      write_some_CSS_code_for_example:
        'Écrivez ici du code CSS, <br>par exemple <code>color: blue;</code>',
      framerate: 'cadence d’image (par seconde)',
      seconds: 'secondes',
      quality: 'qualité',
      bytes: 'octets',
      kb: 'ko',
      mb: 'Mo',
      gb: 'Go',
      duration: 'Durée',
      send: 'Envoyer',

      login: 'S’identifier',
      help: 'Aide',
      date: 'Date',
      portrait: 'Portrait',
      nfc_tag: 'Tag NFC',
      yes: 'Oui',
      cancel: 'Annuler',
      back: 'Retour',
      sureToRemoveAuthor: 'Êtes-vous sûr de vouloir supprimer cet auteur ?',
      changes_not_saved_sureToCloseModal:
        'Des modifications n’ont pas été enregistrées. Voulez-vous vraiment fermer cette fenêtre ?',
      sureToRemovePubli:
        'Êtes-vous sûr de vouloir supprimer cette publication ?',
      sure_to_cancel_stopmotion:
        'Êtes-vous sûr de vouloir arrêter cette animation ? Vous pourrez la retrouver dans le menu "Liste des animations"',
      validate_media: 'Valider le média',
      add_keyword: 'Ajouter un mot-clé',
      add: 'Ajouter',

      very_high: 'Très élevée (1080p)',
      high: 'Élevée (720p)',
      medium: 'Moyenne (640p)',
      low: 'Basse (360p)',

      showing: 'Affichage de',
      media_filter: 'Filtre de médias',
      no_projects_yet:
        'Il n’y a pas encore de projet, créez-en un pour commencer à utiliser do•doc !',
      projects_of: 'projets sur',
      medias_of: 'médias sur',
      projects: 'Projets',
      project: 'Projet',
      medias: 'Médias',
      media: 'Média',
      authors: 'Auteurs',
      authors_list: 'Liste des auteurs',
      create_an_author: 'Créer un auteur',
      favorite_medias: 'Média favoris',
      all_medias: 'Tous les médias',
      create_text: 'Écrire',
      import: 'Importer',
      import_all_files: 'Importer tous les fichiers',
      import_medias: 'Importer des médias',
      select_files_to_import: 'Sélectionner les fichiers à importer',
      select_cover_image: 'Sélectionner une image de couverture',
      select_portrait_image: 'Sélectionner une image de portrait',
      add_to_publication: 'Ajouter à la publication',
      add_a_page: 'Ajouter une page',
      insert_a_page_here: 'Insérer une page ici',
      add_a_page_before: 'Ajouter une page avant celle-ci',
      add_a_page_after: 'Ajouter une page après celle-ci',
      add_a_page_here: 'Ajouter une page ici',
      remove_this_page: '▲ Supprimer cette page ▲',

      anonymous: 'anonyme',
      other_users: 'autres utilisateurs',
      other_users_connected: 'autres utilisateurs connectés',

      mix_medias: 'Mélanger des médias',

      made_with_dodoc:
        'Page web réalisée avec l’application libre et gratuite do•doc',

      loading: 'chargement',
      open: 'Ouvrir',
      save: 'Enregistrer',
      as_favorite: '+ favoris',
      edit: 'Éditer',
      width: 'Largeur',
      height: 'Hauteur',
      zoom: 'Zoom',
      settings: 'Règlages',
      stopmotion_list: 'Liste des animations',

      print: 'Imprimer',
      create: 'Créer',
      remove: 'Supprimer',
      withdraw: 'Enlever',
      remove_this_image: 'Supprimer cette image',
      password: 'Mot de passe',
      protected_by_pass: 'protégé par mot de passe',
      password_instructions:
        'Si existant, seul les utilisateurs possédant ce mot de passe pourront ouvrir ce projet.',
      author_instructions:
        'Pour créer des auteurs, fermez cette fenêtre et cliquez sur le bouton (AUTEURS).',

      sort_by: 'Organiser par',
      in_the_order: 'Dans l’ordre',
      public: 'Public',
      fav: 'Favoris',
      content: 'Contenu',
      edit: 'Modifier',

      'lang:': 'Changer la langue&nbsp;:',
      lang: 'Changer la langue',
      share_access: 'Accéder depuis d’autres appareils',

      photo: 'photo',
      video: 'vidéo',
      stopmotion: 'animation',
      audio: 'son',
      vecto: 'formes',
      image: 'image',
      text: 'texte',
      document: 'document',
      other: 'autre',
      with_sound: 'avec le son',
      generate: 'Générer',

      select: 'Sélectionner',
      unselect: 'Dé-sélectionner',

      toconnectwithanotherdevice:
        'Pour accéder à cet élément avec un autre appareil, connectez vous au même réseau wifi puis entrez l’url suivante dans un navigateur web, ou bien scannez le code QR&nbsp;: ',
      sureToRemoveProject: 'Êtes-vous sûr de vouloir supprimer ce projet ?',
      sureToRemoveMedia: 'Êtes-vous sûr de vouloir supprimer ce média ?',

      edit_the_media: 'Éditer le média',
      edit_project: 'Éditer le projet',
      edit_publication: 'Éditer la recette',
      drop_here_to_import: 'Déposez vos contenus ici pour les importer',

      capture: 'Enregistrer',
      current: 'Actuellement',
      currently: 'Actuellement',
      update: 'Mettre à jour',

      more_information:
        'Pour plus d’information, consultez la <a href="https://latelier-des-chercheurs.fr/docs/manuel-dodoc" class="js--openInBrowser" target="_blank">documentation</a> ou <a href="mailto:info@latelier-des-chercheurs.fr?subject=do•doc" class="js--openInBrowser" target="_blank">contactez</a> les auteurs de ce logiciel.',
      no_media_in_folder: 'Aucun média dans ce dossier.',
      no_public_media_in_folder: 'Aucun média public dans ce dossier.',
      auto_scroll: 'défilement<br>automatique',
      scale: 'échelle&nbsp;:',
      scale_items: {
        second: 'sec',
        minute: 'min',
        hour: 'h',
        half_day: '½j',
        day: 'j'
      },
      contents_are_stored: 'Les contenus de ce dossier sont enregistrés dans ',
      folder_information: 'Informations du dossier',
      calendar: 'Calendrier',
      now: 'en ce moment',
      list: 'Liste',
      fullscreen: 'Plein écran',
      preview: 'Aperçu',
      filter: 'Filtre',
      filters: 'Filtres',
      header_left: 'En-tête gauche',
      header_right: 'En-tête droite',
      gridstep: 'Pas de la grille d’alignement',
      margin_top: 'Marge: haut',
      margin_left: 'Marge: gauche',
      margin_right: 'Marge: droite',
      margin_bottom: 'Marge: bas',
      number_of_medias: 'Nombre de médias',
      number_of_pages: 'Nombre de pages',

      export_folder: 'Exporter en format WEB',
      export: 'Exporter',
      export_as_pdf: 'Export PDF',
      new_window: 'Nouvelle fenêtre',
      previous_creations: 'Créations précédentes',
      export_video_instructions:
        'Cliquez sur le bouton pour lancer la création d’une seule vidéo à partir des vidéos ajoutées à la publication.',
      export_audio_video_mix_instructions:
        'Cliquez sur le bouton pour lancer la création d’une vidéo à partir du son et de la vidéo sélectionnés.',
      export_stopmotion_instructions:
        'Cliquez sur le bouton pour lancer la création d’une seule vidéo à partir des images ajoutées à la publication.',
      make_video: 'Fabriquer une vidéo',
      'interval_between_pictures:': 'Intervalle entre chaque photo :',
      creation_in_progress: 'En cours de création…',

      publication_list: 'Liste des publications',
      export_publication: 'Exportation d’une publication',
      get_pdf:
        'Pour récupérer un PDF de cette publication (par exemple pour l’imprimer), cliquez sur le bouton ci-dessous&nbsp;:',
      download_pdf: 'Télécharger un PDF',
      get_website:
        'Pour récupérer un site web contenant cette publication (par exemple pour la diffuser en ligne), cliquez sur le bouton ci-dessous&nbsp;:',
      download_website: 'Télécharger une version web',
      pdf_created: 'Le PDF a été créé',
      video_created: 'La vidéo a été créée',
      open_in_app: 'Afficher',
      format: 'Format',
      template: 'Gabarit',
      standard: 'Standard',
      'feuille de choux': 'Feuille de Choux',
      'human tech days': 'Human Tech Days',
      page_by_page: 'Document page à page',
      video_assemblage: 'Montage vidéo',
      stopmotion_animation: 'Animation image par image',
      web: 'Page web',
      back_to_project: 'Retour au projet',

      page_by_page_instructions: `Cette recette permet de créer un document avec un format précis et plusieurs pages.\n Médias acceptés : images, vidéos, sons et textes.\nCréera un PDF imprimable (pour faire des affiches, tracts, journaux, etc.) ou une page web à mettre en ligne.`,
      video_assemblage_instructions: `Cette recette propose de créer un montage vidéo en mettant plusieurs vidéos bout à bout.\n Médias acceptés : uniquement des vidéos de même taille.\nCréera une nouvelle vidéo.`,
      stopmotion_animation_instructions: `Cette recette permet l’assemblage d’un nombre illimité d’images pour créer une séquence vidéo dans laquelle elles défilent à une vitesse réglable.\n Médias acceptés : uniquement des images. Les dimensions de la première image détermine si la vidéo finale est en portrait ou paysage.\nCréera une nouvelle vidéo.`,
      mix_audio_and_video_instructions: `Cette recette prend une vidéo et une piste audio. Elle ajoute ou remplace la bande sonore de la vidéo avec celle qui est sélectionnée.\n Médias acceptés : une vidéo et une piste sonore.\nCréera une nouvelle vidéo.`,

      last_modified: 'Dernière modification',
      remote_access: 'Accès depuis d’autres appareils',
      img_per_second: 'Images par seconde',
      sent: 'Envoyé',

      notifications: {
        ios_not_compatible_with_capture:
          'Les iPhones et les iPads ne sont pas compatibles avec la fonctionnalité de Capture.',
        instead_import_with_this_button:
          'Utilisez plutôt la fonctionnalité d’import ci-dessus pour prendre des photos et des vidéos ou en importer depuis votre appareil.',
        media_was_sent: 'Le média a été enregistré.',
        media_couldnt_be_sent:
          'Le média n’a pas pu être enregistré à cause d’une erreur de connexion.',
        file_was_sent: 'Le fichier a été enregistré.',
        file_upload_not_allowed:
          'Votre navigateur web ne prend pas en charge l’envoi de fichiers.',
        connection_active: 'La connexion au serveur est active.',
        connection_lost: 'La connexion au serveur a été perdue.',
        contents_wont_be_editable:
          'Les modifications et ajouts ne seront plus pris en compte.',
        connection_error: 'La connexion au serveur n’a pu se faire.',
        media_has_been_added_successfully: 'Le média a bien été transféré',
        'wrong_password_for_folder:':
          'Le password n’est pas le bon pour le dossier&nbsp;:',
        'created_edited_media:':
          'Création ou édition d’un média pour le dossier&nbsp;:',
        project_name_exists:
          'Ce nom de projet existe déjà, utilisez-en un autre.',
        publi_name_exists:
          'Ce nom de publication existe déjà, utilisez-en un autre.',
        author_name_exists:
          'Ce nom d’auteur existe déjà, utilisez-en un autre.',
        folder_name_needs_alphanumeric_characters:
          'Les noms de dossier doivent contenir au moins un caractère alphanumérique.',
        'failed_to_get_folder:': 'Le dossier suivant n’a pas été trouvé:',
        failed_to_start_video_change_source_or_res:
          'Le flux vidéo n’a pas pu être démarré.\nEssayez de modifier la source ou la résolution dans les réglages.',
        video_source_not_set: 'La source vidéo n’a pas été trouvée.',
        failed_to_start_audio_change_source:
          'Le flux audio n’a pas pu être démarré.\nEssayez de modifier la source dans les réglages.',
        audio_source_not_set: 'La source audio n’a pas été trouvée.',
        video_stream_not_available:
          'Erreur : le flux vidéo n’est pas disponible.',
        no_content_found_with_nfc_tag:
          'Scan d’un tag NFC réussi, associez-lui un auteur ou un média pour commencer.',
        author_found_with_nfc_tag:
          'Scan d’un tag NFC réussi, activation de l’auteur suivant&nbsp;:',
        medias_uploaded: 'Tous les médias ont bien étés enregistrés.',
        medias_upload_failed:
          'Erreur&nbsp;: certains médias n’ont pas pu être enregistrés.',
        video_converted: 'La vidéo a été convertie et ajoutée au projet.',
        project_has_been_removed:
          'Ce projet vient d’être supprimé par quelqu’un d’autre.'
      }
    },
    en: {
      ascending: 'Ascending',
      descending: 'Descending',
      create_a_project: 'Create a project',
      create_a_publication: 'Create a publication',
      name: 'Name',
      project_name: 'Project name',
      created_date: 'Created date',
      uploaded: 'Uploaded',
      created: 'Created',
      edited: 'Edited',
      sent_date: 'Sent date',
      for_the_placement_on_timeline: '(used for the position on the timeline)',
      type: 'Type',
      color: 'Color',
      keywords: 'Keywords',
      author: 'Author(s)',
      share: 'Share',
      download: 'Download',
      caption: 'Caption',
      formatting: 'Formatting',

      login: 'Login',
      help: 'Help',
      date: 'Date',
      smoothing: 'smoothing',
      onion_skin: 'Onion skin',
      'file:': 'File&nbsp;:',
      add_to_project: 'Add to project:',
      input_password: 'Input the password here:',
      validate_with_enter: 'Validate with ENTER.',
      no_stopmotion_created_yet:
        'Created stopmotion animations will appear in this list.',

      cooking_pot: 'Cooking pot',
      text_overflow: 'Overflow text',
      move_to_foreground: 'Move to foreground',
      move_to_background: 'Move to background',
      show_all: 'Show all',
      cooking_pot_instructions:
        'Mix a single or multiple medias to create new medias!',
      untitled: 'Untitled',
      framerate: 'frame rate (images per second)',
      seconds: 'seconds',
      quality: 'quality',

      bytes: 'bytes',
      kb: 'KB',
      mb: 'MB',
      gb: 'GB',
      duration: 'Duration',
      send: 'Send',

      portrait: 'Portrait',
      nfc_tag: 'Tag NFC',
      yes: 'Yes',
      cancel: 'Cancel',
      back: 'Back',
      sureToRemoveAuthor: 'Do you really want to delete this author?',
      changes_not_saved_sureToCloseModal:
        'All changes were not saved. Do you really want to close this window?',
      sureToRemovePubli: 'Do you really want to delete this publication?',
      sure_to_cancel_stopmotion:
        'Do you really want to cancel this stopmotion? You can resume making it by clicking on "Stopmotion list"',
      validate_media: 'Validate the media',
      add_keyword: 'Add a keyword',
      add: 'Add',

      very_high: 'Very high (1080p)',
      high: 'High (1080p)',
      medium: 'Medium (640p)',
      low: 'Low (360p)',

      showing: 'Showing',
      media_filter: 'Medias filter',
      no_projects_yet: 'No projects yet, create one to start using do•doc!',
      projects_of: 'projects of',
      medias_of: 'medias of',
      projects: 'Projects',
      project: 'Project',
      medias: 'Medias',
      media: 'Media',
      authors: 'Authors',
      authors_list: 'List of authors',
      create_an_author: 'Create an author',
      favorite_medias: 'Favorite medias',
      all_medias: 'All medias',
      create_text: 'Write',
      import: 'Import',
      import_medias: 'Import medias',
      import_all_files: 'Import all files',
      select_files_to_import: 'Select files to import',
      select_cover_image: 'Select a cover image',
      select_portrait_image: 'Select a portrait',
      add_to_publication: 'Add to publication',
      add_a_page: 'Add a page',
      insert_a_page_here: 'Insert a page here',
      add_a_page_before: 'Add a page before this one',
      add_a_page_after: 'Add a page after this one',
      add_a_page_here: 'Add a page here',
      remove_this_page: '▲ Remove this page ▲',

      anonymous: 'anonymous',
      other_users: 'other users',
      other_users_connected: 'other user connected',

      mix_medias: 'Mix medias',

      made_with_dodoc: 'Webpage made with do•doc, a free and open-source app',

      loading: 'loading',
      open: 'Open',
      save: 'Save',
      as_favorite: '+ favourite',
      edit: 'Edit',
      print: 'Print',
      create: 'Create',
      remove: 'Remove',
      withdraw: 'Withdraw',
      remove_this_image: 'Remove this image',
      password: 'Mot de passe',
      protected_by_pass: 'protected by password',
      password_instructions:
        'If set, only users with the password will be able to open this project.',
      author_instructions:
        'To create authors, close this window and click on (AUTHORS).',

      sort_by: 'Sort by',
      in_the_order: 'In the order',
      public: 'Public',
      fav: 'Favourite',
      content: 'Content',
      edit: 'Edit',
      width: 'Width',
      height: 'Height',
      zoom: 'Zoom',
      settings: 'Settings',
      stopmotion_list: 'Stopmotion list',

      'lang:': 'Select lang:',
      lang: 'Select lang',
      share_access: 'Access from other devices',

      photo: 'picture',
      video: 'video',
      stopmotion: 'stop motion',
      audio: 'sound',
      vecto: 'shapes',
      image: 'image',
      text: 'text',
      document: 'document',
      other: 'other',
      with_sound: 'with sound',
      generate: 'Generate',

      export: 'Export',
      export_as_pdf: 'Export as PDF',
      new_window: 'New Window',
      export_video_instructions:
        'Click this button to generate a video from multiple source videos.',
      export_audio_video_mix_instructions:
        'Click this button to generate a video from the audio and video medias.',
      export_stopmotion_instructions:
        'Click this button to generate a video from images you have selected.',
      make_video: 'Make a video',
      'interval_between_pictures:': 'Interval between photos:',

      select: 'Select',
      unselect: 'Un-select',

      toconnectwithanotherdevice:
        'To access this do•doc element with another device, first connect it to the same wifi network, then type this adress in your browser or scan this QR code:',
      sureToRemoveProject: 'Do you really want to delete this project?',
      sureToRemoveMedia: 'Do you really want to delete this media?',

      publication: 'Publication',
      edit_the_media: 'Edit media',
      edit_project: 'Edit project',
      edit_publication: 'Edit recipe',
      drop_here_to_import: 'Drop your content here to import',

      capture: 'Capture',
      current: 'Current',
      currently: 'Now',
      update: 'Update',

      more_information:
        'For more informations, read the <a href="https://latelier-des-chercheurs.fr/docs/manuel-dodoc" class="js--openInBrowser" target="_blank">documentation (in french)</a> or <a href="mailto:info@latelier-des-chercheurs.fr?subject=do•doc" class="js--openInBrowser" target="_blank">contact</a> the creators of this app.',

      no_media_in_folder: 'No media in this folder.',
      no_public_media_in_folder: 'No public media in this folder.',
      auto_scroll: 'autoscroll',
      scale: 'scale:',
      scale_items: {
        second: 'sec',
        minute: 'min',
        hour: 'h',
        half_day: '½d',
        day: 'd'
      },
      contents_are_stored: 'Contents for this folder are stored in ',
      folder_information: 'Folder information',
      calendar: 'Calendar',
      now: 'now',
      list: 'List',
      fullscreen: 'Fullscreen',
      preview: 'Preview',
      filter: 'Filter',
      filters: 'Filters',
      header_left: 'Left header text',
      header_right: 'Right header text',
      gridstep: 'Step of alignment grid',
      margin_top: 'Margin: top',
      margin_left: 'Margin: left',
      margin_right: 'Margin: right',
      margin_bottom: 'Margin: bottom',
      number_of_medias: 'Number of medias',
      number_of_pages: 'Number of pages',

      export_folder: 'Export as a webpage',
      export: 'Export',

      publication_list: 'Publications list',
      export_publication: 'Export a publication',
      get_pdf:
        'To download a PDF of this publication (for example, to print it), click here:',
      download_pdf: 'Download PDF',
      get_website:
        'To download a website version of this publication (for example, to publish online), click here:',
      download_website: 'Download a website',
      creation_in_progress: 'Creation in progress…',
      pdf_created: 'PDF created',
      video_created: 'The video was created',
      open_in_app: 'Open',
      format: 'Format',
      template: 'Template',
      page_by_page: 'Paged document',
      video_assemblage: 'Video editing',
      web: 'Webpage',
      back_to_project: 'Back to project',

      previous_creations: 'Previous creations',
      stopmotion_animation: 'Stopmotion animation',

      page_by_page_instructions: `This recipe can be used to create a paged document with a specific size.\n Accepted medias: images, videos, sounds and texts.\nWill create a PDF that can be printed (to make posters, tracts, newspapers, etc.) or a webpage to upload online.`,
      video_assemblage_instructions: `This recipe creates a video from mulitple source videos, one after the other.\n Accepted medias: videos of the same size.\nWill create a new video.`,
      stopmotion_animation_instructions: `This recipe takes any number of images as inputs and creates a single video with images being displayed at a specific speed.\n Accepted medias: images of any size. The first image will determine if the video will be in portrait or landscape.\nWill create a new video.`,
      mix_audio_and_video_instructions: `This recipe mixes a video and an audio track to create a new video where they are played at the same time.\n Accepted medias: a video and a sound track.\nWill create a new video.`,

      add_sound_video_file:
        'Add a <b>sound</b> and a <b>video</b> media to create a new video.',
      mix_audio_and_video: 'Add (or replace) sound on a video',
      add_multiple_videos_files:
        'Add multiple <b>video</b> medias to create a new video.',
      add_multiple_images:
        'Add multiple <b>image</b> medias to create a video.',
      style: 'style',
      css: 'css',
      write_some_CSS_code_for_example:
        'Write here some CSS code, <br>for example <code>color: blue;</code>',

      last_modified: 'Last modified',
      remote_access: 'Acces from other devices',
      img_per_second: 'Images per second',
      sent: 'Sent',

      notifications: {
        ios_not_compatible_with_capture:
          'iPhones and iPads are not currently compatible with the <i>capture</i> page.',
        instead_import_with_this_button:
          'Instead import or capture photos and videos here in the import modal.',
        media_was_sent: 'The media was sent.',
        media_couldnt_be_sent:
          'The media was not sent because of a connexion error.',
        file_was_sent: 'The file was sent.',
        file_upload_not_allowed: 'File upload is not allowed by this browser.',
        media_has_been_added_successfully: 'The media was successfully added.',
        connection_active: 'The connection to the server is active.',
        connection_lost: 'The connection to the server was lost.',
        contents_wont_be_editable: 'Content editing is disabled.',
        connection_error:
          'The connection to the server could not be established.',
        'wrong_password_for_folder:': 'Wrong password or folder missing for:',
        'created_edited_media:':
          'A media has been created or edited in folder:',
        project_name_exists:
          'This project name already exists. Please use another.',
        publi_name_exists:
          'This publication name already exists. Please use another.',
        author_name_exists:
          'This author name already exists. Please use another.',
        folder_name_needs_alphanumeric_characters:
          'Folder names need to contain at least one alphanumeric character.',
        'failed_to_get_folder:': 'Failed to get the requested folder:',
        failed_to_start_video_change_source_or_res:
          'Failed to start camera feed. Try changing the source or the resolution.',
        video_source_not_set: 'The source video has not been set.',
        failed_to_start_audio_change_source:
          'Failed to start audio feed. Try changing the source.',
        audio_source_not_set: 'The source audio has not been set.',
        video_stream_not_available: 'Error: Video stream not available.',
        no_content_found_with_nfc_tag:
          'NFC tag detected, bind it to an author or a media to start.',
        author_found_with_nfc_tag:
          'NFC tag detected, the following author will be logged-in:',
        medias_uploaded: 'All medias were imported successfully.',
        medias_upload_failed: 'Error: some medias failed to import.',
        video_converted:
          'The video was converted successfully and added to the project.',
        project_has_been_removed:
          'This project just got removed by another user.'
      }
    }
  };

  return messages;
})();
