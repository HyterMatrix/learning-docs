# 第六章 常用的API

## 6.1 API

### 概述 

API（Application Programming Interface）, 应用程序编程接口。

## 6.2 Scanner类

了解了API的使用方式，我们通过Scanner类，熟悉一下查询API，并使用类的步骤。 

### 什么是Scanner类

一个可以解析基本类型和字符串的简单文本扫描器。 例如，以下代码使用户能够从 System.in 中读取一个数： 

```java
Scanner sc = new Scanner(System.in); 
int i = sc.nextInt();
```

备注：System.in 系统输入指的是通过键盘录入数据。 

### 引用类型使用步骤

#### 导包

使用import关键字导包，在类的所有代码之前导包，引入要使用的类型，java.lang包下的所有类无需导入。 格式：

```java
import 包名.类名;
```

举例： 

```java
java.util.Scanner;
```

#### 创建对象

使用该类的构造方法，创建一个该类的对象。 格式： 

```java
数据类型 变量名 = new 数据类型(参数列表);
```

举例： 

```java
Scanner sc = new Scanner(System.in); 
```

#### 调用方法

调用该类的成员方法，完成指定功能。 格式： 

```java
变量名.方法名();
```

举例：

```java
int i = sc.nextInt(); // 接收一个键盘录入的整数
```

### Scanner使用步骤

####  查看

`java.util.Scanner `：该类需要import导入后使用。 

#### 查看构造方法

`public Scanner(InputStream source) `: 构造一个新的 Scanner ，它生成的值是从指定的输入流扫描的。 

#### 查看成员方法

`public int nextInt() `：将输入信息的下一个标记扫描为一个 int 值。 

使用Scanner类，完成接收键盘录入数据的操作，代码如下： 

```java
//1. 导包 
import java.util.Scanner;
public class Demo01_Scanner { 
    public static void main(String[] args) {
        //2. 创建键盘录入数据的对象 
        Scanner sc = new Scanner(System.in); 
        //3. 接收数据 
        System.out.println("请录入一个整数："); 
        int i = sc.nextInt(); 
        //4. 输出数据 
        System.out.println("i:"+i); 
    } 
}
```



### 练习

#### 求和

键盘录入两个数据并求和，代码如下： 

```java
import java.util.Scanner; 
public class Test01Scanner { 
    public static void main(String[] args) { 
        // 创建对象 
        Scanner sc = new Scanner(System.in); 
        // 接收数据 
        System.out.println("请输入第一个数据："); 
        int a = sc.nextInt(); 
        System.out.println("请输入第二个数据："); 
        int b = sc.nextInt(); 
        // 对数据进行求和 
        int sum = a + b;
        System.out.println("sum:" + sum);
    }
}
```

**取最值** 

键盘录入三个数据并获取最大值，代码如下

```java
import java.util.Scanner;
public class Test02Scanner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("请输入第一个数字：");
        int a = sc.nextInt();
        System.out.println("请输入第二个数字：");
        int b = sc.nextInt();
        System.out.println("请输入第三个数字：");
        int c = sc.nextInt();

        int temp = a > b ? a: b;
        int max = temp > c ? temp : c;

        System.out.println("最大值是：" + max);
    }
}

```



## 6.3 匿名对象【了解】

### 概念

创建对象时，只有创建对象的语句，却没有把对象地址值赋值给某个变量。虽然是创建对象的简化写法，但是应用 场景非常有限。

* **匿名对象** ：没有变量名的对象。 

格式：

```java
new 类名(参数列表)；
```

举例：

```java
new Scanner(System.in)；
```

### 应用场景

1. 创建匿名对象直接调用方法，没有变量名。 

   ```java
   new Scanner(System.in).nextInt();
   ```

2.  一旦调用两次方法，就是创建了两个对象，造成浪费，请看如下代码。

   ```java
   new Scanner(System.in).nextInt();
   new Scanner(System.in).nextInt();
   ```

   > 小贴士：一个匿名对象，只能使用一次。

3. 匿名对象可以作为方法的参数和返回值

   * 作为参数

     ```java
     class Test { 
         public static void main(String[] args) { 
             // 普通方式 
             Scanner sc = new Scanner(System.in); 
             input(sc); 
             //匿名对象作为方法接收的参数 
             input(new Scanner(System.in)); 
         }
         public static void input(Scanner sc){ 
             System.out.println(sc); 
         } 
     }
     ```

   * 作为返回值

     ```java
     class Test2 { 
         public static void main(String[] args) { 
         	// 普通方式 
         	Scanner sc = getScanner(); 
     	}
         public static Scanner getScanner(){ 
             //普通方式 
             //Scanner sc = new Scanner(System.in); 
             //return sc; 
             //匿名对象作为方法返回值 
             return new Scanner(System.in); 
         } 
     }
     ```



##  6.4 Random类

###  什么是Random类

此类的实例用于生成伪随机数。 

例如，以下代码使用户能够得到一个随机数：

```java
Random r = new Random(); 
int i = r.nextInt();
```

### Random使用步骤

#### 查看类

`java.util.Random `：该类需要 import导入使后使用。 

#### 查看构造方法

 `public Random() `：创建一个新的随机数生成器。 

#### 查看成员方法 

`public int nextInt(int n) `：返回一个伪随机数，范围在 0 （包括）和 指定值 n （不包括）之间的 int 值。

 使用Random类，完成生成3个10以内的随机整数的操作，代码如下：

```java
//1. 导包 
import java.util.Random; 
public class Demo01_Random { 
    public static void main(String[] args) { 
        //2. 创建键盘录入数据的对象 
        Random r = new Random(); 
        for(int i = 0; i < 3; i++){ 
            //3. 随机生成一个数据 
            int number = r.nextInt(10); 
            //4. 输出数据 
            System.out.println("number:"+ number); 
        } 
    } 
}
```

>备注：创建一个 `Random`对象，每次调用 `nextInt()` 方法，都会生成一个随机数。

### 练习 

#### 获取随机数

获取1-n之间的随机数，包含n，代码如下： 

```java
// 导包 
import java.util.Random; 
public class Test01Random { 
    public static void main(String[] args) { 
        int n = 50; 
        // 创建对象 
        Random r = new Random(); 
        // 获取随机数 
        int number = r.nextInt(n) + 1; 
        // 输出随机数 
        System.out.println("number:" + number); 
    } 
}
```

#### 猜数字小游戏

游戏开始时，会随机生成一个1-100之间的整数 number 。玩家猜测一个数字 guessNumber ，会与 number 作比较，系统提示大了或者小了，直到玩家猜中，游戏结束

```java
// 导包 
import java.util.Random; 
public class Test02Random {
    public static void main(String[] args) { 
        // 系统产生一个随机数1‐100之间的。 
        Random r = new Random(); 
        int number = r.nextInt(100) + 1; 
        while(true){ 
            // 键盘录入我们要猜的数据 
            Scanner sc = new Scanner(System.in); 
            System.out.println("请输入你要猜的数字(1‐100)："); 
            int guessNumber = sc.nextInt(); 
            // 比较这两个数据(用if语句) 
            if (guessNumber > number) { 
                System.out.println("你猜的数据" + guessNumber + "大了"); 
            } else if (guessNumber < number) { 
                System.out.println("你猜的数据" + guessNumber + "小了"); 
            } else { 
                System.out.println("恭喜你,猜中了"); break; 
            } 
        } 
    } 
}
```

## 6.5 ArrayList类

###  引入——对象数组

使用学生数组，存储三个学生对象，代码如下：

```java
public class Student {
    private String name;
    private int age;

    public Student() {
    }
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
}

public class Test01StudentArray { 
    public static void main(String[] args) { 
        //创建学生数组 
        Student[] students = new Student[3]; 
        //创建学生对象 
        Student s1 = new Student("曹操",40); 
        Student s2 = new Student("刘备",35); 
        Student s3 = new Student("孙权",30); 
        //把学生对象作为元素赋值给学生数组 
        students[0] = s1; 
        students[1] = s2; 
        students[2] = s3; 
        //遍历学生数组 
        for(int x=0; x<students.length; x++) { 
            Student s = students[x]; 
            System.out.println(s.getName()+"‐‐‐"+s.getAge()); 
        } 
    } 
}
```

到目前为止，我们想存储对象数据，选择的容器，只有对象数组。而数组的长度是固定的，无法适应数据变化的需 求。为了解决这个问题，Java提供了另一个容器 `java.util.ArrayList` 集合类,让我们可以更便捷的存储和操作对 象数据。

### 什么是ArrayList类

`java.util.ArrayList`是大小可变的数组的实现，存储在内的数据称为元素。此类提供一些方法来操作内部存储的元素。 `ArrayList`中可不断添加元素，其大小也自动增长。

### ArrayList使用步骤

#### 查看类

`java.util.ArrayList <E> `：该类需要 import导入使后使用。

`<E>` ，表示一种指定的数据类型，叫做泛型。 `E `，取自Element（元素）的首字母。在出现 E 的地方，我们使 

用一种引用数据类型将其替换即可，表示我们将存储哪种引用类型的元素。代码如下： 

```java
ArrayList<String>，ArrayList<Student>
```

#### 查看构造方法

* `public ArrayList() `：构造一个内容为空的集合

基本格式:

```java
ArrayList<String> list = new ArrayList<String>();
```

在JDK 7后,右侧泛型的尖括号之内可以留空，但是<>仍然要写。简化格式： 

```java
ArrayList<String> list = new ArrayList<>();
```

#### 查看成员方法

* `public boolean add(E e) `： 将指定的元素添加到此集合的尾部

参数` E e` ，在构造ArrayList对象时， <E> 指定了什么数据类型，那么 add(E e) 方法中，只能添加什么数据 

类型的对象。 

