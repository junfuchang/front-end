# 不一样的 TypeScript 入门手册

![不一样的 TypeScript 入门手册](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cad7f1a9bd645e8bdb26d73cead810c~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)

## 前言

`TypeScript`是大势所趋，也是现在大厂必备技能，作为前端我们要与时俱进，此时不学，更待何时。

这篇文章可能不太适合 TS 纯小白，需要你对 TS 有一定的了解，这样的话，食用起来味道更佳。阅读的过程中一定要有耐心，不要急于求成，建议认真看完每一个字并且边学边敲，这样才能加深印象，不至于睡一觉就忘，浪费大把时间。从`JavaScript`过渡到`TypeScript`其实很简单，因为两者语法类似，学习成本并不高，掌握这篇文章中的内容足够日常使用。

社区里有不少关于`TypeScript`的文章，热门的我基本都看过，大佬们写的也确实很不错，膜拜！但是我觉得还可以站在巨人的肩膀上再完善一下，内容上对于新手可以再友好一些，篇幅上也可以再精简一点。另外我想通过写作的方式进一步巩固自己的 TS 知识，学而时习之，不亦说乎。

怀着这样的初衷，我开始动笔，如果这篇文章能帮助到你，那是我莫大的荣幸；如果你在阅读过程中发现错误或者不足之处，欢迎指正，我们共同进步。

## 什么是 TypeScript

想学好一门语言，我们首先要搞清楚它是什么。

`TypeScript`是微软开发的一个开源的编程语言，通过在`JavaScript`的基础上添加***\*静态类型定义\****构建而成。`TypeScript`可以通过`TypeScript编辑器`或 `Babel` 转译为 `JavaScript` 代码，可以运行在任何浏览器，任何操作系统。

`TypeScript` 起源于使用`JavaScript`开发的大型项目 。由于`JavaScript`语言本身的局限性，难以胜任和维护大型项目开发，因此微软开发了`TypeScript` ，使得其能够胜任开发大型项目。

**这些概念不用死记硬背，了解即可。**

简单总结：`TypeScript`是`JavaScript`的超集，具有类型系统并可以编译为纯`JavaScript`。

## 为什么要使用 TypeScript

任何一门语言的诞生和发展都是有缘由的，从某种程度上说，`TypeScript`的诞生是历史发展的必然。

Web 应用越来越复杂，导致`JavaScript`代码量激增，由于`JavaScript`是动态语言，很难做到类型检查，这直接导致很多语法问题在编译阶段无法被发现，只能在运行时暴露。(想想都头大)

而`TypeScript`是静态类型的语言，静态类型可以让编译器在编码阶段即时检测到各类语法错误。使用`TypeScript`进行开发，能够避免许多潜在的 bug 。

```
通过是否允许隐式转换来分类
强类型：TS
弱类型：JS

通过类型检查的时机来分类
静态类型：TS
动态类型：JS
复制代码
```

`TypeScript`给前端带来的好处主要有以下几点：

- **提高开发效率和代码质量**

  `TypeScript`不仅可以让编辑器进行智能提示和语法错误检查，还能够实现代码补全、接口提示、跳转到定义和代码重构等操作。现在你可能无法理解，等真正上手用起来，真香！

- **增强了代码的可读性和可维护性**

  一般来说，理解 C# 或者 Java 会比 JavaScript 更容易，因为他们都是强类型的，而且支持面向对象的特征。强类型语言本身就是一个很好的说明文档，大部分函数看类型定义就能明白大致如何使用。`JavaScript`很多库中利用了不少高级语言的特性，开发人员可能无法很好地理解其意图，而`TypeScript`可以协助我们解决这样的问题。

- **胜任大规模应用开发**

  使用`TypeScript`开发的项目，代码结构更加清晰、一致和简单，降低了代码后续维护和升级的难度。

也有小部分人质疑`TypeScript`，认为没必要去学习。在我看来，这不过是给自己的懒惰寻找借口，当大潮退去，才知道谁在裸泳。

## 搭建学习环境

强烈推荐一个官方的云编辑器 [Playground](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fzh%2Fplay%3F%23code%2FPTAEiJrQ5%2BMU3NAYlUAqBPADgUwMoGMBOBLFAF1EBR7QYb9AudUBh-gKBFEE34wejNAAOUCo5QTb9ADeUAXjQbPlAaP6BMxSqAwJUDVcoBiVQGbagAzlEqTLgLFAIW6BFf0CbXoCAGGnTCAKg0D3yoFO5E4CDNQNBygSDlAs56BO00Dw%2BoH95QBSugYO1AWP-79oUAFpQdkBYOUAseUAWD0B5dUBvuUBVeUAcOUB-SNU5BXRsfCJQVUAGdXtdegCgtkBleUAYrLSlTOJAW%2BjAVZtANz1AODlAaojALrkJXPzfIvZXQDi5QGlbQFXo4MAYFUqMlVABQEXowHxzQHylQF%2BA1UBMm0BG710aLAB7ADsAZ2IAQ32AUQAPE4BbFAAbNAA1E-wTgCNH0ABeUAAiAASaHu912oAA6rscPcACZ-HYHQ67R4AOlBAHMABRnK63B7PV54D6PACUenopkAnQ6Ab8VAFBy9lUoEAOASALk9ANHygFwCUCANCNmYAG00A36kcqgmQBhcoBjyMAL2aALE1AM6K-RqgAAo1SAQ-lAPYG2nh9G5gFAAwAESoATNIYgGy5QAXNoApxIagBQ5QAA%2BoBpzTcVEALqZscgUVSANDlADKugF%2BEwB6Ov0uLo-EA)

使用 Playground 就无需在本地安装环境，通过浏览器就可以随时学习`TypeScript`，综合体验也不比本地编辑器差，很适合新手使用。

## `TypeScript`初体验

```
const a: string = 1; // Type 'number' is not assignable to type 'string'
复制代码
```

上面这行代码与普通 JS 代码的区别是，在变量后面加了一个`:`和`string`，这代表只能给变量`a`赋`string`类型的值。我们将一个`number`类型的值赋值给变量 `a`，所以报错：number 类型不可分配给 string 类型。

在 TS 中，这叫做`类型注解`，`类型注解`是一种为函数或者变量添加约束的方式。

## 基本数据类型

### 八种内置类型

跟 JS 的八种内置类型一致：

```
const str: string = '中国万岁';
const num: number = '666';
const bool: boolean = true;
const u: undefined = undefined;
const n: null = null;
const big: bigint = 100n;
const sym: symbol = Symbol('me');
const obj: object = {x: 1};
复制代码
```

动手敲一敲，很容易理解。

**注意:**

### null 和 undefined

默认情况下`null`和`undefined`是所有类型的子类型，可以把`null`和`undefined`赋值给其它任何类型：

```
// null 和 undefined 赋值给 number
let num: number = 1;
num = null;
num = undefined;
 
// null 和 undefined 赋值给 boolean
let bool: boolean = false;
bool = null;
bool = undefined;

// null 和 undefined 赋值给 object
let obj: object = {};
obj = null;
obj = undefined;
复制代码
```

**如果在`tsconfig.json`里配置了`"strictNullChecks": true`，`null`就只能赋值给`any`、`unknown`和它本身的类型（null），`undefined`就只能赋值给`any`、`unknown`、`void`和它本身的类型（undefined）。**

### number 和 bigint

虽然`number`和`bigint`都表示数字，但是这两个类型并不兼容：

```
let big: bigint = 100n;
let num: number = 1;
num = big; // Type 'bigint' is not assignable to type 'number'
复制代码
```

## 其它类型

### Array

定义数组的类型有两种方式：

```
1. let arr: string[] = ['剑圣', '蛮王'];
2. let array: Array<string> = ['剑姬', '锐雯'];
复制代码
```

这两种写法都意味着，数组里面的值只能是 string 类型，否则就会报错：

```
arr.push(8); // Argument of type 'number' is not assignable to parameter of type 'string'
array = ['剑姬', '锐雯', 6]; // Type 'number' is not assignable to type 'string'
复制代码
```

推荐使用第一种写法。第二种是泛型写法，现在你不需要掌握，后面会讲到。

如果你不仅想在数组中存储 number 类型的值，还想存储 string 类型的值，可以这样写：

```
// 这叫联合类型数组，先了解一下。
let arr: (number | string)[] = [1, '1'];
复制代码
```

### 元组

#### 什么是元组

元组是 TS 特有的类型，跟数组类似。元组最重要的特征是可以**限制数组元素的个数和类型**，看栗子：

```
// [string, number] 就是元组类型。数组 x 的类型必须严格匹配，且个数必须为2
let x: [string, number]; 

x = ['Hi', 666]; // OK 
x = [666, 'Hi']; // error
x = ['Hi', 666, 888]; // error
复制代码
```

**注意：** 元组只能表示一个已知元素数量和类型的数组，越界就会报错。如果一个数组中可能有多种类型，且数量也不确定，那就直接使用 `any[]`。any 大家应该都不陌生吧，`anyScript`，YYDS !

#### 元组类型的解构赋值

元组同样支持解构赋值：

```
let arr: [string, number] = ['德玛西亚!', 666];
let [lol, action] = arr;
console.log(lol); // 德玛西亚!
console.log(action); // 666
复制代码
```

当元组中的元素较多时，这种方式就不可取了。另外需要注意，解构数组元素的个数是不能超过元组中元素个数的：

```
let arr: [string, number] = ['德玛西亚!', 666];
let [lol, action, hero] = arr; // Tuple type '[string, number]' of length '2' has no element at index '2'
复制代码
```

元组类型`[string, number]`的长度是 2，在位置索引 2 处没有任何元素。

#### 元组类型的可选元素

在定义元组类型时，我们也可以通过`?`来声明元组类型的可选元素：

```
// 要求包含一个必须的字符串属性，和一个可选的布尔值属性
let arr: [string, boolean?];

arr = ['一个能打的都没有', true];
console.log(arr); // ['一个能打的都没有', true]

arr = ['如果暴力不是为了杀戮'];
console.log(arr); // ['如果暴力不是为了杀戮']
复制代码
```

#### 元组类型的剩余元素

元组类型里**最后一个元素**可以是剩余元素，形式为`...x`，你可以把它当作 ES6 中的剩余参数。剩余元素代表元组类型是开放的，可以有0个或者多个额外的元素。例如，`[number, ...string[]]`表示带有一个`number`类型的元素和任意数量`string`类型的元素的元组类型。举个栗子：

```
let arr: [number, ...string[]];
arr = [1, '赵信']; // ok
arr = [1, '赵信', '吕布', '亚索']; // ok
复制代码
```

#### 只读的元组类型

我们可以为任何元组类型加上`readonly`关键字前缀，使其成为只读元组：

```
const arr: readonly [string, number] = ['断剑重铸之日', 666];
复制代码
```

在使用`readonly`关键字修饰元组类型后，任何企图改变元组中元素的操作都会报错：

```
// Cannot assign to '0' because it is a read-only property
arr[0] = '骑士归来之时';

// Property 'push' does not exist on type 'readonly [number, string]'
arr.push(6);
复制代码
```

### 函数

#### 函数声明

```
function sum(x: number, y: number): number {
    return x + y;
}
复制代码
```

上面这段代码表示，`sum`函数接收两个`number`类型的参数，并且它的返回值也是`number`类型。

#### 函数表达式

```
const sum = function (x: number, y: number): number {
    return x + y;
}
复制代码
```

#### 箭头函数

```
const sum = (x: number, y: number): number => x + y; 
复制代码
```

#### 可选参数

```
function queryUserInfo(name: string, age?: number) {
    if (age) {
        return `我叫${name},${age}岁`;
    }
    return `我叫${name},年龄保密`;
}

queryUserInfo('王思聪', 18); // 我叫王思聪，18岁（有钱人永远18岁！）
queryUserInfo('孙一宁'); // 我叫孙一宁，年龄保密
复制代码
```

**注意：** 可选参数后面不允许再出现必需参数：

```
// 报错：A required parameter cannot follow an optional parameter
function queryUserInfo(name: string, age?: number, sex: string) {
    ...
}
复制代码
```

#### 参数默认值

可以给参数一个默认值，当调用者没有传该参数或者传入了`undefined`时，这个默认值就生效了。

```
function queryUserInfo(name: string, age: number, sex: string = '不详') {
    return `姓名:${name}，年龄:${age}，性别:${sex}`; 
}

queryUserInfo('xxx', 26); // 姓名:xxx，年龄:26，性别:不详
复制代码
```

**注意：** 有默认值的参数也可放置在必需参数的前面，如果想要触发这个参数的默认值，必须要主动的传入`undefined`才可以。

#### 剩余参数

```
function push(arr: any[], ...items: any[]) {
    items.forEach(item => arr.push(item));
}

let array: any[] = [];
push(array, 1, 2, 3, '迪丽热巴', '古力娜扎');
console.log(array); // [1, 2, 3, '迪丽热巴', '古力娜扎']
复制代码
```

#### 函数重载

由于 JS 是动态类型语言，我们经常会使用不同类型的参数来调用同一个函数，该函数会根据不同的参数返回不同类型的调用结果：

```
function sum(x, y) {
    return x + y;
}

sum(1, 2); // 3
sum('1', '2'); // 12 (string)
复制代码
```

以上代码可以在`TS`中直接使用，但是如果开启`noImplicitAny`配置项，那么就会提示错误信息：

```
Parameter 'x' implicitly has an 'any' type
Parameter 'y' implicitly has an 'any' type
复制代码
```

该提示信息告诉我们：参数 x 和参数 y 隐式具有`any`类型。为了解决这个问题，就要给参数定义类型。

此时我们希望`sum`函数的入参可以同时支持`string`和`number`类型，所以我们可以先定义一个联合类型`string | number`，再给这个联合类型取个名字：

```
type UnionType = string | number;
复制代码
```

这叫做`类型别名`，先了解一下，也不难理解～

接下来我们重写一下`sum`函数：

```
function sum(x: UnionType, y: UnionType) {
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    return x + y;
}
复制代码
```

为`sum`函数的参数显示地设置类型之后，错误提示就消失了。下面我们验证一下：

```
const res = sum('你', '好');
res.split('');
复制代码
```

一切看起来似乎很正常，我们想当然的认为`res`变量的类型为`string`，所以我们可以正常调用字符串方法`split`。但此时 TS 编译器却报错了：

```
Property 'split' does not exist on type 'string | number'
Property 'split' does not exist on type 'number'
复制代码
```

类型`number`上不存在`split`属性。该如何解决？`函数重载`闪亮登场。

**函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力**，要解决上面的问题，就要为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。看栗子：

```
type UnionType = number | string;
function sum(x: number, y: number): number;
function sum(x: string, y: string): string;
function sum(x: string, y: number): string;
function sum(x: number, y: string): string;
function sum(x: UnionType, y: UnionType) {
    if (typeof x === 'string' || typeof y === 'string') {
        return x.toString() + y.toString();
    }
    return x + y;
}

const res = sum('你', '好');
res.split('');
复制代码
```

上面的栗子中，我们为`sum`函数提供了各种情况的函数类型定义，从而实现函数的重载，解决了报错问题。此处强烈建议大家动手敲一遍，根据不同函数类型定义进行验证，加深印象。

### any

在 TS 中，任何类型都可以被归为`any`类型，`any`类型是类型系统的顶级类型。

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```
let a: string = '伊泽瑞尔，你需要地图吗？';
a = 666; // Type 'number' is not assignable to type 'string'
复制代码
```

但如果是`any`类型，则允许被赋值为任意类型：

```
let a: any = 666;
a = '哈哈哈';
a = false;
a = null;
a = undfined;
a = [];
a = {};
复制代码
```

如果变量在声明的时候，未指定其类型，那么它会被识别为`any`类型：

```
let something;
something = '啦啦啦';
something = 888;
something = false;
复制代码
```

等价于：

```
let something: any;
something = '啦啦啦';
something = 888;
something = false;
复制代码
```

使用`any`类型就失去了使用`TS`的意义，长此以往会放松我们对自己的要求，尽量不要使用`any`。

### unknown

`unknown`与`any`十分相似，所有类型都可以分配给`unknown`类型：

```
let a: unknown = 250;
a = '面对疾风吧!';
a = true;
复制代码
```

`unknown`与`any`最大的区别是：**任何类型的值都可以赋值给`any`，同时`any`类型的值也可以赋值给任何类型（`never`除外）。任何类型的值都可以赋值给`unknown`，但`unknown`类型的值只能赋值给`unknown`和`any`**：

```
let a: unknown = 520;
let b: any = a; // ok

let a: any = 520;
let b: unknown = a // ok

let a: unknown = 520;
let b: number = a; // error
复制代码
```

如果不缩小类型，就无法对`unknown`类型执行任何操作：

```
function battle() {
    return 'victory !'
}

const record: unknown = {hero: battle};
record.hero(); // error
复制代码
```

这种机制起到了很强的预防性，更安全。

我们可以使用`typeof`或者`类型断言`等方式来缩小未知范围：

```
const a: unknown = '超神!';
a.split(''); // error

if (typeof a === 'string') {
    a.split(''); // ok
}

// 类型断言，后面会讲到
(a as string).split(''); // ok
复制代码
```

### void

`void`表示没有任何类型，和其它类型是平等关系，不能直接赋值：

```
let a: void;
let b: number = a; // Type 'void' is not assignable to type 'number'
复制代码
```

声明一个`void`类型的变量没有什么意义，一般只有在函数没有返回值时才会使用到它。

### never

`never`类型表示的是那些永不存在的值的类型。

值会永不存在的两种情况：

1. 如果一个函数执行时抛出了异常，那么这个函数就永远不存在返回值；
2. 函数中执行无限循环的代码，也就是死循环。

```
// 抛出异常
function error(msg: string): never { // ok
    throw new Error(msg);
}

// 死循环
function loopForever(): never { // ok
    while (true) {}
}
复制代码
```

`never`类型同 `null`和`undefined`一样，也是任何类型的子类型，也可以赋值给任何类型。

但是没有类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外），即使`any`也不可以赋值给`never`：

```
let a: never;
let b: never;
let c: any;

a = 250; // error
a = b; // ok
a = c; // error
复制代码
```

在 TS 中，可以利用`never`类型的特性来实现全面性检查，看栗子：

```
type Type = string | number;

function inspectWithNever(param: Type) {
    if (typeof param === 'string') {
        // 在这里收窄为 string 类型
    } else if (typeof param === 'number') {
        // 在这里收窄为 number 类型
    } else {
        // 在这里是 never 类型
        const check: never = param;
    }
}
复制代码
```

在 else 分支里，我们把既不是`string`类型也不是`number`类型的`param`赋值给了一个显式声明的`never`类型的变量，如果一切逻辑正确，那么就可以编译通过。假如有一天你的同事修改了`Type`的类型：

```
type Type = string | number | boolean;
复制代码
```

然而他忘记了同时修改`inspectWithNever`方法中的控制流程，这时`else`分支的`param`类型会被收窄为`boolean`类型，导致无法赋值给`never`类型，此时就会出现一个错误提示。

通过这种方法，我们可以确保`inspectWithNever`方法总是穷尽了`Type`的所有可能类型，使得代码的类型绝对安全。

### object、Object、{}

- object：以下称`小object`
- Object：以下称`大Object`
- {}：以下称`空对象`

`小object`代表的是所有非原始类型，也就是说我们不能把`number` `string`等原始类型赋值给`小object`。在严格模式下，`null`和`undefined`类型也不能赋值给`小object`。

```
以下类型被视为原始类型：string、number、boolean、null、undefined、bigInt、symbol。
复制代码
```

看栗子：

```
let obj: object;

obj = 1; // error
obj = '人在塔在!'; // error
obj = true; // error
obj = null; // error
obj = undefined; // error
obj = 100n; // error
obj = Symbol(); // error
obj = {}; // ok
复制代码
```

`大Object`代表所有拥有`toString` `hasOwnProperty`方法的类型，所以，所有原始类型和非原始类型都可以赋值给`大Object`。同样，在严格模式下`null`和 `undefined`类型也不能赋给`大Object`：

```
let obj: Object;

obj = 1; // ok
obj = '人在塔在!'; // ok
obj = true; // ok
obj = null; // error
obj = undefined; // error
obj = 100n; // ok
obj = Symbol(); // ok
obj = {}; // ok
复制代码
```

从上面的栗子中可以看出，`大Object`包含原始类型，而`小object`仅包含非原始类型。你可能会想，那么`大Object`是不是`小object`的父类型？实际上，`大Object`不仅是`小object`的父类型，同时也是`小object`的子类型。为了证明这一点，我们举个🌰：

```
type FatherType = object extends Object ? true : false; // true
type ChildType  = Object extends object ? true : false; // true
复制代码
```

**注意：** 尽管官网文档上说可以使用`小object`代替`大Object`，但是我们任需知道它们之间的区别。

`空对象`和`大Object`可以互相代替，它们两的特性一致。

### Number、String、Boolean、Symbol

首字母大写的`Number` `String` `Boolean` `Symbol`很容易与小写的原始类型`number` `string` `boolean` `symbol`混淆，前者是相应原始类型的**包装对象**，我愿称之为**对象类型**。

从类型兼容性上看，对象类型兼容对应的原始类型，而反过来原始类型不兼容对应的对象类型：

```
let a: number = 520;
let b: Number = 250;

a = b; // Type 'Number' is not assignable to type 'number'
b = a; // ok
复制代码
```

**注意：** 不要使用对象类型来注解值的类型，没有任何意义。

## 类型推断

先看栗子：

```
let str: string = '我的大刀早已饥渴难耐!'; // let str: string
let num: number = 250; // let num: number
let bool: boolean = false; // let bool: boolean

const str: string = '我的大刀早已饥渴难耐!'; // const str: string
const num: number = 250; // const num: number
const bool: boolean = false; // const bool: boolean
复制代码
```

上面的栗子中，使用 let 定义变量时，我们写明了类型注解，因为值可能会改变。可是，使用 const 常量时还需要写明类型注解，有没有觉得有点麻烦？好在 TS 已经考虑到了这个问题。

在很多情况下，TS 会根据上下文环境自动地推断出变量的类型，无需我们再写明类型注解。上面的栗子可以简化：

```
let str = '我的大刀早已饥渴难耐!'; // 同上
let num = 250; // 同上
let bool = false; // 同上

const str = '我的大刀早已饥渴难耐!'; // const str: "我的大刀早已饥渴难耐!"
const num = 250; // const num: 250
const bool = false; // const bool: false
复制代码
```

我们把 TS 这种基于赋值表达式推断类型的能力称之为`类型推断`。

在 TS 中，函数返回值、具有初始化值的变量、有默认值的函数参数的类型都可以根据上下文推断出来。例如根据 return 语句推断函数返回值的类型：

```
function sum(x: number, y: number) {
    return x + y;
}
const value = sum(1, 2); // 推断出 value 的类型是 number

//

function sum(x: number, y = 2) {
    return x + y;
}
const value = sum(1); // 推断出 value 的类型是 number
const v = sum(1, '2'); // Argument of type '"2"' is not assignable to parameter of type 'number | undefined'
复制代码
```

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断为`any`类型：

```
let a; // let a: any
a = '你的剑，就是我的剑';
a = 666;
a = true;
复制代码
```

## 类型断言

有时候我们会遇到这样的情况，你会比 TS 更了解某个值的详细信息，你清楚的知道它的类型比现有类型更加确切：

```
const arr: number[] = [1, 2, 3];
const res: number = arr.find(num => num > 2); // Type 'undefined' is not assignable to type 'number'
复制代码
```

上例中，`res`的值一定是 3，所以它的类型应该是`number`。但是 TS 的类型检测无法做到绝对智能，在 TS 看来，`res`的类型既可能是`number`也可能是`undefined`，所以提示错误信息：不能把`undefined`类型分配给`number`类型。

此时，`类型断言`就派上用场了。类型断言是一种笃定的方式，它只作用于类型层面的强制类型转换（可以理解成一种暂时的善意的谎言，不会影响运行效果），告诉编译器应该按照我们的方式来做类型检查。

### as

使用`as`语法做类型断言：

```
const arr: number[] = [1, 2, 3]; 
const res: number = arr.find(num => num > 2) as number;
复制代码
```

### 尖括号

另外还可以使用`尖括号`语法做类型断言：

```
const value: any = '我好想射点什么!';
const valueLength: number = (<string>value).length;
复制代码
```

**注意：** 以上两种语法虽然没有区别，但是`尖括号`格式会与 react 中的 JSX 产生语法冲突，因此更推荐使用`as`语法。

### 非空断言

当类型检查系统无法从上下文中断定类型时，非空断言操作符`!`可以用来断言操作对象是非`null`和`undefined`类型。简单说就是，`v!`将从 v 的值域中排除掉`null`和`undefined`：

```
let v: null | undefined | string;
v.toString(); // Object is possibly 'null' or 'undefined'
v!.toString(); // ok
复制代码
type FuncType = () => number;

function fn(getNum: FuncType | undefined) {
    // Object is possibly 'undefined'
    // Cannot invoke an object which is possibly 'undefined'
    const value1 = getNum();
    const value2 = getNum!(); // ok
}
复制代码
```

### 确定赋值断言

TS 允许我们在实例属性和变量声明后面添加一个`!`，用来告诉类型系统该属性会被明确地赋值。先看一个栗子：

```
let x: number;
init();

console.log(x + 1); // Variable 'x' is used before being assigned

function init() {
    x = 1;
}
复制代码
```

上面的栗子中，提示错误信息：变量 x 在赋值之前被使用。我们可以用`确定赋值断言`来解决这个问题：

```
let x!: number;
init();

console.log(x + 1); // ok

function init() {
    x = 1;
}
复制代码
```

通过`let x!: number`确定赋值断言，TS 编译器就会知道该属性会被明确地赋值。

**注意：** `!`不要轻易使用，如果值本身就是`null`或者`undefined`，使用`!`仅仅是绕过了检查，程序仍会报错。

## 字面量类型

在 TS 中，字面量不仅可以表示值，还可以表示类型，即字面量类型。

目前支持三种字面量类型：字符串字面量类型、数字字面量类型、布尔值字面量类型，对应的字符串字面量、数字字面量、布尔值字面量分别拥有与其值一样的字面量类型：

```
let x: '是时候表演真正的技术了!' = '是时候表演真正的技术了!';
let y: 666 = 666;
let z: false = false;
复制代码
```

对此你可能会有一些疑惑。冒号后面的`'是时候表演真正的技术了!`在这里表示一个`字符串字面量类型`，它其实是`string`类型，准确地说是`string`类型的`子类型`。而`string`类型不一定是`字符串字面量类型`，举个栗子：

```
let a: '长枪依在!' = '长枪依在!';
let b: string = '你要来几发么?';
a = b; // Type 'string' is not assignable to type '"长枪依在!"'
b = a; // ok
复制代码
```

上面的栗子同样适用于其它字面量类型。实际上，定义单个的字面量类型并没有太大的用处，它真正的应用场景是把多个字面量类型组合成一个联合类型，用来描述有明确成员的实用的集合。联合类型后面会讲到，我们先看下栗子：

```
type Direction = 'up' | 'down';

function move(dir: Direction) {
   // ...
}

move('up'); // ok
move('left'); // Argument of type '"left"' is not assignable to parameter of type 'Direction'
复制代码
```

通过使用字面量类型组合而成的联合类型，我们可以限制函数的入参为更具体的类型。这既提升了代码的可读性，也更加安全。

**let 和 const**

```
const str = '我还以为你从来都不会选我呢'; // str: '我还以为你从来都不会选我呢'
const num = 1; // num: 1
const bool = true; // bool: true
复制代码
```

上面代码中，我们用`const`定义不可变的常量，在没有添加类型注解的情况下，TS 推断出常量的类型为**赋值字面量的类型**。再看如下代码：

```
let str = '我还以为你从来都不会选我呢'; // str: string
let num = 1; // num: number
let bool = true; // bool: boolean
复制代码
```

我们没有给使用`let`定义的变量显式地添加类型注解，但是变量的类型自动地转换成了赋值字面量类型的爸爸类型。

这种设计符合编程预期，所以我们可以将任何`string`类型的值赋给`str`，也可以将任何`number`类型的值赋给`num`：

```
str = '我还没脚软呢，泥腿子!';
num = 888;
bool = false;
复制代码
```

我们将 TS 的字面量子类型自动转换成爸爸类型的这种设计称之为`字面量类型的拓宽`，下面会重点讲解：

## 类型拓宽

所有通过`let`和`var`定义的变量、函数的形参、对象的非只读属性，如果满足指定了初始值且未显式添加类型注解的条件，那么它们推断出来的类型就是指定的初始值字面量类型拓宽后的类型，这就是字面量类型拓宽。

```
let str = '我用双手成就你的梦想'; // str: string

let fn = (x = '奉均衡之命!') => x; // fn: (x?: string) => string

const a = '明智之选'; // a: '明智之选'
let b = a; // b: string
let func = (c = a) => c; // func: (c?: string) => string 
复制代码
```

上面的栗子一定要认真看完，结合概念去理解。加油，程序猴！

除了字面量类型拓宽之外，TS 对某些特定类型值也有类似类型拓宽的设计。例如对`null`和`undefined`的类型进行拓宽，通过`let` `var`定义的变量如果满足未显式添加类型注解且被赋予了`null`或`undefined`值，则推断出这些变量的类型为`any`：

```
let x = null; // x: any
let y = undefined; // y: any

const a = null; // a: null;
const b = undefined; // b: undefined
复制代码
```

再来个🌰强化下：

```
type ObjType = {
    a: number;
    b: number;
    c: number;
}

type KeyType = 'a' | 'b' | 'c';

function fn(object: ObjType, key: KeyType) {
    return object[key];
}

let object = {a: 123, b: 456, c: 789};
let key = 'a';
fn(object, key); // Argument of type 'string' is not assignable to parameter of type '"a" | "b" | "c"'
复制代码
```

看起来似乎挺正常，可为啥会提示错误信息呢？这是因为**变量`key`的类型被推断成了`string`类型（类型拓宽）**，但是函数期望它的第二个参数是一个更具体的类型，所以报错。

TS 提供了一些控制拓宽过程的方法，其中一种是使用`const`，如果用`const`声明一个变量，那么它的类型会更窄：

```
type ObjType = {
    a: number;
    b: number;
    c: number;
}

type KeyType = 'a' | 'b' | 'c';

function fn(object: ObjType, key: KeyType) {
    return object[key];
}

let object = {a: 123, b: 456, c: 789};
const key = 'a'; // ok
fn(object, key);
复制代码
```

我们使用`const`成功解决了上面的报错问题。然而`const`有时却不起作用：

```
const obj = {
    x: 250,
}

obj.x = 520; // ok
obj.x = '520'; // Type 'string' is not assignable to type 'number'
obj.y = 1314; // Property 'y' does not exist on type '{ x: number; }'
复制代码
```

对于对象而言，TS 的拓宽算法会将其内部属性视为赋值给`let`关键字声明的变量，进而来推断其属性的类型。因此，`obj`的类型为`{x: number}`。`obj.x`的值可以是任何`number`类型的值，但不允许是`string`类型的，同时也不允许给`obj`对象添加其它的属性。

要解决上面的问题，我们可以使用`const断言`。它跟 var、let、const 没有任何关系，不要混淆。

🌰：

```
// TS: {x: number; y: number}
const obj1 = {
    x: 1,
    y: 2,
}

// TS: {x: 1; y: number}
const obj2 = {
    x: 1 as const,
    y: 2,
}

// TS: {readonly x: 1; readonly y: 2}
const obj3 = {
    x: 1,
    y: 2,
} as const;

const arr1 = [1, 2, 3]; // TS: number[]
const arr2 = [1, 2, 3] as const; // TS: readonly [1, 2, 3]
复制代码
```

当在某个值后面使用了`const断言`时，TS 会为这个值推断出最窄的类型，没有拓宽。对于真正的常量，这通常是你想要的。

有类型拓宽，自然就有类型缩小。

## 类型缩小

在 TS 中，我们可以通过一些操作将变量的类型由一个较为宽泛的集合缩小为相对较小、较明确的集合，这就是**类型缩小**。

```
let fn = (a: any) => {
    if (typeof a === 'string') {
        return a;
    } else if (typeof a === 'number') {
        return a;
    }
    return null;
}
复制代码
```

上面的栗子中，我们利用**类型守卫**将函数参数的类型从`any`缩小为明确的类型，hover 到第三行的`a`提示变量类型是`string`，第五行则提示变量类型是`number`。

还可以利用类型守卫将联合类型缩小为明确的子类型：

```
let fn = (a: string | number) => {
    if (typeof a === 'string') {
        return a; // a: string
    } else {
        return a; // a: number
    }
}
复制代码
```

## 联合类型

联合类型是多种类型的集合，用来约束取值只能是某几个值中的一个，使用`|`分隔每个类型：

```
let a: string | number;
a = '火焰，是我最喜欢的玩具！'; // ok
a = 666; // ok
复制代码
```

联合类型经常与`null`或`undefined`一起使用：

```
const fn = (a: string | undefined) => {
    ...
}

fn('哈哈哈'); // ok
fn(undefined); // ok
fn(888); // Argument of type '888' is not assignable to parameter of type 'string | undefined'
复制代码
```

`a`的类型是联合类型： `string | undefined`，如果传入`number`类型的值就会报错。

## 类型别名

类型别名就是用`type`关键字给一个类型取个新名字，常用于联合类型：

```
type Id = number | number[]; // 别名以大写字母开头
const delete = (id: Id) => {
    ...
}
复制代码
```

类型别名只是给类型取一个新名字，而不是新创建一个类型。

## 交叉类型

交叉类型是将多个类型合并为一个类型，这让我们可以把现有的多种类型叠加到一起成为一种类型。使用`&`定义交叉类型：

```
type Value = string & number;
复制代码
```

很显然，上面定义的交叉类型是没有任何意义的，因为没有任何类型可以既是`string`类型又是`number`类型，两者不能同时满足，Value的类型是`never`。

交叉类型真正的用武之地是将多个接口类型合并成一个类型，从而实现类似于继承的效果：

```
interface Type1 {
    name: string;
    sex: string;
}

interface Type2 {
    age: number;
}

type NewType = Type1 & Type2;
const person: NewType = {
    name: '金克丝',
    sex: '女',
    age: 19,
    address: '诺克萨斯', // error
}
复制代码
```

上栗中，我们将`Type1`和`Type2`通过交叉类型合并为`NewType`，使得`NewType`同时拥有了 name、sex、age 属性。

`interface`是定义**接口**的关键字，我们马上就会学习。如果你比较迷惑，试着理解下这个栗子：

```
type PersonType = {name: string, sex: string} & {age: number};
const person: PersonType = {
    name: '凯特琳',
    sex: '女',
    age: 21,
}
复制代码
```

扩展一下，如果合并的多个接口类型中存在同名属性会是什么效果呢？

```
type PersonType = {name: string, sex: string} & {age: number, name: number};
复制代码
```

如果同名属性的类型不兼容，如上例中的 name 属性，那么合并后的类型就是`string & number`，即`never`。

```
const person: PersonType = {
    name: '艾希', // Type 'string' is not assignable to type 'never'
    sex: '女',
    age: 18,
}
复制代码
```

如果同名属性的类型兼容，例如一个是`number`，另一个是`number`的子类型(数字字面量类型)，合并后 name 属性的类型就是两者中的子类型：

```
type PersonType = {name: string, age: number} & {sex: string, age: 18};

const person: PersonType = {
    name: '阿木木',
    sex: '男',
    age: 19, // Type '19' is not assignable to type '18'
}
复制代码
```

上栗中，age 属性的类型就是数字字面量 18，所以，不能将 18 以外的任何值赋给 age 属性。

如果同名属性是非基本数据类型呢？

```
interface X {
    o: {a: string},
}

interface Y {
    o: {b: number},
}

interface Z {
    o: {c: boolean},
}

type XYZ = X & Y & Z;

const xyz: XYZ = {
    o: {
        a: '啊哈哈',
        b: 666,
        c: true,
    }
}
复制代码
```

在混入多个类型时，若存在相同的成员且成员为非基本数据类型，那么是可以成功合并的。

## 接口

前面有小部分内容提到过**接口**，你可能云里雾里，没关系，我们现在深入学习。

### 什么是接口

在 TS 中，我们使用接口（interfaces）来定义对象的类型，换句话说就是使用接口对「对象的形状」进行描述。看栗子会更加清晰直观：

```
interface Person { // 接口首字母通常大写
    name: string;
    age: number;
}

const jack: Person = {
    name: 'Jack',
    age: 21,
}
复制代码
```

上栗中，我们使用`interface`关键字定义了一个接口`Person`，接着定义了一个变量`jack`，`jack`的类型是`Person`，这样就约束了`jack`的形状必须和接口`Person`一致。

定义的变量比接口少了一些属性是不允许的：

```
interface Person { 
    name: string;
    age: number;
}

// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'
const jack: Person = {
    name: 'Jack',
}
复制代码
```

多一些属性也是不允许的：

```
interface Person { 
    name: string;
    age: number;
}

const jack: Person = {
    name: 'Jack',
    age: 21,
    sex: '男', // Object literal may only specify known properties, and 'sex' does not exist in type 'Person'
}
复制代码
```

**赋值时变量的形状必须和接口的形状保持一致**。

### 只读属性

```
interface Person {
    readonly name: string; // 只读属性
}
复制代码
```

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用`readonly`定义只读属性：

```
interface Person {
    readonly id: number;
    name: string; 
    age: number; 
}

const jack: Person = {
    id: 1,
    name: 'Jack',
    age: 21,
}

jack.id = 123; // Cannot assign to 'id' because it is a read-only property
复制代码
```

上栗中，使用`readonly`定义的属性`id`初始化后又被赋值，所以报错。

**注意**：只读的约束作用于第一次给对象赋值的时候，而非第一次给只读属性赋值的时候，举例说明：

```
interface Person {
    readonly id: number;
    name: string;
    age: number;
}

// Property 'id' is missing in type '{ name: string; age: number; }' but required in type 'Person'
const vincent: Person = {
    name: 'Vincent',
    age: 23,
}

vincent.id = 123; // Cannot assign to 'id' because it is a read-only property
复制代码
```

上栗中，有两处报错：

- 对 vincent 进行赋值时，没有给 id 赋值
- 给 vincent.id 赋值时，由于它是只读属性，所以报错了

### 可选属性

```
interface Person {
    age?: number; // 可选属性
}
复制代码
```

可选属性是指该属性可以不存在，当我们希望不用完全匹配一个形状时，可以用可选属性：

```
interface Person {
    name: string;
    age: number;
    sex?: string;
}

const jack: Person = { // ok
    name: 'Jack',
    age: 21,
} 

const ruth: Person = { // ok
    name: 'Ruth',
    age: 18,
    sex: '女',
} 

const mary: Person = {
    name: 'Mary',
    age: 19,
    sex: '女',
    address: '杭州', // error 仍然不允许添加未定义的属性
}
复制代码
```

### 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```
interface Person {
    name: string;
    age?: number;
    [propName: string]: any; // 这叫索引签名
}

const monroe: Person = {
    name: 'Monroe',
    address: '杭州',
    email: 'xxxxxxxxx',
}
复制代码
```

使用`[propName: string]`定义了任意属性取`string`类型的值，`propName`的写法不是固定的，也可以写成其它值，例如`[key: string]`。一个接口中只能定义一个任意属性。

**注意**：一旦定义了任意属性，那么接口中其它的确定属性和可选属性的类型都必须是任意属性类型的子集。

```
interface Person {
    name: string; // Property 'name' of type 'string' is not assignable to 'string' index type 'number'
    [propName: string]: number;
}
复制代码
```

上栗中，任意属性的类型允许是 number，但确定属性 name 的类型是 string，string 不是 number 的子集，所以报错。

我们再看一个栗子：

```
interface Person {
    name?: string; // Property 'name' of type 'string | undefined' is not assignable to 'string' index type 'string'
    [propName: string]: string;
}
复制代码
```

你有没有感到疑惑？属性 name 的类型是 string，任意属性的类型是 string，符合要求，为啥会报错？

因为 name 是可选属性，name 的类型其实是 **string | undefined**，不是 string 的子集，所以报错。

如果接口中有多个类型的属性，可以在任意属性中使用联合类型：

```
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number | undefined;
}
复制代码
```

### 绕开额外属性检查的方法

#### 鸭式辨型法

像鸭子一样走路并且嘎嘎叫的就叫鸭子，即具有鸭子特征的就认为它是鸭子。所谓的鸭式辨型法，就是通过制定规则来判定对象是否实现这个接口。举个例子：

```
interface Person {
    name: string;
}

function getPersonInfo(personObj: Person) {
    console.log(personObj.name);
}

getPersonInfo({name: '德莱文', age: 27}); // error
复制代码
interface Person {
    name: string;
}

function getPersonInfo(personObj: Person) {
    console.log(personObj.name);
}

const psObj = {name: '德莱文', age: 27};

getPersonInfo(psObj); // ok
复制代码
```

上面的栗子中，在参数里写对象就相当于直接给`personObj`赋值，这个对象有严格的类型定义，所以不能多参或者少参。

而当我们在外面将该对象用另一个变量`psObj`接收，`psObj`不会经过额外属性检查，但是会根据类型推论为`const psObj: {name: string, age: number} = {name: '德莱文', age: 27}`。然后将`psObj`再赋值给`personObj`，此时根据类型的兼容性，参照「鸭式辨型法」，两个类型因为都具有`name`属性，所以被认定为相同，故而可以用此方法来绕开多余的类型检查。

#### 类型断言

类型断言的意义就等同于你在告诉程序，你很清楚自己在做什么，此时程序就不会再进行额外的属性检查了：

```
interface Person {
    name: string;
    age?: number;
}

const pete: Person = {
    name: 'Pete',
    age: 25,
    sex: '男',
} as Person; // ok
复制代码
```

#### 索引签名

```
interface Person {
    name: string;
    age?: number;
    sex: string;
    [propName: string]: any;
}

const trump: Person = {
    name: 'Trump',
    sex: '男',
    // ok
    address: 'Mars',
    phoneNumber: 123456,
}
复制代码
```

## 接口与类型别名的区别

在大多数情况下，使用**接口**和**类型别名**的效果是等价的，但是在某些特定的场景下，这两者还是存在很大区别的。

**interface（接口）**：

TS 的核心原则之一是对值所具有的结构进行类型检查。而接口的作用就是为这些类型命名并且为我们的代码定义数据模型（形状）。

**type（类型别名）**：

类型别名是给一个类型起个新名字，起别名不会新建一个类型，它是创建了一个新名字来引用那个类型。与接口不同的是，类型别名可以作用于基本类型、联合类型、元组以及其它任何需要你手写的类型。

```
interface Person {
    name: string;
    age: number;
    sex: string;
}

type Person = {
    name: string;
    age: number;
    sex: string;
}
type Name = string; // 基本类型
type Sex = '男' | '女' | '不详'; // 联合类型
type PersonTuple = [string, number, string]; // 元组
type ComputeAge = () => number; // 函数
复制代码
```

**Object**

```
interface Obj {
    a: string;
    b: number;
}

type Obj = {
    a: string;
    b: number;
}
复制代码
```

**Function**

```
interface Fn {
    (x: string, y: number): void;
}

type Fn = (x: string, y: number) => void;
复制代码
```

**接口可以定义多次，类型别名不可以**

```
interface Obj {
    x: string;
}

interface Obj {
    y: number;
}

const obj: Obj = {x: '奉均衡之命！', y: 666}; // 自动合并为单个接口
复制代码
// error，Duplicate identifier 'Obj'
type Obj = {x: string};
type Obj = {y: number};
复制代码
```

**扩展**

两者的扩展方式不同，但并不互斥。接口可以扩展类型别名，反之亦然。接口的扩展就是继承，通过`extends`关键字来实现；类型别名的扩展就是交叉类型，通过`&`来实现。

*接口扩展接口*

```
interface Obj1 {
    x: string;
}

interface Obj2 extends Obj1 {
    y: number;
}

const obj: Obj2 = {
    x: '生与死，轮回不止。我们生，他们死！',
    y: 555,
}
复制代码
```

*类型别名扩展类型别名*

```
type Obj1 = {
    x: string;
}

type Obj2 = Obj1 & {
    y: number;
}

const obj: Obj2 = {
    x: '黑夜，就是我的舞台',
    y: 777
}
复制代码
```

*接口扩展类型别名*

```
type Obj1 = {
    x: string;
}

interface Obj2 extends Obj1 {
    y: number;
}

const obj: Obj2 = {
    x: '我的一个跟斗，能翻十万八千里',
    y: 222,
}
复制代码
```

*类型别名扩展接口*

```
interface Obj1 {
    x: string;
}

type Obj2 = Obj1 & {
    y: number;
}

const obj: Obj2 = {
    x: '只要点一下就够了，蠢货！',
    y: 333,
}
复制代码
```

## 泛型

### 初识泛型

**泛型**远没有初学者想象的那么复杂，下面让我们来揭开它的庐山真面目。耐心仔细的阅读文章，学不会你拿刀砍我。

请思考这个问题：假如让你实现一个函数，函数的参数可以是任何值，返回值就是将参数原样返回，并且只能接收一个参数，你会怎么做？

是不是觉得很简单：

```
const fn = (arg) => arg; 
复制代码
```

由于可以接收任意值，所以函数的入参和返回值都应该可以是任意类型。现在我们需要给代码增加类型声明。此时你或许想使用 any 大法，但我劝你善良：

```
const fn = (arg: any) => arg; 

fn('哈哈哈').length; // ok
fn('啦啦啦').toFixed(2); // ok
fn(null).toString(); // ok
复制代码
```

如果使用`any`的话，怎么写都是OK的，不会提示错误，这就失去了类型检查的意义。上例中，我们传入了`'啦啦啦'`，类型是`string`，返回值也一定是`string`类型，而 string 上并没有 toFixed 方法，这时报错才是我们想要的，可见使用`any`不符合我们的预期。

还有一种极蠢的方法，JS 提供多少种类型，我们就写多少种类型声明：

```
type StrType = (arg: string) => string; 
type NumType = (arg: number) => number;
type BoolType = (arg: boolean) => boolean;
...
复制代码
```

这种写法会导致代码难以维护，说是屎山也不为过～

综上所述，最符合我们预期的是：当我们传递参数时，能够根据参数的类型自动进行推导和检查，如果传入的是`string`，但是使用了`number`上的方法，就会提示错误。

**泛型**，应运而生。

```
function fn<T>(arg: T): T {
    return arg;
}

fn('哈哈哈');
复制代码
```

上栗中，我们定义了一个类型`<T>`，这个`T`是一个抽象类型，只有在调用的时候才能确定它的值。当我们传入`'哈哈哈'`时，`T`会自动识别传入参数的类型，进而转换为`string`，然后再链式传递给参数类型和返回值类型，这样一来就不用将类型写死了。

`T`代表`Type`，在定义泛型时通常用作第一个类型变量名称，`T`并不是固定语法，可以用任何有效名称代替。还有一些常见的泛型变量名：

- K（Key）：表示对象中的键类型
- V（Value）：表示对象中的值类型
- E（Element）：表示元素类型

泛型变量也可以定义多个：

```
function fn<T, U>(message: T, value: U): U {
    console.log(message);
    return value;
}

console.log(fn<string, number>('我喜欢你', 520));
复制代码
```

**工作流程**：传入参数的类型是`<string, number>`，调用时会传递给`<T, U>`，一一对应，`T`就变成了`string`成为`message`的类型，`U`就变成了`number`成为`value`的类型和返回值的类型。

`fn<string, number>('我喜欢你', 520)`，这种形式是为泛型变量显式设定值，更常见的做法是让编译器自动推导这些类型。我们可以省略尖括号，使代码更加简洁：

```
function fn<T, U>(message: T, value: U): U {
    console.log(message);
    return value;
}

console.log(fn('我喜欢你', 520));
复制代码
```

编译器足够智能，能够推导出我们的参数类型，并赋值给 T 和 U，不需要开发人员去显式地指定。

### 泛型约束

看下面这个栗子：

```
function fn<T>(arg: T): T {
    console.log(arg.size); // Property 'size' does not exist on type 'T'
    return arg;
}
复制代码
```

我们想打印出参数的 size 属性，但是 TS 报错了。原因在于 T 理论上可以是任何类型，跟 any 相反，无论使用它的什么属性或方法都会报错（除非这个属性和方法是所有集合共有的）。

想要解决这个问题，我们需要对类型进行约束，限定传给函数的参数类型应该要有 size 类型。 使用`extends`关键字可以做到这一点，简单说就是我们先定义一个类型，然后通过`extends`关键字让 T 实现它即可：

```
interface ArgType {
    size: number;
}

function fn<T extends ArgType>(arg: T): T {
    console.log(arg.size);
    return arg;
}
复制代码
```

你可能会这么想，直接将函数的参数限定为 ArgType 类型不就可以了吗？如果你这么做，会有类型丢失的风险，具体原因就不在这里展开讨论了。

### 泛型工具类型

为了方便开发者，TS 内置了一些常见的工具类型，例如：Partial、Required、Readonly、Record 等等。在具体学习工具类型之前，我们先得了解一些基础知识。

#### typeof

`typeof`的主要用途是在类型上下文中获取变量或者属性的类型：

```
interface Person {
    name: string;
    age: number;
}

const lzl: Person = {
    name: '林志玲',
    age: 18,
}

type LzlType = typeof lzl;
复制代码
```

*我不管，在我心中女神永远18岁！*

在上栗中，我们使用`typeof`操作符获取到`lzl`变量的类型并赋值给`LzlType`类型变量，之后我们就可以使用`LzlType`类型了：

```
const zzy: LzlType = {
    name: '章子怡',
    age: 18,
}
复制代码
```

`typeof`操作符除了可以获取对象结构的类型之外，还可以用来获取函数的类型：

```
function fn(x: string): string[] {
    return [x];
}

type FnType = typeof fn; // (x: string) => string[]
复制代码
```

#### keyof

`keyof`操作符可以用来获取某种类型的所有键，其返回类型是联合类型：

```
interface Person {
    name: string;
    age: number;
}

type P = keyof Person; // 'name' | 'age'
复制代码
```

由于 JS 是动态类型语言，有时在静态类型系统中捕获某些操作的语义可能会比较麻烦，请看栗子：

```
function fn(obj, key) {
    return obj[key];
}
复制代码
```

该函数接收 obj 和 key 两个参数，并返回对应属性的值。对象上的不同属性，可以具有完全不同的类型，我们甚至都不知道 obj 对象长什么样子。

那么该如何定义 fn 函数的类型呢？我们来尝试一下：

```
function fn(obj: object, key: string) {
    return obj[key];
}
复制代码
```

为了避免调用 fn 函数时传入错误的参数类型，我们为 obj 和 key 设置了类型，分别是`object`和`string`。然而，并没有这么简单，TS 会提示以下错误信息：

```
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'
复制代码
```

元素隐式地拥有`any`类型，因为`string`类型不能被用于索引类型`{}`。解决这个问题最暴力的方式就是使用 any大法：

```
function fn(obj: object, key: string) {
    return (obj as any)[key];
}
复制代码
```

但很明显这并不是一个好方案。我们来回顾一下 fn 函数的作用，该函数用于获取某个对象中指定属性的值，因此我们期望传入的属性是对象中已经存在的属性。那么如何限制属性名的范围内？靓仔`keyof`闪亮登场：

```
function fn<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
复制代码
```

上栗中，我们使用了泛型和泛型约束，还有`keyof`操作符。**首先定义类型 T，并使用`extends`关键字约束`T`类型必须是`object`类型的子类型，然后使用`keyof`操作符获取`T`类型的所有键，其返回值是联合类型，最后利用`extends` 关键字约束`K`类型必须是`keyof T`联合类型的子类型**。这样定义的话就能够正确推导出指定键对应的类型了， 完美！这一段如果看不懂建议多看几遍。

完整栗子：

```
type Person = {
    name: string;
    age: number;
}

const cgx: Person = {
    name: '吴京',
    age: 23,
}

function fn<T extends Person, K extends keyof T>(personObj: T, key: K) {
    return personObj[key];
}

const uname = fn(cgx, 'name'); // const uname: string
const age = fn(cgx, 'age'); // const age: number
复制代码
```

如果访问 cgx 对象上不存在的属性，编译器就会报错：

```
const sex = fn(cgx, 'sex'); // Argument of type '"sex"' is not assignable to parameter of type 'keyof Person'
复制代码
```

#### in

`in`用来遍历枚举类型

```
type Keys = 'x' | 'y' | 'z';

type Obj = {
    [k in Keys]: string;
} 
//
type Obj = {
    x: string;
    y: string;
    z: string;
}
复制代码
```

#### extends

有时我们不想定义的泛型过于灵活，可以通过`extends`关键字添加泛型约束：

```
interface ArgType {
    id: number;
}

function fn<T extends ArgType>(arg: T): T {
    console.log(arg.id);
    return arg;
}
复制代码
```

我们对上例中的泛型进行了约束，所以它不再适用于任意类型：

```
fn(250); // Argument of type 'number' is not assignable to parameter of type 'ArgType'

fn({id: 250, value: '奥利给！'}); // ok
复制代码
```

**内置的工具类型**

#### Partial

将类型的属性变成可选。

定义：

```
type Partial<T> = {
    [P in keyof T]?: T[P];
}
复制代码
```

先通过`keyof T`拿到`T`的所有属性名，然后使用`in`进行遍历，将值赋给`P`，再通过`T[P]`获取相应属性值的类型。`?`用于将所有属性变成可选。举个例子：

```
interface Person {
    name: string;
    age: number;
}

type NewPerson = Partial<Person>;
const zhl: NewPerson = {
    name: '钟汉良',
}
复制代码
```

这个 NewPerson 类型等同于：

```
interface NewPerson {
    name?: string;
    age?: number;
}
复制代码
```

**注意**：`Partial<T>`只支持处理第一层的属性：

```
interface Person {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}

type NewPerson = Partial<Person>;
const wyz: NewPerson = {
    name: '吴彦祖',
    address: { // Property 'city' is missing in type '{ province: string; }' but required in type '{ province: string; city: string; }'
        province: '香港省',
    },
}
复制代码
```

可以看到，第二层以后就不会处理了。想要处理多层，我们可以自己实现：

**DeepPartial**

```
interface Person {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object
        ? DeepPartial<T[K]>
        : T[K];
}

type NewPerson = DeepPartial<Person>;
const wyz: NewPerson = {
    name: '吴彦祖',
    address: { // ok
        province: '香港省',
    },
}
复制代码
```

#### Required

将类型的属性变成必选。

定义：

```
type Required<T> = {
    [K in keyof T]-?: T[K];
}
复制代码
```

`-?`代表移除可选特性。

```
interface Person {
    name?: string;
    age?: string;
}

type NewPerson = Required<Person>;
const zjl: NewPerson = { // Property 'age' is missing in type '{ name: string; }' but required in type 'Required<Person>'
    name: '周杰伦',
}
复制代码
```

#### Readonly

将类型的属性变成只读。

定义：

```
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
}
复制代码
```

栗子：

```
interface Person {
    name: string;
    age: number;
}

type NewPerson = Readonly<Person>;
const hg: NewPerson = {
    name: '胡歌',
    age: 18,
}

hg.age = 40; // Cannot assign to 'age' because it is a read-only property
复制代码
```

#### Record

`Record<K extends keyof any, T>`将 K 中所有属性的值转化为 T 类型。

定义：

```
type Record<K extends keyof any, T> = {
    [P in K]: T;
}
复制代码
```

栗子：

```
interface PersonInfo {
    name: string;
}

type Person = 'zxy' | 'ldh' | 'zgr';

const ny: Record<Person, PersonInfo> = {
    zxy: {name: '张学友'},
    ldh: {name: '刘德华'},
    zgr: {name: '张国荣'},
}
复制代码
```

#### ReturnType

用来获取一个函数的返回值类型。

定义：

```
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
复制代码
```

`infer`用于提取函数返回值的类型。

栗子：

```
type Fn = (v: string) => number;

let x: ReturnType<Fn> = 888;
x = '888'; // Type 'string' is not assignable to type 'number'
复制代码
```

`ReturnType`提取到`Fn`的返回值类型为`number`，所以变量`x`只能被赋予`number`类型的值。

#### Pick

从对象结构的类型中挑出一些指定的属性，来构造一个新类型。

定义：

```
type Pick<T, U extends keyof T> = {
    [P in U]: T[P];
}
复制代码
```

栗子：

```
interface Person {
    name: string;
    age: number;
    sex: string;
}

type NewPerson = Pick<Person, 'name' | 'sex'>;
const ldh: NewPerson = {
    name: '刘德华',
    sex: '男',
} 
// type NewPerson = {
       name: string;
       sex: string;
   }
复制代码
```

#### Omit

从对象结构的类型中排除掉指定的属性，从而构造一个新类型。

定义：

```
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
复制代码
```

栗子：

```
interface Person {
    name: string;
    age: number;
    sex: string;
}

type NewPerson = Omit<Person, 'sex'>;
const ldh: NewPerson = {
    name: '刘德华',
    age: 18,
} 
// type NewPerson = {
       name: string;
       age: number;
   }
复制代码
```

#### Extract

`Extract<T, U>`，从 T 中提取出 U。

定义：

```
type Extract<T, U> = T extends U ? T : never;
复制代码
```

栗子：

```
type A = Extract<'x' | 'y' | 'z', 'y'>; // 'y'
type B = Extract<string | number | (() => void), Function>; // () => void
复制代码
```

#### Exclude

`Exclude<T, U>`，从 T 中移除 U。

定义：

```
type Exclude<T, U> = T extends U ? never : T;
复制代码
```

栗子：

```
type A = Exclude<'x' | 'y' | 'z', 'y'>; // 'x' | 'z'
type B = Exclude<string | number | (() => void), Function>; // string | number
复制代码
```

#### NonNullable

过滤掉类型中的 null 和 undefined 类型。

定义：

```
type NonNullable<T> = T extends null | undefined ? never : T;
复制代码
```

栗子：

```
type A = NonNullable<string | null | undefined>; // string
复制代码
```

## 一些建议

### 尽量减少重复代码

新手在定义接口时可能会经常出现类似的冗余代码：

```
interface Person {
    name: string;
    age: number;
}

interface NewPerson {
    name: string;
    age: number;
    sex: string;
}
复制代码
```

两个接口只有一个属性的差别，那么如何避免重复代码呢？我们可以使用`extends`关键字：

```
interface Person {
    name: string;
    age: number;
}

interface NewPerson extends Person {
    sex: string;
}
复制代码
```

还可以使用交叉运算符`&`：

```
type NewPerson = Person & {sex: string}
复制代码
```

有时候，你想定义一个类型来匹配一个初始配置对象的“形状”：

```
const jsy = {
    name: '江疏影',
    age: 18,
    sex: '女',
}

interface Person {
    name: string;
    age: number;
    sex: string;
}
复制代码
```

其实我们可以使用`typeof`操作符来快速获取初始配置对象的“形状”：

```
const jsy = {
    name: '江疏影',
    age: 18,
    sex: '女',
}

type Person = typeof jsy;
复制代码
```

在实际开发中，重复的类型并不总是那么容易被发现，有时它们会被语法所掩盖，比如多个函数拥有相同的类型签名：

```
function getList(current: number, pageSize: number): Promise<Response>
function getDetailList(current: number, pageSize: number): Promise<Response>
复制代码
```

对于上面的 getList 和 getDetailList 方法，我们可以提取统一的类型签名：

```
type QueryList = (current: number, pageSize: number) => Promise<Response>;
const getList: QueryList = (current, pageSize) => {};
const getDetailList: QueryList = (current, pageSize) => {};
复制代码
```

### 精准定义类型

我们首先定义一个类型：

```
interface Person {
    name: string;
    age: number;
    sex: string;
    birthDate: string;
    income: string;
}
复制代码
```

对于`Person`类型，我们更希望`birthDate`属性值的格式为`YYYY-MM-DD`，`income`属性值的范围是：`low`、`middle`、`high`。但是在`Person`接口中它们都是`string`类型，所以可能会导致属性值与预期格式不匹配：

```
const xdd: Person {
    name: '徐冬冬',
    age: 32,
    sex: '女',
    birthDate: 'February 16, 1990',
    income: 'rich',
}
复制代码
```

我们需要定义更精准的类型：

```
interface Person {
    name: string;
    age: number;
    sex: string;
    birthDate: Date;
    income: 'low' | 'middle' | 'high';
}
复制代码
```

重新定义 Person 接口之后，对于前面的赋值语句 TS 就会报错：

```
const xdd: Person = {
    name: '徐冬冬',
    age: 32,
    sex: '女',
    birthDate: 'February 16, 1990', // Type 'string' is not assignable to type 'Date'
    income: 'rich', // Type '"rich"' is not assignable to type '"low" | "middle" | "high"'
}
//
const xdd: Person = {
    name: '徐冬冬',
    age: 32,
    sex: '女',
    birthDate: new Date(1990-02-16), // ok
    income: 'middle', // ok
}
复制代码
```

终于见到底，还好你没放弃～

## 练习题

这么多的知识点，你恐怕难以消化。不要急于求成，我们来做一些练习题，通过实践将所学内容进一步巩固：

[点我继续肝！](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fsemlinker%2Fawesome-typescript%2Fissues)

## 最后

电脑屏幕前的程序猴，如果你是认认真真地看到最后，那么相信你一定有所收获，我只恨自己文章写的不够好，抱拳了！如果你只是囫囵吞枣地过了一遍，那可能收效甚微，切勿浮躁啊。功不唐捐、玉汝于成，我们一起加油！

文章中有什么错误或不足之处，欢迎大家在评论区指正，第一次写这么长的文章，请大家多多包涵。

**你的点赞是对我莫大的鼓励！感谢阅读～**





[不一样的 TypeScript 入门手册 - 掘金 (juejin.cn)](https://juejin.cn/post/7066964816107143198)

