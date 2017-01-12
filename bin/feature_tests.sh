#!/bin/bash

nohup npm run start:test &
nohup java -jar bin/selenium-server-standalone-3.0.1.jar &
./nightwatch/wait_for_selenium.sh
nightwatch --env circleci --config nightwatch/nightwatch.json
