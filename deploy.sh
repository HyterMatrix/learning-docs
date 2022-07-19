#!/usr/bin/env sh
set -e

# 删除上次生成的文件
rm -rf ./docs/.vuepress/dist/*

npm run docs:build

cd ./docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:HyterMatrix/learning-docs.git master:gh-pages
# git push -f git@git.dev.tencent.com:HyterMatrix/learning-docs.git master:coding-pages
# git push -f git@gitee.com:HyterMatrix/learning-docs.git master:gh-pages

cd -
