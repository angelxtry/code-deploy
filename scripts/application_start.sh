if [ -d "/home/ubuntu/deplpy-test" ]
then
  cd "/home/ubuntu/deplpy-test"
  yarn stop
  sudo rm -rf "/home/ubuntu/deplpy-test"
fi
