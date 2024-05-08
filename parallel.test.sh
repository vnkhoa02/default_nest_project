#!/bin/bash

# Get the list of changed files
changed_files=$(git diff --name-only)
# Run Jest with coverage for each changed file
for file in $changed_files
do
  npx jest --coverage --findRelatedTests $file
done
