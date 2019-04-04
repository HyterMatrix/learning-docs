# 第3章 对象与类
面向对象开发，是编程的精髓...也许，你就只有这个机会能面向对象哈哈哈哈哈。。。

## 面向对象程序设计概述
略... 这个概念 不太好总结， 我以后来补吧。。

### 类
构造对象的模版或蓝图。

### 对象
是类的实例，

### 识别类

### 类之间的关系
- 依赖
- 聚合
- 继承


## 使用预定义类
略

## 用户自定义类

### Employee类

在Java中，最贱的类定义形式为：
```java
class ClassName
{
    field1
    field2
    ...
    constructor1
    constructor2
    ...
    method1
    method2
    ...
}
```

下面是一个简单的Employee类

```java
class Employee
{
    private String name;
    private double salary;
    private LocalDate hireDay;
    
    public Employee(String n, double s, int year, int month, int day)
    {
        name = n;
        salary = s;
        hireDay = LocalDate.of(year,month, day);
    }
    
    public String getName()
    {
        return name;    
    }
   
    // more methods
    ...
    
}
```

