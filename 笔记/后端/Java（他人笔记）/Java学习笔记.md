# Java学习笔记

## 一.java的诞生

### 1.1C&C++

**1972年C诞生**

- 贴近硬件，运行极快，效率极高
- 操作系统，编译器，数据库，网络系统
- 指针和内存管理

**1982年C++诞生**

- 面向对象
- 兼容C
- 图形领域，游戏等

**c++的缺点**

C++和可用的API在某些方面存在很大的问题。而且使用的是嵌入式平台，可用的系统资源极其有限。并且C++太复杂，以致很多开发者经常错误使用。而且C++缺少垃圾回收系统、可移植性、分布式和多线程等功能。

### 1.2java的发展史

[参考：java的简介与发展史](https://blog.csdn.net/ryankky/article/details/110084149?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control)

- 1995年，Sun推出了Java。

- 1996年年初Sun发布了JDK1.0：运行环境（即JRE）和开发环境（即JDK）.

运行环境包括核心API、集成API、用户界面API、发布技术、Java虚拟机（JVM）5个部分;

开发环境包括编译Java程序的编译器（即Javac命令）。

- 1997年2月18日Sun发布了JDK1.1。JDK1.1增加了JIT（即时编译）编译器。

- 1998年12月，Sun发布了Java历史上最重要的JDK版本：JDK1.2，伴随着JDK1.2一同发布的还有JSP/Servlet、EJB等规范，并将Java分成J2EE、J2SE和J2ME三个版本。

J2ME：主要用于控制移动设备和信息家电等有限存储的设备。

J2SE：整个Java技术的核心和基础，它是J2ME、J2EE编程的基础，

J2EE：Java技术中应用最广泛的部分，J2EE提供了企业应用开发相关的完整解决方案。

这标志着Java已经吹响了向企业、桌面和移动三个领域进军的号角，标志着Java已经进入Java2时代，这个时期也是Java飞速发展的时期。

不仅如此，JDK1.2还把它的API分成了三类。

核心API：由Sun公司制定的基本的API，所有的Java平台都应该提供。这就是平常所说的Java核心类库。

可选API：这是Sun为JDK提供的扩充API，这些API因平台的不同而不同。

特殊API：用于满足特殊要求的API。如用于JCA和JCE等第三方加密类库。

- 2002年，Sun发布了JDK历史上最成熟的版本：JDK1.4成为发展最快的一个JDK版本。JDK1.4已经可以使用Java实现大多数的应用了。

涌现出大量基于java语言的开源框架 ：Struts、WebWork、Hibernate、Spring等；

大量企业应用服务器也开始涌现：WebLogic、WebSphere、JBoss等

- 2004年10月，Sun发布了万众期待的JDK1.5,同时，Sun将JDK1.5改名为Java SE5.0，J2EE、J2ME也相应地改名为Java EE和Java ME。

- 2006年12月，Sun公司发布了JDK1.6(也被称为Java EE 6)。一直以来，Sun公司维持着大约2年发布一次JDK新版本的习惯。

- 2009年4月20日，Oracle宣布将收购Sun公司。Sun倒下了，不过Java的大旗依然猎猎作响。
- 2011年7月28日，Oracle公司终于"如约" 发布了 Java SE 7

- 2014年3月18日，Oracle公司发不了Java SE8,这次版本升级为Java带来了全新的Lambda表达式、流式编程等大量新特性，这些新特性使得Java变得更加强大。

- 2017年9月22日，Oracle公司发布了Java SE 9，这次版本升级强化了Java的模块化系统，让庞大的Java语言更轻量化，而且采用了更高效、更智能的GI 垃圾回收器，并在核心类库上进行了大量更新，可以进一步简化编程；但对语法本身更新并不多（毕竟Java语言已经足够成熟）

### 1.3java的特性和优势

简单性，面向对象，可移植性，高性能，分布式，动态性，多线程，安全性，健壮性

### 1.4java的三大版本

- javaSE：标准版（桌面程序，程序台开发。。）

- javaME：嵌入式开发（手机，小家电。。）--基本淘汰

- javaEE：E企业级开发（web端，服务器开发。。）

### 1.5JDK,JRE,JVM

JDK：Java Development Kit

JRE：Java Runtime Envirment

JVM：Java Virtual Machine

Jvm用于在不同的系统上模拟cpu工作，从而屏蔽了底层系统的区别，实现了java的跨平台应用

![](https://img2018.cnblogs.com/blog/1362965/201901/1362965-20190114161305916-1522316322.png)

### 1.6Java程序运行机制

- 编译型：先把整个程序编译一下，再执行

- 解释型：边执行边翻译

**Java程序运行机制**

![](http://c.biancheng.net/uploads/allimg/190904/5-1ZZ41409331Y.png)

Java源文件到class文件是编译型即预编译

class由java解释器一步步翻译给jvm运行是解释型

所以**java程序运行是编译型和解释型共存的**

---

## 二.Java基础语法

### 2.1关键字和标识符

| [abstract](https://baike.baidu.com/item/abstract)     | [assert](https://baike.baidu.com/item/assert)             | [boolean](https://baike.baidu.com/item/boolean)     | break                                                 | [byte](https://baike.baidu.com/item/byte)     |
| ----------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
| case                                                  | [catch](https://baike.baidu.com/item/catch)               | [char](https://baike.baidu.com/item/char)           | [class](https://baike.baidu.com/item/class)           | const                                         |
| continue                                              | [default](https://baike.baidu.com/item/default)           | [do](https://baike.baidu.com/item/do)               | [double](https://baike.baidu.com/item/double)         | [else](https://baike.baidu.com/item/else)     |
| [enum](https://baike.baidu.com/item/enum)             | [extends](https://baike.baidu.com/item/extends)           | [final](https://baike.baidu.com/item/final)         | [finally](https://baike.baidu.com/item/finally)       | float                                         |
| [for](https://baike.baidu.com/item/for)               | goto                                                      | [if](https://baike.baidu.com/item/if)               | [implements](https://baike.baidu.com/item/implements) | [import](https://baike.baidu.com/item/import) |
| [instanceof](https://baike.baidu.com/item/instanceof) | [int](https://baike.baidu.com/item/int)                   | [interface](https://baike.baidu.com/item/interface) | long                                                  | native                                        |
| new                                                   | [package](https://baike.baidu.com/item/package)           | [private](https://baike.baidu.com/item/private)     | [protected](https://baike.baidu.com/item/protected)   | [public](https://baike.baidu.com/item/public) |
| [return](https://baike.baidu.com/item/return)         | [strictfp](https://baike.baidu.com/item/strictfp)         | [short](https://baike.baidu.com/item/short)         | [static](https://baike.baidu.com/item/static)         | [super](https://baike.baidu.com/item/super)   |
| [switch](https://baike.baidu.com/item/switch)         | [synchronized](https://baike.baidu.com/item/synchronized) | [this](https://baike.baidu.com/item/this)           | [throw](https://baike.baidu.com/item/throw)           | throws                                        |
| [transient](https://baike.baidu.com/item/transient)   | try                                                       | [void](https://baike.baidu.com/item/void)           | [volatile](https://baike.baidu.com/item/volatile)     | [while](https://baike.baidu.com/item/while)   |

- 所有的标识符都应该以字母（A-Z或者a-z），美元符（$），或者下划线（_）开始
- 首字符之后可以是字母，美元符，下划线或数字的任何组合
- 不能使用关键字作为变量名或方法名
- 标识符是大小写敏感的

### 2.2数据类型

java是一个**强类型语言**，所有的变量都必须先定义再使用

#### 2.2.1类型分类

java的数据类型分为两大类型：基本类型（Primitive type），引用类型（reference type）

**基本类型**

byte：1字节，8位，最大存储数据量是255，存放的数据范围是-128~127之间。

short：2字节，16位，最大数据存储量是65536，数据范围是-32768~32767之间。

int：4字节，32位，最大数据存储容量是2的32次方减1，数据范围是负的2的31次方到正的2的31次方减1。

long：8字节，64位，最大数据存储容量是2的64次方减1，数据范围为负的2的63次方到正的2的63次方减1。

float：4字节，32位，数据范围在3.4e-45~1.4e38，直接赋值时必须在数字后加上f或F。--最好完全避免使用浮点数进行比较。

double：8字节，64位，数据范围在4.9e-324~1.8e308。

boolean：占1位，只有true和false两个取值。

char：2字节，16位，存储Unicode码，用单引号赋值。

**引用类型**

类，接口，数组等

#### 2.2.2类型转换

![](https://images2015.cnblogs.com/blog/693250/201610/693250-20161027211248046-1432503241.png)

- 不要在 boolean 类型与任何数值类型之间进行强制类型转换， 这样可以防止 发生错误

#### 2.2.3[String类](https://www.runoob.com/java/java-string.html)

- 拥有很多可以操作字符串的方法

- 字符串不是字符型数组； Java 字符串大致类似于 char* 指针，char* greeting = "Hello";

- 一定不要使用==运算符检测两个字符串是否相等！如果字符串放置在同一个位置上， 它们必然相等。但是， 完全有可能将内容相同的多个字符串的拷贝放置在不同的位置上。可以使用 equals 方法检测两个字符串是否相等。

### 2.3转义字符

| 转义字符 | 意义                                    | ASCII码值（十进制） |
| -------- | --------------------------------------- | ------------------- |
| \b       | 退格(BS) ，将当前位置移到前一列         | 008                 |
| \f       | 换页(FF)，将当前位置移到下页开头        | 012                 |
| **\n**   | **换行(LF) ，将当前位置移到下一行开头** | 010                 |
| **\r**   | **回车(CR) ，将当前位置移到本行开头**   | 013                 |
| **\t**   | **水平制表(HT) （跳到下一个TAB位置）**  | 009                 |
| \v       | 垂直制表(VT)                            | 011                 |
| **\\**   | **代表一个反斜线字符''\'**              | 092                 |
| **\'**   | **代表一个单引号（撇号）字符**          | 039                 |
| **\"**   | **代表一个双引号字符**                  | 034                 |
| \0       | 空字符(NULL)                            | 000                 |
| \ddd     | 1到3位八进制数所代表的任意字符          | 三位八进制          |
| \uhhhh   | 1到2位十六进制所代表的任意字符          | 二位十六进制        |

### 2.4变量，常量，作用域

#### 2.4.1变量

- 变量是一个容器
- 每一个变量必须声明其类型，且必须是合法标识符
- java变量是程序中最基本的存储单元，其要素包括变量名，变量类型和作用域

#### 2.4.2常量

初始化后就不能改变，声明时加final

#### 2.4.3作用域

类变量：声明时加static，声明在类里面，方法外面，在类所在的包都可以使用

实例变量：声明在类里面，方法外面，即类的属性域

局部变量：声明在方法中，只能在声明的方法中才能使用

#### 2.4.4变量的命名规范

- 所有变量，方法，类名：见名知意
- 类成员变量：首字母小写和驼峰原则：monthSalary
- 局部变量：首字母小写和驼峰原则
- 常量：大写字母和下划线：MAX_VALUE
- 类名：首字母大写和驼峰原则
- 方法名：首字母小写和驼峰原则

### 2.5基本运算符

#### 2.5.1[基本运算符和优先级](https://blog.csdn.net/qq_42540547/article/details/102946048)

**1.算术运算符**

![](https://img-blog.csdnimg.cn/20191107012719578.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNTQwNTQ3,size_16,color_FFFFFF,t_70)

**2.赋值运算符**

| 运算符 | 描述 |
| ------ | ---- |
| =      | 赋值 |
| +=     | 加等 |
| -=     | 减等 |
| *=     | 乘等 |
| /=     | 除等 |
| %=     | 模等 |

**3.关系运算符**

| 运算符 | 描述     |
| ------ | -------- |
| >      | 大于     |
| >=     | 大于等于 |
| <      | 小于     |
| <=     | 小于等于 |
| ==     | 等于     |
| ！=    | 不等于   |

**4.逻辑运算符**

| 运算符 | 描述   |
| ------ | ------ |
| &      | 按位与 |
| l      | 按位或 |
| ^      | 异或   |
| ！     | 非     |
| &&     | 短路与 |
| ll     | 短路或 |

**5.移位运算符**

| 运算符 | 描述                         |
| ------ | ---------------------------- |
| <<     | 左移                         |
| >>     | 右移                         |
| &      | 按位与                       |
| l      | 按位或                       |
| ^      | 按位异或（相同为0，不同为1） |
| ~      | 按位取反                     |

#### 2.5.2Math类

拥有很多工程运算所需的计算方法和常量

#### 2.5.3三元运算符

Java 支持三元操作符？：condition ? expressioni : expressio。如果条件为 true, 就为第一个表达式的值，否则计算为第二个表达式的值。

#### 2.5.4字符串连接符+

```java
public class StreamTest {
    public static void main(String[] args) {
        int a=10;
        int b=20;
        System.out.println("aaaa"+a+b);
        System.out.println(a+b+"aaaa");
    }
}
```

**结果**

> aaaa1020
> 30aaaa

+放在“ ”前面会计算，放“ ”后面只是连接

#### 2.5.5运算符的优先级

可以但没必要记，使用（）不影响程序而且可读性高

---

### 2.6包机制

- 包的本质就是一个文件夹，用于区别类名的命名空间
- 语法：package [包名]；
- 一般利用公司域名倒置作为包名：com.baidu.www
- 导包用import [包名];  程序中import必须在package的下面，加.*是指加入这个包目录下的所有包类

### 2.7[JavaAPI帮助文档](https://docs.oracle.com/javase/8/docs/api/)

JavaDoc是一种将注释生成HTML文档的技术，生成的HTML文档类似于Java的API，易读且清晰明了。在简略介绍JavaDoc写法之后，再看一下在Intellij Idea 中如何将代码中的注释生成HTML文档。

[如何使用IDEA生成JavaDoc文档](https://blog.csdn.net/weixin_42140580/article/details/89635775)

## 三.流程控制

### 3.1[Scanner对象](https://blog.csdn.net/qq_40164190/article/details/81917208)

java.util.Scanner，我们可以通过Scanner类来获取用户的输入

---

* **next() nextLine()**

**next()** 接收的是字符串。首先要读取到有效字符，这里将**空格**或者**回车符**看做是两个字符串的间隔 ，作为**结束符**，且**不读取回车符**，以上的int到Boolean都是用空格作为间隔。

**nextLine()** 接收的是字符串。空格也是字符串的一部分 , **以Enter为结束符**，**且读取回车符**，也就是说 nextLine()方法返回的是输入回车之前的所有字符。

---

- **hasNext() hasNextLine()**

**hasNext()**: 方法会判断接下来是否有非空字符.如果有,则返回true,否则返回false
**hasNextLine()**: 方法会根据行匹配模式去判断接下来是否有一行(包括空行),如果有,则返回true,否则返回false

---

**示例：**

```java
        //创建一个扫描器对象，用于接收键盘数据
        Scanner scanner = new Scanner(System.in);
        System.out.println("使用next方法接收:");
        //判断用户有没有输入字符串
        if(scanner.hasNext()){
            //使用next接收
            String str=scanner.next();
            System.out.println(str);
        }
        
        //凡是属于IO流的类如果不关闭会一直占用资源
        scanner.close();
```

### 3.2流程结构

#### 3.2.1基本结构

- 顺序结构

- 选择结构 if ，Switch
- 循环结构While，DoWhile，For

#### 3.2.2增强for循环

for each 循环

for (int element : a) System.out.println(element)；打印数组 a 的每一个元素，一个元素占一行。for each 循环语句不能自动处理二维数组的每一个元素。它是按照行， 也就是一维 教组处理的

#### 3.2.3break，continue，goto

- break :跳出当前循环；但是如果是嵌套循环，则只能跳出当前的这一层循环，只有逐层break才能跳出所有循环；

- continue:终止当前循环，但是不跳出循环（在循环中continue后面的语句是不会执行了），继续往下根据循环条件执行循环。

- java中goto即是一种带标签的continue和break，可以用来跳出多层循环（不能跳入），具体用法参考[博客](https://www.cnblogs.com/woaixingxing/p/6394952.html)

## 四.方法

### 4.1概述

Java方法是语句的集合，它们在一起执行一个功能。

- 方法是解决一类问题的步骤的有序组合

- 方法包含类或对象中

- 方法在程序中被创建，在其他地方被引用

类似其他语言的函数

```
修饰符 返回值类型 方法名(参数类型 参数名){

方法体

return 返回值;

}
```

### 4.2形参实参

- 形参出现在**函数定义**中，在整个函数体内都可以使用，离开该函数则不能使用。
- 实参出现在**主调函数中，进入被调函数后，实参变量也不能使用**。 

- 形参和实参的功能是作数据传送。发生函数调用时，**主调函数把实参的值传送给被调函数的形参从而实现主调函数向被调函数的数据传送**。

### 4.3方法的重载

- 重载就是在一个类中，有相同的函数名称，但是形参不同的函数



**方法重载的规则**

- 方法名必须相同
- 参数列表必须不同（个数不同，或类型不同，或排列顺序不同等）
- 方法的返回类型可以相同也可以不同
- 仅仅返回类型不同不足以成为方法的重载



**实现理论：**

方法名相同时，编译器会根据调用方法的参数个数，参数类型等去匹配对应的方法，如果匹配失败，则编译器包错。

### 4.4可变参数

-  JDK1.5开始，java支持传递同类型的可变参数给一个方法

- 在方法声明中，在指定参数类型后加一个省略号（...）

- 一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通的参数都必须在它之前声明。

**例子**

```java
public static double max (double... values) 
{ 
double largest = Double.NECATIVEJNFINITY; 
for (double v : values) if (v > largest) largest = v;
 return largest;
 }

```

可以像下面这样调用这个方法： double m = max(3.1, 40.4, -5);

编译器将 new double[ ] {3.1, 40.4,-5} 传递给 max 方法。

### 4.5命令行参数

每一个 Java 应用程序都有一个带 String arg[]参数的 main 方法。这个参数表明 main 方法将接收一个字符串数组， 也就是命令行参数

```java
public class Message 
{ 
public static void main(String[] args) 
{ 
if (args.length = 0 11 args[0].equals(" _h")) 
System.out.printCHello,")；
 else if (args[0].equa1s("-gM))
 System.out.print("Goodbye ,")；
 // print the other command-line arguments
 for (int i = 1; i < args.length; i ++)
System.out.print(" " + args[i]);
System•out.println("!")
}
}
```

如果使用下面这种形式运行这个程序：

>  java Message -g cruel world args 

数组将包含下列内容: 

> args[0]：“-g”
>
>  args[l] ："cruel"
>
> args[2]： "world"

 这个程序将显示下列信息: 

> Goodbye, cruel world!

### 4.6[递归](https://www.cnblogs.com/cainiao-chuanqi/p/11320972.html)

递归就是一个方法调用自己.

具体来讲就是把规模大的问题转化为规模小的相似的子问题来解决。在函数实现时，因为解决大问题的方法和解决小问题的方法往往是同一个方法，所以就产生了函数调用它自身的情况。另外这个解决问题的函数必须有明显的结束条件，这样就不会产生无限递归的情况了。

递归结构分为两个部分：

- 递归头：什么时候不调用自身方法。如果没有头，将陷入死循环。

- 递归体：什么时候需要调用自身方法。

**递归的一般公式**

```java
func( mode){
    if(endCondition){      //递归出口
          end;
    }else{
         func(mode_small)  //调用本身，递归
    }
}
```

**递归会造成大量的栈空间浪费，调用层数到一定量级会造成程序崩溃，所以能不用递归就不用递归**

## 五.数组

### 5.1什么是数组

- 数组是相同类型数据的有序集合，一块连续的内存空间
- 数组描述的是相同类型的若干个数据，按照一定的先后次序排列组合而成
- 其中，每一个数据称作一个数组元素，每一个数组元素可以通过一个下标来访问它们

### 5.2数组的声明

#### 5.2.1数组声明和创建

两种声明方法：

- 数据类型[] 变量名;

- 数据类型 变量名[];

创建一个数组对象：

- 变量名=new 数据类型[大小];//在堆中分配了一个内存空间

![](https://sslcdn6190.hnpet.net/wp-content/uploads/2020/09/java1.jpg?cdnhost=zzzjtd__com__cdn6190&)

#### 5.2.2为什么基本数据类型不需要分配空间？

- Java中有8种基本数据类型boolean、byte、short、char、int、flaot、long、double，基本数据类型作为Java语言的一部分，但基本数据类型不是对象，基本数据类型放在堆栈中，对象放在堆中。堆的读写速度远不及栈，如果使用基本数据类型相当于在栈上进行操作，对变量的创建和销毁速度非常快。相反，如果用类进行定义变量，需要在堆中进行操作，创建和销毁速度都比较慢。

- 出于性能方面的考量，为了提高性能这样做是合理的。但有些地方必须用到对象，基本数据类型不是对象，怎么办呢？Java针对每种基本数据类型提供了包装类，即Boolean、Byte等。这样就解决了基本数据类型[面向对象](https://www.baidu.com/s?wd=面向对象&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLuj0LmH0suWbsmvu9uHDs0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3En10YnWT3PWR1nHmYn16vPWfY)用的问题。

- 同时，也正是包装类的使用，说明Java是一种纯OO的语言。

- 假设想定义一个整型数组列表。而**尖括号中的类型参数不允许是基本类型**，也就是说， 不允许写成 ArrayList<int>。这里就用到了 Integer 对象包装器类。我们可以声明一个 Integer 对象的数组列表。 ArrayList<integer> list = new ArrayList<>()；

### 5.3数组的四个基本特点

- 其长度是确定的，数组一旦被创建，它的大小就是不可以改变的。
- 其元素必须是相同类型，不允许出现混合类型
- 数组中的元素可以是任何数据类型，包括基本类型和引用类型
- 数组变量属引用类型，数组也可以看成是对象，数组中的每个元素相当于该对象的成员变量。数组本身就是对象，java中对象是在堆中的，因此数组无论是原始类型的还是其他对象类型的，其对象都是在堆中的。

### 5.4数组的使用

- 在 Java 中，允许将一个数组变量拷贝给 另一个数组变量。这时， 两个变量将引用同 一个数组对象。其实就是指针指向一个地方

- **Java 中的 [ ] 运算符被预定义为检查数组边界，而且没有指针运算， 即不能通过 a 加 1 得到数组的下一个元素。**
- FOR-EACH循环，for循环
- 数组也可以作为方法的参数和返回值
- 有个更加简单的方式打印数组中的所有值， 即利用 Arrays 类的 toString 方法。 调 用 Arrays.toString(a), 返回一个包含数组元素的字符串，这些元素被放置在括号内， 并 用逗号分隔， 例如，“ [2,3,5,7，11，13] ” 

### 5.5二维数组

二维数组声明

```java
	int[][] a={
			{16, 3, 2, 13},
			{5, 10, 11, 8},
			{9, 6, 7, 12},
	        {4, 15, 14, 1}
			};
```

快速地打印一个二维数组的数据元素列表System.out.println(Arrays.deepToString(a));

### 5.6Arrays类

包含操作数组的各种方法，我们可以直接调用

[Java数组常用的三个方法](https://blog.csdn.net/weixin_44580492/article/details/106157685)

## 六.类和对象

### 6.1面向对象&面向过程

**面向过程思想**

- 步骤清晰简单，第一步，第二步。。

- 面对过程适合处理一些较为简单的问题

**面向对象思想**

- 物以类聚，分类的思维模式，思考问题首先会解决问题需要哪些分类，然后对这些分类进行单独思考。最后，才对某个分类下的细节进行面向过程的思索。

- 面向对象适合处理复杂问题，适合处理需要多人协作的问题！

> 对于描述复杂的事物，为了从宏观上把握，从整体上合理分析，我们需要使用面向对象的思路来分析整个系统。但是，具体到微观操作，仍然需要面向过程的思维去处理，所以面向过程和面向对象是不可分割的。

面向对象编程的本质就是：以类的方式组织代码，以对象的组织（封装）数据。

- **三大特性：封装，继承，多态。**

### 6.2类和对象简介

#### 6.2.1概述

- 类包括属性和方法。

- 从认识论的角度考虑是先有对象后有类。对象，是具体的事务。类，是抽象的，是对对象的抽象

- 从代码运行的角度考虑是先有类后有对象。类是对象的模板，对象是类的实例。

- 变量不是对象，变量是对像的引用

  一定要认识到： 一个对象变量并没有实际包含一个对象，而仅仅引用一个对象。

  任何对象变量的值都是对存储在另外一个地方的一个对象的引用。

#### 6.2.2类和对象的创建

**对类的定义**

```java
class 类名称 {
         属性 (变量) ;
         行为 (方法) ;
}
```

**对象的实例化**

（1）格式一：声明并实例化对象

```java
类名称 对象名称 = new 类名称 () ;1
```

（2）格式二：先声明对象，然后实例化对象：

```java
类名称 对象名称 = null ;
对象名称 = new 类名称 () ;
```

### 6.3类的属性

#### 6.3.1静态域

- 如果将域定义为 static, （”全局变量”）每个类中只有一个这样的域。而每一个对象对于所有的实例域 却都有自己的一份拷贝。如每一个雇员对象都有一个自己的 id 域， 但这个类的所有实例将共享一个 iiextld 域。即使没有一个雇员对象， 静态域 nextld 也存在。它属于类，而不属于任何 独立的对象，**静态域是和类一起加载的**。
- Static关键字的解读：属于类且不属于类对象的变量和函数。

### 6.4类的方法

#### 6.4.1静态方法

- 静态方法。不能向对象实施操作，操作时没有隐式参数。可以认为静态方法是没有有this 参数的方法（在一给非静态的方法中，this 参数表示这个方法的显式参数。静态方法不能访问**实例域**，但是能访问**静态域**

- 在下面两种情况下使用静态方法：

​       一方法不需要访问对象状态，其所需参数都是通过显式参数提供

​       一个方法只需要访问类的静态域

### 6.5构造器

#### 6.5.1概述

- 使用new关键字创建对象的时候，除了分配内存空间外，还会给创建好的对象进行默认的初始化以及对类中构造器的调用。

- 类中的构造器也称为构造方法，是在进行创建对象的时候必须要调用的。并且构造器有以下特点：

​         1.必须和类的名字相同

​         2.必须没有返回类型，也不能写void

​         3.即使一个类什么都不写，它也会有一个默认构造方法

#### 6.5.2构造器重载

- 一个类可以拥有多个构造器，不同的构造器的方法标签也不同。

- 请记住，仅当类没有提供任何构造器的时候，系统才会提供一个默认的构造器。如果类中提供了至少一个构造器， 但是没有提供无参数的构造器，则在构造对象时如果 没有提供参数就会被视为不合法。

### 6.6类和对象内存分配详解

**描述：**

一.当Person p1 = new Person();第一次被调用时需要做两件事：
        1.先判断类加载器是否加载过Person类，如果没有则加载到Person类型到方法区
        2.在堆中开辟内存空间，在栈中对象名引用（指向）堆的相应内存空间
二. p1.name = '皓皓'： 将堆中name赋值为‘皓皓’；
三. Person p2 = new Person(): 此时方法区中已经存在Person类，所以不需要再次加载
四. p2.name = 'john'; 将堆中name赋值为‘john’；

**代码：**

```java
// 创建类
public class Person{
	// 编写属性
	String name;
	int age;
	doubel height;
	// 编写方法
	public void eat(){

	}
} 


// 类的实例化
public static void main(String[] args) {
	Person p1 = new Person();
	p1.name = '皓皓'：
	Person p2 = new Person():
	p2.name = 'john';
}
```

**图解**：

![](https://s1.ax1x.com/2018/12/06/FlX8qe.png)

**总结：**

> 栈：对象的引用、局部变量
> 堆：对象、全局变量
> 方法区：类信息

### 6.7类的设计技巧

1. 一定要保证数据私有，保证封装性

2. 一定要对数据初始化

3. 不要在类中使用过多的基本类型

4. 不是所有的域都需要独立的域访问器和域更改器

   5.将职责过多的类进行分解

6. 类名和方法名要能够体现它们的职责

   7.优先使用不可变的类

### 6.8类的继承

#### 6.8.1概述

- 继承是java面向对象编程技术的一块基石，因为它允许创建分等级层次的类。

- 继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为。

![](https://www.runoob.com/wp-content/uploads/2013/12/14B0951E-FC75-47A3-B611-4E1883887339.jpg)

> 兔子和羊属于食草动物类，狮子和豹属于食肉动物类。
>
> 食草动物和食肉动物又是属于动物类。
>
> 所以继承需要符合的关系是：is-a，父类更通用，子类更具体。
>
> 虽然食草动物和食肉动物都是属于动物，但是两者的属性和行为上有差别，所以子类会具有父类的一般特性也会具有自身的特性。

#### 6.8.2类的继承格式

在 Java 中通过 extends 关键字可以申明一个类是从另外一个类继承而来的，一般形式如下：

```java
class 父类 {
}
 
class 子类 extends 父类 {
}
```

#### 6.8.3为什么需要继承

接下来我们通过实例来说明这个需求。

开发动物类，其中动物分别为企鹅以及老鼠，要求如下：

- 企鹅：属性（姓名，id），方法（吃，睡，自我介绍）
- 老鼠：属性（姓名，id），方法（吃，睡，自我介绍）

```java
public class Penguin { 
    private String name; 
    private int id; 
    public Penguin(String myName, int  myid) { 
        name = myName; 
        id = myid; 
    } 
    public void eat(){ 
        System.out.println(name+"正在吃"); 
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() { 
        System.out.println("大家好！我是"         + id + "号" + name + "."); 
    } 
}
```

```java
public class Mouse { 
    private String name; 
    private int id; 
    public Mouse(String myName, int  myid) { 
        name = myName; 
        id = myid; 
    } 
    public void eat(){ 
        System.out.println(name+"正在吃"); 
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() { 
        System.out.println("大家好！我是"         + id + "号" + name + "."); 
    } 
}
```

从这两段代码可以看出来，代码存在重复了，导致后果就是代码量大且臃肿，而且维护性不高(维护性主要是后期需要修改的时候，就需要修改很多的代码，容易出错)，所以要从根本上解决这两段代码的问题，就需要继承，将两段代码中相同的部分提取出来组成 一个父类：

```java
public class Animal { 
    private String name;  
    private int id; 
    public Animal(String myName, int myid) { 
        name = myName; 
        id = myid;
    } 
    public void eat(){ 
        System.out.println(name+"正在吃"); 
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() { 
        System.out.println("大家好！我是"         + id + "号" + name + "."); 
    } 
}
```

这个Animal类就可以作为一个父类，然后企鹅类和老鼠类继承这个类之后，就具有父类当中的属性和方法，子类就不会存在重复的代码，维护性也提高，代码也更加简洁，提高代码的复用性（复用性主要是可以多次使用，不用再多次写同样的代码）。

#### 6.8.4继承的类型

![](https://www.runoob.com/wp-content/uploads/2013/12/java-extends-2020-12-08.png)

#### 6.8.5继承的特性

- 在 Java 中， 所有的继承都是公有继承，

- 子类拥有父类非 private 的属性、方法。[理解](https://www.cnblogs.com/cbs-writing/p/7088450.html)**但是如果子类中公有的方法影响到了父类私有属性，那么私有属性是能够被子类使用的**。
- 子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。
- 子类可以用自己的方式实现父类的方法。
- Java 的继承是单继承，但是可以多重继承，单继承就是一个子类只能继承一个父类，多重继承就是，例如 B 类继承 A 类，C 类继承 B 类，所以按照关系就是 B 类是 C 类的父类，A 类是 B 类的父类，这是 Java 继承区别于 C++ 继承的一个特性。
- 提高了类之间的耦合性（继承的缺点，耦合度高就会造成代码之间的联系越紧密，代码独立性越差）。

#### 6.8.6super 与 this 关键字

- super关键字：我们可以通过super关键字来实现对父类成员的访问，用来引用当前对象的父类。

​       子类不能访问父类的私有参数，要通过父类的方法，在子类中调用父类的方法可以用super。

- this关键字：指向自己的引用。

```java
class Animal {
  void eat() {
    System.out.println("animal : eat");
  }
}
 
class Dog extends Animal {
  void eat() {
    System.out.println("dog : eat");
  }
  void eatTest() {
    this.eat();   // this 调用自己的方法
    super.eat();  // super 调用父类方法
  }
}
 
public class Test {
  public static void main(String[] args) {
    Animal a = new Animal();
    a.eat();
    Dog d = new Dog();
    d.eatTest();
  }
}
```

结果：

```
animal : eat
dog : eat
animal : eat
```

#### 6.8.7final关键字

final 关键字声明类可以把类定义为不能继承的，即最终类；或者用于修饰方法，该方法不能被子类重写：

- 声明类：

  ```
  final class 类名 {//类体}
  ```

- 声明方法：

  ```
  修饰符(public/private/default/protected) final 返回值类型 方法名(){//方法体}
  ```

注：实例变量也可以被定义为 final，被定义为 final 的变量不能被修改。被声明为 final 类的方法自动地声明为 final，但是实例变量并不是 final

#### 6.8.8继承中的构造器

- 在子类中可以增加域、 增加方法或覆盖超类的方法，然而绝对不能删除继承的任何域和方法。

- 子类构造器

  ```
  public Manager(String name, double salary, int year, int month, int day) 
  {
   super(name, salary, year, month, day); 
  bonus = 0; 
  }//“ 调用超类 Employee 中含有 n、s、year month 和 day 参数的构造器” 的简写形式。
  ```

  使用 super 调用构造器的语句必须是子类构造器的第一条语句。

  （如果子类的构造器没有显式地调用超类的构造器， 则将自动地调用超类默认（没有参数 ) 的构造器。 如果超类没有不带参数的构造器， 并且在子类的构造器中又没有显式地调用超类 的其他构造器’ 则 Java 编译器将报告错误。）

- 子类是不继承父类的构造器（构造方法或者构造函数）的，它只是调用（隐式或显式）。如果父类的构造器带有参数，则必须在子类的构造器中显式地通过 **super** 关键字调用父类的构造器并配以适当的参数列表。

- 如果父类构造器没有参数，则在子类的构造器中不需要使用 **super** 关键字调用父类构造器，系统会自动调用父类的无参构造器。

```java
class SuperClass {
  private int n;
  SuperClass(){
    System.out.println("SuperClass()");
  }
  SuperClass(int n) {
    System.out.println("SuperClass(int n)");
    this.n = n;
  }
}
// SubClass 类继承
class SubClass extends SuperClass{
  private int n;
  
  SubClass(){ // 自动调用父类的无参数构造器
    System.out.println("SubClass");
  }  
  
  public SubClass(int n){ 
    super(300);  // 调用父类中带有参数的构造器
    System.out.println("SubClass(int n):"+n);
    this.n = n;
  }
}
// SubClass2 类继承
class SubClass2 extends SuperClass{
  private int n;
  
  SubClass2(){
    super(300);  // 调用父类中带有参数的构造器
    System.out.println("SubClass2");
  }  
  
  public SubClass2(int n){ // 自动调用父类的无参数构造器
    System.out.println("SubClass2(int n):"+n);
    this.n = n;
  }
}
public class TestSuperSub{
  public static void main (String args[]){
    System.out.println("------SubClass 类继承------");
    SubClass sc1 = new SubClass();
    SubClass sc2 = new SubClass(100); 
    System.out.println("------SubClass2 类继承------");
    SubClass2 sc3 = new SubClass2();
    SubClass2 sc4 = new SubClass2(200); 
  }
}
```

结果：

```
------SubClass 类继承------
SuperClass()
SubClass
SuperClass(int n)
SubClass(int n):100
------SubClass2 类继承------
SuperClass(int n)
SubClass2
SuperClass()
SubClass2(int n):200
```

#### 6.8.9方法的重写

**重写要有继承关系，子类重写父类的方法**

- 方法名必须相同
- 参数列表必须相同
- 修饰符：范围可以扩大但不能缩小
- 抛出的异常：范围可以被缩小，但不能缩小

**为什么要重写：**

1.父类的功能，子类不一定需要，或者不一定满足

### 6.9多态

1. **多态**是继封装、继承之后，面向对象的第三大特性。
2. 多态***\*现实意义\****理解：

- 现实事物经常会体现出多种形态，如学生，学生是人的一种，则一个具体的同学张三既是**学生**也是**人**，即出现**两种形态**。                                                      
- Java作为面向对象的语言，同样可以描述一个事物的多种形态。如Student类继承了Person类，一个Student的对象便既是Student，又是Person。

   3.多态体现为**父类引用变量可以指向子类对象**。

   4.前提条件：必须有子父类关系。

  ***\*注意：在使用多态后的父类引用变量调用方法时，会调用子类重写后的方法。\****

   5.多态的定义与使用格式

​          定义格式：父类类型 变量名=new 子类类型();

   6.理解:

​        多态是同一个行为具有多个不同表现形式或形态的能力。

​        多态就是同一个接口，使用不同的实例而执行不同操作。

```java
package day0524;
 
public class demo04 {
    public static void main(String[] args) {
        People p=new Stu();
        p.eat();
        //调用特有的方法
        Stu s=(Stu)p;
        s.study();
        //((Stu) p).study();
    }
}
class People{
    public void eat(){
        System.out.println("吃饭");
    }
}
class Stu extends People{
    @Override
    public void eat(){
        System.out.println("吃水煮肉片");
    }
    public void study(){
        System.out.println("好好学习");
    }
}
class Teachers extends People{
    @Override
    public void eat(){
        System.out.println("吃樱桃");
    }
    public void teach(){
        System.out.println("认真授课");
    }
}
```

### 6.10instanceof关键字

 作用：用来判断某个对象是否属于某种数据类型。

-   注意： 返回类型为布尔类型

  使用案例：

```java
        Fu f1=new Zi();
        Fu f2=new Son();
        if(f1 instanceof Zi){
            System.out.println("f1是Zi的类型");
        }
        else{
            System.out.println("f1是Son的类型");
        }
```

### 6.11抽象类

**abstract 关键字**

- 可以使某个方法不必实现。为了提高程序的清晰度， 包含一个或多个抽象方法的类本身必须被声明为抽象的。除了抽象方法之外，抽象类还可以包含具体数据和具体方法。

- 一个抽象类的子类必须实现了，抽象类的所有抽象方法才能摆脱抽象类的身份

- 类即使不含抽象方法，也可以将类声明为抽象类。 抽象类不能被实例化。也就是说，如果将一个类声明为 abstract, 就不能创建这个类的对象。

### 6.12. 四个访问修饰符

Java 用于控制可见性的 4 个访问修饰符：

1 ) 仅对本类可见 private。

2 ) 对所有类可见 public：

3 ) 对本包和所有子类可见 protected。 

4 ) 对本包可见—默认（很遗憾，) 不需要修饰符。

### 6.13枚举类

**枚举类**

```java
public enuni Size {
SMALL , MEDIUM, LARGE, EXTRAJARGE 
};
```

这个声明定义的类型是一个枚举类， 它刚好有 4 个实例， 在此尽量不要构造新对象。

因此， 在比较两个枚举类型的值时， 永远不需要调用 equals, 而直接使用“ = =” 就 可以了。

##  七.[接口](https://www.runoob.com/java/java-interfaces.html)，lambda表达式，内部类

### 7.1概述

- 接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。一个类通过继承接口的方式，从而来继承接口的抽象方法。

- 接口并不是类，编写接口的方式和类很相似，但是它们属于不同的概念。类描述对象的属性和方法。接口则包含类要实现的方法。

- 除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。

- 接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。另外，在 Java 中，接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。

注意点：

- 接口中的所有方法自动地属于 public。 因此，在接口中声明方法时，不必提供关键字 public 

  不过，在实现接口时， 必须把方法声明为 public; 否则，编译器 将认为这个方法的访问属性是包可见性，**接口绝不能含 有实例域**。

- 接口不是类，尤其不能使用 new 运算符实例化一个接口：尽管不能构造接口的对象，却能声明接口的变量：接口变量必须弓I用实现了接口的类对象

- 虽然在接口中不能包含实例域或静态方法，**但却可以包含常量**。例

  接口中的方法都自动地被设置为 public—样，接口中的域将被自动设为 public static final。

### 7.2接口的声明

接口的声明语法格式如下：

```java
[可见度] interface 接口名称 [extends 其他的接口名] 
{        
     // 声明变量   
     // 抽象方法 
}
```

接口有以下特性：

- 接口是隐式抽象的，当声明一个接口的时候，不必使用**abstract**关键字。
- 接口中每一个方法也是隐式抽象的，声明时同样不需要**abstract**关键字。
- 接口中的方法都是公有的。

### 7.3接口的实现

- 当类实现接口的时候，类要实现接口中所有的方法。否则，类必须声明为抽象的类。

- 类使用implements关键字实现接口。在类声明中，Implements关键字放在class声明后面。

- 实现一个接口的语法，可以使用这个公式：

```java
...implements 接口名称[, 其他接口名称, 其他接口名称..., ...] ...
```

在实现接口的时候，也要注意一些规则：

- 一个类可以同时实现多个接口。
- 一个类只能继承一个类，但是能实现多个接口。
- 一个接口能继承另一个接口，这和类之间的继承比较相似。

### 7.4接口和类

**接口与类相似点：**

- 一个接口可以有多个方法。
- 接口文件保存在 .java 结尾的文件中，文件名使用接口名。
- 接口的字节码文件保存在 .class 结尾的文件中。
- 接口相应的字节码文件必须在与包名称相匹配的目录结构中。

**接口与类的区别：**

- 接口不能用于实例化对象。
- 接口没有构造方法。
- 接口中所有的方法必须是抽象方法。
- 接口不能包含成员变量，除了 static 和 final 变量。
- 接口不是被类继承了，而是要被类实现。
- 接口支持多继承。

**抽象类和接口的区别**

- 抽象类中的方法可以有方法体，就是能实现方法的具体功能，但是接口中的方法不行。
- 抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是 **public static final** 类型的。
-  接口中不能含有静态代码块以及静态方法(用 static 修饰的方法)，而抽象类是可以有静态代码块和静态方法。
-  一个类只能继承一个抽象类，而一个类却可以实现多个接口。

### 7.5接口的默认方法

- 带有default关键词修饰的方法。用于为已有的接口添加新的方法。

不用默认方法时，在一个接口中增加一个新的方法，需要实现所有实现过该接口的类，而把方法定义为默认方法，没有实现该方法的类会自动直接获得该方法，就可以直接调用。

```java
interface InterfaceA {
    default void foo() {
        System.out.println("InterfaceA foo");
    }
}

class ClassA implements InterfaceA {
}

public class Test {
    public static void main(String[] args) {
        new ClassA().foo(); // 打印：“InterfaceA foo”
    }
}

```

**解决默认方法冲突**

1 ) 超类优先。如果超类提供了一个具体方法，同名而且有相同参数类型的默认方法会 被忽略。

2 ) 接口冲突。 如果一个超接口提供了一个默认方法，另一个接口提供了一个同名而且 参数类型（不论是否是默认参数）相同的方法， 必须覆盖这个方法来解决冲突。

### 7.6函数式接口

函数式接口(Functional Interface)就是一个有且仅有一个抽象方法，但是可以有多个非抽象方法的接口。

函数式接口可以被隐式转换为 lambda 表达式。

### 7.7标记接口

：Cloneable 接口是 Java 提供的一组标记接口 ( tagging interface ) 之一。通常用途是确保一个类实现一个或一组特定的方法。标记接口不包含任何方法； 它唯一的作用就是允许 在类型查询中使用 instanceof:

if (obj instanceof Cloneable) . . . 建议你自己的程序中不要使用标记接口。

### 7.8[内部类](https://www.runoob.com/w3cnote/java-inner-class-intro.html)

> 在 Java 中，可以将一个类定义在另一个类里面或者一个方法里面，这样的类称为内部类。广泛意义上的内部类一般来说包括这四种：成员内部类、局部内部类、匿名内部类和静态内部类。

#### 7.8.1成员内部类

内部类方法可以访问该类定义所在的作用域中的数据， 包括私有的数据。 

•内部类可以对同一个包中的其他类隐藏起来。

•当想要定义一个回调函数且不想编写大量代码时，使用匿名 （anonymous) 内部类比较 便捷。

- 在内部类中

外围类.this.方法  引用的是外围类的方法

This.方法  引用的是内部类的方法

- 内部类中声明的所有静态域都必须是final。原因很简单。我们希望一个静态域只 有一个实例， 不过对于每个外部对象， 会分别有一个单独的内部类实例。如果这个域不 是 final , 它可能就不是唯一的。

---

成员内部类是最普通的内部类，它的定义为位于另一个类的内部，形如下面的形式：

```java
class Circle {
    double radius = 0;
     
    public Circle(double radius) {
        this.radius = radius;
    }
     
    class Draw {     //内部类
        public void drawSahpe() {
            System.out.println("drawshape");
        }
    }
}
```

这样看起来，类Draw像是类Circle的一个成员，Circle称为外部类。成员内部类可以无条件访问外部类的所有成员属性和成员方法（包括private成员和静态成员）。

```java
class Circle {
    private double radius = 0;
    public static int count =1;
    public Circle(double radius) {
        this.radius = radius;
    }
     
    class Draw {     //内部类
        public void drawSahpe() {
            System.out.println(radius);  //外部类的private成员
            System.out.println(count);   //外部类的静态成员
        }
    }
}
```

不过要注意的是，当成员内部类拥有和外部类同名的成员变量或者方法时，会发生隐藏现象，即默认情况下访问的是成员内部类的成员。如果要访问外部类的同名成员，需要以下面的形式进行访问：

```
外部类.this.成员变量
外部类.this.成员方法
```

虽然成员内部类可以无条件地访问外部类的成员，而外部类想访问成员内部类的成员却不是这么随心所欲了。在外部类中如果要访问成员内部类的成员，必须先创建一个成员内部类的对象，再通过指向这个对象的引用来访问：

```java
class Circle {
    private double radius = 0;
 
    public Circle(double radius) {
        this.radius = radius;
        getDrawInstance().drawSahpe();   //必须先创建成员内部类的对象，再进行访问
    }
     
    private Draw getDrawInstance() {
        return new Draw();
    }
     
    class Draw {     //内部类
        public void drawSahpe() {
            System.out.println(radius);  //外部类的private成员
        }
    }
}
```

成员内部类是依附外部类而存在的，也就是说，如果要创建成员内部类的对象，前提是必须存在一个外部类的对象。创建成员内部类对象的一般方式如下：

```java
public class Test {
    public static void main(String[] args)  {
        //第一种方式：
        Outter outter = new Outter();
        Outter.Inner inner = outter.new Inner();  //必须通过Outter对象来创建
         
        //第二种方式：
        Outter.Inner inner1 = outter.getInnerInstance();
    }
}
 
class Outter {
    private Inner inner = null;
    public Outter() {
         
    }
     
    public Inner getInnerInstance() {
        if(inner == null)
            inner = new Inner();
        return inner;
    }
      
    class Inner {
        public Inner() {
             
        }
    }
}
```

内部类可以拥有 private 访问权限、protected 访问权限、public 访问权限及包访问权限。比如上面的例子，如果成员内部类 Inner 用 private 修饰，则只能在外部类的内部访问，如果用 public 修饰，则任何地方都能访问；如果用 protected 修饰，则只能在同一个包下或者继承外部类的情况下访问；如果是默认访问权限，则只能在同一个包下访问。这一点和外部类有一点不一样，外部类只能被 public 和包访问两种权限修饰。我个人是这么理解的，由于成员内部类看起来像是外部类的一个成员，所以可以像类的成员一样拥有多种权限修饰。

#### 7.8.2静态内部类

使用内部类只是为了把一个类隐藏在另外一个类的内部，并不需要内部类引用 外围类对象。为此，可以将内部类声明为 static, 以便取消产生的引用

只有内部类可以声明为 static。静态内部类的对象除了没有对生成它的外围类对象 的引用特权外， 与其他所冇内部类完全一样。

在内部类不需要访问外围类对象的时候， 应该使用静态内部类。 有些程序员用嵌 套类 （nested class) 表示静态内部类。

与常规内部类不同，静态内部类可以有静态域和方法

声明在接口中的内部类自动成为 static 和 public 类。

---

静态内部类也是定义在另一个类里面的类，只不过在类的前面多了一个关键字static。静态内部类是不需要依赖于外部类的，这点和类的静态成员属性有点类似，并且它不能使用外部类的非static成员变量或者方法，这点很好理解，因为在没有外部类的对象的情况下，可以创建静态内部类的对象，如果允许访问外部类的非static成员就会产生矛盾，因为外部类的非static成员必须依附于具体的对象。

```java
public class Test {
    public static void main(String[] args)  {
        Outter.Inner inner = new Outter.Inner();
    }
}
 
class Outter {
    public Outter() {
         
    }
     
    static class Inner {
        public Inner() {
             
        }
    }
}
```

#### 7.8.3局部内部类

局部内部类是定义在一个方法或者一个作用域里面的类，它和成员内部类的区别在于局部内部类的访问仅限于方法内或者该作用域内。

```java
class People{
    public People() {
         
    }
}
 
class Man{
    public Man(){
         
    }
     
    public People getWoman(){
        class Woman extends People{   //局部内部类
            int age =0;
        }
        return new Woman();
    }
}
```

　

**注意**: 局部内部类就像是方法里面的一个局部变量一样，是不能有 public、protected、private 以及 static 修饰符的。

与其他内部类相比较，局部类还有一个优点。它们不仅能够访问包含它们的外部类， 还 可以访问局部变量。不过，那些局部变量必须事实上为 final。

#### 7.8.4匿名内部类

将局部内部类的使用再深人一步。 假如只创建这个类的一个对象，就不必命名了。这种类被称为匿名内部类

匿名内部类应该是平时我们编写代码时用得最多的，在编写事件监听的代码时使用匿名内部类不但方便，而且使代码更加容易维护。下面这段代码是一段 Android 事件监听代码：

```java
scan_bt.setOnClickListener(new OnClickListener() {
    @Override
    public void onClick(View v) {
        // TODO Auto-generated method stub
         
    }
});
 
history_bt.setOnClickListener(new OnClickListener() {
     
    @Override
    public void onClick(View v) {
        // TODO Auto-generated method stub
         
    }
});
```

这段代码为两个按钮设置监听器，这里面就使用了匿名内部类。这段代码中的：

```java
new OnClickListener() {
    @Override
    public void onClick(View v) {
        // TODO Auto-generated method stub
         
    }
}
```

就是匿名内部类的使用。代码中需要给按钮设置监听器对象，使用匿名内部类能够在实现父类或者接口中的方法情况下同时产生一个相应的对象，但是前提是这个父类或者接口必须先存在才能这样使用。当然像下面这种写法也是可以的，跟上面使用匿名内部类达到效果相同。

```java
private void setListener()
{
    scan_bt.setOnClickListener(new Listener1());       
    history_bt.setOnClickListener(new Listener2());
}
 
class Listener1 implements View.OnClickListener{
    @Override
    public void onClick(View v) {
    // TODO Auto-generated method stub
             
    }
}
 
class Listener2 implements View.OnClickListener{
    @Override
    public void onClick(View v) {
    // TODO Auto-generated method stub
             
    }
}
```

这种写法虽然能达到一样的效果，但是既冗长又难以维护，所以一般使用匿名内部类的方法来编写事件监听代码。同样的，匿名内部类也是不能有访问修饰符和 static 修饰符的。

匿名内部类是唯一一种没有构造器的类。正因为其没有构造器，所以匿名内部类的使用范围非常有限，大部分匿名内部类用于接口回调。匿名内部类在编译的时候由系统自动起名为 Outter$1.class。一般来说，匿名内部类用于继承其他类或是实现接口，并不需要增加额外的方法，只是对继承方法的实现或是重写。

#### 7.8.5内部类的使用场景和好处

为什么在 Java 中需要内部类？总结一下主要有以下四点：

- 1.每个内部类都能独立的继承一个接口的实现，所以无论外部类是否已经继承了某个(接口的)实现，对于内部类都没有影响。内部类使得多继承的解决方案变得完整。
- 2.方便将存在一定逻辑关系的类组织在一起，又可以对外界隐藏。
- 3.方便编写事件驱动程序。
- 4.方便编写线程代码。

个人觉得第一点是最重要的原因之一，内部类的存在使得Java的多继承机制变得更加完善。

### 7.9[lambda表达式](https://www.runoob.com/java/java8-lambda-expressions.html)

#### 7.9.1概述

Lambda 表达式，也可称为闭包，它是推动 Java 8 发布的最重要新特性。

Lambda 允许把函数作为一个方法的参数（函数作为参数传递进方法中）。

使用 Lambda 表达式可以使代码变的更加简洁紧凑。

### 语法

lambda 表达式的语法格式如下：

```
(parameters) -> expression 
或
(parameters) ->{ statements; }
```

以下是lambda表达式的重要特征:

- **可选类型声明：**不需要声明参数类型，编译器可以统一识别参数值。

- **可选的参数圆括号：**一个参数无需定义圆括号，但多个参数需要定义圆括号。

- **可选的大括号：**如果主体包含了一个语句，就不需要使用大括号。

- **可选的返回关键字：**如果主体只有一个表达式返回值则编译器会自动返回值，大括号需要指定明表达式返回了一个数值。

  **Lambda 表达式实例**：

  ```java
  // 1. 不需要参数,返回值为 5  
  () -> 5  
    
  // 2. 接收一个参数(数字类型),返回其2倍的值  
  x -> 2 * x  
    
  // 3. 接受2个参数(数字),并返回他们的差值  
  (x, y) -> x – y  
    
  // 4. 接收2个int型整数,返回他们的和  
  (int x, int y) -> x + y  
    
  // 5. 接受一个 string 对象,并在控制台打印,不返回任何值(看起来像是返回void)  
  (String s) -> System.out.print(s)
  ```

  #### 7.9.2[更多用法](https://blog.csdn.net/ioriogami/article/details/12782141)

## 八.异常

### 8.1概述

异常是程序中的一些错误，但并不是所有的错误都是异常，并且错误有时候是可以避免的。

比如说，你的代码少了一个分号，那么运行出来结果是提示是错误 java.lang.Error；如果你用System.out.println(11/0)，那么你是因为你用0做了除数，会抛出 java.lang.ArithmeticException 的异常。

异常发生的原因有很多，通常包含以下几大类：

- 用户输入了非法数据。
- 要打开的文件不存在。
- 网络通信时连接中断，或者JVM内存溢出。

这些异常有的是因为用户错误引起，有的是程序错误引起的，还有其它一些是因为物理错误引起的。-

**三种异常：**

- **检查性异常：**最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。
- **运行时异常：** 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。
- **错误：** 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。

**注意：**

- 如果在子类中覆盖了超类的一个方法， 子类方法中声明的受查异常不能比超类方 法中声明的异常更通用 （也就是说， 子类方法中可以抛出更特定的异常， 或者根本不抛 出任何异常）。特别需要说明的是， 如果超类方法没有抛出任何受查异常， 子类也不能抛 出任何受查异常。

### 8.2Exception 类的层次

所有的异常类是从 java.lang.Exception 类继承的子类。

Exception 类是 Throwable 类的子类。除了Exception类外，Throwable还有一个子类Error 。

Java 程序通常不捕获错误。错误一般发生在严重故障时，它们在Java程序处理的范畴之外。

Error 用来指示运行时环境发生的错误。

例如，JVM 内存溢出。一般地，程序不会从错误中恢复。

异常类有两个主要的子类：IOException 类和 RuntimeException 类。

![img](https://www.runoob.com/wp-content/uploads/2013/12/12-130Q1234I6223.jpg)

在 Java 内置类中(接下来会说明)，有大部分常用检查性和非检查性异常。

### 8.3捕获异常

使用 try 和 catch 关键字可以捕获异常。try/catch 代码块放在异常可能发生的地方。

try/catch代码块中的代码称为保护代码，使用 try/catch 的语法如下：

```java
try
{
   // 程序代码
}catch(ExceptionName e1)
{
   //Catch 块
}
```

Catch 语句包含要捕获异常类型的声明。当保护代码块中发生一个异常时，try 后面的 catch 块就会被检查。

如果发生的异常包含在 catch 块中，异常会被传递到该 catch 块，这和传递一个参数到方法是一样。

**实例**

下面的例子中声明有两个元素的一个数组，当代码试图访问数组的第三个元素的时候就会抛出一个异常。

**ExcepTest.java 文件代码：**

```java
// 文件名 : ExcepTest.java
import java.io.*;
public class ExcepTest{
 
   public static void main(String args[]){
      try{
         int a[] = new int[2];
         System.out.println("Access element three :" + a[3]);
      }catch(ArrayIndexOutOfBoundsException e){
         System.out.println("Exception thrown  :" + e);
      }
      System.out.println("Out of the block");
   }
}
```

以上代码编译运行输出结果如下：

```
Exception thrown  :java.lang.ArrayIndexOutOfBoundsException: 3
Out of the block
```

**多重捕获块**

一个 try 代码块后面跟随多个 catch 代码块的情况就叫多重捕获。

多重捕获块的语法如下所示：

```java
try{
   // 程序代码
}catch(异常类型1 异常的变量名1){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}catch(异常类型3 异常的变量名3){
  // 程序代码
}
```

上面的代码段包含了 3 个 catch块。

可以在 try 语句后面添加任意数量的 catch 块。

如果保护代码中发生异常，异常被抛给第一个 catch 块。

如果抛出异常的数据类型与 ExceptionType1 匹配，它在这里就会被捕获。

如果不匹配，它会被传递给第二个 catch 块。

如此，直到异常被捕获或者通过所有的 catch 块。

### 8.4throws/throw 关键字

如果一个方法没有捕获到一个检查性异常，那么该方法必须使用 throws 关键字来声明。throws 关键字放在方法签名的尾部。

也可以使用 throw 关键字抛出一个异常，无论它是新实例化的还是刚捕获到的。

下面方法的声明抛出一个 RemoteException 异常：

```java
import java.io.*;
public class className
{
  public void deposit(double amount) throws RemoteException
  {
    // Method implementation
    throw new RemoteException();
  }
  //Remainder of class definition
}
```

一个方法可以声明抛出多个异常，多个异常之间用逗号隔开。

例如，下面的方法声明抛出 RemoteException 和 InsufficientFundsException：

```java
import java.io.*;
public class className
{
   public void withdraw(double amount) throws RemoteException,
                              InsufficientFundsException
   {
       // Method implementation
   }
   //Remainder of class definition
}
```

### 8.5finally关键字

finally 关键字用来创建在 try 代码块后面执行的代码块。

无论是否发生异常，finally 代码块中的代码总会被执行。

在 finally 代码块中，可以运行清理类型等收尾善后性质的语句。

finally 代码块出现在 catch 代码块最后，语法如下：

```
try{
  // 程序代码
}catch(异常类型1 异常的变量名1){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}finally{
  // 程序代码
}
```

**注意：**

- catch 不能独立于 try 存在。
- 在 try/catch 后面添加 finally 块并非强制性要求的。
- try 代码后不能既没 catch 块也没 finally 块。
- try, catch, finally 块之间不能添加任何代码。

## 九.[泛型](https://blog.csdn.net/s10461/article/details/53941091)

### 9.1概述

> **泛型，即“参数化类型”。一提到参数，最熟悉的就是定义方法时有形参，然后调用此方法时传递实参。那么参数化类型怎么理解呢？顾名思义，就是将类型由原来的具体的类型参数化，类似于方法中的变量参数，此时类型也定义成参数形式（可以称之为类型形参），然后在使用/调用时传入具体的类型（类型实参）。**
>
> **泛型的本质是为了参数化类型（在不创建新的类型的情况下，通过泛型指定的不同类型来控制形参具体限制的类型）**。也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。

### 9.2泛型的一个用处

**帮助我们在编译时发现数据类型错误**

一个被举了无数次的例子：

```java
    public static void main(String[] args) {
        ArrayList strings = new ArrayList<>();
        strings.add("aaaa");
        strings.add(100);

        for(int i = 0; i< strings.size();i++){
            String item = (String)strings.get(i);
            System.out.println("item = " + item);
        }
    }
```

毫无疑问，程序的运行结果会以崩溃结束：

```java
java.lang.ClassCastException: java.lang.Integer cannot be cast to java.lang.String1
```

ArrayList可以存放任意类型，例子中添加了一个String类型，添加了一个Integer类型，再使用时都以String的方式使用，因此程序崩溃了。为了解决类似这样的问题（在编译阶段就可以解决），泛型应运而生。

我们将第一行声明初始化list的代码更改一下，编译器会在编译阶段就能够帮我们发现类似这样的问题。

```java
ArrayList<String> strings = new ArrayList<String>();
...
//strings.add(100);会直接报红
```

### 9.3泛型特性

泛型只在编译阶段有效。看下面的代码：

```java
List<String> stringArrayList = new ArrayList<String>();
List<Integer> integerArrayList = new ArrayList<Integer>();

Class classStringArrayList = stringArrayList.getClass();
Class classIntegerArrayList = integerArrayList.getClass();

if(classStringArrayList.equals(classIntegerArrayList)){
    Log.d("泛型测试","类型相同");
}
```

输出结果：`D/泛型测试: 类型相同`。

通过上面的例子可以证明，在编译之后程序会采取去泛型化的措施。也就是说Java中的泛型，只在编译阶段有效。在编译过程中，正确检验泛型结果后，会将泛型的相关信息擦出，并且在对象进入和离开方法的边界处添加类型检查和类型转换的方法。也就是说，泛型信息不会进入到运行时阶段。

**对此总结成一句话：泛型类型在逻辑上看以看成是多个不同的类型，实际上都是相同的基本类型。**

```java
public static void main(String[] args) {
    ArrayList<String> strings = new ArrayList<String>();
    ArrayList<Integer> integers = new ArrayList<>();
    Class<? extends ArrayList> aClass1 = integers.getClass();
    Class<? extends ArrayList> aClass = strings.getClass();
    System.out.println(aClass.toString());
    System.out.println(aClass1.toString());
}
```

结果

> class java.util.ArrayList
> class java.util.ArrayList

### 9.4泛型的使用

泛型有三种使用方式，分别为：泛型类、泛型接口、泛型方法

#### 9.4.1泛型类

泛型类型用于类的定义中，被称为泛型类。通过泛型可以完成对一组类的操作对外开放相同的接口。最典型的就是各种容器类，如：List、Set、Map。

泛型类的最基本写法（这么看可能会有点晕，会在下面的例子中详解）：

```java
class 类名称 <泛型标识：可以随便写任意标识号，标识指定的泛型的类型>{
  private 泛型标识 /*（成员变量类型）*/ var; 
  .....

  }
}
```

一个最普通的泛型类：

```java
//此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型
//在实例化泛型类时，必须指定T的具体类型
public class Generic<T>{ 
    //key这个成员变量的类型为T,T的类型由外部指定  
    private T key;

    public Generic(T key) { //泛型构造方法形参key的类型也为T，T的类型由外部指定
        this.key = key;
    }

    public T getKey(){ //泛型方法getKey的返回值类型为T，T的类型由外部指定
        return key;
    }
}
```

```java
//泛型的类型参数只能是类类型（包括自定义类），不能是简单类型
//传入的实参类型需与泛型的类型参数类型相同，即为Integer.
Generic<Integer> genericInteger = new Generic<Integer>(123456);

//传入的实参类型需与泛型的类型参数类型相同，即为String.
Generic<String> genericString = new Generic<String>("key_vlaue");
Log.d("泛型测试","key is " + genericInteger.getKey());
Log.d("泛型测试","key is " + genericString.getKey());12345678
```

```
12-27 09:20:04.432 13063-13063/? D/泛型测试: key is 123456
12-27 09:20:04.432 13063-13063/? D/泛型测试: key is key_vlaue
```

定义的泛型类，就一定要传入泛型类型实参么？并不是这样，在使用泛型的时候如果传入泛型实参，则会根据传入的泛型实参做相应的限制，此时泛型才会起到本应起到的限制作用。如果不传入泛型类型实参的话，在泛型类中使用泛型的方法或成员变量定义的类型可以为任何的类型。

看一个例子：

```java
Generic generic = new Generic("111111");
Generic generic1 = new Generic(4444);
Generic generic2 = new Generic(55.55);
Generic generic3 = new Generic(false);

Log.d("泛型测试","key is " + generic.getKey());
Log.d("泛型测试","key is " + generic1.getKey());
Log.d("泛型测试","key is " + generic2.getKey());
Log.d("泛型测试","key is " + generic3.getKey());123456789
```

```java
D/泛型测试: key is 111111
D/泛型测试: key is 4444
D/泛型测试: key is 55.55
D/泛型测试: key is false
```

**注意：**

- 1. 泛型的类型参数只能是类类型，不能是简单类型。

- 1. 不能对确切的泛型类型使用instanceof操作。如下面的操作是非法的，编译时会出错。

     ```java
     if(ex_num instanceof Generic<Number>){   
     } 
     ```

#### 9.4.2泛型接口

泛型接口与泛型类的定义及使用基本相同。泛型接口常被用在各种类的生产器中，可以看一个例子：

```java
//定义一个泛型接口
public interface Generator<T> {
    public T next();
}
```

当实现泛型接口的类，**未传入**泛型实参时：

```java
/**
 * 未传入泛型实参时，与泛型类的定义相同，在声明类的时候，需将泛型的声明也一起加到类中
 * 即：class FruitGenerator<T> implements Generator<T>{
 * 如果不声明泛型，如：class FruitGenerator implements Generator<T>，编译器会报错："Unknown class"
 */
class FruitGenerator<T> implements Generator<T>{
    @Override
    public T next() {
        return null;
    }
}
```

当实现泛型接口的类，**传入**泛型实参时：

```java
/**
 * 传入泛型实参时：
 * 定义一个生产器实现这个接口,虽然我们只创建了一个泛型接口Generator<T>
 * 但是我们可以为T传入无数个实参，形成无数种类型的Generator接口。
 * 在实现类实现泛型接口时，如已将泛型类型传入实参类型，则所有使用泛型的地方都要替换成传入的实参类型
 * 即：Generator<T>，public T next();中的的T都要替换成传入的String类型。
 */
public class FruitGenerator implements Generator<String> {

    private String[] fruits = new String[]{"Apple", "Banana", "Pear"};

    @Override
    public String next() {
        Random rand = new Random();
        return fruits[rand.nextInt(3)];
    }
}
```

#### 9.4.3泛型通配符

我们知道`Ingeter`是`Number`的一个子类，同时在特性章节中我们也验证过`Generic<Ingeter>`与`Generic<Number>`实际上是相同的一种基本类型。那么问题来了，在使用`Generic<Number>`作为形参的方法中，能否使用`Generic<Ingeter>`的实例传入呢？在逻辑上类似于`Generic<Number>`和`Generic<Ingeter>`是否可以看成具有父子关系的泛型类型呢？

为了弄清楚这个问题，我们使用`Generic<T>`这个泛型类继续看下面的例子：

```java
public void showKeyValue1(Generic<Number> obj){
    Log.d("泛型测试","key value is " + obj.getKey());
}123
Generic<Integer> gInteger = new Generic<Integer>(123);
Generic<Number> gNumber = new Generic<Number>(456);

showKeyValue(gNumber);

// showKeyValue这个方法编译器会为我们报错：Generic<java.lang.Integer> 
// cannot be applied to Generic<java.lang.Number>
// showKeyValue(gInteger);12345678
```

通过提示信息我们可以看到`Generic<Integer>`不能被看作为``Generic<Number>`的子类。由此可以看出:**同一种泛型可以对应多个版本（因为参数类型是不确定的），不同版本的泛型类实例是不兼容的**。

回到上面的例子，如何解决上面的问题？总不能为了定义一个新的方法来处理`Generic<Integer>`类型的类，这显然与java中的多台理念相违背。因此我们需要一个在逻辑上可以表示**同时**是`Generic<Integer>`和`Generic<Number>`父类的引用类型。由此类型通配符应运而生。

我们可以将上面的方法改一下：

```java
public void showKeyValue1(Generic<?> obj){
    Log.d("泛型测试","key value is " + obj.getKey());
}
```

类型通配符一般是使用？代替具体的类型实参，注意了，**此处’？’是类型实参，而不是类型形参** 。重要说三遍！**此处’？’是类型实参，而不是类型形参** ！ **此处’？’是类型实参，而不是类型形参** ！再直白点的意思就是，此处的？和Number、String、Integer一样都是一种实际的类型，可以把？看成所有类型的父类。是一种真实的类型。

可以解决当具体类型不确定的时候，这个通配符就是 **?** ；当操作类型时，不需要使用类型的具体功能时，只使用Object类中的功能。那么可以用 ? 通配符来表未知类型。

##### 9.4.3.1T和?的区别

？和 T 都表示不确定的类型，区别在于我们可以对 T 进行操作，但是对 ？不行，比如如下这种 ：

// 可以
 T t = operate();
 // 不可以
 ？car = operate();

简单总结下：

T 是一个 确定的 类型，通常用于泛型类和泛型方法的定义，？是一个 不确定 的类型，通常用于泛型方法的调用代码和形参，不能用于定义类和泛型方法。

#### 9.4.4泛型方法

在java中,泛型类的定义非常简单，但是泛型方法就比较复杂了。

> 尤其是我们见到的大多数泛型类中的成员方法也都使用了泛型，有的甚至泛型类中也包含着泛型方法，这样在初学者中非常容易将泛型方法理解错了。

**泛型类，是在实例化类的时候指明泛型的具体类型；泛型方法，是在调用方法的时候指明泛型的具体类型** 。

```java
/**
 * 泛型方法的基本介绍
 * @param tClass 传入的泛型实参
 * @return T 返回值为T类型
 * 说明：
 *     1）public 与 返回值中间<T>非常重要，可以理解为声明此方法为泛型方法。
 *     2）只有声明了<T>的方法才是泛型方法，泛型类中的使用了泛型的成员方法并不是泛型方法。
 *     3）<T>表明该方法将使用泛型类型T，此时才可以在方法中使用泛型类型T。
 *     4）与泛型类的定义一样，此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型。
 */
public <T> T genericMethod(Class<T> tClass)throws InstantiationException ,
  IllegalAccessException{
        T instance = tClass.newInstance();
        return instance;
}
```

```
Object obj = genericMethod(Class.forName("com.test.test"));
```

##### 9.4.4.1泛型方法的基本用法

光看上面的例子有的同学可能依然会非常迷糊，我们再通过一个例子，把我泛型方法再总结一下。

```java
public class GenericTest {
   //这个类是个泛型类，在上面已经介绍过
   public class Generic<T>{     
        private T key;

        public Generic(T key) {
            this.key = key;
        }

        //我想说的其实是这个，虽然在方法中使用了泛型，但是这并不是一个泛型方法。
        //这只是类中一个普通的成员方法，只不过他的返回值是在声明泛型类已经声明过的泛型。
        //所以在这个方法中才可以继续使用 T 这个泛型。
        public T getKey(){
            return key;
        }

        /**
         * 这个方法显然是有问题的，在编译器会给我们提示这样的错误信息"cannot reslove symbol E"
         * 因为在类的声明中并未声明泛型E，所以在使用E做形参和返回值类型时，编译器会无法识别。
        public E setKey(E key){
             this.key = keu
        }
        */
    }

    /** 
     * 这才是一个真正的泛型方法。
     * 首先在public与返回值之间的<T>必不可少，这表明这是一个泛型方法，并且声明了一个泛型T
     * 这个T可以出现在这个泛型方法的任意位置.
     * 泛型的数量也可以为任意多个 
     *    如：public <T,K> K showKeyName(Generic<T> container){
     *        ...
     *        }
     */
    public <T> T showKeyName(Generic<T> container){
        System.out.println("container key :" + container.getKey());
        //当然这个例子举的不太合适，只是为了说明泛型方法的特性。
        T test = container.getKey();
        return test;
    }

    //这也不是一个泛型方法，这就是一个普通的方法，只是使用了Generic<Number>这个泛型类做形参而已。
    public void showKeyValue1(Generic<Number> obj){
        Log.d("泛型测试","key value is " + obj.getKey());
    }

    //这也不是一个泛型方法，这也是一个普通的方法，只不过使用了泛型通配符?
    //同时这也印证了泛型通配符章节所描述的，?是一种类型实参，可以看做为Number等所有类的父类
    public void showKeyValue2(Generic<?> obj){
        Log.d("泛型测试","key value is " + obj.getKey());
    }

     /**
     * 这个方法是有问题的，编译器会为我们提示错误信息："UnKnown class 'E' "
     * 虽然我们声明了<T>,也表明了这是一个可以处理泛型的类型的泛型方法。
     * 但是只声明了泛型类型T，并未声明泛型类型E，因此编译器并不知道该如何处理E这个类型。
    public <T> T showKeyName(Generic<E> container){
        ...
    }  
    */

    /**
     * 这个方法也是有问题的，编译器会为我们提示错误信息："UnKnown class 'T' "
     * 对于编译器来说T这个类型并未项目中声明过，因此编译也不知道该如何编译这个类。
     * 所以这也不是一个正确的泛型方法声明。
    public void showkey(T genericObj){

    }
    */

    public static void main(String[] args) {


    }
}
```

##### 9.4.4.2类中的泛型方法

当然这并不是泛型方法的全部，泛型方法可以出现在复杂任何地方和任何场景中使用。但是有一种情况是非常特殊的，当泛型方法出现在泛型类中时，我们再通过一个例子看一下

```java
public class GenericFruit {
    class Fruit{
        @Override
        public String toString() {
            return "fruit";
        }
    }

    class Apple extends Fruit{
        @Override
        public String toString() {
            return "apple";
        }
    }

    class Person{
        @Override
        public String toString() {
            return "Person";
        }
    }

    class GenerateTest<T>{
        public void show_1(T t){
            System.out.println(t.toString());
        }

        //在泛型类中声明了一个泛型方法，使用泛型E，这种泛型E可以为任意类型。可以类型与T相同，也可以不同。
        //由于泛型方法在声明的时候会声明泛型<E>，因此即使在泛型类中并未声明泛型，编译器也能够正确识别泛型方法中识别的泛型。
        public <E> void show_3(E t){
            System.out.println(t.toString());
        }

        //在泛型类中声明了一个泛型方法，使用泛型T，注意这个T是一种全新的类型，可以与泛型类中声明的T不是同一种类型。
        public <T> void show_2(T t){
            System.out.println(t.toString());
        }
    }

    public static void main(String[] args) {
        Apple apple = new Apple();
        Person person = new Person();

        GenerateTest<Fruit> generateTest = new GenerateTest<Fruit>();
        //apple是Fruit的子类，所以这里可以
        generateTest.show_1(apple);
        //编译器会报错，因为泛型类型实参指定的是Fruit，而传入的实参类是Person
        //generateTest.show_1(person);

        //使用这两个方法都可以成功
        generateTest.show_2(apple);
        generateTest.show_2(person);

        //使用这两个方法也都可以成功
        generateTest.show_3(apple);
        generateTest.show_3(person);
    }
}
```

##### 9.4.4.3泛型方法与可变参数

再看一个泛型方法和可变参数的例子：

```java
public <T> void printMsg( T... args){
    for(T t : args){
        Log.d("泛型测试","t is " + t);
    }
}
```

```
printMsg("111",222,"aaaa","2323.4",55.55);
```

##### 9.4.4.4静态方法与泛型

静态方法有一种情况需要注意一下，那就是在类中的静态方法使用泛型：**静态方法无法访问类上定义的泛型；如果静态方法操作的引用数据类型不确定的时候，必须要将泛型定义在方法上。**

即：**如果静态方法要使用泛型的话，必须将静态方法也定义成泛型方法** 。

```java
public class StaticGenerator<T> {
    ....
    ....
    /**
     * 如果在类中定义使用泛型的静态方法，需要添加额外的泛型声明（将这个方法定义成泛型方法）
     * 即使静态方法要使用泛型类中已经声明过的泛型也不可以。
     * 如：public static void show(T t){..},此时编译器会提示错误信息：
          "StaticGenerator cannot be refrenced from static context"
     */
    public static <T> void show(T t){

    }
}
```

##### 9.4.4.5 泛型方法总结

泛型方法能使方法独立于类而产生变化，以下是一个基本的指导原则：

> 无论何时，如果你能做到，你就该尽量使用泛型方法。也就是说，如果使用泛型方法将整个类泛型化，那么就应该使用泛型方法。另外对于一个static的方法而已，无法访问泛型类型的参数。所以如果static方法要使用泛型能力，就必须使其成为泛型方法。

#### 9.4.5 泛型上下边界

在使用泛型的时候，我们还可以为传入的泛型类型实参进行上下边界的限制，如：类型实参只准传入某种类型的父类或某种类型的子类。

- 为泛型添加上边界，即传入的类型实参必须是指定类型的子类型

  > 

```java
public void showKeyValue1(Generic<? extends Number> obj){
    Log.d("泛型测试","key value is " + obj.getKey());
}123
Generic<String> generic1 = new Generic<String>("11111");
Generic<Integer> generic2 = new Generic<Integer>(2222);
Generic<Float> generic3 = new Generic<Float>(2.4f);
Generic<Double> generic4 = new Generic<Double>(2.56);

//这一行代码编译器会提示错误，因为String类型并不是Number类型的子类
//showKeyValue1(generic1);

showKeyValue1(generic2);
showKeyValue1(generic3);
showKeyValue1(generic4);
```

如果我们把泛型类的定义也改一下:

```java
public class Generic<T extends Number>{
    private T key;

    public Generic(T key) {
        this.key = key;
    }

    public T getKey(){
        return key;
    }
}
//这一行代码也会报错，因为String不是Number的子类
Generic<String> generic1 = new Generic<String>("11111");12
```

再来一个泛型方法的例子：

```java
//在泛型方法中添加上下边界限制的时候，必须在权限声明与返回值之间的<T>上添加上下边界，即在泛型声明的时候添加
//public <T> T showKeyName(Generic<T extends Number> container)，编译器会报错："Unexpected bound"
public <T extends Number> T showKeyName(Generic<T> container){
    System.out.println("container key :" + container.getKey());
    T test = container.getKey();
    return test;
}
```

通过上面的两个例子可以看出：**泛型的上下边界添加，必须与泛型的声明在一起** 。

#### 9.4.6 关于泛型数组要提一下

看到了很多文章中都会提起泛型数组，经过查看sun的说明文档，在java中是**”不能创建一个确切的泛型类型的数组”**的。

也就是说下面的这个例子是不可以的：

```java
List<String>[] ls = new ArrayList<String>[10];
```

而使用通配符创建泛型数组是可以的，如下面这个例子：

```java
List<?>[] ls = new ArrayList<?>[10];
```

这样也是可以的：

```java
List<String>[] ls = new ArrayList[10];
```

下面使用[Sun](http://docs.oracle.com/javase/tutorial/extra/generics/fineprint.html)[的一篇文档](http://docs.oracle.com/javase/tutorial/extra/generics/fineprint.html)的一个例子来说明这个问题：

```java
List<String>[] lsa = new List<String>[10]; // Not really allowed.    
Object o = lsa;    
Object[] oa = (Object[]) o;    
List<Integer> li = new ArrayList<Integer>();    
li.add(new Integer(3));    
oa[1] = li; // Unsound, but passes run time store check    
String s = lsa[1].get(0); // Run-time error: ClassCastException.
```

> 这种情况下，由于JVM泛型的擦除机制，在运行时JVM是不知道泛型信息的，所以可以给oa[1]赋上一个ArrayList而不会出现异常，但是在取出数据的时候却要做一次类型转换，所以就会出现ClassCastException，如果可以进行泛型数组的声明，上面说的这种情况在编译期将不会出现任何的警告和错误，只有在运行时才会出错。
>
> 而对泛型数组的声明进行限制，对于这样的情况，可以在编译期提示代码有类型安全问题，比没有任何提示要强很多。

下面采用通配符的方式是被允许的:**数组的类型不可以是类型变量，除非是采用通配符的方式**，因为对于通配符的方式，最后取出数据是要做显式的类型转换的。

```java
List<?>[] lsa = new List<?>[10]; // OK, array of unbounded wildcard type.    
Object o = lsa;    
Object[] oa = (Object[]) o;    
List<Integer> li = new ArrayList<Integer>();    
li.add(new Integer(3));    
oa[1] = li; // Correct.    
Integer i = (Integer) lsa[1].get(0); // OK 
```

---



- 不能实例化参数化类型的数组， 例如： Pair[] table = new Pair[10]; // Error

Pair[]强制转化为object[]后，Pair[]都能赋给Object

- 可以声明通配类型的数组， 然后进行类型转换： Pair[]<String>  table = (Pair[]) new Pair<?>[10];

- 如果需要收集参数化类型对象， 只有一种安全而有效的方法：使用 ArrayList:ArrayList<Pair<String>

## 十.[集合框架](https://blog.csdn.net/feiyanaffection/article/details/81394745)

### 10.1集合分类

- Java集合框架为程序员提供了预先包装的数据结构和算法来操纵他们。

- 集合是一个对象，可容纳**其他对象的引用**。集合接口声明对每一种类型的集合可以执行的操作。

- 集合框架的类和接口均在java.util包中。

- 任何对象加入集合类后，自动转变为Object类型，所以在取出的时候，需要进行强制类型转换。

  

集合框架被设计成要满足以下几个目标。

- 该框架必须是高性能的。基本集合（动态数组，链表，树，哈希表）的实现也必须是高效的。
- 该框架允许不同类型的集合，以类似的方式工作，具有高度的互操作性。
- 对一个集合的扩展和适应必须是简单的。

为此，整个集合框架就围绕一组标准接口而设计。你可以直接使用这些接口的标准实现，诸如： **LinkedList**, **HashSet**, 和 **TreeSet** 等,除此之外你也可以通过这些接口实现自己的集合。

![](https://www.runoob.com/wp-content/uploads/2014/01/2243690-9cd9c896e0d512ed.gif)

从上面的集合框架图可以看到，Java 集合框架主要包括两种类型的容器，一种是集合（Collection），存储一个元素集合，另一种是图（Map），存储键/值对映射。Collection 接口又有 3 种子类型，List、Set 和 Queue，再下面是一些抽象类，最后是具体实现类，常用的有 [ArrayList](https://www.runoob.com/java/java-arraylist.html)、[LinkedList](https://www.runoob.com/java/java-linkedlist.html)、[HashSet](https://www.runoob.com/java/java-hashset.html)、LinkedHashSet、[HashMap](https://www.runoob.com/java/java-hashmap.html)、LinkedHashMap 等等。

集合框架是一个用来代表和操纵集合的统一架构。所有的集合框架都包含如下内容：

- 

  **接口：**是代表集合的抽象数据类型。例如 Collection、List、Set、Map 等。之所以定义多个接口，是为了以不同的方式操作集合对象

- **实现（类）：**是集合接口的具体实现。从本质上讲，它们是可重复使用的数据结构，例如：ArrayList、LinkedList、HashSet、HashMap。

- **算法：**是实现集合接口的对象里的方法执行的一些有用的计算，例如：搜索和排序。这些算法被称为多态，那是因为相同的方法可以在相似的接口上有着不同的实现。

除了集合，该框架也定义了几个 Map 接口和类。Map 里存储的是键/值对。尽管 Map 不是集合，但是它们完全整合在集合中。

**集合框架体系如图所示**

![](https://www.runoob.com/wp-content/uploads/2014/01/java-coll-2020-11-16.png)、

#### 10.1.1集合接口

| 1    | Collection 接口  Collection 是最基本的集合接口，一个 Collection 代表一组 Object，即 Collection 的元素, Java不提供直接继承自Collection的类，只提供继承于的子接口(如List和set)。 Collection 接口存储一组不唯一，无序的对象。 |
| ---- | ------------------------------------------------------------ |
| 2    | List 接口  List接口是一个有序的 Collection，使用此接口能够精确的控制每个元素插入的位置，能够通过索引(元素在List中位置，类似于数组的下标)来访问List中的元素，第一个元素的索引为 0，而且允许有相同的元素。 List 接口存储一组不唯一，有序（插入顺序）的对象。 |
| 3    | Set  Set 具有与 Collection 完全一样的接口，只是行为上不同，Set 不保存重复的元素。 Set 接口存储一组唯一，无序的对象。 |
| 4    | SortedSet   继承于Set保存有序的集合。                        |
| 5    | Map   Map 接口存储一组键值对象，提供key（键）到value（值）的映射。 |
| 6    | Map.Entry   描述在一个Map中的一个元素（键/值对）。是一个 Map 的内部接口。 |
| 7    | SortedMap  继承于 Map，使 Key 保持在升序排列。               |
| 8    | Enumeration  这是一个传统的接口和定义的方法，通过它可以枚举（一次获得一个）对象集合中的元素。这个传统接口已被迭代器取代。 |

#### 10.1.2遍历 ArrayList

```java

import java.util.*;
 
public class Test{
 public static void main(String[] args) {
     List<String> list=new ArrayList<String>();
     list.add("Hello");
     list.add("World");
     list.add("HAHAHAHA");
     //第一种遍历方法使用 For-Each 遍历 List
     for (String str : list) {            //也可以改写 for(int i=0;i<list.size();i++) 这种形式
        System.out.println(str);
     }
 
     //第二种遍历，把链表变为数组相关的内容进行遍历
     String[] strArray=new String[list.size()];
     list.toArray(strArray);
     for(int i=0;i<strArray.length;i++) //这里也可以改写为  for(String str:strArray) 这种形式
     {
        System.out.println(strArray[i]);
     }
     
    //第三种遍历 使用迭代器进行相关遍历
     
     Iterator<String> ite=list.iterator();
     while(ite.hasNext())//判断下一个元素之后有值
     {
         System.out.println(ite.next());
     }
 }
}

```

**解析：**  

三种方法都是用来遍历ArrayList集合，第三种方法是采用迭代器的方法，该方法可以不用担心在遍历的过程中会超出集合的长度。

#### 10.1.3遍历 Map

```java

import java.util.*;
 
public class Test{
     public static void main(String[] args) {
      Map<String, String> map = new HashMap<String, String>();
      map.put("1", "value1");
      map.put("2", "value2");
      map.put("3", "value3");
      
      //第一种：普遍使用，二次取值
      System.out.println("通过Map.keySet遍历key和value：");
      for (String key : map.keySet()) {
       System.out.println("key= "+ key + " and value= " + map.get(key));
      }
      
      //第二种
      System.out.println("通过Map.entrySet使用iterator遍历key和value：");
      Iterator<Map.Entry<String, String>> it = map.entrySet().iterator();
      while (it.hasNext()) {
       Map.Entry<String, String> entry = it.next();
       System.out.println("key= " + entry.getKey() + " and value= " + entry.getValue());
      }
      
      //第三种：推荐，尤其是容量大时
      System.out.println("通过Map.entrySet遍历key和value");
      for (Map.Entry<String, String> entry : map.entrySet()) {
       System.out.println("key= " + entry.getKey() + " and value= " + entry.getValue());
      }
    
      //第四种
      System.out.println("通过Map.values()遍历所有的value，但不能遍历key");
      for (String v : map.values()) {
       System.out.println("value= " + v);
      }
     }
}

```



### 10.2迭代器

Java Iterator（迭代器）不是一个集合，它是一种用于访问集合的方法，可用于迭代   [ArrayList](https://www.runoob.com/java/java-arraylist.html) 和 [HashSet](https://www.runoob.com/java/java-hashset.html) 等集合。

Iterator 是 Java 迭代器最简单的实现，ListIterator 是 Collection API 中的接口， 它扩展了 Iterator 接口。

![img](https://www.runoob.com/wp-content/uploads/2020/07/ListIterator-Class-Diagram.jpg)

迭代器 it 的两个基本操作是 next 、hasNext 和 remove。

调用 it.next() 会返回迭代器的下一个元素，并且更新迭代器的状态。

调用 it.hasNext() 用于检测集合中是否还有元素。

调用 it.remove() 将迭代器返回的元素删除。

Iterator 类位于 java.util 包中，使用前需要引入它，语法格式如下：

```java
import java.util.Iterator; // 引入 Iterator 类
```

**获取一个迭代器**

集合想获取一个迭代器可以使用 iterator() 方法:

**实例**

```java
// 引入 ArrayList 和 Iterator 类
import java.util.ArrayList;
import java.util.Iterator;

public class RunoobTest {
    public static void main(String[] args) {

        // 创建集合
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Zhihu");

        // 获取迭代器
        Iterator<String> it = sites.iterator();

        // 输出集合中的第一个元素
        System.out.println(it.next());
    }
}
```

执行以上代码，输出结果如下：

```
Google
```

**循环集合元素**

让迭代器 it 逐个返回集合中所有元素最简单的方法是使用 while 循环：

```java
while(it.hasNext()) {
    System.out.println(it.next());
}
```

**删除元素**

要删除集合中的元素可以使用 remove() 方法。

以下实例我们删除集合中小于 10 的元素：

**实例：**

```java
// 引入 ArrayList 和 Iterator 类
import java.util.ArrayList;
import java.util.Iterator;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(12);
        numbers.add(8);
        numbers.add(2);
        numbers.add(23);
        Iterator<Integer> it = numbers.iterator();
        while(it.hasNext()) {
            Integer i = it.next();
            if(i < 10) {  
                it.remove();  // 删除小于 10 的元素
            }
        }
        System.out.println(numbers);
    }
}
```



## 十一.[多线程](https://blog.csdn.net/Evankaka/article/details/44153709?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control)

### 11.1进程和线程的区别：

- 进程：每个进程都有独立的代码和数据空间（进程上下文），进程间的切换会有较大的开销，一个进程包含1--n个线程。（进程是资源分配的最小单位）

- 线程：同一类线程共享代码和数据空间，每个线程有独立的运行栈和程序计数器(PC)，线程切换开销小。（线程是cpu调度的最小单位）

Java 给多线程编程提供了内置的支持。 一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。

线程和进程一样分为五个阶段：创建、就绪、运行、阻塞、终止。

　　**多进程**是指操作系统能同时运行多个任务（程序）。

　　**多线程**是指在同一程序中有多个顺序流在执行。

在*java*中要想实现多线程，有两种手段，一种是继承*Thread*类，另外一种是实现*Runable*接口.(**其实准确来讲，应该有三种，还有一种是实现Callable接口**，并与Future、线程池结合使用）

### 11.2扩展java.lang.Thread类

这里继承Thread类的方法是比较常用的一种，如果说你只是想起一条线程。没有什么其它特殊的要求，那么可以使用Thread.**推荐使用Runable**

```java
package com.multithread.learning;

class Thread1 extends Thread{
	private String name;
    public Thread1(String name) {
       this.name=name;
    }
	public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(name + "运行  :  " + i);
            try {
                sleep((int) Math.random() * 10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
       
	}
}
public class Main {
 
	public static void main(String[] args) {
		Thread1 mTh1=new Thread1("A");
		Thread1 mTh2=new Thread1("B");
		mTh1.start();
		mTh2.start();
 
	}
 
}
```

> 输出：
>
> 
>
> A运行 : 0
> B运行 : 0
> A运行 : 1
> A运行 : 2
> A运行 : 3
> A运行 : 4
> B运行 : 1
> B运行 : 2
> B运行 : 3
> B运行 : 4
>
> 再运行一下：
>
> A运行 : 0
> B运行 : 0
> B运行 : 1
> B运行 : 2
> B运行 : 3
> B运行 : 4
> A运行 : 1
> A运行 : 2
> A运行 : 3
> A运行 : 4

说明：

程序启动运行main时候，java虚拟机启动一个进程，主线程main在main()调用时候被创建。随着调用MitiSay的两个对象的start方法，另外两个线程也启动了，这样，整个应用就在多线程下运行。

注意：start()方法的调用后并不是立即执行多线程代码，而是使得该线程变为可运行态（Runnable），什么时候运行是由操作系统决定的。

从程序运行的结果可以发现，多线程程序是乱序执行。因此，只有乱序执行的代码才有必要设计为多线程。

Thread.sleep()方法调用目的是不让当前线程独自霸占该进程所获取的CPU资源，以留出一定时间给其他线程执行的机会。

实际上所有的多线程代码执行顺序都是不确定的，每次执行的结果都是随机的。

但是start方法重复调用的话，会出现java.lang.IllegalThreadStateException异常。



```java
		Thread1 mTh1=new Thread1("A");
		Thread1 mTh2=mTh1;
		mTh1.start();
		mTh2.start();
```


输出：

```java
Exception in thread "main" java.lang.IllegalThreadStateException
   at java.lang.Thread.start(Unknown Source)
   at com.multithread.learning.Main.main(Main.java:31)
A运行 : 0
A运行 : 1
A运行 : 2
A运行 : 3
A运行 : 4
```

### 11.3实现java.lang.Runnable接口

采用Runnable也是非常常见的一种，我们只需要重写run方法即可。

```java
package com.multithread.runnable;
class Thread2 implements Runnable{
	private String name;
 
	public Thread2(String name) {
		this.name=name;
	}
 
	@Override
	public void run() {
		  for (int i = 0; i < 5; i++) {
	            System.out.println(name + "运行  :  " + i);
	            try {
	            	Thread.sleep((int) Math.random() * 10);
	            } catch (InterruptedException e) {
	                e.printStackTrace();
	            }
	        }
		
	}
	
}
public class Main {
 
	public static void main(String[] args) {
		new Thread(new Thread2("C")).start();
		new Thread(new Thread2("D")).start();
	}
 
}
```

>  输出：
>
> C运行 : 0
> D运行 : 0
> D运行 : 1
> C运行 : 1
> D运行 : 2
> C运行 : 2
> D运行 : 3
> C运行 : 3
> D运行 : 4
> C运行 : 4

说明：

Thread2类通过实现Runnable接口，使得该类有了多线程类的特征。run（）方法是多线程程序的一个约定。所有的多线程代码都在run方法里面。Thread类实际上也是实现了Runnable接口的类。

在启动的多线程的时候，需要先通过Thread类的构造方法Thread(Runnable target) 构造出对象，然后调用Thread对象的start()方法来运行多线程代码。

实际上所有的多线程代码都是通过运行Thread的start()方法来运行的。因此，不管是扩展Thread类还是实现Runnable接口来实现多线程，最终还是通过Thread的对象的API来控制线程的，熟悉Thread类的API是进行多线程编程的基础。

### 11.4Thread和Runnable的区别

如果一个类继承Thread，则不适合资源共享。但是如果实现了Runable接口的话，则很容易的实现资源共享。



**总结：
**

**实现Runnable接口比继承Thread类所具有的优势：**

**1）：适合多个相同的程序代码的线程去处理同一个资源**

**2）：可以避免java中的单继承的限制**

**3）：增加程序的健壮性，代码可以被多个线程共享，代码和数据独立**

**4）：线程池只能放入实现Runable或callable类线程，不能直接放入继承Thread的类**



- **提醒一下大家：\main方法其实也是一个线程。在java中所有的线程都是同时启动的，至于什么时候，哪个先执行，完全看谁先得到CPU的资源。**

- 在java中，每次程序运行至少启动2个线程。一个是main线程，一个是垃圾收集线程。因为每当使用java命令执行一个类的时候，实际上都会启动一个ＪＶＭ，每一个ｊＶＭ实习在就是在操作系统中启动了一个进程。 

- 不要调用 Thread 类或 Runnable 对象的 run 方法。 直接调用 run 方法， 只会执行同 一个线程中的任务， 而不会启动新线程。应该调用 Thread.start 方法。这个方法将创建一 个执行 ran 方法的新线程。 

### 11.5线程状态转换

![](https://img-blog.csdn.net/20150309140927553)

1、新建状态（New）：新创建了一个线程对象。

2、就绪状态（Runnable）：线程对象创建后，其他线程调用了该对象的start()方法。该状态的线程位于可运行线程池中，变得可运行，等待获取CPU的使用权。

3、运行状态（Running）：就绪状态的线程获取了CPU，执行程序代码。

**4、阻塞状态（Blocked）：阻塞状态是线程因为某种原因放弃CPU使用权，暂时停止运行。直到线程进入就绪状态，才有机会转到运行状态。阻塞的情况分三种：**

**（一）、等待阻塞：运行的线程执行wait()方法，JVM会把该线程放入等待池中。(wait会释放持有的锁)**

**（二）、同步阻塞：运行的线程在获取对象的同步锁时，若该同步锁被别的线程占用，则JVM会把该线程放入锁池中。**

**（三）、其他阻塞：运行的线程执行sleep()或join()方法，或者发出了I/O请求时，JVM会把该线程置为阻塞状态。当sleep()状态超时、join()等待线程终止或者超时、或者I/O处理完毕时，线程重新转入就绪状态。（注意,sleep是不会释放持有的锁）**

5、死亡状态（Dead）：线程执行完了或者因异常退出了run()方法，该线程结束生命周期。

### 11.6 线程调度

1、调整线程优先级：Java线程有优先级，优先级高的线程会获得较多的运行机会。

 

Java线程的优先级用整数表示，取值范围是1~10，Thread类有以下三个静态常量：

```cpp
static int MAX_PRIORITY
          线程可以具有的最高优先级，取值为10。
static int MIN_PRIORITY
          线程可以具有的最低优先级，取值为1。
static int NORM_PRIORITY
          分配给线程的默认优先级，取值为5。
```

Thread类的setPriority()和getPriority()方法分别用来设置和获取线程的优先级。

 每个线程都有默认的优先级。主线程的默认优先级为Thread.NORM_PRIORITY。

线程的优先级有继承关系，比如A线程中创建了B线程，那么B将和A具有相同的优先级。

JVM提供了10个线程优先级，但与常见的操作系统都不能很好的映射。如果希望程序能移植到各个操作系统中，应该仅仅使用Thread类有以下三个静态常量作为优先级，这样能保证同样的优先级采用了同样的调度方式。

 

2、线程睡眠：Thread.sleep(long millis)方法，使线程转到阻塞状态。millis参数设定睡眠的时间，以毫秒为单位。当睡眠结束后，就转为就绪（Runnable）状态。sleep()平台移植性好。

 

3、线程等待：Object类中的wait()方法，导致当前的线程等待，直到其他线程调用此对象的 notify() 方法或 notifyAll() 唤醒方法。这个两个唤醒方法也是Object类中的方法，行为等价于调用 wait(0) 一样。

 

4、线程让步：Thread.yield() 方法，暂停当前正在执行的线程对象，把执行机会让给相同或者更高优先级的线程。

 

5、线程加入：join()方法，等待其他线程终止。在当前线程中调用另一个线程的join()方法，则当前线程转入阻塞状态，直到另一个进程运行结束，当前线程再由阻塞转为就绪状态。

 

6、线程唤醒：Object类中的notify()方法，唤醒在此对象监视器上等待的单个线程。如果所有线程都在此对象上等待，则会选择唤醒其中一个线程。选择是任意性的，并在对实现做出决定时发生。线程通过调用其中一个 wait 方法，在对象的监视器上等待。 直到当前的线程放弃此对象上的锁定，才能继续执行被唤醒的线程。被唤醒的线程将以常规方式与在该对象上主动同步的其他所有线程进行竞争；例如，唤醒的线程在作为锁定此对象的下一个线程方面没有可靠的特权或劣势。类似的方法还有一个notifyAll()，唤醒在此对象监视器上等待的所有线程。

 注意：Thread中suspend()和resume()两个方法在JDK1.5中已经废除，不再介绍。因为有死锁倾向。

### 11.7中断线程

没有可以强制线程终止的方法。然而，interrupt 方法可以用来请求终止线程。 

当对一个线程调用 interrupt 方法时，线程的中断状态将被置位。这是每一个线程都具有 的 boolean 标志。每个线程都应该不时地检査这个标志， 以判断线程是否被中断。

 

要想弄清中断状态是否被置位，首先调用静态的 Thread.currentThread 方法获得当前线 程， 然后调用 islnterrupted 方法：

```java
while (!Thread.currentThread().islnterrupted() && more work to do)

 { 
    
do more work
 
 }
```

中断一个线程不过是引起它 的注意。被中断的线程可以决定如何响应中断。某些线程是如此重要以至于应该处理完异常 后， 继续执行，而不理会中断。

 

### 11.8守护线程 

可以通过调用 t.setDaemon(true); 将线程转换为守护线程（daemon thread)

守护线程的唯一用途 是为其他线程提供服务

当只剩下守护线程时， 虚拟机就退出了

##  十二.[输入输出流](https://blog.csdn.net/nightcurtis/article/details/51324105?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control)

**Java流类图结构**

![](https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTcwMTA1MTgyMzQyMjI3)

|            |                          |                           |                     |                     |
| ---------- | ------------------------ | ------------------------- | ------------------- | ------------------- |
| 分类       | 字节输入流               | 字节输出流                | 字符输入流          | 字符输出流          |
| 抽象基类   | *InputStream*            | *OutputStream*            | *Reader*            | *Writer*            |
| 访问文件   | **FileInputStream**      | **FileOutputStream**      | **FileReader**      | **FileWriter**      |
| 访问数组   | **ByteArrayInputStream** | **ByteArrayOutputStream** | **CharArrayReader** | **CharArrayWriter** |
| 访问管道   | **PipedInputStream**     | **PipedOutputStream**     | **PipedReader**     | **PipedWriter**     |
| 访问字符串 |                          |                           | **StringReader**    | **StringWriter**    |
| 缓冲流     | BufferedInputStream      | BufferedOutputStream      | BufferedReader      | BufferedWriter      |
| 转换流     |                          |                           | InputStreamReader   | OutputStreamWriter  |
| 对象流     | ObjectInputStream        | ObjectOutputStream        |                     |                     |
| 抽象基类   | *FilterInputStream*      | *FilterOutputStream*      | *FilterReader*      | *FilterWriter*      |
| 打印流     |                          | PrintStream               |                     | PrintWriter         |
| 推回输入流 | PushbackInputStream      |                           | PushbackReader      |                     |
| 特殊流     | DataInputStream          | DataOutputStream          |                     |                     |

**一个真正懂IO流的程序员每次在使用IO流之前都会明确分析如下四点：**

（1）明确要操作的数据是数据源还是数据目的(也就是要读还是要写)
（2）明确要操作的设备上的数据是字节还是文本
（3）明确数据所在的具体设备
（4）明确是否需要额外功能（比如是否需要转换流、高效流等）

### 12.1File类

至于IO流，也就是输入输出流，从文件出发到文件结束，至始至终都离不开文件，所以IO流还得从文件File类讲起。

**1.1概述**

java.io.File 类是专门对文件进行操作的类，只能对文件本身进行操作，不能对文件内容进行操作。
java.io.File 类是文件和目录路径名的抽象表示，主要用于文件和目录的创建、查找和删除等操作。

怎么理解上面两句话？其实很简单！

第一句就是说File跟流无关，File类不能对文件进行读和写也就是输入和输出！
第二句就是说File主要表示类似D:\\文件目录1与D:\\文件目录1\\文件.txt,前者是文件夹（Directory）后者则是文件(file)，而File类就是操作这两者的类。

**1.2构造方法**

<img src="https://p1-tt.byteimg.com/origin/pgc-image/2de6b9ebdbe348e08b498eae920f1d62?from=pc"  />

比较常用的三个：

1、 public File(String pathname) ：通过将给定的**路径名字符串**转换为抽象路径名来创建新的 File实例。
2、 public File(String parent, String child) ：从**父路径名字符串和子路径名字符串**创建新的 File实例。
3、 public File(File parent, String child) ：从**父抽象路径名和子路径名字符串**创建新的 File实例。

File类的注意点：

一个File对象代表硬盘中实际存在的一个文件或者目录。File类构造方法不会给你检验这个文件或文件夹是否真实存在，因此无论该路径下是否存在文件或者目录，都不影响File对象的创建。

### 12.2 Io流的分类：

#### 12.2.1 按照流的流向分

- 输入流： 只能从中读取数据，而不能向其写入数据。
- 输出流：只能向其写入数据，而不能向其读取数据。

此处的输入,输出涉及一个方向的问题，对于如图15.1所示的数据流向，数据从内存到硬盘，通常称为输出流——也就是说，这里的输入，输出都是从程序运行所在的内存的角度来划分的。

> 注：如果从硬盘的角度来考虑，图15.1所示的数据流应该是输入流才对；但划分输入/输出流时是从程序运行所在的内存的角度来考虑的，因此如图15.1所在的流时输出流。而不是输入流。

    对于如图15.2所示的数据流向，数据从服务器通过网络流向客户端，在这种情况下,Server端的内存负责将数据输出到网络里，因此Server端的程序使用输出流；Client端的内存负责从网络中读取数据，因此Client端的程序应该使用输入流。

![](https://img-blog.csdn.net/20160505173519730)

#### 12.2.2按照操作单元划分

字节流和字符流的用法几乎完成全一样，区别在于字节流和字符流所操作的数据单元不同，字节流操作的单元是数据单元是8位的字节，字符流操作的是数据单元为16位的字符。

> 字节流主要是由InputStream和outPutStream作为基类，而字符流则主要有Reader和Writer作为基类。

#### 12.2.3 按照流的角色划分

  可以从/向一个特定的IO设备（如磁盘，网络）读/写数据的流，称为节点流。节点流也被称为低级流。图15.3显示了节点流的示意图。
    从图15.3中可以看出，当使用节点流进行输入和输出时，程序直接连接到实际的数据源，和实际的输入/输出节点连接。
处理流则用于对一个已存在的流进行连接和封装，通过封装后的流来实现数据的读/写功能。处理流也被称为高级流。图15.4显示了处理流的示意图。

![这里写图片描述](https://img-blog.csdn.net/20160505135650158)

    从图15.4可以看出，当使用处理流进行输入/输出时，程序并不会直接连接到实际的数据源，没有和实际的输入和输出节点连接。使用处理流的一个明显的好处是，只要使用相同的处理流，程序就可以采用完全相同的输入/输出代码来访问不同的数据源，随着处理流所包装的节点流的变化，程序实际所访问的数据源也相应的发生变化。

### 12.3流的原理

  java Io流共涉及40多个类，这些类看上去很杂乱，但实际上很有规则，而且彼此之间存在非常紧密的联系， Java Io流的40多个类都是从如下4个抽象类基类中派生出来的。

- **InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。**
- **OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。**

   对于InputStream和Reader而言，它们把输入设备抽象成为一个”水管“，这个水管的每个“水滴”依次排列，如图15.5所示：
    从图15.5可以看出，字节流和字符流的处理方式其实很相似，只是它们处理的输入/输出单位不同而已。输入流使用隐式的记录指针来表示当前正准备从哪个“水滴”开始读取，每当程序从InputStream或者Reader里面取出一个或者多个“水滴”后，记录指针自定向后移动；除此之外，InputStream和Reader里面都提供了一些方法来控制记录指针的移动。

![这里写图片描述](https://img-blog.csdn.net/20160505163728207)

   对于OutputStream和Writer而言，它们同样把输出设备抽象成一个”水管“，只是这个水管里面没有任何水滴，如图15.6所示：

   正如图15.6所示，当执行输出时，程序相当于依次把“水滴”放入到输出流的水管中，输出流同样采用隐示指针来标识当前水滴即将放入的位置，每当程序向OutputStream或者Writer里面输出一个或者多个水滴后，记录指针自动向后移动。
   图15.5和图15.6显示了java Io的基本概念模型，除此之外，Java的处理流模型则体现了Java输入和输出流设计的灵活性。处理流的功能主要体现在以下两个方面。

- 性能的提高：主要以增加缓冲的方式来提供输入和输出的效率。
- 操作的便捷：处理流可能提供了一系列便捷的方法来一次输入和输出大批量的内容，而不是输入/输出一个或者多个“水滴”。

    处理流可以“嫁接”在任何已存在的流的基础之上，这就允许Java应用程序采用相同的代码，透明的方式来访问不同的输入和输出设备的数据流。图15.7显示了处理流的模型。

### ![这里写图片描述](https://img-blog.csdn.net/20160505170600458)12.4常用的io流的用法

#### 12.4.1 Io体系的基类

**InputStream/Reader，OutputStream/Writer**

> 字节流和字符流的操作方式基本一致，只是操作的数据单元不同——字节流的操作单元是字节，字符流的操作单元是字符。所以字节流和字符流就整理在一起了。

InputStream和Reader是所有输入流的抽象基类，本身并不能创建实例来执行输入，但它们将成为所有输入流的模板，所以它们的方法是所有输入流都可使用的方法。
在InputStream里面包含如下3个方法。

- int read(); 从输入流中读取单个字节（相当于从图15.5所示的水管中取出一滴水），返回所读取的字节数据（字节数据可直接转换为int类型）。
- int read(byte[] b)从输入流中最多读取b.length个字节的数据，并将其存储在字节数组b中，返回实际读取的字节数。
- int read(byte[] b,int off,int len); 从输入流中最多读取len个字节的数据，并将其存储在数组b中，放入数组b中时，并不是从数组起点开始，而是从off位置开始，返回实际读取的字节数。

在Reader中包含如下3个方法。

- int read(); 从输入流中读取单个字符（相当于从图15.5所示的水管中取出一滴水），返回所读取的字符数据（字节数据可直接转换为int类型）。
- int read(char[] b)从输入流中最多读取b.length个字符的数据，并将其存储在字节数组b中，返回实际读取的字符数。
- int read(char[] b,int off,int len); 从输入流中最多读取len个字符的数据，并将其存储在数组b中，放入数组b中时，并不是从数组起点开始，而是从off位置开始，返回实际读取的字符数。

对比InputStream和Reader所提供的方法，就不难发现这两个基类的功能基本是一样的。InputStream和Reader都是将输入数据抽象成如图15.5所示的水管，所以程序即可以通过read()方法每次读取一个”水滴“，也可以通过read（char[] chuf）或者read（byte[] b）方法来读取多个“水滴”。当使用数组作为read（）方法中的参数, 我们可以理解为使用一个“竹筒”到如图15.5所示的水管中取水，如图15.8所示read(char[] cbuf)方法的参数可以理解成一个”竹筒“，程序每次调用输入流read(char[] cbuf)或read（byte[] b）方法，就相当于用“竹筒”从输入流中取出一筒“水滴”，程序得到“竹筒”里面的”水滴“后，转换成相应的数据即可；程序多次重复这个“取水”过程，直到最后。程序如何判断取水取到了最后呢？直到read（char[] chuf）或者read（byte[] b）方法返回-1，即表明到了输入流的结束点。

InputStream和Reader提供的一些移动指针的方法：

- void mark(int readAheadLimit); 在记录指针当前位置记录一个标记（mark）。
- boolean markSupported(); 判断此输入流是否支持mark()操作，即是否支持记录标记。
- void reset(); 将此流的记录指针重新定位到上一次记录标记（mark）的位置。
- long skip(long n); 记录指针向前移动n个字节/字符。

OutputStream和Writer：
OutputStream和Writer的用法也非常相似，它们采用如图15.6所示的模型来执行输入，两个流都提供了如下三个方法：

- void write(int c); 将指定的字节/字符输出到输出流中，其中c即可以代表字节，也可以代表字符。
- void write(byte[]/char[] buf); 将字节数组/字符数组中的数据输出到指定输出流中。
- void write(byte[]/char[] buf, int off,int len ); 将字节数组/字符数组中从off位置开始，长度为len的字节/字符输出到输出流中。

因为字符流直接以字符作为操作单位，所以Writer可以用字符串来代替字符数组，即以String对象作为参数。Writer里面还包含如下两个方法。

- void write(String str); 将str字符串里包含的字符输出到指定输出流中。
- void write (String str, int off, int len); 将str字符串里面从off位置开始，长度为len的字符输出到指定输出流中。

#### 12.4.2 Io体系的基类文件流的使用

前面说过InputStream和Reader都是抽象类，本身不能创建实例，但它们分别有一个用于读取文件的输入流：FileInputStream和FileReader，它们都是节点流——会直接和指定文件关联。下面程序示范使用FileInputStream和FileReader。

**使用FileInputStream读取文件：**

```java
public class MyClass {
  public  static void main(String[] args)throws IOException{
      FileInputStream fis=null;
      try {
          //创建字节输入流
          fis=new FileInputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\Test.txt");
          //创建一个长度为1024的竹筒
          byte[] b=new byte[1024];
          //用于保存的实际字节数
          int hasRead=0;
          //使用循环来重复取水的过程
          while((hasRead=fis.read(b))>0){
              //取出竹筒中的水滴（字节），将字节数组转换成字符串进行输出
            System.out.print(new String(b,0,hasRead));
          }
      }catch (IOException e){
        e.printStackTrace();
      }finally {
          fis.close();
      }
  }
}
```

注：上面程序最后使用了fis.close()来关闭该文件的输入流，与JDBC编程一样，程序里面打开的文件IO资源不属于内存的资源，垃圾回收机制无法回收该资源，所以应该显式的关闭打开的IO资源。Java 7改写了所有的IO资源类，它们都实现了AntoCloseable接口，因此都可以通过自动关闭资源的try语句来关闭这些Io流。

**使用FileReader读取文件：**

```java
public class FileReaderTest {
    public  static void main(String[] args)throws IOException{
        FileReader fis=null;
        try {
            //创建字节输入流
            fis=new FileReader("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\Test.txt");
            //创建一个长度为1024的竹筒
            char[] b=new char[1024];
            //用于保存的实际字节数
            int hasRead=0;
            //使用循环来重复取水的过程
            while((hasRead=fis.read(b))>0){
                //取出竹筒中的水滴（字节），将字节数组转换成字符串进行输出
                System.out.print(new String(b,0,hasRead));
            }
        }catch (IOException e){
            e.printStackTrace();
        }finally {
            fis.close();
        }
    }
}
```

可以看出使用FileInputStream和FileReader进行文件的读写并没有什么区别，只是操作单元不同而且。

FileOutputStream/FileWriter是Io中的文件输出流，下面介绍这两个类的用法。

**FileOutputStream的用法：**

```java
public class FileOutputStreamTest {
    public  static void main(String[] args)throws IOException {
        FileInputStream fis=null;
        FileOutputStream fos=null;
        try {
            //创建字节输入流
            fis=new FileInputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\Test.txt");
            //创建字节输出流
            fos=new FileOutputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\newTest.txt");

            byte[] b=new byte[1024];
            int hasRead=0;

            //循环从输入流中取出数据
            while((hasRead=fis.read(b))>0){
                //每读取一次，即写入文件输入流，读了多少，就写多少。
                fos.write(b,0,hasRead);
            }
        }catch (IOException e){
            e.printStackTrace();
        }finally {
            fis.close();
            fos.close();
        }
    }
}
```

运行程序可以看到输出流指定的目录下多了一个文件：newTest.txt, 该文件的内容和Test.txt文件的内容完全相同。FileWriter的使用方式和FileOutputStream基本类似，这里就带过。

> 注： 使用java的io流执行输出时，不要忘记关闭输出流，关闭输出流除了可以保证流的物理资源被回收之外，可能还可以将输出流缓冲区中的数据flush到物理节点中里（因为在执行close（）方法之前，自动执行输出流的flush（）方法）。java很多输出流默认都提供了缓存功能，其实我们没有必要刻意去记忆哪些流有缓存功能，哪些流没有，只有正常关闭所有的输出流即可保证程序正常。

缓冲流的使用（BufferedInputStream/BufferedReader, BufferedOutputStream/BufferedWriter）：
下面介绍字节缓存流的用法（字符缓存流的用法和字节缓存流一致就不介绍了）：

```java
public class BufferedStreamTest {
    public  static void main(String[] args)throws IOException {
        FileInputStream fis=null;
        FileOutputStream fos=null;
        BufferedInputStream bis=null;
        BufferedOutputStream bos=null;
        try {
            //创建字节输入流
            fis=new FileInputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\Test.txt");
            //创建字节输出流
            fos=new FileOutputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\newTest.txt");
            //创建字节缓存输入流
            bis=new BufferedInputStream(fis);
            //创建字节缓存输出流
            bos=new BufferedOutputStream(fos);

            byte[] b=new byte[1024];
            int hasRead=0;
            //循环从缓存流中读取数据
            while((hasRead=bis.read(b))>0){
                //向缓存流中写入数据，读取多少写入多少
                bos.write(b,0,hasRead);
            }
        }catch (IOException e){
            e.printStackTrace();
        }finally {
            bis.close();
            bos.close();
        }
    }
}

```

可以看到使用字节缓存流读取和写入数据的方式和文件流（FileInputStream,FileOutputStream）并没有什么不同，只是把处理流套接到文件流上进行读写。

> 上面代码中我们使用了缓存流和文件流，但是我们只关闭了缓存流。这个需要注意一下，当我们使用处理流套接到节点流上的使用的时候，只需要关闭最上层的处理就可以了。java会自动帮我们关闭下层的节点流。

#### 12.4.3转换流的使用

**InputStreamReader/OutputStreamWriter**

下面以获取键盘输入为例来介绍转换流的用法。java使用System.in代表输入。即键盘输入，但这个标准输入流是InputStream类的实例，使用不太方便，而且键盘输入内容都是文本内容，所以可以使用InputStreamReader将其包装成BufferedReader,利用BufferedReader的readLine()方法可以一次读取一行内容，如下代码所示:

```java
public class InputStreamReaderTest {
    public  static void main(String[] args)throws IOException {
        try {
            // 将System.in对象转化为Reader对象
            InputStreamReader reader=new InputStreamReader(System.in);
            //将普通的Reader包装成BufferedReader
            BufferedReader bufferedReader=new BufferedReader(reader);
           String buffer=null;
           while ((buffer=bufferedReader.readLine())!=null){
            // 如果读取到的字符串为“exit”,则程序退出
               if(buffer.equals("exit")){
                   System.exit(1);
               }
               //打印读取的内容
               System.out.print("输入内容："+buffer);
           }
        }catch (IOException e){
            e.printStackTrace();
        }finally {
        }
    }
}

```

上面程序将System.in包装成BufferedReader,BufferedReader流具有缓存功能，它可以一次读取一行文本——以换行符为标志，如果它没有读到换行符，则程序堵塞。等到读到换行符为止。运行上面程序可以发现这个特征，当我们在控制台执行输入时，只有按下回车键，程序才会打印出刚刚输入的内容。

#### 12.4.4对象流的使用

**ObjectInputStream/ObjectOutputStream**

写入对象：

```java

    public static void writeObject(){
        OutputStream outputStream=null;
        BufferedOutputStream buf=null;
        ObjectOutputStream obj=null;
        try {
            //序列化文件輸出流
            outputStream=new FileOutputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\myfile.tmp");
            //构建缓冲流
            buf=new BufferedOutputStream(outputStream);
            //构建字符输出的对象流
            obj=new ObjectOutputStream(buf);
            //序列化数据写入
            obj.writeObject(new Person("A", 21));//Person对象
            //关闭流
            obj.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
```

读取对象：

```java
    /**
     * 读取对象
     */
    public static void readObject() throws IOException {
        try {
            InputStream inputStream=new FileInputStream("E:\\learnproject\\Iotest\\lib\\src\\main\\java\\com\\myfile.tmp");
            //构建缓冲流
            BufferedInputStream buf=new BufferedInputStream(inputStream);
            //构建字符输入的对象流
            ObjectInputStream obj=new ObjectInputStream(buf);
            Person tempPerson=(Person)obj.readObject();
            System.out.println("Person对象为："+tempPerson);
            //关闭流
            obj.close();
            buf.close();
            inputStream.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
```

 使用对象流的一些注意事项
1.读取顺序和写入顺序一定要一致，不然会读取出错。
2.在对象属性前面加transient关键字，则该对象的属性不会被序列化。

### 12.5.何为NIO,和传统Io有何区别？

    我们使用InputStream从输入流中读取数据时，如果没有读取到有效的数据，程序将在此处阻塞该线程的执行。其实传统的输入里和输出流都是阻塞式的进行输入和输出。 不仅如此，传统的输入流、输出流都是通过字节的移动来处理的（即使我们不直接处理字节流，但底层实现还是依赖于字节处理），也就是说，面向流的输入和输出一次只能处理一个字节，因此面向流的输入和输出系统效率通常不高。
    从JDk1.4开始，java提供了一系列改进的输入和输出处理的新功能，这些功能被统称为新IO(NIO)。新增了许多用于处理输入和输出的类，这些类都被放在java.nio包及其子包下，并且对原io的很多类都以NIO为基础进行了改写。新增了满足NIO的功能。
    NIO采用了内存映射对象的方式来处理输入和输出，NIO将文件或者文件的一块区域映射到内存中，这样就可以像访问内存一样来访问文件了。通过这种方式来进行输入/输出比传统的输入和输出要快的多。

**JDk1.4使用NIO改写了传统Io后，传统Io的读写速度和NIO差不了太多。**

### 12.6.在开发中正确使用Io流

    了解了java io的整体类结构和每个类的一下特性后，我们可以在开发的过程中根据需要灵活的使用不同的Io流进行开发。下面是我整理2点原则:

- 如果是操作二进制文件那我们就使用字节流，如果操作的是文本文件那我们就使用字符流。
- 尽可能的多使用处理流，这会使我们的代码更加灵活，复用性更好。

## 十三.[网络编程](https://www.cnblogs.com/swordfall/p/10781281.html)

**1概述**：

计算机网络是通过传输介质、通信设施和网络通信协议，把分散在不同地点的计算机设备互连起来的，实现资源共享和数据传输的系统。网络编程就是编写程序使互联网的两个（或多个）设备（如计算机）之间进行数据传输。Java语言对网络编程提供了良好的支持。通过其提供的接口我们可以很方便地进行网络编程。

**2网络分层**

计算机网络20世纪60年代出现，经历了20世纪70年代、80年代和90年代的发展，进入21世纪后，计算机网络已经成为信息社会的基础设施，深入到人类社会的方方面面，与人们的工作、学习和生活息息相关。计算机网络分为网络协议和网络体系结构。

### 13.1网络体系结构

通过网络发送数据是一项复杂的操作，必须仔细地协调网络的物理特性以及所发送数据的逻辑特征。通过网络将数据从一台主机发送到另外的主机，这个过程是通过计算机网络通信来完成。

网络通信的不同方面被分解为多个层，层与层之间用接口连接。通信的双方具有相同的层次，层次实现的功能由协议数据单元（PDU）来描述。不同系统中的同一层构成对等层，对等层之间通过对等层协议进行通信，理解批次定义好的规则和约定。每一层表示为物理硬件（即线缆和电流）与所传输信息之间的不同抽象层次。在理论上，每一层只与紧挨其上和其下的层对话。将网络分层，这样就可以修改甚至替换某一层的软件，只要层与层之间的接口保持不变，就不会影响到其他层。

　　计算机网络体系结构是计算机网络层次和协议的集合，网络体系结构对计算机网络实现的功能，以及网络协议、层次、接口和服务进行了描述，但并不涉及具体的实现。接口是同一节点内相邻层之间交换信息的连接处，也叫服务访问点（SAP）。

![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503122042374-56172361.png)

　　　　　　　　　　　　　　　　计算机网络层次模型

　　世界上第一个网络体系结构由IBM公司提出（1974年，SNA），以后其他公司也相继提出自己的网络体系结构。为了促进计算机网络的发展，国际标准化组织ISO在现有网络的基础上，提出了不基于具体机型、操作系统或公司的网络体系结构，称为开放系统互连参考模型，即OSI/RM（Open System Interconnection Reference Model）。

　　ISO制定的OSI参考模型过于庞大、复杂招致了许多批评。与此相对，美国国防部提出了TCP/IP协议栈参考模型，简化了OSI参考模型，由于TCP/IP协议栈的简单，获得了广泛的应用，并成为后续因特网使用的参考模型。

#### 13.1.1OSI参考模型

这里首先介绍OSI参考模型。OSI模型把网络通信的工作分为7层，分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503140552307-1306184849.png)

- 物理层

　　物理层处于OSI的最底层，是整个开放系统的基础。物理层涉及通信信道上传输的原始比特流（bits），它的功能主要是为数据端设备提供传送数据的通路以及传输数据。

- 数据链路层

　　数据链路层的主要任务是实现计算机网络中相邻节点之间的可靠传输，把原始的、有差错的物理传输线加上数据链路协议以后，构成逻辑上可靠的数据链路。需要完成的功能有链路管理、成帧、差错控制以及流量控制等。其中成帧是对物理层的原始比特流进行界定，数据链路层也能够对帧的丢失进行处理。

- 网络层

　　网络层涉及源主机节点到目的主机节点之间可靠的网络传输，它需要完成的功能主要包括路由选择、网络寻址、流量控制、拥塞控制、网络互连等。

- 传输层

　　传输层起着承上启下的作用，涉及源端节点到目的端节点之间可靠的信息传输。传输层需要解决跨越网络连接的建立和释放，对底层不可靠的网络，建立连接时需要三次握手，释放连接时需要四次挥手。　　

- 会话层和表示层

　　会话层的主要功能是负责应用程序之间建立、维持和中断会话，同时也提供对设备和结点之间的会话控制，协调系统和服务之间的交流，并通过提供单工、半双工和全双工3种不同的通信方式，使系统和服务之间有序地进行通信。

　　表示层关心所传输数据信息的格式定义，其主要功能是把应用层提供的信息变换为能够共同理解的形式，提供字符代码、数据格式、控制信息格式、加密等的统一表示。

- 应用层

　　应用层为OSI的最高层，是直接为应用进程提供服务的。其作用是在实现多个系统应用进程相互通信的同时，完成一系列业务处理所需的服务。

#### 13.1.2TCP/IP参考模型

　TCP/IP，即Transmission Control Protocol/Internet Protocol的简写，中译名为传输控制协议/因特网互联协议，是Internet最基本的协议，Internet国际互联网络的基础。

　　TCP/IP协议是一个开放的网络协议簇，它的名字主要取自最重要的网络层IP协议和传输层TCP协议。TCP/IP协议定义了电子设备如何连入因特网，以及数据如何在它们之间传输的标准。TCP/IP参考模型采用4层的层级结构，每一层都呼叫它的下一层所提供的协议来完成自己的需求，这4个层次分别是：网络接口层、网络层（IP层）、传输层（TCP层）、应用层。

 　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503162526581-1315509304.gif)

- 网络接口层

　　TCP/IP协议对网络接口层没有给出具体的描述，网络接口层对应着OSI参考模型的物理层和数据链路层

- 网络层（IP层）

　　网络层是整个TCP/IP协议栈的核心。它的功能是把分组发往目标网络或主机。同时，为了尽快地发送分组，可能需要沿不同的路径同时进行分组传递。因此，分组到达的顺序和发送的顺序可能不同，这就需要上层必须对分组进行排序。网络层除了需要完成路由的功能外，也可以完成将不同类型的网络（异构网）互连的任务。除此之外，互联网层还需要完成拥塞控制的功能。

- 传输层（TCP层）

　　TCP层负责在应用进程之间建立端到端的连接和可靠通信，它只存在与端节点中。TCP层涉及两个协议，TCP和UDP。其中，TCP协议提供面向连接的服务，提供按字节流的有序、可靠传输，可以实现连接管理、差错控制、流量控制、拥塞控制等。UDP协议提供无连接的服务，用于不需要或无法实现面向连接的网络应用中。

- 应用层

　　应用层为Internet中的各种网络应用提供服务。

### 13.2网络协议

　如同人与人之间相互交流是需要遵循一定的规则（如语言）一样，计算机之间能够进行相互通信是因为它们都共同遵守一定的规则，即网络协议。

　　OSI参考模型和TCP/IP模型在不同的层次中有许多不同的网络协议，如图所示：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503164338008-348345936.png)

　　网络协议之间的关系图如下：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503165942538-1220277464.png)

####  13.2.1 IP协议

**（Internet protocol）**

 　IP协议的作用在于把各种数据包准确无误地传递给对方，其中两个重要的条件是IP地址和MAC地址。由于IP地址是稀有资源，不可能每个人都拥有一个IP地址，所以我们通常的IP地址是路由器给我们生成的IP地址，路由器里面会记录我们的MAC地址。而MAC地址是全球唯一的。举例，IP地址就如同是我们居住小区的地址，而MAC地址就是我们住的那栋楼那个房间那个人。IP地址采用的IPv4格式，目前正在向IPv6过渡。

#### 13.2.2 TCP协议

**（Transmission Control Protocol）**

　　TCP（传输控制协议）是面向连接的传输层协议。TCP层是位于IP层之上，应用层之下的中间层。不同主机的应用层之间经常需要可靠的、像管道一样的连接，但是IP层不提供这样的流机制，而是提供不可靠的包交换。TCP协议采用字节流传输数据。

##### 13.2.2.1TCP的报文格式

　TCP报文段包括协议首部和数据两部分，协议首部的固定部分是20个字节，首部的固定部分后面是选项部分。

 　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190504001611594-373661106.jpg)

　　下面是报文段首部各个字段的含义：

1. **源端口号以及目的端口号**：各占2个字节，端口是传输层和应用层的服务接口，用于寻找发送端和接收端的进程，一般来讲，通过端口号和IP地址，可以唯一确定一个TCP连接，在网络编程中，通常被称为一个socket接口。
2. **序号**：Seq序号，占4个字节、32位。用来标识从TCP发送端向TCP接收端发送的数据字节流。发起方发送数据时对此进行标记。
3. **确认序号**：Ack序号，占4个字节、32位。包含发送确认的一端所期望收到的下一个序号。只有ACK标记位为1时，确认序号字段才有效，因此，确认序号应该是上次已经成功收到数据字节序号加1，即Ack=Seq + 1。
4. **数据偏移**：占4个字节，用于指出TCP首部长度，若不存在选项，则这个值为20字节，数据偏移的最大值为60字节。
5. **保留字段**占6位，暂时可忽略，值全为0。
6. 标志位，6个
   - URG(紧急)：为1时表明紧急指针字段有效
   - ACK(确认)：为1时表明确认号字段有效
   - PSH(推送)：为1时接收方应尽快将这个报文段交给应用层
   - RST(复位)：为1时表明TCP连接出现故障必须重建连接
   - SYN(同步)：在连接建立时用来同步序号
   - FIN(终止)：为1时表明发送端数据发送完毕要求释放连接
7.  **接收窗口：**占2个字节，用于流量控制和拥塞控制，表示当前接收缓冲区的大小。在计算机网络中，通常是用接收方的接收能力的大小来控制发送方的数据发送量。TCP连接的一端根据缓冲区大小确定自己的接收窗口值，告诉对方，使对方可以确定发送数据的字节数。
8. **校验和：**占2个字节，范围包括首部和数据两部分。
9. 选项是可选的，默认情况是不选。

##### 13.2.2.2 三次握手与四次挥手

TCP是面向连接的协议，因此每个TCP连接都有3个阶段：连接建立、数据传送和连接释放。连接建立经历三个步骤，通常称为“三次握手”。

　　**TCP三次握手过程**如下：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503210424740-1764008697.jpg)

1. 第一次握手（客户端发送请求）

　　  客户机发送连接请求报文段到服务器，并进入SYN_SENT状态，等待服务器确认。发送连接请求报文段内容：SYN=1，seq=x；SYN=1意思是一个TCP的SYN标志位置为1的包，指明客户端打算连接的服务器的端口；seq=x表示客户端初始序号x，保存在包头的序列号（Sequence Number）字段里。

**TCP四次挥手过程**如下：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190503231436105-1355677452.png)

　　由于TCP连接是全双工的，因此每个方向都必须单独进行关闭。这原则是当一方完成它的数据发送任务后就能发送一个FIN来终止这个方向的连接。收到一个FIN只意味着这一方向上没有数据流动，一个TCP连接在收到一个FIN后仍能发送数据。首先进行关闭的一方将执行主动关闭，而另一方执行被动关闭。

　　1. TCP客户端发送一个FIN，用来关闭客户端到服务端的数据传送，客户端进入FIN_WAIT_1状态。发送报文段内容：FIN=1，seq=u；FIN=1表示请求切断连接；seq=u为客户端请求初始序号。

　　2. 服务端收到这个FIN，它发回一个ACK给客户端，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号；服务端进入CLOSE_WAIT状态。发送报文段内容：ACK=1，seq=v，ack=u+1；ACK=1为确认报文；seq=v为服务器确认初始序号；ack=u+1为客户端初始序号加1。

　　3. 服务器关闭客户端的连接后，发送一个FIN给客户端，服务端进入LAST_ACK状态。发送报文段内容：FIN=1，ACK=1，seq=w，ack=u+1；FIN=1为请求切断连接，ACK=1为确认报文，seq=w为服务端请求切断初始序号。

　　4. 客户端收到FIN后，客户端进入TIME_WAIT状态，接着发回一个ACK报文给服务端确认，并将确认序号设置为收到序号加1，服务端进入CLOSED状态，完成四次挥手。发送报文内容：ACK=1，seq=u+1，ack=w+1；ACK=1为确认报文，seq=u+1为客户端初始序号加1，ack=w+1为服务器初始序号加1。

　　注意：为什么连接的时候是三次握手，关闭的时候却是四次挥手？

　　　　因为当服务端收到客户端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当服务端收到FIN报文时，很可能并不会立即关闭socket，所以只能先回复一个ACK报文，告诉客户端，“你发的FIN报文，我收到了”。只有等到服务端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送，故需要四步挥手。

#### 13.2.3UDP协议

　UDP，用户数据报协议，它是TCP/IP协议簇中无连接的运输层协议。

1. UDP是一个非连接的协议，传输数据之前源端和终端不建立连接，当它想传送时就简单地去抓取来自应用程序的数据，并尽可能快地把它扔到网络上。在发送端，UDP传送数据的速度仅仅是受应用程序生成数据的速度、计算机的能力和传输带宽的限制；在接收端，UDP把每个消息段放在队列中，应用程序每次从队列中读一个消息段。
2. 由于传输数据不建立连接，因此也就不需要维护连接状态，包括收发状态等，因此一台服务器可同时向多个客户端传输相同的消息。
3. UDP信息包的标题很短，只有8个字节，相对于TCP的20个字节信息包的额外开销很小。
4. 吞吐量不受拥挤控制算法的调节，只受应用软件生成数据的速率、传输带宽、源端和终端主机性能的限制。
5. UDP使用尽量最大努力交付，即不保证可靠交付，因此主机不需要维持复杂的链接状态表。
6. UDP是面向报文的。发送方的UDP对应用程序交下来的报文，在添加首部受就向下交付给IP层。既不拆分，也不合并，而是保留这些报文的边界，因此，应用程序需要选择合适的报文大小。

#####  13.2.3.1 UDP协议格式

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190504154900038-1234898266.png)

　　UDP协议由两部分组成：首部和数据。其中，首部仅有8个字节，包括源端口和目的端口、长度（UDP用于数据报的长度）、校验和。

#####  13.2.3.2 TCP与UDP的区别

1. TCP基于连接，UDP是无连接的；
2. 对系统资源的要求，TCP较多，UDP较少；
3. UDP程序结构较简单；
4. TCP是流模式，而UDP是数据报模式；
5. TCP保证数据正确性，而UDP可能丢包；TCP保证数据顺序，而UDP不保证；

#### 13.2.4HTTP协议

HTTP，超文本传输协议，它是互联网上应用最为广泛的一种网络协议。HTTP是一种应用层协议，它是基于TCP协议之上的请求/响应式的协议。HTTP协议是Web浏览器和Web服务器之间通信的标准协议。HTTP指定客户端与服务器如何建立连接、客户端如何从服务器请求数据，服务器如何响应请求，以及最后如何关闭连接。HTTP连接使用TCP/IP来传输数据。

　　对于从客户端到服务器的每一个请求，都有4个步骤：

1. 默认情况下，客户端在端口80打开与服务器的一个TCP连接，URL中还可以指定其他端口。
2. 客户端向服务器发送消息，请求指定路径上的资源。这个资源包括一个首部，可选地（取决于请求的性质）还可以有一个空行，后面是这个请求的数据。
3. 服务器向客户端发送响应。响应以响应码开头，后面是包含数据的首部、一个空行以及所请求的文档或错误消息。
4. 服务器关闭连接。

　　现在使用的HTTP协议是HTTP/1.1版本，1997年之前采用的是HTTP1.0版本。HTTP连接在1.0版本中采用非持续连接工作方式，1.1版本采用的是持续连接工作方式，持续连接是指服务器在发送响应后仍然在一段时间内保持这条由TCP运输层协议建立起来的连接，使客户端和服务器可以继续在这条连接上传输HTTP报文。

　　是否采用持续连接工作方式，1.0中默认是关闭的，需要在HTTP头加入“Connection:Keep-Alive”，才能启用Keep-Alive。HTTP1.1中默认启用Keep-Alive，如果加入“Connection:close”，才关闭。目前大部分浏览器都是用HTTP1.1协议，也就是说默认都会发起Keep-Alive的连接请求了，所以是否能完成一个完整的Keep-Alive连接就看服务器设置情况。

##### 13.2.4.1HTTP报文

HTTP协议是基于TCP协议之上的请求/响应式协议，下面主要介绍HTTP报文的格式，HTTP报文主要有请求报文和响应报文两种。

　　首先看**HTTP请求报文的格式**：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190504230113716-231823746.png)

　　HTTP请求报文由**请求行、首部行和实体主体**组成，由浏览器发送给服务器。上面这张图中SP表示空格，cr lf表示回车和换行。下图是谷歌浏览器内访问服务器查看的HTTP请求例子：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190505002716130-1447539444.png)

 　**HTTP响应报文格式**：

 　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190505001517048-1489396333.png)

　　上面这张图是HTTP响应报文，它由**状态行、首部行和实体主体**组成。下图为HTTP响应报文例子：

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190505003116790-1900233646.png)

#####  13.2.4.2 HTTP请求方法和响应状态码

　　在上面的HTTP请求报文例子中，我们可以看到请求方法是GET，这表示请求读取由URL所标志的信息，除了GET，还有其他几种常用的方法。

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190505003337425-1910585386.png)

　　在HTTP响应报文的例子中，我们可以看到状态码是200，表示响应成功。下表是其他状态码，总共5大类，33种。

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190505004242552-665354194.png)

##### 13.2.4.3HTTP和HTTPS的区别

　HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单来说就是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。它是一个URL scheme（抽象标识符体系），句法类同http:体系，用于安全的HTTP数据传输。https:URL表明它使用了HTTP，但HTTPS存在不同于HTTP的默认端口及一个加密/身份验证层（在HTTP与TCP之间）。

　　超文本传输协议HTTP协议被用于在Web浏览器和网站服务器之间传递信息。HTTP协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此HTTP协议不适合传输一些敏感信息，比如信用开号、密码等。

　　为了解决HTTP协议的这一缺陷，需要使用另一种协议：安全套接字层超文本传输协议HTTPS。为了数据传输的安全，HTTPS在HTTP的基础上加入了SSL协议，SSL依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。

　　HTTPS和HTTP的区别主要为以下四点：

- https协议需要到ca申请证书，一般免费证书很少，需要缴费。
- http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
- http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
- http的连接很简单，是无状态的；https协议是有ssl+http协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

##### 13.2.4.4HTTP和TCP/IP协议的关系

网络中有一段比较容易理解的介绍：

　　“我们在传输数据时，可以只使用（传输层）TCP/IP协议，但是那样的话，如 果没有应用层，便无法识别数据内容，如果想要使传输的数据有意义，则必须使用到应用层协议，应用层协议有很多，比如HTTP、FTP、TELNET等，也 可以自己定义应用层协议。WEB使用HTTP协议作应用层协议，以封装HTTP文本信息，然后使用TCP/IP做传输层协议将它发到网络上。

### 13.3Java Socket网络编程

#### 13.3.1概述

　Java的网络编程主要涉及到的内容是**Socket编程**。Socket，套接字，就是两台主机之间逻辑连接的端点。TCP/IP协议是传输层协议，**主要解决数据如何在网络中传输**，而HTTP是应用层协议，**主要解决如何包装数据**。Socket是通信的基石，是支持TCP/IP协议的网络通信的基本操作单元。它是网络通信过程中端点的抽象表示，包含进行网络通信必须的五种信息：连接使用的协议、本地主机的IP地址、本地进程的协议端口、远程主机的IP地址、远程进程的协议端口。

应用层通过传输层进行数据通信时，TCP会遇到同时为多个应用程序进程提供并发服务的问题。多个TCP连接或多个应用程序进程可能需要通过同一个TCP协议端口传输数据。为了区别不同的应用程序进程和连接，许多计算机操作系统为**应用程序与TCP/IP协议**交互提供了套接字（Socket）接口。应用层可以和传输层通过Socket接口，区分来自不同应用程序进程或网络连接的通信，实现数据传输的并发服务。

Socket，实际上是对TCP/IP协议的封装，Socket本身并不是协议，而是一个调用接口（API），通过Socket，我们才能使用TCP/IP协议。实际上，Socket跟TCP/IP协议没有必然的关系，Socket编程接口在设计的时候，就希望也能适应其他的网络协议。所以说，Socket的出现，只是使得程序员更方便地使用TCP/IP协议栈而已，是对TCP/IP协议的抽象，从而形成了我们知道的一些最基本的函数接口，比如create、listen、accept、send、read和write等等。网络有一段关于socket和TCP/IP协议关系的说法比较容易理解：

　　“TCP/IP只是一个协议栈，就像操作系统的运行机制一样，必须要具体实现，同时还要提供对外的操作接口。这个就像操作系统会提供标准的编程接口，比如win32编程接口一样，TCP/IP也要提供可供程序员做网络开发所用的接口，这就是Socket编程接口。” 

 　实际上，传输层的TCP是基于网络层的IP协议的，而应用层的HTTP协议又是基于传输层的TCP协议的，而Socket本身不算是协议，就像上面所说，它只是提供了一个针对TCP或者UDP编程的接口。socket是对端口通信开发的工具,它要更底层一些。

#### 13.3.2 Socket整体流程

Socket编程主要涉及到客户端和服务端两个方面，首先是在服务器端创建一个服务器套接字（ServerSocket），并把它附加到一个端口上，服务器从这个端口监听连接。端口号的范围是0到65536，但是0到1024是为特权服务保留的端口号，我们可以选择任意一个当前没有被其他进程使用的端口。

　　客户端请求与服务器进行连接的时候，根据服务器的域名或者IP地址，加上端口号，打开一个套接字。当服务器接受连接后，服务器和客户端之间的通信就像输入输出流一样进行操作。

　　![img](https://img2018.cnblogs.com/blog/1217276/201905/1217276-20190505145914692-1580218673.png)

> 实例一

下面是一个客户端和服务器端进行数据交互的简单例子，客户端输入正方形的边长，服务器端接收到后计算面积并返回给客户端，通过这个例子可以初步对Socket编程有个把握。

- **服务器端**

```java
public class SocketServer {
    public static void main(String[] args) throws IOException {

        // 端口号
        int port = 7000;
        // 在端口上创建一个服务器套接字
        ServerSocket serverSocket = new ServerSocket(port);
        // 监听来自客户端的连接
        Socket socket = serverSocket.accept();

        DataInputStream dis = new DataInputStream(
                new BufferedInputStream(socket.getInputStream()));

        DataOutputStream dos = new DataOutputStream(
                new BufferedOutputStream(socket.getOutputStream()));

        do {
            double length = dis.readDouble();
            System.out.println("服务器端收到的边长数据为：" + length);
            double result = length * length;
            dos.writeDouble(result);
            dos.flush();
        } while (dis.readInt() != 0);

        socket.close();
        serverSocket.close();
    }
}
```

- **客户端**

```java
public class SocketClient {
    public static void main(String[] args) throws UnknownHostException, IOException {

        int port = 7000;
        String host = "localhost";

        // 创建一个套接字并将其连接到指定端口号
        Socket socket = new Socket(host, port);

        DataInputStream dis = new DataInputStream(
                new BufferedInputStream(socket.getInputStream()));

        DataOutputStream dos = new DataOutputStream(
                new BufferedOutputStream(socket.getOutputStream()));

        Scanner sc = new Scanner(System.in);

        boolean flag = false;

        while (!flag) {

            System.out.println("请输入正方形的边长:");
            double length = sc.nextDouble();

            dos.writeDouble(length);
            dos.flush();

            double area = dis.readDouble();

            System.out.println("服务器返回的计算面积为:" + area);

            while (true) {

                System.out.println("继续计算？(Y/N)");

                String str = sc.next();

                if (str.equalsIgnoreCase("N")) {
                    dos.writeInt(0);
                    dos.flush();
                    flag = true;
                    break;
                } else if (str.equalsIgnoreCase("Y")) {
                    dos.writeInt(1);
                    dos.flush();
                    break;
                }
            }
        }
        socket.close();
    }
}
```

> 实例二

可以看到上面的服务器端程序和客户端程序是一对一的关系，为了能让一个服务器端程序能同时为多个客户提供服务，可以使用多线程机制，每个客户端的请求都由一个独立的线程进行处理。下面是改写后的服务器端程序。

```java
public class SocketServerM {
    public static void main(String[] args) throws IOException {

        int port = 7000;
        int clientNo = 1;

        ServerSocket serverSocket = new ServerSocket(port);

        // 创建线程池
        ExecutorService exec = Executors.newCachedThreadPool();

        try {

            while (true) {
                Socket socket = serverSocket.accept();
                exec.execute(new SingleServer(socket, clientNo));
                clientNo++;
            }

        } finally {
            serverSocket.close();
        }

    }
}

class SingleServer implements Runnable {

    private Socket socket;
    private int clientNo;

    public SingleServer(Socket socket, int clientNo) {
        this.socket = socket;
        this.clientNo = clientNo;
    }

    @Override
    public void run() {

        try {

            DataInputStream dis = new DataInputStream(
                    new BufferedInputStream(socket.getInputStream()));

            DataOutputStream dos = new DataOutputStream(
                    new BufferedOutputStream(socket.getOutputStream()));

            do {

                double length = dis.readDouble();
                System.out.println("从客户端" + clientNo + "接收到的边长数据为：" + length);
                double result = length * length;
                dos.writeDouble(result);
                dos.flush();

            } while (dis.readInt() != 0);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            System.out.println("与客户端" + clientNo + "通信结束");
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

上面改进后的服务器端代码可以支持不断地并发响应网络中的客户请求。关键的地方在于多线程机制的运用，同时利用线程池可以改善服务器程序的性能。

## 十四.[注解](https://blog.csdn.net/javazejian/article/details/71860633)

> java注解是在JDK5时引入的新特性，鉴于目前大部分框架(如Spring)都使用了注解简化代码并提高编码的效率，因此掌握并深入理解注解对于一个Java工程师是来说是很有必要的事。本篇我们将通过以下几个角度来分析注解的相关知识点

### 14.1理解Java注解

实际上Java注解与普通修饰符(public、static、void等)的使用方式并没有多大区别，下面的例子是常见的注解：

```java
public class AnnotationDemo {
    //@Test注解修饰方法A
    @Test
    public static void A(){
        System.out.println("Test.....");
    }

    //一个方法上可以拥有多个不同的注解
    @Deprecated
    @SuppressWarnings("uncheck")
    public static void B(){

    }
}
```

通过在方法上使用@Test注解后，在运行该方法时，测试框架会自动识别该方法并单独调用，@Test实际上是一种标记注解，起标记作用，运行时告诉测试框架该方法为测试方法。而对于@Deprecated和@SuppressWarnings(“uncheck”)，则是Java本身内置的注解，在代码中，可以经常看见它们，但这并不是一件好事，毕竟当方法或是类上面有@Deprecated注解时，说明该方法或是类都已经过期不建议再用，@SuppressWarnings 则表示忽略指定警告，比如@SuppressWarnings(“uncheck”)，这就是注解的最简单的使用方式，那么下面我们就来看看注解定义的基本语法

### 14.2基本语法

#### 14.2.1声明注解与元注解

我们先来看看前面的Test注解是如何声明的：

```java
//声明Test注解
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Test {

} 
```

我们使用了`@interface`声明了Test注解，并使用`@Target`注解传入`ElementType.METHOD`参数来标明@Test只能用于方法上，`@Retention(RetentionPolicy.RUNTIME)`则用来表示该注解生存期是运行时，从代码上看注解的定义很像接口的定义，确实如此，毕竟在编译后也会生成Test.class文件。对于`@Target`和`@Retention`是由Java提供的元注解，所谓元注解就是标记其他注解的注解，下面分别介绍

---

- @Target 用来约束注解可以应用的地方（如方法、类或字段），其中ElementType是枚举类型，其定义如下，也代表可能的取值范围

```java
public enum ElementType {
    /**标明该注解可以用于类、接口（包括注解类型）或enum声明*/
    TYPE,

    /** 标明该注解可以用于字段(域)声明，包括enum实例 */
    FIELD,

    /** 标明该注解可以用于方法声明 */
    METHOD,

    /** 标明该注解可以用于参数声明 */
    PARAMETER,

    /** 标明注解可以用于构造函数声明 */
    CONSTRUCTOR,

    /** 标明注解可以用于局部变量声明 */
    LOCAL_VARIABLE,

    /** 标明注解可以用于注解声明(应用于另一个注解上)*/
    ANNOTATION_TYPE,

    /** 标明注解可以用于包声明 */
    PACKAGE,

    /**
     * 标明注解可以用于类型参数声明（1.8新加入）
     * @since 1.8
     */
    TYPE_PARAMETER,

    /**
     * 类型使用声明（1.8新加入)
     * @since 1.8
     */
    TYPE_USE
}
```

请注意，当注解未指定Target值时，则此注解可以用于任何元素之上，多个值使用{}包含并用逗号隔开，如下：

```java
@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})
```

---

- @Retention用来约束注解的生命周期，分别有三个值，源码级别（source），类文件级别（class）或者运行时级别（runtime），其含有如下：

- - SOURCE：注解将被编译器丢弃（该类型的注解信息只会保留在源码里，源码经过编译后，注解信息会被丢弃，不会保留在编译好的class文件里）
- - CLASS：注解在class文件中可用，但会被JVM丢弃（该类型的注解信息会保留在源码里和class文件里，在执行的时候，不会加载到虚拟机中），请注意，当注解未定义Retention值时，默认值是CLASS，如Java内置注解，@Override、@Deprecated、@SuppressWarnning等
- - RUNTIME：注解信息将在运行期(JVM)也保留，因此可以通过反射机制读取注解的信息（源码、class文件和执行的时候都有注解的信息），如SpringMvc中的@Controller、@Autowired、@RequestMapping等。

#### 14.2.2注解元素以及数据类型

通过上述对@Test注解的定义，我们了解了注解定义的过程，由于@Test内部没有定义其他元素，所以@Test也称为标记注解（marker annotation），但在自定义注解中，一般都会包含一些元素以表示某些值，方便处理器使用，这点在下面的例子将会看到：

```java
@Target(ElementType.TYPE)//只能应用于类上
@Retention(RetentionPolicy.RUNTIME)//保存到运行时
public @interface DBTable {
    String name() default "";
}
```

上述定义一个名为DBTable的注解，该用于主要用于数据库表与Bean类的映射（稍后会有完整案例分析），与前面Test注解不同的是，我们声明一个String类型的name元素，其默认值为空字符，但是必须注意到对应任何元素的声明应采用方法的声明方式，同时可选择使用default提供默认值，@DBTable使用方式如下：

```java
//在类上使用该注解
@DBTable(name = "MEMBER")
public class Member {
    //.......
}
```

关于注解支持的元素数据类型除了上述的String，还支持如下数据类型

- 所有基本类型（int,float,boolean,byte,double,char,long,short）
- String
- Class
- enum
- Annotation
- 上述类型的数组

倘若使用了其他数据类型，编译器将会丢出一个编译错误，注意，声明注解元素时可以使用基本类型但不允许使用任何包装类型，同时还应该注意到注解也可以作为元素的类型，也就是嵌套注解，下面的代码演示了上述类型的使用过程：

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface Reference{
    boolean next() default false;
}

public @interface AnnotationElementDemo {
    //枚举类型
    enum Status {FIXED,NORMAL};

    //声明枚举
    Status status() default Status.FIXED;

    //布尔类型
    boolean showSupport() default false;

    //String类型
    String name()default "";

    //class类型
    Class<?> testCase() default Void.class;

    //注解嵌套
    Reference reference() default @Reference(next=true);

    //数组类型
    long[] value();
}
```

**编译器对默认值的限制**

编译器对元素的默认值有些过分挑剔。首先，元素不能有不确定的值。也就是说，**元素必须要么具有默认值，要么在使用注解时提供元素的值**。其次，对于非基本类型的元素，无论是在源代码中声明，还是在注解接口中定义默认值，都不能以null作为值，这就是限制，没有什么利用可言，但造成一个元素的存在或缺失状态，因为每个注解的声明中，所有的元素都存在，并且都具有相应的值，为了绕开这个限制，只能定义一些特殊的值，例如空字符串或负数，表示某个元素不存在。

#### 14.2.3注解不支持继承

注解是不支持继承的，因此不能使用关键字extends来继承某个@interface，但注解在编译后，编译器会自动继承java.lang.annotation.Annotation接口，这里我们反编译前面定义的DBTable注解

```java
package com.zejian.annotationdemo;

import java.lang.annotation.Annotation;
//反编译后的代码
public interface DBTable extends Annotation
{
    public abstract String name();
}
```

虽然反编译后发现DBTable注解继承了Annotation接口，请记住，即使Java的接口可以实现多继承，但定义注解时依然无法使用extends关键字继承@interface。

#### 14.2.4赋值的快捷方式

所谓的快捷方式就是注解中定义了名为value的元素，并且在使用该注解时，如果**该元素是唯一需要赋值的一个元素**，那么此时无需使用key=value的语法，而只需在括号内给出value元素所需的值即可。这可以应用于任何合法类型的元素，**记住，这限制了元素名必须为value**，简单案例如下

```java
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@interface IntegerVaule{
    int value() default 0;
    String name() default "";
}

//使用注解
public class QuicklyWay {

    //当只想给value赋值时,可以使用以下快捷方式
    @IntegerVaule(20)
    public int age;

    //当name也需要赋值时必须采用key=value的方式赋值
    @IntegerVaule(value = 10000,name = "MONEY")
    public int money;

}
```

### 14.3Java内置注解与其它元注解

接着看看Java提供的内置注解，主要有3个，如下：

- @Override：用于标明此方法覆盖了父类的方法，源码如下

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.SOURCE)
public @interface Override {
}
```

- @Deprecated：用于标明已经过时的方法或类，源码如下，关于@Documented稍后分析： 

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})
public @interface Deprecated {
}
```

- @SuppressWarnnings:用于有选择的关闭编译器对类、方法、成员变量、变量初始化的警告，其实现源码如下： 

```java
@Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})
@Retention(RetentionPolicy.SOURCE)
public @interface SuppressWarnings {
    String[] value();
}
```

其内部有一个String数组，主要接收值如下：

```java
deprecation：使用了不赞成使用的类或方法时的警告；
unchecked：执行了未检查的转换时的警告，例如当使用集合时没有用泛型 (Generics) 来指定集合保存的类型; 
fallthrough：当 Switch 程序块直接通往下一种情况而没有 Break 时的警告;
path：在类路径、源文件路径等中有不存在的路径时的警告; 
serial：当在可序列化的类上缺少 serialVersionUID 定义时的警告; 
finally：任何 finally 子句不能正常完成时的警告; 
all：关于以上所有情况的警告。
```

这个三个注解比较简单，看个简单案例即可：

```java
//注明该类已过时，不建议使用
@Deprecated
class A{
    public void A(){ }

    //注明该方法已过时，不建议使用
    @Deprecated()
    public void B(){ }
}

class B extends A{

    @Override //标明覆盖父类A的A方法
    public void A() {
        super.A();
    }

    //去掉检测警告
    @SuppressWarnings({"uncheck","deprecation"})
    public void C(){ } 
    //去掉检测警告
    @SuppressWarnings("uncheck")
    public void D(){ }
}
```

前面我们分析了两种元注解，@Target和@Retention，除了这两种元注解，Java还提供了另外两种元注解，@Documented和@Inherited，下面分别介绍：

- @Documented 被修饰的注解会生成到javadoc中 

```java
@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DocumentA {
}

//没有使用@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DocumentB {
}

//使用注解
@DocumentA
@DocumentB
public class DocumentDemo {
    public void A(){
    }
}
```

使用javadoc命令生成文档：

```markdown
zejian@zejiandeMBP annotationdemo$ javadoc DocumentDemo.java DocumentA.java DocumentB.java 
```

![](https://img-blog.csdn.net/20170520150623393?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvamF2YXplamlhbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

可以发现使用@Documented元注解定义的注解(@DocumentA)将会生成到javadoc中,而@DocumentB则没有在doc文档中出现，这就是元注解@Documented的作用。

- @Inherited 可以让注解被继承，但这并不是真的继承，只是通过使用@Inherited，可以让子类Class对象使用getAnnotations()获取父类被@Inherited修饰的注解，如下：

```java
@Inherited
@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DocumentA {
}

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface DocumentB {
}

@DocumentA
class A{ }

class B extends A{ }

@DocumentB
class C{ }

class D extends C{ }

//测试
public class DocumentDemo {

    public static void main(String... args){
        A instanceA=new B();
        System.out.println("已使用的@Inherited注解:"+Arrays.toString(instanceA.getClass().getAnnotations()));

        C instanceC = new D();

        System.out.println("没有使用的@Inherited注解:"+Arrays.toString(instanceC.getClass().getAnnotations()));
    }

    /**
     * 运行结果:
     已使用的@Inherited注解:[@com.zejian.annotationdemo.DocumentA()]
     没有使用的@Inherited注解:[]
     */
}
```

### 14.4注解与反射机制

> 可以通过类的反射获取类的注解对象，注解对象可以直接调用注解的元素。然后编写注解处理器，根据类上的注解信息，对类做相应处理

前面经过反编译后，我们知道Java所有注解都继承了Annotation接口，也就是说　Java使用Annotation接口代表注解元素，该接口是所有Annotation类型的父接口。同时为了运行时能准确获取到注解的相关信息，Java在java.lang.reflect 反射包下新增了AnnotatedElement接口，它主要用于表示目前正在 VM 中运行的程序中已使用注解的元素，通过该接口提供的方法可以利用反射技术地读取注解的信息，如反射包的Constructor类、Field类、Method类、Package类和Class类都实现了AnnotatedElement接口，它简要含义如下（更多详细介绍可以看 [深入理解Java类型信息(Class对象)与反射机制](http://blog.csdn.net/javazejian/article/details/70768369)）：

> Class：类的Class对象定义 　
> Constructor：代表类的构造器定义 　
> Field：代表类的成员变量定义
> Method：代表类的方法定义 　
> Package：代表类的包定义

下面是AnnotatedElement中相关的API方法，以上5个类都实现以下的方法

| 返回值                   | 方法名称                                                     | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `<A extends Annotation>` | `getAnnotation(Class<A> annotationClass)`                    | 该元素如果存在指定类型的注解，则返回这些注解，否则返回 null。 |
| `Annotation[]`           | `getAnnotations()`                                           | 返回此元素上存在的所有注解，包括从父类继承的                 |
| `boolean`                | `isAnnotationPresent(Class<? extends Annotation> annotationClass)` | 如果指定类型的注解存在于此元素上，则返回 true，否则返回 false。 |
| `Annotation[]`           | `getDeclaredAnnotations()`                                   | 返回直接存在于此元素上的所有注解，注意，不包括父类的注解，调用者可以随意修改返回的数组；这不会对其他调用者返回的数组产生任何影响，没有则返回长度为0的数组 |

简单案例演示如下：

```java
package com.zejian.annotationdemo;

import java.lang.annotation.Annotation;
import java.util.Arrays;

/**
 * Created by zejian on 2017/5/20.
 * Blog : http://blog.csdn.net/javazejian [原文地址,请尊重原创]
 */
@DocumentA
class A{ }

//继承了A类
@DocumentB
public class DocumentDemo extends A{

    public static void main(String... args){

        Class<?> clazz = DocumentDemo.class;
        //根据指定注解类型获取该注解
        DocumentA documentA=clazz.getAnnotation(DocumentA.class);
        System.out.println("A:"+documentA);

        //获取该元素上的所有注解，包含从父类继承
        Annotation[] an= clazz.getAnnotations();
        System.out.println("an:"+ Arrays.toString(an));
        //获取该元素上的所有注解，但不包含继承！
        Annotation[] an2=clazz.getDeclaredAnnotations();
        System.out.println("an2:"+ Arrays.toString(an2));

        //判断注解DocumentA是否在该元素上
        boolean b=clazz.isAnnotationPresent(DocumentA.class);
        System.out.println("b:"+b);

        /**
         * 执行结果:
         A:@com.zejian.annotationdemo.DocumentA()
         an:[@com.zejian.annotationdemo.DocumentA(), @com.zejian.annotationdemo.DocumentB()]
         an2:@com.zejian.annotationdemo.DocumentB()
         b:true
         */
    }
}
```

### 14.5运行时注解处理器

了解完注解与反射的相关API后，现在通过一个实例（该例子是博主改编自《Tinking in Java》）来演示利用运行时注解来组装数据库SQL的构建语句的过程

```java
/**
 * Created by wuzejian on 2017/5/18.
 * 表注解
 */
@Target(ElementType.TYPE)//只能应用于类上
@Retention(RetentionPolicy.RUNTIME)//保存到运行时
public @interface DBTable {
    String name() default "";
}


/**
 * Created by wuzejian on 2017/5/18.
 * 注解Integer类型的字段
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface SQLInteger {
    //该字段对应数据库表列名
    String name() default "";
    //嵌套注解
    Constraints constraint() default @Constraints;
}


/**
 * Created by wuzejian on 2017/5/18.
 * 注解String类型的字段
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface SQLString {

    //对应数据库表的列名
    String name() default "";

    //列类型分配的长度，如varchar(30)的30
    int value() default 0;

    Constraints constraint() default @Constraints;
}


/**
 * Created by wuzejian on 2017/5/18.
 * 约束注解
 */

@Target(ElementType.FIELD)//只能应用在字段上
@Retention(RetentionPolicy.RUNTIME)
public @interface Constraints {
    //判断是否作为主键约束
    boolean primaryKey() default false;
    //判断是否允许为null
    boolean allowNull() default false;
    //判断是否唯一
    boolean unique() default false;
}

/**
 * Created by wuzejian on 2017/5/18.
 * 数据库表Member对应实例类bean
 */
@DBTable(name = "MEMBER")
public class Member {
    //主键ID
    @SQLString(name = "ID",value = 50, constraint = @Constraints(primaryKey = true))
    private String id;

    @SQLString(name = "NAME" , value = 30)
    private String name;

    @SQLInteger(name = "AGE")
    private int age;

    @SQLString(name = "DESCRIPTION" ,value = 150 , constraint = @Constraints(allowNull = true))
    private String description;//个人描述

   //省略set get.....
}
```

上述定义4个注解，分别是@DBTable(用于类上)、@Constraints(用于字段上)、 @SQLString(用于字段上)、@SQLString(用于字段上)并在Member类中使用这些注解，这些注解的作用的是用于帮助注解处理器生成创建数据库表MEMBER的构建语句，在这里有点需要注意的是，我们使用了嵌套注解@Constraints，该注解主要用于判断字段是否为null或者字段是否唯一。必须清楚认识到上述提供的注解生命周期必须为`@Retention(RetentionPolicy.RUNTIME)`，即运行时，这样才可以使用反射机制获取其信息。有了上述注解和使用，剩余的就是编写上述的注解处理器了，前面我们聊了很多注解，其处理器要么是Java自身已提供、要么是框架已提供的，我们自己都没有涉及到注解处理器的编写，但上述定义处理SQL的注解，其处理器必须由我们自己编写了，如下

```java
package com.zejian.annotationdemo;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

/**
 * 运行时注解处理器，构造表创建语句
 */
public class TableCreator {

  public static String createTableSql(String className) throws ClassNotFoundException {
    Class<?> cl = Class.forName(className);
    DBTable dbTable = cl.getAnnotation(DBTable.class);
    //如果没有表注解，直接返回
    if(dbTable == null) {
      System.out.println(
              "No DBTable annotations in class " + className);
      return null;
    }
    String tableName = dbTable.name();
    // If the name is empty, use the Class name:
    if(tableName.length() < 1)
      tableName = cl.getName().toUpperCase();
    List<String> columnDefs = new ArrayList<String>();
    //通过Class类API获取到所有成员字段
    for(Field field : cl.getDeclaredFields()) {
      String columnName = null;
      //获取字段上的注解
      Annotation[] anns = field.getDeclaredAnnotations();
      if(anns.length < 1)
        continue; // Not a db table column

      //判断注解类型
      if(anns[0] instanceof SQLInteger) {
        SQLInteger sInt = (SQLInteger) anns[0];
        //获取字段对应列名称，如果没有就是使用字段名称替代
        if(sInt.name().length() < 1)
          columnName = field.getName().toUpperCase();
        else
          columnName = sInt.name();
        //构建语句
        columnDefs.add(columnName + " INT" +
                getConstraints(sInt.constraint()));
      }
      //判断String类型
      if(anns[0] instanceof SQLString) {
        SQLString sString = (SQLString) anns[0];
        // Use field name if name not specified.
        if(sString.name().length() < 1)
          columnName = field.getName().toUpperCase();
        else
          columnName = sString.name();
        columnDefs.add(columnName + " VARCHAR(" +
                sString.value() + ")" +
                getConstraints(sString.constraint()));
      }


    }
    //数据库表构建语句
    StringBuilder createCommand = new StringBuilder(
            "CREATE TABLE " + tableName + "(");
    for(String columnDef : columnDefs)
      createCommand.append("\n    " + columnDef + ",");

    // Remove trailing comma
    String tableCreate = createCommand.substring(
            0, createCommand.length() - 1) + ");";
    return tableCreate;
  }


    /**
     * 判断该字段是否有其他约束
     * @param con
     * @return
     */
  private static String getConstraints(Constraints con) {
    String constraints = "";
    if(!con.allowNull())
      constraints += " NOT NULL";
    if(con.primaryKey())
      constraints += " PRIMARY KEY";
    if(con.unique())
      constraints += " UNIQUE";
    return constraints;
  }

  public static void main(String[] args) throws Exception {
    String[] arg={"com.zejian.annotationdemo.Member"};
    for(String className : arg) {
      System.out.println("Table Creation SQL for " +
              className + " is :\n" + createTableSql(className));
    }

    /**
     * 输出结果：
     Table Creation SQL for com.zejian.annotationdemo.Member is :
     CREATE TABLE MEMBER(
     ID VARCHAR(50) NOT NULL PRIMARY KEY,
     NAME VARCHAR(30) NOT NULL,
     AGE INT NOT NULL,
     DESCRIPTION VARCHAR(150)
     );
     */
  }
}
```

如果对反射比较熟悉的同学，上述代码就相对简单了，我们通过传递Member的全路径后通过Class.forName()方法获取到Member的class对象，然后利用Class对象中的方法获取所有成员字段Field，最后利用`field.getDeclaredAnnotations()`遍历每个Field上的注解再通过注解的类型判断来构建建表的SQL语句。这便是利用注解结合反射来构建SQL语句的简单的处理器模型，是否已回想起Hibernate？

### 14.6java8中的注解增强

#### 14.6.1元注解@Repeatable

元注解@Repeatable是JDK1.8新加入的，它表示在同一个位置重复相同的注解。在没有该注解前，一般是无法在同一个类型上使用相同的注解的

```java
//Java8前无法这样使用
@FilterPath("/web/update")
@FilterPath("/web/add")
public class A {}
```

Java8前如果是想实现类似的功能，我们需要在定义@FilterPath注解时定义一个数组元素接收多个值如下

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface FilterPath {
    String [] value();
}

//使用
@FilterPath({"/update","/add"})
public class A { }
```

但在Java8新增了@Repeatable注解后就可以采用如下的方式定义并使用了

```java
package com.zejian.annotationdemo;

import java.lang.annotation.*;

/**
 * Created by zejian on 2017/5/20.
 * Blog : http://blog.csdn.net/javazejian [原文地址,请尊重原创]
 */
//使用Java8新增@Repeatable原注解
@Target({ElementType.TYPE,ElementType.FIELD,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(FilterPaths.class)//参数指明接收的注解class
public @interface FilterPath {
    String  value();
}

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface FilterPaths {
    FilterPath[] value();
}

//使用案例
@FilterPath("/web/update")
@FilterPath("/web/add")
@FilterPath("/web/delete")
class AA{ }
```

我们可以简单理解为通过使用@Repeatable后，将使用@FilterPaths注解作为接收同一个类型上重复注解的容器，而每个@FilterPath则负责保存指定的路径串。为了处理上述的新增注解，Java8还在AnnotatedElement接口新增了getDeclaredAnnotationsByType() 和 getAnnotationsByType()两个方法并在接口给出了默认实现，在指定@Repeatable的注解时，可以通过这两个方法获取到注解相关信息。但请注意，旧版API中的getDeclaredAnnotation()和 getAnnotation()是不对@Repeatable注解的处理的(除非该注解没有在同一个声明上重复出现)。注意getDeclaredAnnotationsByType方法获取到的注解不包括父类，其实当 getAnnotationsByType()方法调用时，其内部先执行了getDeclaredAnnotationsByType方法，只有当前类不存在指定注解时，getAnnotationsByType()才会继续从其父类寻找，但请注意如果@FilterPath和@FilterPaths没有使用了@Inherited的话，仍然无法获取。下面通过代码来演示：

```java
/**
 * Created by zejian on 2017/5/20.
 * Blog : http://blog.csdn.net/javazejian [原文地址,请尊重原创]
 */
//使用Java8新增@Repeatable原注解
@Target({ElementType.TYPE,ElementType.FIELD,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(FilterPaths.class)
public @interface FilterPath {
    String  value();
}


@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface FilterPaths {
    FilterPath[] value();
}

@FilterPath("/web/list")
class CC { }

//使用案例
@FilterPath("/web/update")
@FilterPath("/web/add")
@FilterPath("/web/delete")
class AA extends CC{
    public static void main(String[] args) {

        Class<?> clazz = AA.class;
        //通过getAnnotationsByType方法获取所有重复注解
        FilterPath[] annotationsByType = clazz.getAnnotationsByType(FilterPath.class);
        FilterPath[] annotationsByType2 = clazz.getDeclaredAnnotationsByType(FilterPath.class);
        if (annotationsByType != null) {
            for (FilterPath filter : annotationsByType) {
                System.out.println("1:"+filter.value());
            }
        }

        System.out.println("-----------------");

        if (annotationsByType2 != null) {
            for (FilterPath filter : annotationsByType2) {
                System.out.println("2:"+filter.value());
            }
        }


        System.out.println("使用getAnnotation的结果:"+clazz.getAnnotation(FilterPath.class));


        /**
         * 执行结果(当前类拥有该注解FilterPath,则不会从CC父类寻找)
         1:/web/update
         1:/web/add
         1:/web/delete
         -----------------
         2:/web/update
         2:/web/add
         2:/web/delete
         使用getAnnotation的结果:null
         */
    }
}
```

从执行结果来看如果当前类拥有该注解@FilterPath,则getAnnotationsByType方法不会从CC父类寻找，下面看看另外一种情况，即AA类上没有@FilterPath注解

```java
/**
 * Created by zejian on 2017/5/20.
 * Blog : http://blog.csdn.net/javazejian [原文地址,请尊重原创]
 */
//使用Java8新增@Repeatable原注解
@Target({ElementType.TYPE,ElementType.FIELD,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Inherited //添加可继承元注解
@Repeatable(FilterPaths.class)
public @interface FilterPath {
    String  value();
}


@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Inherited //添加可继承元注解
@interface FilterPaths {
    FilterPath[] value();
}

@FilterPath("/web/list")
@FilterPath("/web/getList")
class CC { }

//AA上不使用@FilterPath注解,getAnnotationsByType将会从父类查询
class AA extends CC{
    public static void main(String[] args) {

        Class<?> clazz = AA.class;
        //通过getAnnotationsByType方法获取所有重复注解
        FilterPath[] annotationsByType = clazz.getAnnotationsByType(FilterPath.class);
        FilterPath[] annotationsByType2 = clazz.getDeclaredAnnotationsByType(FilterPath.class);
        if (annotationsByType != null) {
            for (FilterPath filter : annotationsByType) {
                System.out.println("1:"+filter.value());
            }
        }

        System.out.println("-----------------");

        if (annotationsByType2 != null) {
            for (FilterPath filter : annotationsByType2) {
                System.out.println("2:"+filter.value());
            }
        }


        System.out.println("使用getAnnotation的结果:"+clazz.getAnnotation(FilterPath.class));


        /**
         * 执行结果(当前类没有@FilterPath,getAnnotationsByType方法从CC父类寻找)
         1:/web/list
         1:/web/getList
         -----------------
         使用getAnnotation的结果:null
         */
    }
}
```

注意定义@FilterPath和@FilterPath时必须指明@Inherited，getAnnotationsByType方法否则依旧无法从父类获取@FilterPath注解，这是为什么呢，不妨看看getAnnotationsByType方法的实现源码：

```java
//接口默认实现方法
default <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass) {
//先调用getDeclaredAnnotationsByType方法
T[] result = getDeclaredAnnotationsByType(annotationClass);

//判断当前类获取到的注解数组是否为0
if (result.length == 0 && this instanceof Class && 
//判断定义注解上是否使用了@Inherited元注解 
 AnnotationType.getInstance(annotationClass).isInherited()) { // Inheritable
        //从父类获取
       Class<?> superClass = ((Class<?>) this).getSuperclass();
   if (superClass != null) {
      result = superClass.getAnnotationsByType(annotationClass);
       }
   }

   return result;
}
```

#### 14.6.2新增的两种ElementType

在Java8中 ElementType 新增两个枚举成员，TYPE_PARAMETER 和 TYPE_USE ，在Java8前注解只能标注在一个声明(如字段、类、方法)上，Java8后，新增的TYPE_PARAMETER可以用于标注类型参数，而TYPE_USE则可以用于标注任意类型(不包括class)。（详解看博客）