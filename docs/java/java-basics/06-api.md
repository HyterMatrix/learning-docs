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

`public int nextInt(int n) `：返回一个伪随机数，范围在 0 （包括）和 指定值 n （不包括）之间的 int 值。使用Random类，完成生成3个10以内的随机整数的操作，代码如下：

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

`<E>` ，表示一种指定的数据类型，叫做泛型。 `E `，取自Element（元素）的首字母。在出现 E 的地方，我们使 用一种引用数据类型将其替换即可，表示我们将存储哪种引用类型的元素。代码如下： 

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

参数` E e`，在构造ArrayList对象时，`<E>` 指定了什么数据类型，那么 `add(E e)` 方法中，只能添加什么数据 类型的对象。 

使用ArrayList类，存储三个字符串元素，代码如下： 

```java
public class Test02StudentArrayList { 
    public static void main(String[] args) { 
        //创建学生数组 
        ArrayList<String> list = new ArrayList<>(); 
        //创建学生对象 
        String s1 = "曹操"; 
        String s2 = "刘备"; 
        String s3 = "孙权"; 
        //打印学生ArrayList集合 
        System.out.println(list); 
        //把学生对象作为元素添加到集合 
        list.add(s1); 
        list.add(s2); 
        list.add(s3);
        //打印学生ArrayList集合 
        System.out.println(list); 
    } 
}
```

####  常用方法和遍历

对于元素的操作,基本体现在——增、删、查。常用的方法有： 

* `public boolean add(E e) `：将指定的元素添加到此集合的尾部。 

* `public E remove(int index)` ：移除此集合中指定位置上的元素。返回被删除的元素。 
* `public E get(int index)` ：返回此集合中指定位置上的元素。返回获取的元素。 
* `public int size()` ：返回此集合中的元素数。遍历集合时，可以控制索引范围，防止越界。

这些都是最基本的方法，操作非常简单，代码如下: 

```java
public class Demo01ArrayListMethod { 
    public static void main(String[] args) { 
        //创建集合对象 
        ArrayList<String> list = new ArrayList<String>(); 
        //添加元素 
        list.add("hello"); 
        list.add("world");
        list.add("java"); 
        //public E get(int index):返回指定索引处的元素 
        System.out.println("get:"+list.get(0)); 
        System.out.println("get:"+list.get(1)); 
        System.out.println("get:"+list.get(2)); 
        //public int size():返回集合中的元素的个数 
        System.out.println("size:"+list.size()); 
        //public E remove(int index):删除指定索引处的元素，返回被删除的元素 
        System.out.println("remove:"+list.remove(0)); 
        //遍历输出 
        for(int i = 0; i < list.size(); i++){
            System.out.println(list.get(i)); 
        }
    } 
}
```

#### 如何存储基本数据类型

ArrayList对象不能存储基本类型，只能存储引用类型的数据。类似`<int>` **不能写**，但是存储基本数据类型对应的 包装类型是可以的。所以，想要存储基本类型数据， `<>` 中的数据类型，必须转换后才能编写，转换写法如下： 

| 基本元素 | 基本类型包装类 |
| :------- | -------------- |
| byte     | Byte           |
| short    | Short          |
| int      | Integer        |
| long     | Long           |
| float    | Float          |
| double   | Double         |
| char     | Character      |
| boolean  | Boolean        |

我们发现，只有`Integer`和 `Character`需要特殊记忆，其他基本类型只是首字母大写即可。那么存储基本类型数 据，代码如下：

```java
public class Demo02ArrayListMethod { 
    public static void main(String[] args) { 
        ArrayList<Integer> list = new ArrayList<Integer>(); 
        list.add(1); 
        list.add(2); 
        list.add(3); 
        list.add(4); 
        System.out.println(list); 
    } 
}
```

### ArrayList练习

#### 数值添加到集合

生成6个1~33之间的随机整数,添加到集合,并遍历

```java
public class Test01ArrayList { 
    public static void main(String[] args) { 
        // 创建Random 对象 
        Random random = new Random(); 
        // 创建ArrayList 对象 
        ArrayList<Integer> list = new ArrayList<>(); 
        // 添加随机数到集合 
        for (int i = 0; i < 6; i++) { 
            int r = random.nextInt(33) + 1;
            list.add(r); 
        }
        // 遍历集合输出 
        for (int i = 0; i < list.size(); i++) { 
            System.out.println(list.get(i)); 
        } 
    } 
}
```

#### 对象添加到集合

自定义4个学生对象,添加到集合,并遍历

```java
public class Test02ArrayList { 
    public static void main(String[] args) { 
        //创建集合对象 
        ArrayList<Student> list = new ArrayList<Student>(); 
        //创建学生对象 
        Student s1 = new Student("赵丽颖",18); 
        Student s2 = new Student("唐嫣",20); 
        Student s3 = new Student("景甜",25); 
        Student s4 = new Student("柳岩",19); 
        //把学生对象作为元素添加到集合中 
        list.add(s1); 
        list.add(s2); 
        list.add(s3); 
        list.add(s4); 
        //遍历集合 
        for(int x = 0; x < list.size(); x++) { 
            Student s = list.get(x); 
            System.out.println(s.getName()+"‐‐‐"+s.getAge()); 
        } 
    } 
}
```

#### 打印集合方法

定义以指定格式打印集合的方法(ArrayList类型作为参数)，使用{}扩起集合，使用@分隔每个元素。格式参照 {元素@元素@元素}。

```java
public class Test03ArrayList { 
    public static void main(String[] args) { 
        // 创建集合对象 
        ArrayList<String> list = new ArrayList<String>(); 
        // 添加字符串到集合中 
        list.add("张三丰"); 
        list.add("宋远桥");
        list.add("张无忌"); 
        list.add("殷梨亭"); 
        // 调用方法 
        printArrayList(list); 
    }
    public static void printArrayList(ArrayList<String> list) { 
        // 拼接左括号 
        System.out.print("{"); 
        // 遍历集合 
        for (int i = 0; i < list.size(); i++) {
            // 获取元素 
            String s = list.get(i); 
            // 拼接@符号 
            if (i != list.size() ‐ 1) { 
                System.out.print(s + "@"); 
            } else { 
                // 拼接右括号 
                System.out.print(s + "}"); 
            } 
        } 
    } 
}
```

#### 获取集合方法

定义获取所有偶数元素集合的方法(ArrayList类型作为返回值)

```java
public class Test04ArrayList { 
    public static void main(String[] args) { 
        // 创建Random 对象 
        Random random = new Random(); 
        // 创建ArrayList 对象 
        ArrayList<Integer> list = new ArrayList<>(); 
        // 添加随机数到集合 
        for (int i = 0; i < 20; i++) { 
            int r = random.nextInt(1000) + 1; 
            list.add(r); 
        }
        // 调用偶数集合的方法 
        ArrayList<Integer> arrayList = getArrayList(list); 
        System.out.println(arrayList); 
    }
    public static ArrayList<Integer> getArrayList(ArrayList<Integer> list) { 
        // 创建小集合,来保存偶数
        ArrayList<Integer> smallList = new ArrayList<>(); 
        // 遍历list 
        for (int i = 0; i < list.size(); i++) { 
            // 获取元素
            Integer num = list.get(i); 
            // 判断为偶数,添加到小集合中 
            if (num % 2 == 0){ 
                smallList.add(num); 
            } 
        }
        // 返回小集合 
        return smallList; 
    } 
}
```

## 6.6 String类

### String类概述

#### 概述

`java.lang.String` 类代表字符串。Java程序中所有的字符串文字（例如 `"abc" `）都可以被看作是实现此类的实
例。
类 `String` 中包括用于检查各个字符串的方法，比如用于**比较**字符串，**搜索**字符串，**提取**子字符串以及创建具有翻
译为**大写**或**小写**的所有字符的字符串的副本。

#### 特点
1. 字符串不变：字符串的值在创建后不能被更改。

   ```java
   String s1 = "abc";
   s1 += "d";
   System.out.println(s1); // "abcd"
   // 内存中有"abc"，"abcd"两个对象，s1从指向"abc"，改变指向，指向了"abcd"。
   ```

2. 因为String对象是不可变的，所以它们可以被共享。

   ```java
   String s1 ="abc";
   String s2 ="abc";
   // 内存中只有一个"abc"对象被创建，同时被s1和s2共享。
   ```

3. `"abc"` 等效于 `char[] data={ 'a' , 'b' , 'c' } `。

   ```java
   例如：
   String str ="abc";
   相当于：
   char data[] = {'a', 'b', 'c'};
   String str = new String(data);
   // String底层是靠字符数组实现的。
   ```



### 使用步骤

* 查看类
  * `java.lang.String` ：此类不需要导入。

* 查看构造方法

  * `public String() `：初始化新创建的 String对象，以使其表示空字符序列。

  * `public String(char[] value)` ：通过当前参数中的字符数组来构造新的String。

  * `public String(byte[] bytes)` ：通过使用平台的默认字符集解码当前参数中的字节数组来构造新的String。

    

构造举例，代码如下：

```java
// 无参构造
String str = new String（）；
// 通过字符数组构造
char chars[] = {'a', 'b', 'c'};
String str2 = new String(chars);
// 通过字节数组构造
byte bytes[] = { 97, 98, 99 };
String str3 = new String(bytes);
```



### 常用方法

#### 判断功能的方法

* `public boolean equals (Object anObject) `：将此字符串与指定对象进行比较。
* `public boolean equalsIgnoreCase (String anotherString) `：将此字符串与指定对象进行比较，忽略大小写。

方法演示，代码如下：

```java
public class String_Demo01 {
    public static void main(String[] args) {
        // 创建字符串对象
        String s1 = "hello";
        String s2 ="hello";
        String s3 = "HELLO";
        // boolean equals(Object obj):比较字符串的内容是否相同
        System.out.println(s1.equals(s2)); // true
        System.out.println(s1.equals(s3)); // false
        System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
        //boolean equalsIgnoreCase(String str):比较字符串的内容是否相同,忽略大小写
        System.out.println(s1.equalsIgnoreCase(s2)); // true
        System.out.println(s1.equalsIgnoreCase(s3)); // true
        System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
    }
}
```

> Object 是” 对象”的意思，也是一种引用类型。作为参数类型，表示任意对象都可以传递到方法中。



#### 获取功能的方法

* `public int length ()` ：返回此字符串的长度。
* `public String concat (String str)` ：将指定的字符串连接到该字符串的末尾。
* `public char charAt (int index) `：返回指定索引处的 char值。
* `public int indexOf (String str)` ：返回指定子字符串第一次出现在该字符串内的索引。
* `public String substring (int beginIndex)` ：返回一个子字符串，从beginIndex开始截取字符串到字符串结尾。
* `public String substring (int beginIndex, int endIndex) `：返回一个子字符串，从beginIndex到endIndex截取字符串。含beginIndex，不含endIndex。

```java
public class String_Demo02 {
  public static void main(String[] args) {
    //创建字符串对象
    String s ="helloworld";
    // int length():获取字符串的长度，其实也就是字符个数
    System.out.println(s.length());
    System.out.println("‐‐‐‐‐‐‐‐");
    // String concat (String str):将将指定的字符串连接到该字符串的末尾.
    String s ="helloworld";
    String s2 = s.concat("**hello itheima");
    System.out.println(s2);// helloworld**hello itheima
    // char charAt(int index):获取指定索引处的字符
    System.out.println(s.charAt(0));
    System.out.println(s.charAt(1));
    System.out.println("‐‐‐‐‐‐‐‐");
    // int indexOf(String str):获取str在字符串对象中第一次出现的索引,没有返回‐1
    System.out.println(s.indexOf("l"));
    System.out.println(s.indexOf("owo"));
    System.out.println(s.indexOf("ak"));
    System.out.println("‐‐‐‐‐‐‐‐");
    // String substring(int start):从start开始截取字符串到字符串结尾
    System.out.println(s.substring(0));
    System.out.println(s.substring(5));
    System.out.println("‐‐‐‐‐‐‐‐");
    // String substring(int start,int end):从start到end截取字符串。含start，不含end。
    System.out.println(s.substring(0, s.length()));
    System.out.println(s.substring(3,8));
    }
}
```



#### 转换功能的方法

* `public char[] toCharArray () `：将此字符串转换为新的字符数组。
* `public byte[] getBytes () `：使用平台的默认字符集将该 String编码转换为新的字节数组。
* `public String replace (CharSequence target, CharSequence replacement) `：将与target匹配的字符串使用replacement字符串替换。

方法演示，代码如下：

```java
public class String_Demo03 {
    public static void main(String[] args) {
        //创建字符串对象
        String s ="abcde";
        // char[] toCharArray():把字符串转换为字符数组
        char[] chs = s.toCharArray();
        for(int x = 0; x < chs.length; x++) {
        		System.out.println(chs[x]);
        }
        System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
        // byte[] getBytes ():把字符串转换为字节数组
        byte[] bytes = s.getBytes();
        for(int x = 0; x < bytes.length; x++) {
        		System.out.println(bytes[x]);
        }
        System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
        // 替换字母it为大写IT
        String str ="itcast itheima";
        String replace = str.replace("it","IT");
        System.out.println(replace); // ITcast ITheima
        System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
    }
}
```

> CharSequence 是一个接口，也是一种引用类型。作为参数类型，可以把String对象传递到方法中。

#### 分割功能的方法

* `public String[] split(String regex) `：将此字符串按照给定的regex（规则）拆分为字符串数组。

方法演示，代码如下：

```java
public class String_Demo03 {
    public static void main(String[] args) {
        //创建字符串对象
        String s ="aa|bb|cc";
        String[] strArray = s.split("|"); // ["aa","bb","cc"]
        for(int x = 0; x < strArray.length; x++) {
        		System.out.println(strArray[x]); // aa bb cc
        }
    }
}
```



### String类的练习

#### 拼接字符串
定义一个方法，把数组{1,2,3}按照指定个格式拼接成一个字符串。格式参照如下：[word1#word2#word3]。

```java
public class StringTest1 {
    public static void main(String[] args) {
        //定义一个int类型的数组
        int[] arr = {1, 2, 3};
        //调用方法
        String s = arrayToString(arr);
        //输出结果
        System.out.println("s:" + s);
    }
    /*
    * 写方法实现把数组中的元素按照指定的格式拼接成一个字符串
    * 两个明确：
    * 返回值类型：String
    * 参数列表：int[] arr
    */
    public static String arrayToString(int[] arr) {
        // 创建字符串s
        String s = new String("[");
        // 遍历数组，并拼接字符串
        for (int x = 0; x < arr.length; x++) {
            if (x == arr.length ‐ 1) {
            		s = s.concat(arr[x] + "]");
            } else {
            		s = s.concat(arr[x] + "#");
            }
        }
        return s;
    }
}
```

#### 统计字符个数
键盘录入一个字符，统计字符串中大小写字母及数字字符个数

```java
public class StringTest2 {
    public static void main(String[] args) {
        //键盘录入一个字符串数据
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个字符串数据：");
        String s = sc.nextLine();
        //定义三个统计变量，初始化值都是0
        int bigCount = 0;
        int smallCount = 0;
        int numberCount = 0;
        //遍历字符串，得到每一个字符
        for(int x=0; x<s.length(); x++) {
            char ch = s.charAt(x);
            //拿字符进行判断
            if(ch>='A'&&ch<='Z') {
            		bigCount++;
            }else if(ch>='a'&&ch<='z') {
            		smallCount++;
            }else if(ch>='0'&&ch<='9') {
            		numberCount++;
            }else {
            		System.out.println("该字符"+ch+"非法");
            }
        }
        //输出结果
        System.out.println("大写字符："+bigCount+"个");
        System.out.println("小写字符："+smallCount+"个");
        System.out.println("数字字符："+numberCount+"个");
    }
}
```

## 6.7 static静态

### 概述

关于 `static` 关键字的使用，它可以用来修饰的成员变量和成员方法，被修饰的成员是属于类的，而不是单单是属
于某个对象的。也就是说，既然属于类，就可以不靠创建对象来调用了。

### 定义和使用格式

类变量
当 static 修饰成员变量时，该变量称为类变量。该类的每个对象都共享同一个类变量的值。任何对象都可以更改
该类变量的值，但也可以在不创建该类的对象的情况下对类变量进行操作。

* 类变量：使用 static关键字修饰的成员变量。

定义格式：

```java
static 数据类型 变量名；
```

举例：

```java
static int numberID；
```

比如说，基础班新班开班，学员报到。现在想为每一位新来报到的同学编学号（sid），从第一名同学开始，sid为
1，以此类推。学号必须是唯一的，连续的，并且与班级的人数相符，这样以便知道，要分配给下一名新同学的学
号是多少。这样我们就需要一个变量，与单独的每一个学生对象无关，而是与整个班级同学数量有关。
所以，我们可以这样定义一个静态变量numberOfStudent，代码如下：

```java
public class Student {
  private String name;
  private int age;
  // 学生的id
  private int sid;
  // 类变量，记录学生数量，分配学号
  public static int numberOfStudent = 0;
  public Student(String name, int age){
    this.name = name;
    this.age = age;
    // 通过 numberOfStudent 给学生分配学号
    this.sid = ++numberOfStudent;
    }
  // 打印属性值
  public void show() {
    System.out.println("Student : name=
    " + name + "
    , age=
    " + age + "
    , sid=
    " + sid );
  }
}
public class StuDemo {
  public static void main(String[] args) {
    Student s1 = new Student("张三", 23);
    Student s2 = new Student("李四", 24);
    Student s3 = new Student("王五", 25);
    Student s4 = new Student("赵六", 26);
    s1.show(); // Student : name=张三, age=23, sid=1
    s2.show(); // Student : name=李四, age=24, sid=2
    s3.show(); // Student : name=王五, age=25, sid=3
    s4.show(); // Student : name=赵六, age=26, sid=4
  }
}
```

### 静态方法

当 static 修饰成员方法时，该方法称为类方法 。静态方法在声明中有 static ，建议使用类名来调用，而不需要
创建类的对象。调用方式非常简单。

* 类方法：使用 static关键字修饰的成员方法，习惯称为静态方法。

定义格式：

```java
修饰符 static 返回值类型 方法名 (参数列表){
		// 执行语句
}
```

举例：在Student类中定义静态方法

```java
public static void showNum() {
		System.out.println("num:" + numberOfStudent);
}
```

* 静态方法调用的注意事项：
  * 静态方法可以直接访问类变量和静态方法。
  * 静态方法不能直接访问普通成员变量或成员方法。反之，成员方法可以直接访问类变量或静态方法。
  * 静态方法中，不能使用this关键字。

> 小贴士：静态方法只能访问静态成员。



### 调用格式

被static修饰的成员可以并且建议通过类名直接访问。虽然也可以通过对象名访问静态成员，原因即多个对象均属
于一个类，共享使用同一个静态成员，但是不建议，会出现警告信息。
格式：

```java
// 访问类变量
类名.类变量名；
// 调用静态方法
类名.静态方法名(参数)；
```

调用演示，代码如下：

```java
public class StuDemo2 {
    public static void main(String[] args) {
        // 访问类变量
        System.out.println(Student.numberOfStudent);
        // 调用静态方法
        Student.showNum();
    }
}
```

### 静态原理图解

`static` 修饰的内容：

* 是随着类的加载而加载的，且只加载一次。
* 存储于一块固定的内存区域（静态区），所以，可以直接被类名调用。
* 它优先于对象存在，所以，可以被所有对象共享。

![static原理](image/202005061223.png)

### 静态代码块

* 静态代码块：定义在成员位置，使用static修饰的代码块{ }。
  * 位置：类中方法外。
  * 执行：随着类的加载而执行且执行一次，优先于main方法和构造方法的执行。

格式：

```java
public class ClassName{
    static {
    // 执行语句
    }
}
```

作用：给类变量进行初始化赋值。用法演示，代码如下：

```java
public class Game {
  public static int number;
  public static ArrayList<String> list;
  static {
    // 给类变量赋值
    number = 2;
    list = new ArrayList<String>();
    // 添加元素到集合中
    list.add("张三");
    list.add("李四");
  }
}
```

> 小贴士：
>
> static 关键字，可以修饰变量、方法和代码块。在使用的过程中，其主要目的还是想在不创建对象的情况下，去调用方法。下面将介绍两个工具类，来体现static 方法的便利。



## 6.8 Arrays工具类

### 概述

`java.util.Arrays` 此类包含用来操作数组的各种方法，比如排序和搜索等。其所有方法均为静态方法，调用起来非常简单。

### 操作数组的方法

* `public static String toString(int[] a)` ：返回指定数组内容的字符串表示形式。

```java
public static void main(String[] args) {
    // 定义int 数组
    int[] arr = {2,34,35,4,657,8,69,9};
    // 打印数组,输出地址值
    System.out.println(arr); // [I@2ac1fdc4
    // 数组内容转为字符串
    String s = Arrays.toString(arr);
    // 打印字符串,输出内容
    System.out.println(s); // [2, 34, 35, 4, 657, 8, 69, 9]
}
```

* `public static void sort(int[] a) `：对指定的 int 型数组按数字升序进行排序。

```java
public static void main(String[] args) {
    // 定义int 数组
    int[] arr = {24, 7, 5, 48, 4, 46, 35, 11, 6, 2};
    System.out.println("排序前:"+ Arrays.toString(arr)); // 排序前:[24, 7, 5, 48, 4, 46, 35,11, 6,2]
    // 升序排序
    Arrays.sort(arr);
    System.out.println("排序后:"+ Arrays.toString(arr));// 排序后:[2, 4, 5, 6, 7, 11, 24, 35,46,48]
}
```

### 练习

请使用 `Arrays` 相关的API，将一个随机字符串中的所有字符升序排列，并倒序打印。

```java
public class ArraysTest {
    public static void main(String[] args) {
        // 定义随机的字符串
        String line ="ysKUreaytWTRHsgFdSAoidq";
        // 转换为字符数组
        char[] chars = line.toCharArray();
        // 升序排序
        Arrays.sort(chars);
        // 反向遍历打印
        for (int i = chars.length‐1; i >= 0 ; i‐‐) {
        		System.out.print(chars[i]+" "); // y y t s s r q o i g e d d a W U T S R K H F A
        }
    }
}
```



## 6.9 Math类

### 概述

`java.lang.Math` 类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数。类似这样的工具类，其所有方法均为静态方法，并且不会创建对象，调用起来非常简单。

### 基本运算的方法

* `public static double abs(double a)` ：返回 double 值的绝对值。

```java
double d1 = Math.abs(‐5); //d1的值为5
double d2 = Math.abs(5); //d2的值为5
```

* `public static double ceil(double a) `：返回大于等于参数的最小的整数。

```java
double d1 = Math.ceil(3.3); //d1的值为 4.0
double d2 = Math.ceil(‐3.3); //d2的值为 ‐3.0
double d3 = Math.ceil(5.1); //d3的值为 6.0
```

* `public static double floor(double a) `：返回小于等于参数最大的整数。

```java
double d1 = Math.floor(3.3); //d1的值为3.0
double d2 = Math.floor(‐3.3); //d2的值为‐4.0
double d3 = Math.floor(5.1); //d3的值为 5.0
```

* `public static long round(double a) `：返回最接近参数的 long。(相当于四舍五入方法)

```java
long d1 = Math.round(5.5); //d1的值为6.0
long d2 = Math.round(5.4); //d2的值为5.0
```

### 练习

请使用 Math 相关的API，计算在 -10.8 到 5.9 之间，绝对值大于 6 或者小于 2.1 的整数有多少个？

```java
public class MathTest {
    public static void main(String[] args) {
        // 定义最小值
        double min = ‐10.8;
        // 定义最大值
        double max = 5.9;
        // 定义变量计数
        int count = 0;
        // 范围内循环
        for (double i = Math.ceil(min); i <= max; i++) {
            // 获取绝对值并判断
            if (Math.abs(i) > 6 || Math.abs(i) < 2.1) {
                // 计数
                count++;
            }
        }
        System.out.println("个数为: " + count + " 个");
    }
}
```

