#!/bin/bash

nohup npm run start:test &
nohup java -jar bin/selenium-server-standalone-3.0.1.jar &
../nightwatch/wait_for_server.sh
npm run test:circle:features
cat ../coverage/lcov.info | ../node_modules/.bin/codacy-coverage