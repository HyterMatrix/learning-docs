# 前言

## 介绍

Django是一个开放源代码的Web应用框架，由Python写成。采用了MTV的框架模式，即模型M，视图V和模版T。它最初是被开发来用于管理劳伦斯出版集团旗下的一些以新闻内容为主的网站的，即是CMS（内容管理系统）软件。并于2005年7月在BSD许可证下发布。这套框架是以比利时的吉普赛爵士吉他手Django Reinhardt来命名的。（抄自网络）

## 安装Python

Django是Python开发的一个Web框架，所以需要先安装Python

### 关于Python版本

|Django 版本|Python 版本|
|:---:|:---:|
|1.11|2.7, 3.4, 3.5, 3.6, 3.7 (1.11.17 添加)|
|2.0|3.4，3.5，3.6，3.7|
|2.1，2.2|3.5，3.6，3.7|

对于每个版本的Python，官方仅支持最新的三级版本（A.B.C）。你可以在 [Python下载页面](https://www.python.org/downloads/) 找到每个系列的微版本。

推荐 Python 3。Django 1.11 是支持 Python 2.7 的最后一版。Python 2.7 和 Django 1.11 的支持将会在2020年结束。

新版本的 Python 通常会更快，拥有更多特性，而且有更好的支持，推荐使用 Python 3 的最新版本。

使用旧版本的 Django 你不会丢失任何东西，但是你不能得到新版本 Python 的改进和优化。当然，Django 的第三方插件可以自由设置他们的版本要求。

### MAC上安装python

#### 安装包安装

可以在[Python下载页面](https://www.python.org/downloads/)下载对应系统的二级制安装包进行安装

#### Brew安装

在mac上，可以使用`brew`命令行命令安装python

打开命令行终端输入

```sh
brew install python@3
```

如果没有`brew`命令就需要先安装，可以使用如下命令

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

或者去[brew官网](https://brew.sh/index_zh-cn)

### Windows上安装Python

直接在官网上下载安装包

### Linux上安装Python

直接在官网上下载安装包 或者 使用对应的yum或者apt安装

```sh
apt-get install python
```

### 查看Python版本

安装完Python后，我们来查看下Python的版本是不是我们所安装的

```sh
python -V
```

会显示：`Python 3.6.6` 表示安装成功了， 这里的`3.6.6`是我这里安装的版本，可能因为安装时间不一样， 这里的版本号会不一样

## 设置Pip源

因为python的pip安装工具是用的源是国外的，由于国内的网络环境，安装一些工具或类库经常会出现卡顿，或超时，所以这里我们需要更改pip的源为阿里云的

mac下需改pip源

```sh
mkdir ~/.pip

tee ~/.pip/pip.conf <<-'EOF'
[global]
index-url=http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
EOF
```

## 安装Django

安装完了Python，现在我们改安装Django了

在终端中输入

```sh
pip install Django
```

等待终端执行完成

```sh
Successfully installed django-2.2.3
```

## 验证

若要验证 Django 是否能被 Python 识别，可以在 shell 中输入 python。 然后在 Python 提示符下，尝试导入 Django：

```sh
>>> import django
>>> print(django.get_version())
2.2.3
```

当然了，你也可能安装的是其它版本的 Django。
