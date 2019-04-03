@echo off
chcp 65001
@title bat 交互执行git命令

:: java
echo 当前目录是：%cd%
echo 开始编译 
:: 生成静态文件
call  npm run java:build
echo 编译完成
:: 进入生成的文件夹
cd ./learning-java/.vuepress/dist

echo 初始化仓库 并推送到远程
@call git init
@call git add -A
@call git commit -m 'deploy'
@call git push -f git@github.com:HyterMatrix/learning-java.git master:gh-pages
echo 推送完成
cd ../../../
echo;

:: es6
echo 当前目录是：%cd%
echo 开始编译 es6
:: 生成静态文件
call  npm run es6:build
echo 编译完成
:: 进入生成的文件夹
cd ./learning-es6/.vuepress/dist

echo 初始化仓库 并推送到远程
@call git init
@call git add -A
@call git commit -m 'deploy'
@call git push -f git@github.com:HyterMatrix/learning-es6.git master:gh-pages
echo 推送完成
cd ../../../
echo;

:: nodejs
echo 当前目录是：%cd%
echo 开始编译 nodejs
:: 生成静态文件
call  npm run nodejs:build
echo 编译完成
:: 进入生成的文件夹
cd ./learning-nodejs/.vuepress/dist

echo 初始化仓库 并推送到远程
@call git init
@call git add -A
@call git commit -m 'deploy'
@call git push -f git@github.com:HyterMatrix/learning-nodejs.git master:gh-pages
echo 推送完成
cd ../../../
echo;