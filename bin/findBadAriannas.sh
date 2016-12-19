#!/bin/bash

grep -rinw 'arrianna\|ariana\|arriana' universal/

if [[ $? == 0 ]]
  then
    echo 'Potential misspelling of Arianna found.'
    exit 1
fi
