if [ -d "/home/ubuntu/deplpy-test" ]; then sudo chown -R ubuntu:ubuntu "/home/ubuntu/deplpy-test"; fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd "/home/ubuntu/deplpy-test"

yarn
