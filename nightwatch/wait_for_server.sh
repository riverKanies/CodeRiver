#!/bin/bash
response=000
while [ $response -ne 200 ]
do
  response=$(curl -sL -w "%{http_code}\\n" "http://localhost:3000" -o /dev/null)
done
