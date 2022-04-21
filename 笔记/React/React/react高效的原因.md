### react高效的原因

1. 使用虚拟(virtual)DOM, 不总是直接操作页面真实DOM。

2. DOM Diffing算法, 最小化页面重绘。



## 一、React基本使用

##### 			相关JS库

1. react.js：React核心库。

2. react-dom.js：提供操作DOM的react扩展库。

3. babel.min.js：解析JSX语法代码转为JS代码的库。



### 1.创建虚拟DOM方法

纯js创建（基本不用）

JSX方法

#### 1.1API创建

~~~jsx
	const VDOM = React.createElement(component, props, ...children)
~~~

#### 1.2JSX创建

~~~jsx
const VDOM = <h1>XXX</h1>
~~~

注：以<开头做为标签名来解析，首字母小写则当做标签，首字母大写则作为组件解析

遇到以 { 开头的代码，以JS语法解析



##### babel.js的作用

1. 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
2. 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理



### 2.组件

注：

1. 组件名首字母必须大写
2. 虚拟DOM元素只能有一个根节点
3. 虚拟DOM元素必须有结束标签



#### 2.1 组件三大属性之一：state

含有state属性的组件叫状态机，更新state会对DOM结点进行更新

1. 组件中render方法中的**this为组件实例**对象

2. 组件**自定义的方法中this**为undefined，如何解决？

   ​	a)   强制绑定this: 通过函数对象的**bind()**

   ​	b)   **箭头函数**

3. **状态数据，不能直接修改或更新**，需要通过**this.setState()**方法



简写：直接放在类中



#### 2.2组件三大属性之二：props

给组件传入的数据，组件通过props属性进行接收

通过{...data}进行快速传参



对传入的数据进行类型限制（需要引入PropTypes库），**方法定义在组件对象（类）上**：

~~~js
static propTypes = {
		name:PropTypes.string.isRequired, //限制name必传，且为字符串
		sex:PropTypes.string,	//限制sex为字符
    	age:PropTypes.number,	//限制age为数值
		speak:PropTypes.func,//限制speak为函数
	}
	//指定默认标签属性值
static defaultProps = {
		sex:'男',//sex默认值为男
		age:18 //age默认值为18
	}
~~~











