# Carnet numérique

Le carnet numérique est un outil de documentation basé sur l'outil [do•doc](https://latelier-des-chercheurs.fr/outils/dodoc).

# Script d'installation

Dans le dossier carnet-installer se trouve l'installateur pour distributions debian du carnet numérique.
il suffit de rajouter les droites d'execution et d'exécuter le script carnet_installer.sh avec la commande suivante

    chmod 774 carnet-installer.sh
    ./carnet_installer.sh

Ce script s'occupe de réaliser toute la procédure d'installation mais permet aussi d'ajouter une commande carnet et aussi un raccourci launcher dans le Bureau.
qui permet de lancer le serveur local et d'ouvrir un navigateur sur le carnet numérique.

Ce script ajoute aussi une commande de mise à jour carnet-maj et ajoute au passage le script dans Documents qui permet de mettre à jour le carnet.

Ce script ajoute aussi un désinstalleur du carnet numérique dans Documents, il ne supprimera pas le dossier dodoc2 contenant vos anciens projets, dès que la procédure
est faite un message vous notifie.

Les scripts de mise à jour et de désinstallation ne marchent que pour un carnet installé avec l'installeur. Ne pas oublier de rajouter le script de création des auteurs dans le dossier dodoc2/_authors

# Installation manuelle

## Installer les outils nécessaires

Pour faciliter la mise à jour et le déploiement de do•doc, il faut installer git, nvm et python 2.7.

Le logiciel git a pour but (notamment) de récupérer le code source des logiciels, de facilement rapatrier les derniers changements, voir de proposer d’autres modifications si vous souhaitez faire du développement.

Pour vérifier sa présence, tapez la commande suivante :

    git --version

Si celle-ci n’affiche pas un numéro de version, alors il faut installer git :

* sur **Linux** :

      sudo apt install git-core

* sur **Windows** :

    https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git#_installation_sur_windows

nvm (pour node version manager) permet d’installer plusieurs versions de node.js et de basculer de l’une à l’autre. Node.js est la plate-forme qui gère l’exécution du code côté serveur, en particulier le stockage des contenus du carnet numérique.
Pour installer nvm :

* sur **Linux**, lancez les commandes suivantes dans l’ordre :

      sudo apt install build-essential libssl-dev
      sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
      source ~/.bashrc

* sur **Windows**, télécharger nvm-windows :

      https://github.com/coreybutler/nvm-windows/releases

À cette étape là vous devriez pouvoir envoyer des commandes à nvm. Vous pouvez le vérifier avec la commande suivante qui affiche la version de nvm :

    nvm --version

La ligne suivante installe la version 8.9.3 de Node.js :

    nvm install v8.9.3

Puis pour l’utiliser, et la régler par défaut :

    nvm use 8.9.3

    nvm alias default 8.9.3

En tapant la commande nvm ls vous pouvez voir la version de Node.js active sur la première ligne, ainsi que toutes celles actuellement installées sur la machine. Pour plus d’infos sur nvm vous pouvez retrouver un chapitre à ce sujet sur le site de Thomas Parisot : https://oncletom.io/node.js/chapter-02/#nvm.

Histoire d’être bien sur, vous pouvez taper node -v pour vérifier que Node.js est bien installé et que la version actuelle est bien la 8.9.3.
À noter que l’utilisation de la version 8 de Node.js n’est pas idéale car elle est assez ancienne (do•doc l’utilise pour des raisons de compatibilité dans la version application). Vous pouvez sans problème utiliser une version beaucoup plus récente, comme la 12.16.3 (ce qui est recommandé).

python est nécessaire pour certaines dépendances de do•doc (en particulier sharp) que nous installerons par la suite

* sur **Linux** :

      sudo apt-get install python2.7
      sudo ln -s /usr/bin/python2.7 /usr/bin/python

* sur **Windows**, télécharger la version 2.7 :

    https://www.python.org/downloads/windows/

## Récupérer et installer les carnets numériques

Pour ces étapes là il faut connaître quelques commandes pour naviguer dans le disque dur de votre machine avec le terminal. La base, c’est :

    cd /le-chemin/vers-le-dossier
    pour naviguer vers un dossier précis

    cd mon-sous-dossier
    pour naviguer vers un sous-dossier du dossier courant

    cd ../ pour remonter dans le dossier parent

    ls pour lister tout le contenu du dossier courant

Rendez-vous dans votre dossier utilisateur en tapant :

    cd ~

Listez ensuite son contenu pour voir ce qui s’y trouve :

    ls

Nous pouvons rapatrier l’intégralité du code source en une fois avec git en tapant dans un terminal git :

    git clone https://github.com/LaboSaintex/carnet-numerique.git

Cela va automatiquement créer un dossier du nom de carnet-numerique dans le dossier courant.

Ouvrez ce dossier en tapant :

    cd carnet-numerique

Il nous faut maintenant installer les dépendances du carnet numérique. Il y en a plusieurs dizaines pour la partie serveur et pour la partie client (la gestion des données et l’interface graphique du carnet numérique).

Commencez par taper la commande qui indique de récupérer toutes les dépendances de la partie serveur. Cela peut prendre de 2 à 5 minutes en fonction de la puissance et de la vitesse de la connexion internet de votre machine.

    npm install

Rendez-vous dans le sous-dossier public et réitérez l’opération :

    cd public

    npm install

Puis lancez la création du code JavaScript « client » pour les navigateurs :

    npm run build

Revenez maintenant dans le dossier principal de do•doc :

    cd ../

# Excuter le carnet numérique

Vous devriez pouvoir lancer do•doc avec la commande :

    npm run start

Un certain nombre de lignes apparaissent, elles permettent de « débugger » do•doc (pratique pour le développement). Si tout se passe bien la dernière ligne devrait être Server up and running. Go to https://localhost:8080. Vous pouvez alors ouvrir https://localhost:8080 dans votre navigateur.

Pour stopper l'application, appuyez dans le terminal sur les touches Ctrl + C du clavier. À noter que si vous fermez le terminal, cela arrêtera aussi l'application.

**note:** la procédure d'installation est adaptée du tutoriel https://forum.latelier-des-chercheurs.fr/t/installer-do-doc-sur-un-serveur-dedie/210

# Utilisation du carnet numérique

## Utilisation et localisation des vidéos

Tout d'abord pour que la génération de la video puisse fonctionner il vous faut php, si vous avez une distribution linux qui n'a pas php, alors il faut installer et vérifier ensuite :

    sudo apt install php
    php --version

Si vous êtes sur windows alors vous n'avez pas php d'office il faut installer et vérifier avec :

- Téléchargez le paquet puis installer https://www.apachefriends.org/xampp-files/8.0.5/xampp-windows-x64-8.0.5-0-VS16-installer.exe

Puis refermez le terminal et rouvrez en un autre pour avoir la liste des paths a jour pour vérifier :

    php --version


Quand vous allez assembler votre video celle-ci se trouve dans dodoc2/_projects/nom_du_projet/ sous le nom de output.webm

- à la première utilisation du carnet numérique ne pas oublier de créer les dossier dans Documents/dodoc2, _projects, _authors, _musics

## Créer des auteurs pour pouvoir les selectionner dans les projets ensuite

Le carnet numérique crée un dossier dodoc2 dans le dossier Documents de votre pc
- [Windows]() : LettreDisque:\Users\utilisateur\Documents\dodoc2
- [linux]() : /home/utilisateur/Documents/dodoc2

Ce dossier contient plusieurs sous-dossiers comme _projects ou se trouve les projets avec leurs contenus vidéos texte etc et _authors. Dans le dossier _authors contient des sous-dossiers utilisateurs c'est aussi ici qu'on créée les auteurs.

Pour faciliter la tache de creation d'utilisateurs il y a un script python a placer dans le dossier dodoc2/_authors

Pour lier le script dans le dossier _authors
- [Windows]() : mklink /h authors.py %USERPROFILE%\Documents\dodoc2\\_authors 
- [linux]() : ln authors.py ~/Documents/dodoc2/_authors/

Pour utiliser ce script il suffit de se placer dans le dossier _authors et d'exécuter avec l'interpréteur python de version 3.

Sur linux vous avez déjà plusieurs versions de python mais pour être sur exécutez avec python3.

Sur Windows il faut installer la version 3 de python et l'exécuter avec cette version
je conseille fortement après installation de changer le nom de l'exécutable python.exe en python3.exe
pour pouvoir utiliser différentes versions de python au choix dans le terminal :

    python3 authors.py

Pensez a créer les Utilisateurs avant de lancer le carnet numérique.

# License

This app is under a [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) license. It can be used, modified and shared freely as long as no commercial use is made and the attribution and link to [L’Atelier des Chercheurs](https://latelier-des-chercheurs.fr/) are kept.

[Homescreen of do•doc](https://latelier-des-chercheurs.fr/thumbs/outils/dodoc/screenshot-2018-07-12-11.40.02-1200x765-q60.png)
