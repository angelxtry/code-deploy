if [ -d "$HOME/deplpy-test" ]
then
  sudo chown ${USER:=$(/usr/bin/id -run)}:$USER "$HOME/deplpy-test";
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd "$HOME/deplpy-test"

yarn && yarn prod
