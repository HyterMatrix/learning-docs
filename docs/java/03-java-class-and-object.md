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

### 类之间的关系
 
- 依赖
- 聚合
- 继承

## 类与对象

Java中定义类使用关键字class关键字

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
    String beak;    // 喙
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

**注意** Java程序设计语言对对象采用的不是`引用调用`，实际上对象引用是按值传递的。(参考《Java核心技术》P120)

- 一个方法不能修改一个基本数据类型的参数（即数值型活布尔型）
- 一个方法可以改变一个对象的参数状态
- 一个方法不能让对象参数引用一个新的对象

Java中方法参数的的使用情况

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

对象可以认为是在一类事务中抽象出某一个特例，可以通过这个特例来处理这类事物出现的问题。 

在Java语言中通过`new`操作符来创建对象。

```java
Test test = new Test();
Test test = new Test("A");
```

- Test：类名
- test：创建Test类对象
- new： 创建对象操作符
- A： 构造方法的参数

对象被创建出来的时，就是一个对象的引用，这个引用在内存中为对象分配了存储空间。每个对象都是相互独立的，在内存中占据独立的内存地址，并且每个对象都具有自己的生命周期，当一个对象的生命周期结束时，对象就变成垃圾，由Java虚拟机自带的垃圾回收机制处理,不能再被使用。

```java
public class CreateObject{
    public CreateObject(){
        System.out.println("创建对象");
    }
    public static void main(String[] args){
        new CreateObject();
    }
}
```

### 访问对象的属性和行为

在使用`new`操作符创建对象以后，可以使用`对象.类成员`来获取对象的属性和行为。

### 对象的销毁

每个对象都有生命周期，当对象的生命周期结束时，分配给该对象的内存地址会被回收。

何种对象会被Java虚拟机视为垃圾
- 对象引用超过其作用范围，这个对象将被视为垃圾。
- 将对象复制为null

虽然垃圾回收机制已经很完善，但垃圾回收器只能回收那些由new操作符创建的对象，如果某些对象不是通过new操作符在内存中获取一块内存区域，这种对象可能不能被垃圾回收机制所识别。

Java提供了System.gc()方法强制启动垃圾回收器。

### this关键字

this可以调用成员变量和成员方法。this引用的就是本类的一个对象，在局部变量或方法参数覆盖了成员变量时，就要添加this关键字明确引用的是类成员还是局部变量或方法参数。

## static 关键字

有`static`修饰的变量、常量和方法被称作静态变量、静态常量和静态方法，也被成为类的静态成员。

它属于整个类所有，而不是某个对象所有，即被类的所有对象所共享。静态成员可以使用类名直接访问，也可以使用对象名进行访问。当然，鉴于他作用的特殊性更推荐用类名访问。

### 静态变量

```java
public class HelloWorld{
    static String hobby = "Hello";

    public static void main(String[] args){
        // 静态变量可以直接使用类名类访问，无需创建类的对象
        System.out.println("通过类名访问hobby： "+ HelloWorld.hobby);
        // 创建类的对象
        HelloWorld hello = new HelloWorld();
        // 通过对象名来访问静态变量
        System.out.println("通过对象名访问hobby： "+ hello.hobby);
        // 使用对象名的形式修改静态变量的值
         hello.hobby = "world";
        System.out.println("通过类名访问hobby： "+ HelloWorld.hobby);
    }
}
```

注意：
1. 同一个类的不同实例对象，共用同一个静态变量，如果一个类将其变更，另一个类的静态变量也会变更。
2. 静态成员属于整个类，当系统第一次使用该类时，就会为其分配内存空间直到该类被卸载才会进行资源回收！

### 静态常量

用`final static`修饰一个成员变量，这个成员变量就会变成一个静态常量

```java
final static double PI = 3.1415926;
```

静态常量不可变，可以直接被访问，如`类名.静态常量名`。例如：

```java
public class MathTest{
   public static final double PI= 3.1415926;
}
```

可以直接采用`MathTest.PI`的形式访问该PI常量。

给静态常量命名时所有字母都应该大写。

### 静态方法

不需要创建对象，直接使用类来执行方法。`类名.静态方法()`

```java
public class StaticMethod{
    static public void show(){
        System.out.println("静态方法无需实例化就可以调用");
    }
    public static void main(String[] args){
        StaticMethod.show();
    }
}
```

### 静态代码块

用static修饰代码区域可以称之为静态代码块。定义一块静态代码块，可以完成类的初始化操作。在声明时后就会运行

```java
public class StaticTest{
    static {

    }
}
```
这里需要比较一下静态代码块`static{}`和代码块`{}`。晚点来补充。

## 类的主方法

主方法是类的入口，它定义了程序从何处开始；主方法提供对程序的流向控制，Java编译器通过主方法来执行程序

```java
public static void main(String[] agrs){
    // 方法体
}
```

在主方法的定义中可以看到一下特性
1. 主方法是静态的，所有如要直接在主方法中调用其他方法，则该方法必须也是静态的。
2. 主方法没有返回值。
3. 主方法的形参为数组。其中args[0]~args[n]，分别代表程序的第1个参数到第n+1ge参数，可以使用args.length获取参数个数。 


## 类设计技巧

- 一定要保证数据私有
- 一定要对数据初始化
- 不要在类中使用过的基本类型
- 不是所有的域都需要独立的域访问器和域修改器
- 将职责过多的类进行分解
- 类名和方法名要能够体现它们的职责
- 优先使用不可变的类
