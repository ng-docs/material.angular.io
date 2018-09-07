#!/usr/bin/env bash

. ~/.nvm/nvm.sh

nvm use 8

set -x

./tools/build-themes.sh
./tools/fetch-assets.sh

npm run prod-build

cd `dirname $0`

npx gulp

rm -fr ../../material-cn.github.io/*
cp -r ../dist/* ../../material-cn.github.io
cd ../../material-cn.github.io
cp index.html 404.html
echo material.angular.live > CNAME
echo material.angular.cn >> CNAME
git add .
git commit -am "publish"

git push -u origin master

cd -
