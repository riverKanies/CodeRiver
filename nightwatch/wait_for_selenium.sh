#!/bin/bash
response_selenium=000
while [ $response_selenium -ne 200 ]
do
  response_selenium=$(curl -sL -w "%{http_code}\\n" "http://localhost:4444" -o /dev/null)
  echo selenium response $response_selenium
done
