#!/bin/bash

unit_test_files=$(find ./universal -name '*.spec.js' | sort | awk "NR % ${CIRCLE_NODE_TOTAL} == ${CIRCLE_NODE_INDEX}")

if [ -z "$unit_test_files" ]
then
    echo "more parallelism than tests"
else
    jest --runInBand --config tests/configuration.json $unit_test_files
fi
