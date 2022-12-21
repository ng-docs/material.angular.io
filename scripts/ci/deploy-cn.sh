#!/usr/bin/env bash

set -e
set -x

# 不需要再更新 examples 包了，components 会负责更新它
# yarn build:content

yarn prod-build

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

if [[ ! -d "./material-cn-prebuilt" ]]; then
  git clone git@github.com:ng-docs/material-cn-prebuilt.git
fi

cp -r ./dist/material-angular-io/* ./material-cn-prebuilt

cd ./material-cn-prebuilt

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push

cd -
