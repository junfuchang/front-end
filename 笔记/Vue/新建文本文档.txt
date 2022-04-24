# Vue3

> [简介 | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/guide/introduction.html)

# 一、开始

## 1. 简介

### 什么是Vue？

构建用户界面的js框架

它有两个核心功能：

- 声明式渲染：通常是与命令式渲染相比较，它无需关注具体的实现逻辑，让人集中于业务的处理
- 响应性：js状态的变化会反应到界面上

### 渐进式框架

适用的场景多，无论是全部页面使用vue进行开发还是部分页面使用vue都可以，满足不同需求

### 单文件组件

简称SFC

将一个组件的逻辑、模板、样式封装于同一个文件

### API风格

- 选项式API
  - 用包含多个选项的对象来描述组件的逻辑
- 组合式API
  - 类似react hook
  - 通常与 `<script setup>` 搭配使用。 `setup` 是个标识符，告诉 Vue 需要在编译时进行转换，来减少使用组合式 API 时的样板代码



## 2. 快速开始

### 采用构建构建

将使用vite打包工具，能够使用SFC进行开发

~~~bash
npm init vue@latest
~~~

### 不使用构建工具

> 详见：[快速开始 | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/guide/quick-start.html#without-build-tools)

两种方式总结如下：

1. 直接通过script标签引入vue，这是全局构建版的 Vue

2. 如果想要使用ES模块，可以通过浏览器的导入映射表功能实现

如果想要将代码拆分成不同文件，需要安装Node启用Http服务器



# 二、基础

## 1. 创建一个应用

### 应用实例

`creatApp()`创建的就是一个应用实例

### 根组件

就是传给`createApp()`的参数，这个组件或者组件对象叫做根组件，它是创建一个应用实例所必须的

### 挂载应用

挂载后应用实例才能被渲染出来，通过`.mount()`实现，需要接收一个DOM元素或者CSS选择器字符串作为"容器"参数

该参数提供容器的功能，将根组件的内容渲染在容器内部

- `.mount()`的返回值是一个根组件实例，而其他资源注册方法返回的还是应用实例（以方便链式调用）

### 应用配置

应用实例会暴露出一些方法或对象作为整个应用级的资源

### 多个应用实例

可以用`createApp()`创建多个应用实例挂载在不同节点上，每个应用实例都是独立的



## 2. 模板语法

### 文本插值

使用“Mustache”语法 (即双大括号)

~~~vue
<span>Message: {{ msg }}</span>
~~~

### 原始 HTML

插入原始html（不推荐，容易造成XSS漏洞，并且永远不要由用户插入html），需要使用`v-html`指令

~~~vue
// 在span标签内插入html
<span v-html="rawHtml"></span>
~~~

### Attribute 绑定

在html属性中插值需要通过`v-bind`指令

attribute 将与 v-bind的值一致，当绑定的值为 `null` 或者 `undefined`，给属性将被移除

~~~vue
<div v-bind:id="Id"></div>
// v-bind: 可以简写为 : 
<div :id="Id"></div>
~~~

***布尔型 Attribute***

[布尔型 attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) 依据 true / false 值来决定 attribute 是否应该存在于该元素上。

当值为真值或**空字符串**时属性存在，为假值时移除

***动态绑定多个值***

可以通过对象给标签绑定对多个值

~~~vue
// script
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
// template
<div v-bind="objectOfAttrs"></div>
~~~

### 使用 JavaScript 表达式

使用场景：

1. 在文本插值中 (双大括号)

2. 指令中

***仅支持表达式***

仅支持**单一表达式**，不支持语句

***调用函数***

表达式中的函数调用将在**每次组件更新被调用**，因此改函数不应产生副作用

~~~vue
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
~~~

***受限的全局访问***

表达式中仅能访问到有限的常用全局对象，可以通过`app.config.globalProperties`显式添加自定义属性

### 指令

指令是带有 `v-` 前缀的特殊 attribute。使用指令是为了在其表达式值变化时响应式地对 DOM 应用更新。

***参数***

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。

~~~vue
<a v-bind:href="url"> ... </a>
<a v-on:click="doSomething"> ... </a>
~~~

***动态参数***

动态参数会作为一个表达式被动态执行

~~~vue
<a @[eventName]="doSomething">
~~~

***动态参数值的限制***

合法值：

1. 字符串
2. null（显示移除该绑定）

其他均为非法值，将触发警告

***动态参数语法的限制***

1. 不要使用某些字符，如空格和引号
2. 不要使用大写属性（会被强制转化为小写，导致变量名不匹配）

复杂动态参数推荐使用`computed()`

***修饰符***

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。

~~~vue
// 例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`
<form @submit.prevent="onSubmit">...</form>
~~~

![指令语法图](https://staging-cn.vuejs.org/assets/directive.69c37117.png)



## 3. 响应式基础

### 声明响应式状态

`reactive()`可以创建响应式对象或数组

响应式对象是个**Proxy**，Vue能**跟踪响应式对象的property** 

***DOM更新时机***

DOM更新是异步的，将在浏览器下次渲染时进行更新

若想访问更新后的DOM，可以使用`nextTick()`这个全局API

~~~js
import { nextTick } from 'vue'

function increment() {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}
~~~

***深层响应性***

对对象、数组深层次的更改都能被检测到

你可以创建个仅在顶层具有响应性的[浅层响应式对象](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowreactive)

***响应式代理vs.原始对象***

`reactive()`返回的是原始对象的Proxy，它与原始对象不相等。

且只有Proxy是响应式的，更改原始对象不会触发更新。最佳实践是 **仅使用对象的代理版本**

为保证访问代理的一致性：

1. 同个对象返回同个代理（因为对象地址相同）
2. 对一个代理调用`reactive()`将返回同样的代理

上述规则对嵌套对应也适用

***`reactive()` 的局限性***

1. 仅对对象类型有效（对象、数组和 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#使用键的集合对象)），对原始类型无效
2. vue跟踪的是**响应式对象的属性(属性地址)**，因此一个变量要保持引用同一个响应式对象

~~~js
let state = reactive({ count: 0 })
// 这行不通！
state = reactive({ count: 1 })
~~~

这意味着以下操作将让我们失去响应性：

1. 将对象属性赋值给别的变量
2. 使用结构赋值
3. 进行函数传参

这是因为这些操作是值复制，响应性系统将丧失对属性地址的跟踪，所以会失去响应性

### `ref()` 定义响应式变量

为解决`reactive()`带来的限制，可以使用`ref()`来创建个带 `.value` property 的响应式 ref 对象，它适用于任何类型。

响应式系统同样是跟踪响应性对象的属性，即ref对象的`.value`值

当值为对象类型时，会用 `reactive()` 自动转换它的 `.value`，

~~~js
// 即以下操作是可以保留响应性的，因为会先调用reactive进行转换
const objectRef = ref({ count: 0 })
// 对value进行替换，这是响应式的替换，因为value会被转化
objectRef.value = { count: 1 }
// 不能直接进行替换,将会出现错误
// objectRef = { count: 2 }
~~~

当传参、结构赋值、函数传递的是ref对象时，将保留响应性

~~~js
const obj = {
  name: ref('jack'),
  age: ref(20)
}
// 该函数接收一个 ref
// -->需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo)
// 仍然是响应式的
const { foo, bar } = obj
~~~

***ref 在模板中的解包***

1. ref在顶层时会被自动解包

何为顶层？

~~~js
// 是顶层
{{ name }}
// 不是顶层
{{ obj.name }}
~~~

2. 文本插值单单一个不是顶层的ref，也会解包

~~~js
// 会解包
{{ obj.age }}
// 不会解包
{{ obj.age + 1 }}	// 需要调用.value取值，及{{ obj.age.value + 1 }}
~~~

***ref 在响应式对象中的解包***

1. 在**深层**响应式对象内时**会**自动解包

此时对数据的访问和操作将和普通对象一样

~~~js
const count = ref(0)
const state = reactive({ count })

state.count = 1
console.log(state.count) // 1
console.log(count.value) // 1
~~~

ref会和对象属性相关联
~~~js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
~~~

2. 在**浅层**响应式对象内**不会**自动解包

***数组和集合类型的 ref 解包***

当 ref 作为响应式数组或像 `Map` 这种原生集合类型的元素被访问时，**不会进行解包**。



## 4. 计算属性

### 基本示例

推荐使用**计算属性**来描述依赖响应式状态的复杂逻辑

`computed()` 方法期望接收一个 getter 函数，返回值为一个**计算属性 ref**。

~~~vue
<script setup>
import {ref,computed} from 'vue'
const age = ref(30);
const isOld = computed(()=>{
  return age.value > 60 ? "Old" : "Young";
})
</script>
 
<template>
  My Age Is {{ isOld }} !
</template>
~~~

### 计算属性缓存 vs 方法

**计算属性值会基于其响应式依赖被缓存**，一个计算属性仅会在其响应式依赖更新时才重新计算。

在模板中使用方法调用**总是**会在重渲染发生时再次执行函数

### 可写计算属性

需要同时提供 getter 和 setter

~~~vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newName) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newName.split(' ')
  }
})
</script>
~~~

### 最佳实践

***计算函数不应有副作用***

计算函数应**只做计算**而没有任何其他的副作用。

一个计算属性的声明中描述的是如何根据其他值派生一个值。因此计算函数的职责应该仅为计算和返回该值。

***避免直接修改计算属性值***

计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。



## 5. 类与样式绑定

### 绑定 HTML class

***绑定对象***

绑定一个返回对象的计算属性通常是个好的实践

~~~vue
<script setup>
import {computed,ref} from 'vue'
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
</script>

<template>
	<div :class="classObject"></div>
</template>
~~~

***绑定数组***

~~~html
// active是否存在将依据isActive，errorClass将一直存在
<div :class="[{ active: isActive }, errorClass]"></div>
~~~

可以使用三元表达式

~~~html
<div :class="[isActive ? activeClass : '', errorClass]"></div>
~~~

***和组件配合***

1. 当子组件模板为**单根元素**，子组件根元素class将继承父组件的class

~~~vue
<!-- 子组件模板:my-component -->
<p class="foo bar">Hi!</p>
<!-- 父组件在使用组件时 -->
<my-component class="baz boo"></my-component>
<!-- 渲染结果 -->
<p class="foo bar baz boo">Hi</p>
~~~

2. 当子组件模板有多个根元素，需要通过组件的 `$attrs` property 来实现指定

~~~vue
<!-- my-component 模板使用 $attrs 时 -->
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>
<!-- 父组件在使用组件时 -->
<my-component class="baz"></my-component>
<!-- 渲染结果 -->
<p class="baz">Hi!</p>
<span>This is a child component</span>
~~~

### 绑定内联样式

***绑定对象***

~~~vue
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})

<div :style="styleObject"></div>
~~~

***绑定数组***

~~~vue
<div :style="[baseStyles, overridingStyles]"></div>
~~~

***自动前缀***

vue会自动帮我们给style加上需要的浏览器前缀

***样式多值***

可以对一个样式属性提供多个 (不同前缀的) 值

数组仅会渲染浏览器支持的最后一个值

~~~vue
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
~~~



## 6. 条件渲染

### `v-if`

指令表达式为真时渲染一个区块

### `v-else`

与`v-if`或者 `v-else-if` 配合

### `v-else-if`

与`v-if`或者 `v-else-if` 配合

### `<template>` 上的 `v-if`

想要切换不止一个元素时，可以在 `<template>` 元素上使用 `v-if`，渲染结果将不包含`<template>`标签

### `v-show`

`v-show` 会在 DOM 渲染中保留元素

`v-show` 仅切换了元素上的CSS 属性`display` 

