#!/usr/bin/env sh
set -e

npm run doce:build

cd ./doce/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:HyterMatrix/learning-doce.git master:gh-pages
git push -f git@git.dev.tencent.com:HyterMatrix/learning-doce.git master:coding-pages
cd -
