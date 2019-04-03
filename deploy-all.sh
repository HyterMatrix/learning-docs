#!/usr/bin/env sh
set -e
# java
npm run java:build

cd ./learning-java/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:HyterMatrix/learning-java.git master:gh-pages
cd -

# es6
npm run es6:build

cd ./learning-es6/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:HyterMatrix/learning-es6.git master:gh-pages
cd -

# nodejs
npm run nodejs:build

cd ./learning-nodejs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:HyterMatrix/learning-nodejs.git master:gh-pages
cd -
