# 第四章 继承

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

`super(n, s, year, month, day);` 是调用超类Employee中含有n, s, year, month, day参数的构造器的简写形式。

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

对象引用的转换语法与数值表达式的类型转换类似，仅需要用一对圆括号将目标类名括起来，并放置在需要转换的对象引用之前就可以了。

```java
Manager boss = (Manager) staff[0];
```

进行类型转换的唯一原因是：在暂时忽视对象的实际类型之后，使用对象的全部功能。

在进行类型转换之前，先查看一下是否能够成功的转换。这个操作很简单的使用`instanceof操作符`就可以

```java
if(staff[1] instanceof Manaager){
    boss = (Manager) staff[1];
}
```

如果这个类型转换不可能成功，编译器就不会进行这个转换。例如下面这个转换：

```java
String c = (String) staff[1];
```

将会产生编译错误，这是因为String不是Employee的子类

综上所述

- 只能再继承层次内进行类型转换
- 在将超类转换成子类之前，应该使用instanceof进行检查

注意 如果x为null， `x instanceof C` 不会产生异常，只会返回false。之所以这样处理是因为null没有引用任何对象，当然也不会应用C类型的对象。

### 抽象类

使用`abstract关键字`

### 受保护访问

在之前了解的，最好将类中的域标记为`private`，而方法标记为`public`。任何声明为private的内容对其他类都是不可见的。这个对子类来说也是完全适用，即子类也不能访问超类的私有域。

而然有些时候，喜欢超类中的某些方法允许被子类访问，或允许子类的方法访问超类的某个域。为此需要将这些方法或域声明为`protected`.例如，如果将超类Employee中的hireDay声明为`protected`，而不是私有的，Manager中的方法就能直接访问它。

受保护的方法更具有实际意义。如果需要限制某个方法的使用，就可以将它声明为protected。这表明子类的道信任，可以正确的使用这个方法，而其他类不行。

> 事实上，Java中受保护部分对所有子类以及同一个包中的所有其他类都可见。

Java用于控制可见性的4个访问修饰符

- 仅对本类可见 --- private
- 对所有类可见 --- public
- 对本包和多有子类可见 --- protected
- 对本包可见 --- 默认（很遗憾），不需要修饰符

## Object:所有类的超类

Object类是Java中所有类的始祖，在Java中每个类都是有它扩展而来。但是并不需要这样写：

```java
public class Employee extends Object
```

如果没有明确指出超类，Object就被分为是这个类的超类。由于在Java中，每个类都是由Object类扩展而来，所有，熟悉这个类提供的所有服务十分重要。

可以是用Object类型的变量引用任何类型的对象

```java
Object obj = new Employee("Harry Hacker", 35000);
```

当然，Object类型的变量只能用于作为各种值的通用持有者。要相对其中的内容进行具体的操作，还需要清楚对象的原始类型，并进行相应的类型转换：

```java
Employee e = (Employee) obj;
```

在Java中只有`基本类型（primitive types）`不是对象，例如，数值、字符和布尔类型的值都不是对象。

所有的数组类型，不管是对象数组还是基本类型的数组都扩展了Object类

```java
Employee staff = new Employee[10];
obj = staff; // ok
obj = new int[10]; // ok
```

### equals 方法

Object类中的`equals`方法用于检测一个对象是否等于另一个对象。在Object类中，这个方法将判断两个对象是否具有相同的引用。如果两个对象具有相同的引用，它们一定是相等的。

### 相等测试与继承

如果隐式和显示的参数不属于同一个类，equals方法将如何处理呢？这是一个很有争议的问题。如果发现不匹配，equalse方法就会返回false。但是，许多程序员却喜欢使用instanceof进行检测

```java
if(!(otherObject instanceof Employee)) return false;
```

这样做不但没有解决otherObject是子类的情况，并且还有可能会招致一些麻烦。这就是建议不要使用这种处理方式的原因所在，Java语言规范要求equals方法具有下面的特性

1. 自反性：对于任何非空引用x，x.equalse(x)应该返回true。
2. 对称性：对于任何引用x和y，当且仅当y.equals(x)返回true，x.equals(y)也应该返回true。
3. 传递性：对于任何引用x、y和z，如果x.equals(y)返回true，y.equals(z)返回true,那么，x.equals(z)也应该返回true。
4. 一致性：如果x和y引用的对象没有发生变化，返回调用x.equals(y)应该返回同样的结果。

详情暂略。参考《卷I》p168

### hashCode方法

`散列码(hash code)`是由对象导出的一个整型值。散列码是没有规律的。如果x和y是两个不同的对象，`x.hashCode()`和`y.hashCode()`基本上不会相同。

String类使用下列算法计算散列码

```java
int hash = 0;
for(int i = 0; i< length(); i++){
    hash = 31 * hash + charAt(i);
}
```

列出了几个通过调用String类的hashCode方法得到的散列码。

|字符串|散列码|
|---|---|
|Hello|69609650|
|Harry|69496448|
|Hacker|-2141031506|

由于hashCode方法定义在Object类中，因此每个对象都有一个默认的散码列，其值为对象的存储地址。

Equals与hashCode的定义必须一致：如果x.equals(y)返回ture，那么x.hashCode()就必须与y.hashCode()具有相同的值。

**注意** 如果存在数组类型的域，那么可以使用静态方法的`Arrays.hashCode`方法计算一个散列码，这个散列码由数组元素的散列码组成。

#### <Badge text="API" type="prim"/>java.util.Object 1.0

- int hashCode()

#### <Badge text="API" type="prim"/>java.util.Object 7

- static int hash(Object... object)
- static int hashCode(Object a)

#### <Badge text="API" type="prim"/>java.lang.(Integer|Long|Short|Byte|Double|Float|Character|Boolean)

- static int hashCode((Integer|Long|Short|Byte|Double|Float|Character|Boolean) value)

#### <Badge text="API" type="prim"/>java.util.Arrays 1.2

- static int hashCode(type[] a)

### toString方法

在Object中还有一个重要的方法，就是toString方法，他用于返回对象值的字符串。举个例子，Point类的toString方法将返回下面这样的字符串

```java
java.awt.Point[X=10,Y=10]
```

绝大多数（但不是全部）的toSting方法都遵循这样的格式：类的名字，随后是一堆方括号括起来的阈值。下面是Employee类中的toString方法的实现“

```java
public String toString(){
    retrun "Employee[name=" + name
    + ",salary=" + salary
    + ",hireDay=" + hireDay + "]";
}
```

实际上，还可以设计的得更好一些。组好通过调用`getClass.getName()`获得类名的字符串，而不要将类名硬加到toString方法中

```java
public String toString(){
    retrun getClass().getName() + "[name=" + name
    + ",salary=" + salary
    + ",hireDay=" + hireDay + "]";
}
```

toString方法也可以供子类调用

当然，设计子类的程序员也应该定义自己的toString方法，并将子类的域描述添加进去。如果超类使用了`getClass().getName()`,那么子类只要调用`super.toString()`就可以了。例如

```java
public class Manager extends Employee{
    ...
    public String toString(){
        return super.toString + "[bonus=" + bonus + "]";
    }
}
```

现在，Manager对象将打印输出如下所示的内容

```java
Manager[name=...,salary=...,hisrDay=...][bonus=...]
```

随处可见的toString方法的主要原因是：只要对象与一个字符串通过操作符”+“ 连接起来，Java编译就会自动的调用toString方法，以便获得这个对象的字符串描述。

如果x是任意一个对象，并调用

```java
System.out.println(x);
```

println方法就会直接调用`x.toString()`,并打印输出得到字符串。

Object类定义了toString方法，用来打印输出对象所属的类名和散列码。例如

```java
System.out.println(System.out);
// 将输出下面的类容
java.io.PrintStream@610455d6
```

之所以等到这样的结果是应为PrintStream类的设计者没有覆盖toString方法。

:::danger 警告
令人烦恼的是，数组继承了object类的toString方法，数组类型将按照旧的格式打印。
:::

```java
int[] luckyNumber = {2, 3, 5, 7};
String s2 = "" + luckyNumber;  
// 生成的字符串结果为 "[I@511d50c0"(前缀[I 表明是一个整型数组)。修正的方式是调用静态方法Arrays.toStrig。
String s3 = Arrays.toString(luckyNumber);
// 生成的字符串为 [2, 3, 5, 7, 11, 13]
// 要想打印多维数组则需要调用Arrys.deepToString方法。
```

toString方法是一种非常有用的吊事工具。在标准类库中，许多类都定义了toString方法，一边用户能够获得一些有关于对象状态的信息。

:::tip 提示
强烈建议为自定义的每一个类增加toString方法。
:::

## 泛型数组列表

`ArrayList`是一个采用`类型参数（type parameter）`的`泛类型（generic class）`。为了指定数组列表保存的元素对象类型，需要用一对尖括号名括起来加在后面，例如`ArrayList<Employee>`。

下面声明和构造一个保存Employee对象的数组列表

```java
ArrayList<Employee> staff = new ArrayList<Employee>;
// 两边都使用类型参数Employee，这有些繁琐。在java SE7中，可以省去右边的类型参数
ArrayList<Employee> staff = new ArrayList<>();
```

这被称为”菱形“语法，因为空尖括号<>就像是一个菱形。可以结合new操作符使用菱形语法。编译器会检查新值是什么。如果赋值给一个变量，或传递到某个方法，或者从某个方法返回，编译器会检查这个变量、参数或方法的泛型类型，然后将这个类型放在<>中。

使用add方法可以将元素添加到数组列表中。例如，下面展示了如何将雇员对象添加到数组列表中的方法：

```java
staff.add(new Employee("Harry Hacker",...));
staff.add(new Employee("Tony Tester",...));
```

数组列表管理着对象引用的一个内部数组。最终，数组的全部空间有空能被用尽。这就显现出数组列表的操作魅力：如果调用add且内部数组已经满了，数组列表就将自动的创建一个更大的数组，并将所有的对象从较小的数组中拷贝到较大的数组中。

如果已经清楚或能够估计出数组可能存储的元素数量，就可以在填充数组之前调用`ensureCapacity`方法：

```java
staff.ensureCapacity(100)
```

这个方法调用将分配一个包含100个对象的内部数组。然后调用100次add，而不用重新分配空间。

另外，还可以吧初始容量传递给ArrayList构造器

```java
ArrayList<Employee> staff = new ArrayList<>(100);
```

:::danger ⚠️警告
分配数组列表：`new ArrayList<>(100)`
他与新数组分配空间有所不同：`new Employee[100]`

数组列表的容量与数组的大小有一个非常重要的区别。如果为数组分配100个元素的存储空间，数组就有100个空位置可以使用。而容量为100个严肃的数组列表只是拥有保存100个元素的潜力（实际上，重新分配空间的话，将会超过100），但是在最初，甚至完成初始化构造之后，数组列表根本就不含有任何元素。
:::

size方法将返回数组列表中包含的实际元素数目。例如，`staff.size()`

将返回staff数组列表的当前元素数量，它等价于数组a的a.length。

一旦能够确认数组列表的大小不在发生变化，就可以调用`trimToSize`方法。这个方法将存储区域的大小调整为当前元素数量所需要的存储空间数目。垃圾回收器将回收多余的存储空间。

一旦能够确认数组列表的大小，添加新元素就需要花时间再次移动存储块，所以应该在确认不会添加任何元素时，再调用trimToSize。

### 访问数组列表元素

很遗憾，天下没有免费的午餐。数组列表自动扩展容量的遍历增加了访问元素语法的复杂程度。其原因是ArrayList类并不是Java程度设计语言的一部分；他只是一个由某些人编写且被放在标准库中的一个实用类。

使用get和set方法实现访问或改变数组元素的操作，而不使用人们喜爱的[]语法格式。

例如，要设置第i个元素，可以使用：`staff.set(i, hrray);` 它等价于对数组a的元素赋值（数组的下标从0开始）`a[i] = harry`。

:::danger ⚠️警告
只有i小于或等于数组列表的大小时，才能够调用`list.set(i,x)`

使用add方法为数组添加新元素，而不要使用set方法，它只能替换数组中已经存在的元素内容。
:::

使用下列各式获得数据列表的元素：

```java
Employee e = staff.get(i);
// 等价于
Employee e = a[i];
```

下面这个技巧可言一举两得，既可以灵活的扩展数组，又可以方便的访问数组元素。首先，创建一个数组，并添加所有的元素。

```java
ArrayList<X> list = new ArrayList<>();
while(...){
    x = ...;
    list.add(x);
}
```

执行完上述操作后，使用toArray方法将数组元素拷贝到一个数组总。

```java
X[] a = new X[list.size()];
list.toArray(a);
```

除了在数组列表的尾部追加元素之外，还可以再数组列表的中间插入元素，使用带索引参数的add方法。

```java
int n = staff.size / 2;
staff.add(n,e);
```

为了插入一个新元素，位于n之后的所有元素都要向后移动一个位置，如果插入新元素后，数组列表的大小超过了容量，数组列表就会被重新分配存储空间。

同样的，可以从数组列表中间删除一个元素。

```java
Employee e = staff.remove(n);
```

位于这个位置之后的所有元素都会向前移动一个位置，并且数组的大小减1。

对数组实施插入和删除元素的操作其效率比较低。对于小型数组来说，这一点不必担心。如果数组存储的元素比较多，有经常需要在中间位置插入、删除元素，就应该考虑使用链表了

可以使用”for each“循环遍历数组列表

```java
for (Employee e: staff)
    dp something with e
```

这个循环和下列代码具有相同的效果

```java
for (int i = 0; i<staff.size(); i++){
    Employee e = staff.get(i);
    do something with e
}
```

### 类型化与原始数组列表的兼容性

略

## 对象包装器与自动装箱

有时，需要将int这样的基本类型转换为对象。所以有的基本类型都一个与之对应的类。例如，Integer类对应基本类型int。通常，这些类成为`包装器（warpper）`。这些对象包装器类拥有很多明显的名字：Integer、Long、Float、Double、Short、Byte、Character、Void和Boolean（前6个类派生于公共的超类Number）。对象包装器是不可变的，即一旦构造了包装器，就不允许更改包装在其中的值。同时，对象包装器类还是final，因此不能定义他们的子类。

假设想定义一个整型数组列表。而尖括号中的类型参数不允许是基本类型，也就是说，不允许写成`ArrayList<int>`。这里就用到了Integer对象包装器类。我们可以声明一个Integer对象的数组列表。

```java
ArrayList<Integer> list = new ArrayList<>();
```

幸运的是，有一个很有用的特性，从而更加便于添加int类型的元素到`ArrayList<Integer>`中

```java
list.add(3);
```

将自动变换成

```java
list.add(Integer.valueOf(3));
```

这种变换称为`自动装箱（autoboxing）`。

相反的，当一个Integer对象赋给一个int值时，将自动拆箱。也就是说，编译器执行下列语句：

```java
int n = list.get(i);
```

翻译成

```java
int n = list.get(i).intValue();
```

甚至在算术表达式中也能够自动的装箱和拆箱。

大多数情况下，容易有一种假象，即基本类型与他们的对象包装器是一样的，只是它们的相等性不同。大家都知道，==运算符也可以应用与对象包装器对象，只不过检测的是对象是否指向同一个存储区域，因此，下面的比较通常不会成立：

```java
Integer a = 1000;
Integer b = 1000;
if (a == b) ...
```

然而，java实现却有可能让它成立。如果将经常出现的值包装到同一个对象中，这种比较就有可能成立。这种不确定的结果并不是我们锁希望的。解决这个问题的办法是在两个包装器对象比较时调用equals方法。

关于自动装箱还有几点需要说明。

首先，由于包装器类引用可以为null，所以自动装箱有可能会抛出一个NullPointerException异常：

```java
Integer n = null;
System.out.println(2 * n); // Throws NullPointerException
```

另外，如果在一个条件表达式中混合使用Integer 和 Double类型，Integer值会拆箱，提升为double，再装箱为Double：

```java
Integer n = 1;
Double x = 2.0;
System.out.println(true? n:x);
```

最后强调一下，装箱和拆箱是编译器认可的，而不是虚拟机。编译器在生成类的字节码时，插入必要的方法调用。虚拟机只是执行了这些字节码。

使用数值对象包装器还有另一个好处。Java设计者发现，可以将某些基本方法放置再包装器中，例如，将一个数字字符串转换成数值。


## 参数数量可变的方法

在Java SE 5.0 以前的版本中，每个Java方法都有固定数量的参数。然而，现在的版本提供了可以用可变的参数数量调用的方法（有时候称为“变参”方法）。

```java
public static double max(double... values){
    double largest = Double.NEGATIVE_INFINITY;
    for(double v: value) if(v>largest) largest = v;
    return largest
}
```

可以像下面这样调用方法

```java
double m = max(3.1, 40.4, -5);
```

其中的... 符号就是接受变参的符号。

## 枚举类

前面已经介绍了如何定义枚举类型了。

```java
public enum Size{SMALL, MEDIUM, LARGE, EXTRA_LARGE };
```

实际上，这个声明定义的类型是一个类，他刚好有4个实例，在此尽量不要构造一个新对象。

因此，在比较两个枚举类型的值时，永远不需要调用equals，而直接使用“==”就可以了。

如果需要的话，可以在枚举类型中添加一些构造器、方法和域。当然，构造器只是在构造枚举常量的时候被调用。

```java
public enum Size{
    SMALL("S"), MEDIUM("M"), LARGE("L"),EXTRA_LARGE("XL");

    private String abbreviation;

    private Size(String abbreviation) {this.abbreviation = abbreviation;}
    public String getAbbreviation(){return abbreviation;}
}
```

所有的枚举类型都是Enum类的子类。他们继承了这个类的许多方法，其中最有用的一个是toString，这个方法能返回枚举常量名。例如，Size.SMALL.toString()将返回字符串“SMALL”。

toString的逆方法是静态方法valueOf。例如

```java
Size s = Enum.valueOf(Size.class, "SMALL");
```

将s设置成Size.SMALL。

每个枚举类型都有一个静态的values方法， 他讲返回一个包含全部枚举值的数组。

```java
Size[] values = Size.values();
```

返回包含元素Size.SMALL，Size.MEDIUM，Size.LARGE和Size.EXTRA_LARGE的数组。

ordinal方法返回enum声明中枚举常量的位置，位置从0开始计数。例如，Size.MEDIUM.ordinal()返回1。

```java
package enums;

import java.util.Scanner;

public class EnumTest {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter an size:(SMALL, MEDIUM, LARGE, EXTRA_LARGE) ");
        String input = in.next().toUpperCase();

        Size size = Enum.valueOf(Size.class, input);
        System.out.println("size = "+size);
        System.out.println("abbreviation=" + size.getAbbreviation());
        if (size == Size.EXTRA_LARGE)
            System.out.println("Good job--you paid attention to the _.");
    }
}

enum Size{
    SMALL("S"), MEDIUM("M"), LARGE("L"), EXTRA_LARGE("XL");

    private Size(String abbreviation){this.abbreviation = abbreviation;}
    public String getAbbreviation(){ return  abbreviation; }

    private String abbreviation;
}

```

## 反射

`反射库（reflection library）`提供了一个非常丰富且精心设计的工具集，以便编写能够动态操作java代码的程序。这项功能被大量的应用于JavaBeans中，它是Java组件的体系结构。使用反射，Java可以支持VB用户习惯使用的工具。特别是在设计或运行中添加新类时，能够快速的应用开发工具动态的查询新添加类的能力。

能够分析类能力的程序成为反射，反射机制的功能及其强大，反射可以用来

- 在运行时分析类的能力。
- 在运行时查看对象，例如编写一个toString方法供所有类使用。
- 实现通用的数组操作代码。
- 利用Method对象，这个对象很像C++中的函数指针。

反射是一种功能强大且复杂的机制。使用它的主要人员是工具构造者，而不是应用程序员。

暂略（《Java核心技术 卷 Ⅰ》 P190）

## 继承的设计技巧

1. 将公共操作和域放在超类。
2. 不要使用受保护的域。
3. 使用继承实现“is-a”关系。
4. 除非所有继承的方法都有意义，否则不要使用继承。
5. 在覆盖方法时，不要改变预期的行为。
6. 使用多态，而非类型信息。
7. 不要过多的使用反射。
