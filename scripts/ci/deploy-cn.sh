#!/usr/bin/env bash

set -e
set -x

./tools/fetch-assets.sh
npm run build-themes
npm run prod-build

npx nt mark './dist/**/*.html'

if [[ ! -d "./material-cn-preview" ]]
then
    git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/ng-docs/material-cn-preview.git
fi

cp -r ./dist/* ./material-cn-preview

cd ./material-cn-preview

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}"

git push

cd -
