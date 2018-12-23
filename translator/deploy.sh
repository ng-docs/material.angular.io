#!/usr/bin/env bash

. ~/.nvm/nvm.sh

nvm use 8

set -e
set -x

./tools/build-themes.sh
./tools/fetch-assets.sh

npm run prod-build

cd -

cp -r ../dist/* ../../material-cn-prebuilt
cd ../../material-cn-prebuilt
cp index.html 404.html
git add .
git commit -am "publish"

git push -u origin master

cd -
