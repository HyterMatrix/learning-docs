---
title: 第二章 数据类型
---

# 数据类型

我们学习变量是为了让计算机能够像人一样去记忆事物的某种状态，而变量的值就是用来存储事物状态的，很明显事物的状态分成不同种类的（比如人的年龄，身高，职位，工资等等），所以变量值也应该有不同的类型，例如

```python
salary = 3.1 # 用浮点型去记录薪资
age = 18 # 用整型去记录年龄
name = 'lili' # 用字符串类型去记录人名
```

## 1. 数字 number

### 整型

#### 作用

用来记录人的年龄，出生年份，学生人数等整数相关的状态

#### 定义

```python
age=18
birthday=1990
student_count=48
```

### 浮点型

#### 作用

用来记录人的身高，体重，薪资等小数相关的状态

#### 定义

```python
height=173
weight=103.5
salary=15000.89
```

### 数字类型的使用

1 、数学运算

```python
>>> a = 1
>>> b = 3
>>> c = a + b
>>> c
4
```

2、比较大小

```python
>>> x = 10
>>> y = 11
>>> x > y
False
```

## 2. 字符串 str

### 作用

用来记录人的名字，家庭住址，性别等描述性质的状态

### 定义

```python
name = 'Tony'
address = '上海市浦东新区'
sex = '男'
```

用单引号、双引号、多引号，都可以定义字符串，本质上是没有区别的，但是

```python
#1、需要考虑引号嵌套的配对问题
msg = "My name is Tony , I'm 18 years old!" #内层有单引号，外层就需要用双引号
#2、多引号可以写多行字符串
msg = '''
        天下只有两种人。比如一串葡萄到手，一种人挑最好的先吃，另一种人把最好的留到最后吃。
        照例第一种人应该乐观，因为他每吃一颗都是吃剩的葡萄里最好的；第二种人应该悲观，因为他每吃一颗都是吃剩的葡萄里最坏的。
        不过事实却适得其反，缘故是第二种人还有希望，第一种人只有回忆。
      '''
```

### 使用

```python
数字可以进行加减乘除等运算，字符串呢？也可以，但只能进行"相加"和"相乘"运算。
>>> name = 'tony'
>>> age = '18'
>>> name + age #相加其实就是简单的字符串拼接
'tony18'
>>> name * 5 #相乘就相当于将字符串相加了5次
'tonytonytonytonytony'
```

## 3. 布尔值 bool

### 1. 作用

用来记录真假这两种状态

### 2. 定义

```python
>>> is_ok = True
>>> is_ok = False
```

### 3. 使用

```python
通常用来当作判断的条件，我们将在if判断中用到它
```

## 4. 空值 None

## 5. 列表 list

### 5.1 作用

如果我们需要用一个变量记录多个学生的姓名，用数字类型是无法实现，字符串类型确实可以记录下来，比如

stu_names='张三 李四 王五'，但存的目的是为了取，此时若想取出第二个学生的姓名实现起来相当麻烦，而列表类型就是专门用来记录多个同种属性的值（比如同一个班级多个学生的姓名、同一个人的多个爱好等），并且存取都十分方便

### 5.2 定义

```python
>>> stu_names=['张三','李四','王五']
```

### 5.3 类型转换

```python
>>> list('hello')
```



### 5.4 列表的操作

可对列表执行所有的标准序列操作。

```python
# 1、列表类型是用索引来对应值，索引代表的是数据的位置，从0开始计数
>>> stu_names=['张三','李四','王五']
>>> stu_names[0] 
'张三'
>>> stu_names[1]
'李四'
>>> stu_names[2]
'王五'
# 2、列表可以嵌套，嵌套取值如下
>>> students_info=[['tony',18,['jack',]],['jason',18,['play','sleep']]]
>>> students_info[0][2][0] #取出第一个学生的第一个爱好
'play'
```

#### 5.4.1 修改列表：给元素赋值

使用索引给特定位置的元素赋值

```python
>>> x = [1, 1, 1]
>>> x[1] = 2
>>> x
[1, 2, 1]
```

#### 5.4.2 删除元素

使用`del`语句删除元素

```python
>>> name = ['Alice', 'Beth', 'Cecil']
>>> del name[1]
>>> name 
['Alice', 'Cecil']
```

#### 5.4.3 切片

```python
>>> name = list('Perl')
>>> name
['P', 'e', 'r', 'l']
>>> name[2:] = list('ar')
>>> name
['P', 'e', 'a', 'r']
```

从上述代码可知，通过使用切片赋值，可将切片替换为长度与其不同的序列

```python
>>> name = list('Perl')
>>> name[1:] = list('ython')
>>> name
['P', 'y', 't', 'h', 'o', 'n']
```

使用切片赋值还可在不替换原有元素的情况下`插入`新元素

```python
>>> numbers = [1,5]
>>> numbers[1:1] = [2, 3, 4]
>>> numbers
[1, 2, 3, 4, 5]
```

在这里，替换了一个空切片，相当于插入了一个序列。同理，你可以采取相反的措施来删除

```python
>>> numbers
[1, 2, 3, 4, 5]
>>> numbers[1:4] = []
>>> numbers
[1, 5]
```

上述代码与`del number[1:4]` 等效。

### 5.5 列表的方法

>方法是与对象（列表、数、字符串等）联系紧密的函数。通常如下调用

```python
object.method(arguments)
```

方法的调用与函数的调用很像，只是在方法名前加上了对象和句号。

#### 5.5.1 apped

> 将一个对象附加到列表末尾

```python
>>> lst = [1, 2, 3]
>>> lst.append(4)
>>> lst
[1, 2, 3, 4]
```

​	**注意** 与其他几个类似的方法一样，append是就地修改列表。意味着它不会返回新列表，而是直接修改就列表。

#### 5.5.2 clear

清空列表的内容

```python
>>> lst = [1, 2, 3]
>>> lst
[1, 2, 3]
>>> lst.clear()
>>> lst
[]
```

这类似于切片赋值语句`lst[:]=[]`。

#### 5.5.3 copy

> 复制列表

常规复制只是将一个名称关联到列表。

```python
>>> a = [1, 2, 3]
>>> b = a
>>> b[1] = 4
>>> a
[1, 4, 3]
```

要让a和b指向不同的列表，就必须将a关联到b的副本

```python
>>> a = [1, 2, 3]
>>> b = a.copy()
>>> b[1] = 4
>>> a
[1, 2, 3]
```

但是，这个复制也不是完全不同的，假如列表中存在可变类型。

```python
>>> a = [1, 2, [1,2,3]]
>>> b = a.copy()
>>> b[2][1] = 4
>>> a
[1, 2, [1, 4, 3]]
```

这里，在列表a中可变类型也是列表，在a中存储的是指向这个列表的地址。所以b中修改了这个列表，a指向的这个地址的值也是变化的。



#### 5.5.4 count

> 计算指定元素在列表中出现的次数

```python
>>> ['to', 'be', 'or', 'not', 'to', 'be'].count('to')
2
>>> x = [[1, 2], 1, 1, [2, 1, [1, 2]]]
>>> x.count(1)
2
>>> x.count([1, 2])
1
```



#### 5.5.5 extend

> 同时将多个值附加到列表末尾，换而言之，就是用一个列表来扩展另一个列表。

```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a.extend(b)
>>> a
[1, 2, 3, 4, 5, 6]
```

这里看起来像是拼接，但是有个很重要的区别，就是`extend`是修改了原有的序列（这里是a）,而拼接式是返回一个新的序列，而原序列不做变更

```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a + b
[1, 2, 3, 4, 5, 6]
>>> a
[1, 2, 3]
```

当然拼接可以实现和`extend`类似的效果，但是效率就低一些了。

```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a = a + b
>>> a
[1, 2, 3, 4, 5, 6]
```

上述拼接操作并不是修改了a的值，而是重新赋值，即它不会修改原来的列表。要获得与`extend`相同的效果，可以将列表赋值切片：

```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> a[len(a):] = b
>>> a
[1, 2, 3, 4, 5, 6]
```

可行，但可读性不高。



#### 5.5.6 index

> 在列表中查找指定值第一次出现的索引

```python
>>> knights = ['We', 'are', 'the', 'knights', 'who', 'say', 'ni']
>>> knights.index('who')
4
>>> knights.index('herring')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: 'herring' is not in list
```

搜索单词`who`时，发现它在索引4处

```python
>>> knights[4]
'who'
```

然后，搜索`herring`时候发现了异常，因为根本就没有找到这个单词，说明找不到单词时候，会发生异常。



#### 5.5.7 insert

> 用于将一个对象插入列表。

```python
>>> numbers = [1, 2, 3, 5, 6, 7]
>>> numbers.insert(3, 'four')
>>> numbers
[1, 2, 3, 'four', 5, 6, 7]
```

和`extend`一样，也可以使用切片赋值来获得与`insert`一样的效果

```pyt
>>> numbers = [1, 2, 3, 5, 6, 7]
>>> numbers[3:3] = ['four']
>>> numbers
[1, 2, 3, 'four', 5, 6, 7]
```

但是可读性没有`insert`好。



#### 5.5.8 pop

从列表中删除一个元素（末尾为最后一个元素），并返回这一元素。

```python
>>> x = [1, 2, 3]
>>> x.pop()
3
>>> x
[1, 2]
>>> x.pop(0)
1
>>> x
[2]
```

**注意** `pop` 是唯一既修改列表又返回一个非None值的列表方法。

使用pop可实现一种常见的数据结构 ---- 栈 



5.5.9 remove

> 用于删除第一个为指定值的元素

```python
>>> x = ['to', 'be', 'or', 'not', 'to', 'be']
>>> x.remove('be')
>>> x
['to', 'or', 'not', 'to', 'be']
>>> x.remove('bee')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: list.remove(x): x not in list
```

只是删除指定值的第一个元素，请注意，`remove`是就地修改且不返回值的方法之一。



#### 5.5.10 reverse

> 按相反的顺序排列列表中的元素

```python
>>> x = [1, 2, 3]
>>> x.reverse()
>>> x
[3, 2, 1]
```

`reverse`修改列表，但不返回任何值



#### 5.5.11 sort

> 对列表做顺序排序。

```python
>>> x = [4, 6, 5, 1, 3, 2]
>>> x.sort()
>>> x
[1, 2, 3, 4, 5, 6]
```



#### 5.5.12 高级排序

> 方法`sort`接受两个可选参数： `key` 和`reverse`。 这两个参数通常是按名称指定，称为关键字。

具体待续



## 6. 元组 tuple

与列表一样，元组也是序列，唯一的差别就是元组是`不可修改`的。其实就是不可变的列表（list）。

元组的语法很简单，只要将一些值用逗号分隔，就能自动创建一个元组

```python
>>> 1, 2, 3
(1, 2, 3)
```



## 7. 字典 dict

### 作用

如果我们需要用一个变量记录多个值，但多个值是不同属性的，比如人的姓名、年龄、身高，用列表可以存，但列表是用索引对应值的，而索引不能明确地表示值的含义，这就用到字典类型，字典类型是用key：value形式来存储数据，其中key可以对value有描述性的功能

### 定义

```python
>>> person_info={'name':'tony','age':18,'height':185.3}
```

### 使用

```python
# 1、字典类型是用key来对应值，key可以对值有描述性的功能，通常为字符串类型
>>> person_info={'name':'tony','age':18,'height':185.3}
>>> person_info['name']
'tony'
>>> person_info['age']
18
>>> person_info['height']
185.3
# 2、字典可以嵌套，嵌套取值如下
>>> students=[
... {'name':'tony','age':38,'hobbies':['play','sleep']},
... {'name':'jack','age':18,'hobbies':['read','sleep']},
... {'name':'rose','age':58,'hobbies':['music','read','sleep']},
... ]
>>> students[1]['hobbies'][1] #取第二个学生的第二个爱好
'sleep'
```



## 8. 集合 set

