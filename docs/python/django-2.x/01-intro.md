# 一个简单的Django应用

让我们通过示例来学习。

通过这个教程，我们将带着你创建一个基本的投票应用程序。

它将由两部分组成：

* 一个让人们查看和投票的公共站点。
* 一个让你能添加、修改和删除投票的管理站点。

## 创建项目

如果这是你第一次使用 Django 的话，你需要一些初始化设置。也就是说，你需要用一些自动生成的代码配置一个 Django project —— 即一个 Django 项目实例需要的设置项集合，包括数据库配置、Django 配置和应用程序配置。

打开命令行，cd 到一个你想放置你代码的目录，然后运行以下命令：

```sh
django-admin startproject mysite
```

这行代码将会在当前目录下创建一个 mysite 目录。

让我们看看 startproject 创建了些什么:

```sh
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```

这些目录和文件的用处是：

* 最外层的 mysite/ 根目录只是你项目的容器， Django 不关心它的名字，你可以将它重命名为任何你喜欢的名字。
* manage.py: 一个让你用各种方式管理 Django 项目的命令行工具。
* 里面一层的 mysite/ 目录包含你的项目，它是一个纯 Python 包。它的名字就是当你引用它内部任何东西时需要用到的 Python 包名。 (比如 mysite.urls).
* mysite/__init__.py：一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。
* mysite/settings.py：Django 项目的配置文件。
* mysite/urls.py：Django 项目的 URL 声明，就像你网站的“目录”。
* mysite/wsgi.py：作为你的项目的运行在 WSGI 兼容的Web服务器上的入口。

## 用于开发的简易服务器

让我们来确认一下你的 Django 项目是否真的创建成功了。如果你的当前目录不是外层的 mysite 目录的话，请切换到此目录，然后运行下面的命令：

```py
python manage.py runserver
```

你应该会看到如下输出：

```sh
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
July 17, 2019 - 16:44:00
Django version 2.2.3, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.

```

如果你需要更换端口

```sh
python manage.py runserver 8080
```

## 创建投票应用

现在你的开发环境——这个“项目” ——已经配置好了，你可以开始干活了。

在 Django 中，每一个应用都是一个 Python 包，并且遵循着相同的约定。Django 自带一个工具，可以帮你生成应用的基础目录结构，这样你就能专心写代码，而不是创建目录了。

:::tip 项目 VS 应用
项目和应用有啥区别？应用是一个专门做某件事的网络应用程序——比如博客系统，或者公共记录的数据库，或者简单的投票程序。项目则是一个网站使用的配置和应用的集合。项目可以包含很多个应用。应用可以被很多个项目使用。
:::

你的应用可以存放在任何 Python path 中定义的路径。在这个教程中，我们将在你的 manage.py 同级目录下创建投票应用。这样它就可以作为顶级模块导入，而不是 mysite 的子模块。

请确定你现在处于 manage.py 所在的目录下，然后运行这行命令来创建一个应用：

```sh
python manage.py startapp polls
```

这将会创建一个 polls 目录，它的目录结构大致如下：

```sh
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```

这个目录结构包括了投票应用的全部内容。

## 编写第一个视图

打开 polls/views.py，把下面这些 Python 代码输入进去：

```py
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
```

这是 Django 中最简单的视图。如果想看见效果，我们需要将一个 URL 映射到它——这就是我们需要 URLconf 的原因了。

为了创建 URLconf，请在 polls 目录里新建一个 urls.py 文件。你的应用目录现在看起来应该是这样：

```sh
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    urls.py
    views.py
```

在 polls/urls.py 中，输入如下代码：

```py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

下一步是要在根 URLconf 文件中指定我们创建的 polls.urls 模块。在 mysite/urls.py 文件的 urlpatterns 列表里插入一个 include()， 如下：

```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```

函数 include() 允许引用其它 URLconfs。每当 Django 遇到 include() 时，它会截断与此项匹配的 URL 的部分，并将剩余的字符串发送到 URLconf 以供进一步处理。

你现在把 index 视图添加进了 URLconf。通过以下命令验证是否正常工作：

```sh
python manage.py runserver
```

用你的浏览器访问 http://localhost:8000/polls/，你应该能够看见 "Hello, world. You're at the polls index." ，这是你在 index 视图中定义的.

函数 path() 具有四个参数，两个必须参数：route 和 view，两个可选参数：kwargs 和 name。现在，是时候来研究这些参数的含义了。

### path() 参数： route

route 是一个匹配 URL 的准则（类似正则表达式）。当 Django 响应一个请求时，它会从 urlpatterns 的第一项开始，按顺序依次匹配列表中的项，直到找到匹配的项。

这些准则不会匹配 GET 和 POST 参数或域名。例如，URLconf 在处理请求 https://www.example.com/myapp/ 时，它会尝试匹配 myapp/ 。处理请求 https://www.example.com/myapp/?page=3 时，也只会尝试匹配 myapp/。

### path() 参数： view

当 Django 找到了一个匹配的准则，就会调用这个特定的视图函数，并传入一个 HttpRequest 对象作为第一个参数，被“捕获”的参数以关键字参数的形式传入。稍后，我们会给出一个例子。

### path() 参数： kwargs

任意个关键字参数可以作为一个字典传递给目标视图函数。

### path() 参数： name

为你的 URL 取名能使你在 Django 的任意地方唯一地引用它，尤其是在模板中。这个有用的特性允许你只改一个文件就能全局地修改某个 URL 模式。

## 数据库配置

现在，打开 mysite/settings.py 。这是个包含了 Django 项目设置的 Python 模块。

通常，这个配置文件使用 SQLite 作为默认数据库。如果你不熟悉数据库，或者只是想尝试下 Django，这是最简单的选择。Python 内置 SQLite，所以你无需安装额外东西来使用它。当你开始一个真正的项目时，你可能更倾向使用一个更具扩展性的数据库，例如 PostgreSQL，避免中途切换数据库这个令人头疼的问题。

如果你想使用其他数据库，你需要安装合适的 database bindings ，然后改变设置文件中 DATABASES 'default' 项目中的一些键值：

* ENGINE -- 可选值有 'django.db.backends.sqlite3'，'django.db.backends.postgresql'，'django.db.backends.mysql'，或 'django.db.backends.oracle'。其它 可用后端。
* NAME - 数据库的名称。如果使用的是 SQLite，数据库将是你电脑上的一个文件，在这种情况下， NAME 应该是此文件的绝对路径，包括文件名。默认值 os.path.join(BASE_DIR, 'db.sqlite3') 将会把数据库文件储存在项目的根目录。
如果你不使用 SQLite，则必须添加一些额外设置，比如 USER 、 PASSWORD 、 HOST 等等。

编辑 mysite/settings.py 文件前，先设置 TIME_ZONE 为你自己时区。

此外，关注一下文件头部的 INSTALLED_APPS 设置项。这里包括了会在你项目中启用的所有 Django 应用。应用能在多个项目中使用，你也可以打包并且发布应用，让别人使用它们。

通常， INSTALLED_APPS 默认包括了以下 Django 的自带应用：

django.contrib.admin -- 管理员站点， 你很快就会使用它。
django.contrib.auth -- 认证授权系统。
django.contrib.contenttypes -- 内容类型框架。
django.contrib.sessions -- 会话框架。
django.contrib.messages -- 消息框架。
django.contrib.staticfiles -- 管理静态文件的框架。
这些应用被默认启用是为了给常规项目提供方便。

默认开启的某些应用需要至少一个数据表，所以，在使用他们之前需要在数据库中创建一些表。请执行以下命令：
