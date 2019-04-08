# 第3章 对象与类

面向对象开发，是编程的精髓...也许，你就只有这个机会能面向对象哈哈哈哈哈。。。

## 面对对象概述

### 对象

### 类

类是同一类事务的统称，如果将现实世界中的一个事务抽象成对象，类就是这类对象的统称。

类是构造对象时所依赖的规范。

### 面向对象程序设计的特点

- 封装性
- 继承性
- 多态性

## 类与对象

Java中定义类使用关键字class关键字

```java
class 类名称{
    // 类的成员变量
    // 类的成员方法
}
```

### 成员变量

在Java中对象的属性也称为成员变量，成员变量的定义与普通变量的定义一样。

```java
数据类型 变量名称 [ = 值] ;
```
其中[ = 值] 是可选内容，即定义变量时可以为其赋值，也可以不赋值。

例如创建一个鸟类Bird。

```java
public class Bird{
    String wing;    // 翅膀
    String claw;    // 爪子
    String beak;    // 
    String feather; // 羽毛
}
```

上述代码可以看到Java中使用class关键字来定义类，Bird是类的名称，同时在Bird类中定义了4个成员变量，成员变量可以设置为Java中合法的数据类型，成员变量其实就是普通的变脸，可以为它们设置初始值，也可以不设置初始值，如果不设置初始值，则会有默认值，Java中常见类型的默认值。

|数据类型|默认值|说明|
|---|---|---|
|byte、short、int、long|0|整型零|
|fload、double|0.0|浮点零|
|char|' '|空格字符|
|booleam|false|逻辑假|
|引用类型，例如String|null|空值|

### 成员方法

在Java语言中，成员方法对应于类对象的行为，它主要用来定义类可执行的操作。
#### 成员方法的定义

```java
[权限修饰符] [返回值类型] 方法名 ( [参数类型 参数名] ) [throws 异常类型] {
...// 方法体
return 返回值;
}
```

#### 成员方法的参数

调用方法的时可以给该方法传递一个或多个值，传给方法的值叫做实参，在方法内部，接收实参的变量叫做形参，形参的声明语法和变量的声明语法一样。形参只在方法的内部有效。

##### 值参数

表明实参和形参之间按值传递。

在方法中对值类型的形参的修改并不会影响实参。

```java
public class Book{
    public static void main(String[] args){
        Book book = new Book();
        int x = 30;
        int y = 40;
        System.out.println("运算结果： " + book.add(x, y));
        System.out.println("实参x的值： " + x);
    }
    private int add(int x, int y){
        x = x + y;
        return x;
    }
}
```

##### 引用参数

如果在方法传递参数时。参数的类型是数组或者其他引用类型，那么，在方法中对参数的修改会反应到原有的数组或者其他引用类型上，这种类型的方法参数，为引用参数。

```java
public class RefTest{
    public static void main(String[] args){
        RefTest refTest = new  RefTest();
        int[] i = {0, 1, 2};
        System.out.println("原始数据： ");
        for(int j = 0; j < i.length; j++){
            System.out.println(i[j] + " ");
        }
        refTest.change(i);
        System.out.println("修改后的数据： ")
        for(int j = 0; j < i.length; j++){
            System.out.println(i[j] + " ");
        }
    }

    public void change(int[] i){
        i[0] = 100;
        i[1] = 200;
        i[2] = 300;
    }
}
```

##### 不定参数

声明方法时，如果有若干哥相同类型的参数，可以定义为不定长参数，该类型的参数声明如下

```java
权限修饰符 返回值类型 方法名(参数类型... 参数名)
```

**注意**类型和参数名支线是三个点，而不是其他数量或省略号。

```java
public class MultiTest{
    public static void main(String[] args){
        MultiTest multi = new MultiTest();
        System.out.println("运算结果： " + multi.add(20, 30, 40, 50, 60));
    }
    int add(int... x){
        int result = 0;
        for (int i = 0; i < x.length; i++){
            result += x[i];
        }
        return result;
    }
}
```

#### 成员方法的使用

```java
对象.成员方法([参数...])
```

### 构造方法

在类中出了成员方法之外，还存在一种特殊类型的方法，那就是构造方法。

构造方法是一个与类同名的方法，对象的创建就是通过构造方法完成的。每当类实例化一个对象时，类都会自动调用构造方法。

**注意** 构造方法只能在实例化的时候自动调用，不能通过的类的成员对象的方法调用

特点：
- 构造方法没有返回类型，也不能定义为void
- 构造方法的名称要与本类的名称相同
- 构造方法的主要作用是在完成对象的初始化工作，它能把定义对象的参数传给对象成员。

```java
public class Book{
    public Book(){
        // 构造方法
    }
}
```

在构造方法中可以给成员变量赋值，这样当实例化一个本类的对象时，相应的成员变量也将被初始化。如果类中没有明确定义构造方法，则编译器会自动创建一个不带参数的默认构造方法。

在定义构造方法时，还可以为其添加一个或者多个参数，即有参数的构造方法。

```java
class Book{
    public Book(int args){
        //...
    }
}
```

### 局部变量

如果在成员方法内定义一个变量，那么这个变量被成为局部变量。

局部变量在方法被执行的时候创建，在方法执行结束时被销毁。局部变量在使用时必须进行赋值操作或被初始化，否则会出现编译错误。

```java
public String getName(){
    int id = 0;
    setName("java");
    return id+this.name;
}
```
如果将id这个局部变量的初始化去掉，编译器会报错。

### 局部变量的有效范围

可以将局部变量的有效范围称为变量的作用域,局部变量的有效范围从该变量的声明开始到该变量的结束为止

### 对象的创建

### 访问对象的属性和行为

### 对象的销毁

### this关键字

## static 关键字

### 静态变量

### 静态常量

### 静态方法

### 静态代码块

## 类的主方法
