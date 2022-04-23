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

**布尔型 Attribute**

[布尔型 attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) 依据 true / false 值来决定 attribute 是否应该存在于该元素上。

当值为真值或**空字符串**时属性存在，为假值时移除

**动态绑定多个值**

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

**仅支持表达式**

仅支持**单一表达式**，不支持语句

**调用函数**

表达式中的函数调用将在**每次组件更新被调用**，因此改函数不应产生副作用

~~~vue
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
~~~

**受限的全局访问**

表达式中仅能访问到有限的常用全局对象，可以通过`app.config.globalProperties`显式添加自定义属性

### 指令

指令是带有 `v-` 前缀的特殊 attribute。使用指令是为了在其表达式值变化时响应式地对 DOM 应用更新。

**参数**

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。

~~~vue
<a v-bind:href="url"> ... </a>
<a v-on:click="doSomething"> ... </a>
~~~

**动态参数**

动态参数会作为一个表达式被动态执行

~~~vue
<a @[eventName]="doSomething">
~~~

**动态参数值的限制**

合法值：

1. 字符串
2. null（显示移除该绑定）

其他均为非法值，将触发警告

**动态参数语法的限制**

1. 不要使用某些字符，如空格和引号
2. 不要使用大写属性（会被强制转化为小写，导致变量名不匹配）

复杂动态参数推荐使用`computed()`

**修饰符**

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。

~~~vue
// 例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`
<form @submit.prevent="onSubmit">...</form>
~~~

![指令语法图](https://staging-cn.vuejs.org/assets/directive.69c37117.png)



# 3. 响应式基础

### 声明响应式状态

