#!/usr/bin/env bash

set -e
set -x

yarn build:content

yarn prod-build

npx nt mark './dist/**/*.html'

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

if [[ ! -d "./prebuilt" ]]; then
  git clone git@github.com:ng-docs/prebuilt.git
fi

cp -r ./dist/material-angular-io/* ./prebuilt

cd ./prebuilt

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push prebuilt HEAD:master -f

cd -
