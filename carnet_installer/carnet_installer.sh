#!/bin/bash

# installing git
sudo apt -y install git-core php build-essential libssl-dev python2.7 konsole
git --version

# installing node version manager
sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
source ~/.bashrc

# loading nvm command
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# verifying node install and configuring nvm
nvm --version
nvm install v8.9.3
nvm use 8.9.3
nvm alias default 8.9.3

# installing python 2
sudo ln -sf /usr/bin/python2.7 /usr/bin/python

# installing the carnet command and the desktop launcher
sudo cp ./carnet /usr/bin/carnet
sudo chown $USER /usr/bin/carnet
chmod 774 /usr/bin/carnet

sudo ln -s $(which node) /usr/bin/node

sudo chown $USER ./carnet.sh
chmod 774 ./carnet.sh
cp ./carnet.sh ~/Desktop/carnet.sh

# fetching carnet-numerique in user's home folder
cd ~
git clone https://github.com/rocambille/carnet-numerique.git

# installing and intializing the project node modules and building
cd carnet-numerique
npm install
cd public
npm install
npm run build

