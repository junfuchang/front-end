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

`v-show` **不支持在 `<template>` 元素上使用**，也没有 `v-else` 来配合

`v-if` vs `v-show`

- `v-if`
  - 切换时被销毁与重建
  - 是**懒加载**的：条件区块会直到条件变为 true 时才渲染，其他时间不会做任何事

- `v-show`
  - 元素无论初始条件如何，始终会被渲染，仅作 CSS class 的切换

### `v-if` 和 `v-for`

这两者不推荐存同时使用，因为这样二者的优先级不明显

当 `v-if` 和 `v-for` 同时存在于一个元素上的时候，`v-if` 会首先被执行。



## 7. 列表渲染

### `v-for`

可以对item进行结构赋值

可以使用`of`代替`in`

~~~vue
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
~~~

### `v-for` 与对象

可以使用v-for遍历对象，顺序是依据 `Object.keys()` 的枚举顺序

~~~vue
<li v-for="(value, key, index) in obj">
  {{ index }}. {{ key }}: {{ value }}
</li>
~~~

### 在 `v-for` 里使用值范围

初值是从 `1` 开始

~~~vue
<span v-for="n in 10">{{ n }}</span>
~~~

### `<template>` 上的 `v-for`

以用来渲染一个包含多个元素的块

### `v-for` 与 `v-if`

在同一个节点中`v-if`优先级比`v-for`高

```vue
<!-- 所以这会报错，v-if访问不到v-for中的变量 -->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

两者相结合的推荐写法：

~~~vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
~~~

### 通过 key 管理状态

>  [v-for为什么要加key，能用index作为key么 - 小丸子的城堡 - 博客园 (cnblogs.com)](https://www.cnblogs.com/youhong/p/11327062.html)

**推荐在任何可行的时候为 `v-for` 提供一个 `key` attribute**，除非所迭代的 DOM 内容非常简单 (例如：不包含组件或有状态的 DOM 元素)，或者有意依赖默认行为来获得性能增益。

### 组件上使用 `v-for`

~~~vue
<my-component
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
></my-component>
~~~

### 数组变化侦测

***变更方法***

Vue 包装了一批侦听数组的变更方法，这些方法可以触发视图更新

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

***替换一个数组***

当遇到的是非变更方法（不改变原数组，返回新数组）时，我们需要将旧的数组替换为新的：

```js
// `item` 是一个数组的 ref
items.value = item.values.filter((item) => item.message.match(/Foo/))
```

### 展示过滤或排序后的结果

可以创建返回已过滤或已排序数组的**计算属性**

在计算属性中使用 `reverse()` 和 `sort()` 请保持谨慎！（会改变原数组）

~~~diff
- return numbers.reverse()
+ return [...numbers].reverse()
~~~



## 8. 事件处理

### 监听事件

事件处理器的值：

1. 内联事件处理器
2. 方法事件处理器

### 内联事件处理器

~~~vue
<button @click="count++">Add 1</button>
~~~

### 方法事件处理器

会**自动接收原生 DOM 事件**并触发执行

能够通过触发事件的 `event.target.tagName` 访问到 DOM 元素

***方法与内联事件判断***

是否是合法的 JS标识符或属性访问

### 在内联处理器中调用方法

在内联事件处理器中调用方法，允许向方法传入自定义参数以代替原生事件

```vue
<button @click="say('bye')">Say bye</button>
```

### 在内联事件处理器中访问事件参数

在内联事件处理器中访问原生 DOM 事件的两者方法：

1. 使用`$event`变量

~~~vue
<button @click="say('hi',$event)">Say hi</button>
~~~

2. 使用箭头函数

~~~vue
<button @click="e => say('hi',e)">Say hi</button>
~~~

### 事件修饰符

修饰语可以使用链式书写,也可以只有修饰符

- `.stop`

~~~vue
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>
~~~

- `.prevent`

```vue
<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>
```

- `.self`

```vue
<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
```

- `.capture`

```vue
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>
```

- `.once`

```vue
<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>
```

- `.passive`

`.passive` 修饰符一般用于触摸事件的监听器，可以用来[改善移动端设备的滚屏性能](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善的滚屏性能)。

请勿同时使用 `.passive` 和 `.prevent`

```vue
<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>
```

### 按键修饰符

可以使用 [`KeyboardEvent.key`](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的按键名作为修饰符，但需要转为 kebab-case 格式

```vue
<!-- 仅在 `key` 为 `pageDown` 时调用 `vm.submit()` -->
<input @keyup.page-down="onPageDown" />
```

***按键别名***

Vue 为一些常用的按键提供了别名：

- `.enter`
- `.tab`
- `.delete` (捕获“Delete”和“Backspace”两个按键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

***系统按键修饰符***

你可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

***`.exact` 修饰符***

```vue
<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>
```

### 鼠标按键修饰符

- `.left`
- `.right`
- `.middle`

~~~vue
<button @click.right="say">Say</button>
~~~



## 9. 表单输入绑定

`v-model`实现双向绑定，将会忽略任何表单元素上初始的 `value`，`checked` 或 `selected` attributes。

-  `<input>` 和 `<textarea>` ：绑定 `value` 属性和 `input` 事件
- `<input type="checkbox">` 和 `<input type="radio">` ：绑定 `checked` 属性和 `change` 事件
- `<select>` ：绑定 `value` 属性和`change` 事件

### 基本用法

***复选框***

1. 单个复选框绑定的值为布尔型
2. 多个复选框绑定到同一个数组或[集合](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

***单选框***

```vue
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
```

***选择器***

1. 单个选择器绑定的值为选项的value

```vue
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <!-- option不带value属性时，将内部内容作为value值 --> 
  <option>A</option>
  <option>B</option>
</select>
```

2. 多个选择器绑定到同一个数组或[集合](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### 值绑定

***复选框***

target将会根据复选框的真假值绑定为不同的值，而不再只是true或false

```vue
<input
  type="checkbox"
  v-model="target"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />
```

### 修饰符

***`.lazy`***

将`v-model`绑定的事件由`input`变为`change`

```vue
<!-- 在 "change" 事件后同步更新而不是再是 "input" -->
<input v-model.lazy="msg" />
```

***`.number`***

让用户输入自动转换为数字

```vue
<input v-model.number="age" />
```

如果值无法被 `parseFloat()` 处理，将返回原始值

`number` 修饰符会在输入框 `type="number"` 时自动应用

***`.trim`***

自动去除两遍的空格

### 组件上的 `v-model`

>  [组件事件 | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/guide/components/events.html#usage-with-v-model)



## 10. 生命周期钩子

> 全部生命周期钩子[组合式 API：生命周期钩子 | Vue.js (vuejs.org)](https://staging-cn.vuejs.org/api/composition-api-lifecycle.html)

### 注册周期钩子

周期钩子必须在**同步环境**（不意味着不能在外部函数中调用，只要调用栈是同步的，且最终起源自 `setup()`）

```vue
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```

### 生命周期图示

<img src="https://staging-cn.vuejs.org/assets/lifecycle.16e4c08e.png" alt="组件生命周期图示" style="zoom:67%;" />



## 11. 侦听器

### 基本示例

 `watch` 函数在每次响应式状态发生变化时触发回调函数

***侦听来源类型***

1. ref (包括计算属性)

~~~js
watch(x, (newX,oldX) => {
  console.log(`x is ${newX}`)
})
~~~

2. getter函数（响应式对象的property只能用此方法进行侦听）

~~~js
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
~~~

3. 以上两种方式组成的数组

~~~js
// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
~~~

### 深层侦听器

直接侦听一个响应式对象（内部只要有变化就会触发侦听器）

~~~js
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // 在嵌套的 property 变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
})
~~~

getter函数返回个对象时，只有该返回**对象的引用发生改变**才会触发侦听

我们可以使用`deep`选项将它强制转成深层侦听器

~~~js
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* state.someObject 被整个替换了
  },
  { deep: true }
)
~~~

### `watchEffect()`

立即执行一遍回调函数并侦听依赖项

注意：`watchEffect` 仅会在其**同步**执行期间，才追踪依赖。在使用异步回调时，只有在第一个 `await` 正常工作前访问到的 property 才会被追踪。

~~~js
watchEffect(async () => {
  // 此处会立即执行一遍回调函数，并侦听url.value
  const response = await fetch(url.value)
  data.value = await response.json()
})
~~~

***`watch` vs. `watchEffect`***

`watch` 和 `watchEffect` 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

- `watch` 只追踪明确侦听的源。它不会追踪任何在回调中访问到的东西。另外，仅在响应源确实改变时才会触发回调。`watch` 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
- `watchEffect`，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式 property。这更方便，而且代码往往更简洁，但其响应性依赖关系不那么明确。

### 回调的刷新时机

有时一个数据的变化会同时触发视图更新和侦听器

默认侦听器比组件更新先触发，这样在侦听器只能访问到更新前的DOM，

可以指明 `flush: 'post'`进行更改

```js
watch(source, callback, {
  flush: 'post'
})
------------------------------------------------------
watchEffect(callback, {
  flush: 'post'
})
// 后置刷新的 `watchEffect()` 有个更方便的别名 `watchPostEffect()`：
import { watchPostEffect } from 'vue'
watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})
```

### 停止侦听器

侦听器必须用**同步**语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。

```js
const unwatch = watchEffect(() => {})
// ...当该侦听器不再需要时
unwatch()
```

推荐保持同步创建侦听器，若需要等待异步数据，可以使用`watchEffect`

~~~js
// 需要异步请求得到的数据
const data = ref(null)

watchEffect(() => {
  if (data.value) {
    // 数据加载后执行某些操作...
  }
})
~~~



## 12. 模板ref

ref只有在组件挂载后才能访问

```vue
<script setup>
import { ref, onMounted } from 'vue'
    
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

### `v-for` 中的 ref

相应的 ref 的值是一个数组，ref 数组**不能**保证与源数组相同的顺序

### 函数型 ref

`ref` 可以绑定为一个函数，会在每次组件更新时都被调用

```vue
<input :ref="(el) => { /* 将 el 分配给 property 或 ref */ }">
```

当元素卸载时， `el` 会是 `null`

### 组件上的 ref

1. 使用了 `<script setup>`

子组件默认私有，需要子组件通过  `defineExpose` 宏 显式暴露

```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

2. 选项式 API 或没有使用 `<script setup>`

ref引用的实例与子组件this完全一致，可以访问到子组件的任何属性、对象



## 13. 组件基础

推荐为子组件使用 `PascalCase` 的标签名，但若直接在 DOM 中书写需要使用 `kebab-case` 形式并显式地关闭这些组件的标签。

### 传递Props

使用`defineProps`编译宏（以下默认使用`setup`语法）

`defineProps` 返回包含了所有 props的对象

```js
// 返回值用于在js中操作，在模板中可以直接使用props变量
const props = defineProps(['title'])
console.log(props.title)
```

### 监听事件

直接模板中使用

```vue
defineEmits(['enlarge-text'])
<button @click="$emit('enlarge-text')">Enlarge text</button>
```

在js中使用

```js
const emit = defineEmits(['enlarge-text'])
emit('enlarge-text')
```

### 通过插槽来分配内容

使用`<slot>`

### 动态组件

```vue
<!-- currentTab 改变时组件也改变 -->
<component :is="currentTab"></component>
```

 `:is` 的值可以是以下几种：

1. 被注册的组件名
2. 导入的组件对象

在多个组件间作切换时，组件会在被切换掉后卸载。我们可以通过组件强制不活跃的组件仍然保持“存活”的状态

### DOM 模板解析注意事项

1. 标签和属性名不区分大小写，全部使用kebab-case
2. 需要闭合标签
3. 有些位置有元素类型的限制，比如`<ul>`中一定要为`<li>`，可以使用`is="vue:CompName"`解决



# 三、深入组件

## 1. 注册

### 全局注册

```js
import { createApp } from 'vue'
const app = createApp("#app")

app.component('MyComponent',{ /* ... */ })
// 可以进行链式调用
app.component('ComponentA', ComponentA)
   .component('ComponentB', ComponentB)
```

缺点：

1. 无法移除未使用的组件(也叫“tree-shaking”)

2. 使项目的依赖关系变得不那么明确

### 局部注册

**局部注册组件在后代组件中不可用**

```vue
<script setup>
import ComponentA from './ComponentA.vue'
</script>
```

### 组件名格式

大驼峰和短横连线都可以，推荐大驼峰



## 2. Props

除了使用字符串数组来声明 prop 外，还可以使用对象的形式：

```js
// 使用 <script setup>
// 可以实现类型校验
defineProps({
  title: String,
  likes: Number
})
```

### 传递 prop 的细节

***Prop 名字格式***

推荐使用camelCase ，给子组件传递的时候会将其转为 kebab-case 形式（为了和 HTML attribute 对齐）

***使用一个对象绑定多个 prop***

```vue
const post = {
  id: 1,
  title: 'My Journey with Vue'
}

<BlogPost v-bind="post" />
```

### 单向数据流

**不应该**在子组件中去更改一个 prop

想要更改 prop 通常都符合以下两种场景：

1. **prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。**

创建新变量

2. **prop 以原始的形式传入，但还需作转换。**

使用计算属性创建新变量

***更改对象 / 数组类型的 prop***

虽然**可以**更改对象或数组内部的值，但推荐抛出事件让父组件自己改变

### Prop 校验

校验对象常用属性：type、default、required

- 未传递的 prop 会有一个缺省值 `undefined`
- `default` 值将在props值为undefined时启用

```js
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 一个返回默认对象/数组值
    // 的工厂函数
    default() {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```

***运行时类型检查***

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

构造器也是可以的，它通过 `instanceof`来判断

~~~js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}
// 使用
defineProps({
  author: Person
})
~~~

### Boolean 类型转换

若检测类型为布尔型

```vue
<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />
<!-- 等同于传入 :disabled="false" -->
<MyComponent />
```



## 3. 事件

自定义事件在模板中推荐使用 kebab-case 形式

### 触发与监听事件

### 事件参数

```vue
<button @click="$emit('someEvent',prop1,prop2)">click me</button>
```

### 声明触发的事件

支持传递数组或者对象

```vue
<script setup>
const emit = defineEmits(['inFocus', 'submit'])
</script>
```

### 事件校验

~~~vue
<script setup>
const emit = defineEmits({
  // 没有校验
  click: null,
    
  submit:(payload)=>{
    // 通过返回值为 `true` 还是为 `false` 来判断验证是否通过
  }
})
</script>
~~~

### 配合 `v-model` 使用

对自定义组件进行`v-model`绑定

~~~vue
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
~~~

1. 方法一：使用props和emit进行绑定

```vue
<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <!-- 让实际被绑定的标签接收prop和触发事件 -->
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

2. 方法二：使用一个可写的 `computed` ，给出 getter 和 setter

```vue
<!-- CustomInput.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```

***`v-model` 的参数***

默认`v-model` 使用 `modelValue` 为 prop， `update:modelValue` 为对应的事件。

指定一个参数来更改名字

```vue
<MyComponent v-model:title="bookTitle" />
```

```vue
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

***多个 `v-model` 绑定***

指定不同的名字即可，道理同上

***处理 `v-model` 修饰符***

修饰符可以默认通过`modelModifiers`访问到

又有参数又有修饰符的 `v-model` 生成的 prop 名将是 `arg + "Modifiers"`

```js
const props = defineProps({
  modelValue: String,
  // 默认是空对象，但当传来修饰符：props.modelModifiers对象为{ 修饰符: true }
  modelModifiers: { default: () => ({}) }
})

defineEmits(['update:modelValue'])

// 修饰符处理函数
function emitValue(e) {
  let value = e.target.value
  // 判断是否启用了`capitalize`修饰符
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```



## 4. 透传 Attribute

> “透传 attribute”是传递给组件的 attribute 或者 `v-on` 事件监听器，但并没有显式地声明在所接收组件的 [props](https://staging-cn.vuejs.org/guide/components/props.html) 或 [emits](https://staging-cn.vuejs.org/guide/components/events.html#defining-custom-events) 上。最常见的例子就是 `class`、`style` 和 `id`。

### 单根结点透传

***对 `class` 和 `style` 的合并***

即样式会发生合并，父组件class和sytle会追加在子组件后面

***`v-on` 监听器继承***

组件上的事件会直接传递给根元素

***深层组件继承***

能够多层透传

### 禁用 Attribute 继承

在组件选项中设置 `inheritAttrs: false`。

使用 `<script setup>`需要一个额外的 `<script>` 块声明选项：

```vue
<script>
// 使用一个简单的 <script> to declare options
export default {
  inheritAttrs: false
}
</script>

<script setup>
// ...setup 部分逻辑
</script>
```

### 多根节点透传

多根结点默认没有自动 attribute 透传行为
