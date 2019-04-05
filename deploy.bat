@echo off
chcp 65001
@title bat 交互执行git命令

:: java
echo 当前目录是：%cd%
echo 开始编译
:: 生成静态文件
call  npm run doce:build
echo 编译完成
:: 进入生成的文件夹
cd ./doce/.vuepress/dist

echo 初始化仓库 并推送到远程
@call git init
@call git add -A
@call git commit -m 'deploy'
@call git push -f git@github.com:HyterMatrix/learning-docs.git master:gh-pages
@call git push -f git@git.dev.tencent.com:HyterMatrix/learning-docs.git master:coding-pages

echo 推送完成
cd ../../../
echo;
