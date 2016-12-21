#!/bin/bash
response_node=000
while [ $response_node -ne 200 ]
do
  response_node=$(curl -sL -w "%{http_code}\\n" "http://localhost:3000" -o /dev/null)
  echo node response $response_node
done

response_selenium=000
while [ $response_selenium -ne 200 ]
do
  response_selenium=$(curl -sL -w "%{http_code}\\n" "http://localhost:4444" -o /dev/null)
  echo selenium response $response_selenium
done
