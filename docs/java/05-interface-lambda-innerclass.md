# 第五章 接口、lambda表达式和内部类

## 接口

在Java程序设计语言中，接口不是类，而是对类的一组需求描述，这些类要遵从接口描述的统一格式进行定义。

### 接口概念

### 接口的特性

接口不是类，尤其不能使用new运算符实例化一个接口：

```java
x = new Comparable(...); // ERROR
```

然而，尽管不能构造接口的对象，却能声明接口的变量：

```java
x = new Employee(...); //OK
```

接下来，如同instanceof检查一个对象是不是属于某一个特定类一样，也可以使用instance检查一个对象是否实现了某个特定的接口：

```java
if(anobject intanceof Comparable){...}
```

与可以建立类的继承关系一样，接口也可以被扩展.这里允许存在多条从具有较高通用性的接口道较高专用性的接口的链。

### 接口与抽象类

为什么要引入接口的概念而不是直接设计成抽象类,如，

```java
abstract class Comparable{
    public abstract int compareTo(Object other);
}
```

然后，Employee类再直接扩展这个抽象类，并提供compareTo方法的实现

```java
class Employee extends Comparable{
    public int compareTo(Object other){...}
}
```

非常遗憾，使用抽象类表示通用属性存在这样一个问题：每个类智能扩展于一个类。假设Employee类已经扩展于一个类，例如Person，它就不能再像下面这样扩展第二个类了

```java
class Employee extends Person,Comarable //Error
```

但是每个类可以像下面这样实现多个接口

```java
class Employee extends Person implements Comparable // ok
```

有的程序设计的语言允许一个类有多个超类，例如C++，我们将此特性称为多重继承。而java的设计者选择了不支持多继承，其主要原因是多继承会让语言本身变得非常复杂，效率也会降低。

实际上，接口可以提供多重继承的大多数好处，同时还能避免多重继承的复杂性和低效性。

### 静态方法

在Java SE 8中，允许接在接口中增加静态方法。理论上讲，没有任何理由认为这是不合法的。只是这有违于将接口作为抽象贵方的初衷。

目前为止，通常的做法都是将静态方法放在伴随类中。在标准库中，你会看到成对出现的接口和实用工具类，例如Collection/Collections或Path/Paths。

### 默认方法

可以为接口方法提供一个默认实现。必须用`default`修饰符标记这样一个方法。

```java
public interface Comparable<T>{
    default int compareTo(T other){return 0;}
}
```

当然，这并没有太大的用处，因为Comparable的每个实际实现都要覆盖这个方法。不过有些情况下，默认方法可能很有用。例如，如果希望在发生鼠标点击事件时得到通知，就要实现一个包含5个方法的接口

```java
public interface MouseListener{
    void mouseClicked(MouseEvent event);
    void mousePressed(MouseEvent event);
    void mouseReleased(MouseEvent event);
    void mouseEntered(MouseEvent event);
    void mouseExited(MouseEvent event);
}
```

大多数情况下，你只需要关心其中1、2个事件类型。在Java SE8 中可以把所有的方法声明为默认方法，这些默认方什么都不做。

```java
public interface MouseListener{
    default void mouseClicked(MouseEvent event){}
    default void mousePressed(MouseEvent event){}
    default void mouseReleased(MouseEvent event){}
    default void mouseEntered(MouseEvent event){}
    default void mouseExited(MouseEvent event){}
}
```

### 解决默认方法冲突

如果现在一个接口中奖一个方法定义为默认方法，然后又在超类或另一个接口中定义了同样的方法，那么

1. 超类优先。如果超类提供了一个具体的方法，同名而且有相同参数类型的默认方法会被忽略。
2. 接口冲突。如果一个超接口提供了一个默认方法，另一个接口提供了一个同名而且参数类型相同的方法。必须覆盖这个方法来解决冲突。

## 接口示例

### 接口与回调

### COmparator接口

### 对象克隆

## lambad表达式

### 为什么引入lambda表达式

lambda表达式是一个可传递的代码块，可以在以后执行一次货多次。

### lambda表达式语法

### 函数式接口

### 方法引用

### 构造器引用

### 变量作用域

### 处理lambda表达式

## 内部类

内部类是定义在另一类中的类。为什么要使用内部类，主要原因是：

1. 内部类方法可以访问该类定义所在的作用域数据，包括私有数据。
2. 内部类可以对同一个包中的其他类隐藏起来。
3. 当想要定义一个回调函数且不想编写大量大妈时，使用`匿名（anonymous）`内部类比较便捷。

### 使用内部类访问对象状态

