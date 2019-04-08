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

在Java中，最简单的类定义形式为：

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

这里展示Employee类的实际使用

```java
import java.time.LocalDate;

public class EmployeeTest {
    public static void main(String[] args) {
        // 构造了一个Employee数组，并填入了三个雇员对象
        Employee[] staff = new Employee[3];

        staff[0] = new Employee("Carl Cracker",75000, 1987,12,15);
        staff[1] = new Employee("Harry Hacker", 50000, 1989, 10, 1);
        staff[2] = new Employee("Tony Tester", 40000, 1990, 3, 15);

        // 利用Employee类的reiseSalary方法将每个雇员的薪水提高5%：
        for (Employee e : staff)
            e.raiseSalary(5);


        // 最后调用`getName`方法，`getSalary`方法和`getHireDay`方法将每个雇员的信息打印出来：
        for (Employee e: staff)
            System.out.println("name=" + e.getName() + ", salary=" + e.getSalary() + ", hireday=" + e.getHireDay());

    }
}


class Employee {
    private String name;
    private double salary;
    private LocalDate hireDay;

    public Employee(String n, double s, int year, int month, int day)
    {
        name = n;
        salary = s;
        hireDay = LocalDate.of(year, month, day);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public LocalDate getHireDay() {
        return hireDay;
    }

    public void setHireDay(LocalDate hireDay) {
        this.hireDay = hireDay;
    }

    public void raiseSalary(double byPercent){
        double raise = salary * byPercent / 100;
        salary += raise;
    }
}
```

在这个示例程序中包含两个类：Employee类和带有public访问修饰符的EmployeeTest类。EmployeeTest类包含了main方法。

### 多个源文件的使用

```shell
javac Employee*.java
#or
javac EmployeeTest.java
```