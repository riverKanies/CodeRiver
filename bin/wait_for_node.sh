#!/bin/bash
response_node=000
while [ $response_node -ne 200 ]
do
  response_node=$(curl -sL -w "%{http_code}\\n" "http://localhost:3000" -o /dev/null)
  echo node response $response_node
done
