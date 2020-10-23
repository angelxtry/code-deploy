if [ -d "$HOME/deplpy-test" ]
then
  cd "$HOME/deplpy-test"
  yarn stop
  sudo rm -rf "$HOME/deplpy-test"
fi
