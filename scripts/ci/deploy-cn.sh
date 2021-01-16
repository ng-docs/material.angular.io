#!/usr/bin/env bash

set -e
set -x

cp -r ../dist/docs-content-pkg/docs-content node_modules/@angular/components-examples/
npm run build-themes
npm run prod-build

npx nt mark './dist/**/*.html'

cd /tmp/material2-docs-content

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

cd -

commitSha=$(git rev-parse --short HEAD)
commitMessage=$(git log --oneline -n 1)

if [[ ! -d "./material-cn-preview" ]]; then
  git clone https://${GITHUB_ACCESS_TOKEN}:@github.com/ng-docs/material-cn-preview.git
fi

cp -r ./dist/* ./material-cn-preview

cd ./material-cn-preview

cp index.html 404.html

git add .
git commit --allow-empty -am "${commitMessage}" || true

git push

cd -
