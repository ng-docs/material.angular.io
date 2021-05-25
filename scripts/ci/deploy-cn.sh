#!/usr/bin/env bash

set -e
set -x

yarn prod-build

npx nt mark './dist/**/*.html'

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

kill `lsof -t -i :4000` || true

npx http-server-spa dist/material-angular-io index.html 4000 &

rm -fr /tmp/material-angular-io-prerender || true

npx prerender mirror -r /tmp/material-angular-io-prerender/ http://localhost:4000/

kill `lsof -t -i :4000` || true

if [[ ! -d "./material-cn-preview" ]]; then
  git clone https://asnowwolf:${GITHUB_ACCESS_TOKEN}@github.com/ng-docs/material-cn-preview.git
fi

cp -r ./dist/material-angular-io/* ./material-cn-preview

cp -r /tmp/material-angular-io-prerender/localhost:4000/* ./material-cn-preview

cd ./material-cn-preview

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push

cd -
