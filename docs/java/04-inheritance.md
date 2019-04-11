# 第4章 继承

继承是面向对象程序设计的一个基本概念。利用继承，可以基于已存在的类构造一个新类。继承已存在的类就是复用（继承）这些类的方法和域。在此基础上，还可以添加一些新的方法和域，以满足新的需求。

## 类、子类、超类

### 定义子类

关键字`extends`表示继承

```java
public class Manager extends Employee{
    // 添加方法或域
}
```

关键字`extends`表明正在构造的新类派生于一个已存在的类。已经存在的类称为`超类（superclass）`、`基类（base class）`或`父类（parent class）`; 新类称为`子类（subclass）`、`派生类（derived class）`或`孩子类（child class）`。

尽管Employee类是一个超类，但并不是因为它优于子类或者拥有比子类更多的功能。实际上恰恰相反，子类比超类拥有的功能更加丰富。

### 覆盖方法

不是所有的超类中的方法都对子类适用。为此我们需要提供一个新的方法来`覆盖（override）`超类中的方法。

如果我们需要调用超类中的方法，需要使用特定的关键字`super`来解决这个问题。

### 子类构造器

我们来提供一个构造器

```java
public Manager(String name, double salary, int year, int month, int day){
    super(name, salary, year, month, day);
    bonus = 0;
}
```

这里的关键字`super`具有不同的含义。

`super(n, s, year, month, day); ` 是调用超类Employee中含有n, s, year, month, day参数的构造器的简写形式。

因为子类的构造器不能访问超类的私有域，所以必须利用超类的构造器对这部分私有域进行初始化，我们可以通过super实现对超类构造器的调用。使用super调用构造器的语句必须是子类构造器的第一条语句。

如果子类的构造器没有显式的调用超类的构造器，则将自动的调用超类默认（没有参数）的构造器。如果超类没有不带参数的构造器，并且在子类的构造器中有没有显式的调用超类的其他构造器，则Java编译器将报告错误。

### 继承层次

继承并不仅限于一个层次。例如，可以由Manager类派生Executive类。由一个公共超类派生而来的所有类的集合被成为`继承层次（inheritance hierarchy）`。在继承层次中，从某个特定的类到其祖先的路径被称为该类的`继承链（inheritance chain）`。

Java不支持多继承。

### 多态

暂略

### 阻止继承：final类和方法

有时候，可能希望阻止人们利用某个类定义子类。不允许扩展的类被称为final类。如果在定义类的时候使用fianl修饰符就表明这个类是final类。例如，假设希望阻止人们定义Executive类的子类，就可以在定义这个类时候，使用final修饰符声明。

```java
public fianl class Executive extends Manager
{
    ...
}
```

类中的特定方法也可以声明为final。如果这样做，子类就不能覆盖这个方法（final类中的所有方法紫宗的称为final方法）。

```java
public class Employee
{
    ...
    public final String getName()
    {
        return name;
    }
    ...
}
```
将方法或类声明为final主要的目的是：确保它们不会在子类中改变语义。

### 强制类型转换

将一个类型强制转换成另一个类型的过程为类型转换（[参考数值类型的转换](/java/02-java-basic.md#数值类型的转换)）。

```java
double x = 3.405;
int nx = (int) x;
```

## Object:所有类的超类

## 泛型数组列表

## 对象包装器与自动装箱

## 参数数量可变的方法

## 枚举类

## 反射

## 继承的设计技巧
