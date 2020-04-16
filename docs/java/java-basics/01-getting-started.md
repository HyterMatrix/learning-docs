# 第一章 介绍
## 计算基础知识

### 二进制

#### 十进制数据转二进制数据

使用除以2获取余数的方式

#### 二进制数据转十进制数据

使用8421编码的方式

### 字节

> 字节是我们常见最小存储单位 

```
8bit  = 1Byte 
1KB = 1024 Byte 
1MB = 1024 KB 
1 GB = 1024 MB 
1 TB = 1024 GB 
1 PB = 1024 TB 
1 EB = 1024 PB 
1 ZB = 1024 EB
```

### MS-DOS(Microsoft Disk Operating System)

是微软出的命令行的系统，现在已经继承到windows系统中的命令行了

## Java语言的开发环境

### Java虚拟机---JVM

* **VM(Java Virtual Machine)**： Java虚拟机，简称JVM，是运行所有Java程序假象计算机，是java的运行环境。
* **跨平台：**任何软件的运行，都必须要运行在操作系统之上，而我们用Java编写的软件可以运行在任何的操作系统上，这个特性称为**Java语言的跨平台特性。**该特性是由JVM实现，我们编写的程序运行在JVM上，JVM运行在操作系统上。

JVM不跨平台

### JRE和JDK

* **JRE(Java Runtime Environment)**:是Java程序的运行环境，包含JVM和运行时所以需的核心类库
* **JDK(Java Development Kit)**:是Java程序的开发工具包，包含JRE和开发人员使用的工具

### JAVA的安装

### 环境的配置

## 程序开发步骤说明

### 编写JAVA源程序

新建一个文件

```java
public class HelloWorld{
  public static void main(String[] args){
    system.out.println("Hello World");
  }
}
```

保存文件为`HelloWorld.java` 需要保证文件后缀名称为`.java`

### 编译JAVA源文件

打开`cmd` 切换到`HelloWorld.java` 所在的目录。

输入

```
javac HelloWorld.java
```

回车，会在同级目录生成一个`HelloWorld.class` 文件

### 运行JAVA程序

在命令行输入

```
java HelloWorld
```

回车执行





