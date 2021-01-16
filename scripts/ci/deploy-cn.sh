#!/usr/bin/env bash

set -e
set -x

yarn prod-build

npx nt mark './dist/**/*.html'

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

if [[ ! -d "./material-cn-preview" ]]; then
  git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/ng-docs/material-cn-preview.git
fi

cp -r ./dist/material-angular-io/* ./material-cn-preview

cd ./material-cn-preview

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push

cd -
