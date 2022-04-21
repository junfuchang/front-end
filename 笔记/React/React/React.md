## 1.创建DOM

### 1.1	JSX创建(推荐)

#### 1.1.1	jsx语法规则

​            1.定义虚拟DOM时，**不要写引号**。

​            2.标签中**混入JS表达式时要用{}**。

​            3.样式的类名指定不要用class，要用**className**。

​            4.内联样式，要用**style={{key:value}}**的形式去写。

​            5.**只有一个根标签**

​            6.标签**必须闭合**

​            7.标签**首字母**

​                1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。

​                (2.若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。



~~~react
<script type="text/babel" > /* 此处一定要写babel */
		//1.创建虚拟DOM
		const VDOM = (/* 此处一定不要写引号，因为不是字符串 */
			<h1 id="title">
				<span>Hello,React</span>
			</h1>
		)
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
~~~

#### 1.1.2	区分:代码与表达式

​          1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

​                下面这些都是表达式：

​                    (1). a

​                    (2). a+b

​                    (3). demo(1)

​                    (4). arr.map() 

​                    (5). function test () {}

​          2.语句(代码)：

​                下面这些都是语句(代码)：

​                    (1).if(){}

​                    (2).for(){}

​                    (3).switch(){case:xxxx}



### 1.2	js创建

~~~react
<script type="text/javascript" > 
		//1.创建虚拟DOM
		const VDOM = React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello,React'))
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
~~~



### 注1:虚拟DOM与真实DOM

1. React提供了一些API来创建一种 “特别” 的一般js对象

  ~~~react
  const VDOM = React.createElement('xx',{id:'xx'},'xx')
  上面创建的就是一个简单的虚拟DOM对象
  ~~~

2. 虚拟DOM对象最终都会被React转换为真实的DOM

3. 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界。



### 注2.渲染虚拟DOM

​	1.语法

~~~react
ReactDOM.render(virtualDOM, containerDOM);
~~~

2.   作用: 将虚拟DOM元素渲染到页面中的真实容器DOM中显示

3. 参数说明

   1)   参数一: 纯js或jsx创建的虚拟dom对象

   2)   参数二: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div)





## 2.创建组件

### 2.1	类式组件

~~~react
<script type="text/babel">
		//1.创建类式组件
		class MyComponent extends React.Component {
			render(){
				//render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
				//render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
				console.log('render中的this:',this);
				return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
			}
		}
		//2.渲染组件到页面
		ReactDOM.render(<MyComponent/>,document.getElementById('test'))
		/* 
			执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
					1.React解析组件标签，找到了MyComponent组件。
					2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
					3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
		*/
	</script>
~~~

### 2.2	函数式组件
~~~react
<script type="text/babel">
		//1.创建函数式组件
		function MyComponent(){
			console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
			return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
		}
		//2.渲染组件到页面
		ReactDOM.render(<MyComponent/>,document.getElementById('test'))
		/* 
			执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
					1.React解析组件标签，找到了MyComponent组件。
					2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
		*/
	</script>
~~~





## 3.三大属性

### 3.1	state属性

~~~react
<script type="text/babel">
		//1.创建组件
		class Weather extends React.Component{
			//初始化状态,该方式为简写方式
			state = {isHot:false,wind:'微风'}

			render(){
				const {isHot,wind} = this.state
				return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
			}

			//自定义方法————要用赋值语句的形式+箭头函数
			changeWeather = ()=>{
				const isHot = this.state.isHot
				this.setState({isHot:!isHot})
			}
		}
		//2.渲染组件到页面
		ReactDOM.render(<Weather/>,document.getElementById('test'))
				
	</script>
~~~
#### 注:注意点

1. 组件中render方法中的this为组件实例对象

2. 组件自定义的方法中this为undefined，如何解决？

   a)   强制绑定this: 通过函数对象的bind()

   b)   箭头函数

3. 状态数据，不能直接修改或更新



### 3.2	props属性

#### 3.2.1	作用

1. 通过标签属性从组件外向组件内传递变化的数据

2. 注意: 组件内部不要修改props数据



#### 3.3.2	传递

~~~react
<Person {...person}/>		//此处花括号只是表示内部为JS表达式,而非解构用法,这里能够实现传递因为这是react的特殊用法
~~~



#### 3.2.3	类型限制

~~~react
<script type="text/babel">
		//创建组件
		class Person extends React.Component{
			constructor(props){
				//构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
				// console.log(props);
				super(props)
				console.log('constructor',this.props);
			} 
              
			//对标签属性进行类型、必要性的限制
			static propTypes = {
				name:PropTypes.string.isRequired, //限制name必传，且为字符串
				sex:PropTypes.string,//限制sex为字符串
				age:PropTypes.number,//限制age为数值
			}
			//指定默认标签属性值
			static defaultProps = {
				sex:'男',//sex默认值为男
				age:18 //age默认值为18
			}

			render(){
				// console.log(this);
				const {name,age,sex} = this.props
				//props是只读的
				//this.props.name = 'jack' //此行代码会报错，因为props是只读的
				return (
					<ul>
						<li>姓名：{name}</li>
						<li>性别：{sex}</li>
						<li>年龄：{age+1}</li>
					</ul>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
	</script>
~~~



#### 3.2.2	函数式组件使用props

~~~react
<script type="text/babel">
		//创建组件
		function Person (props){
			const {name,age,sex} = props
			return (
					<ul>
						<li>姓名：{name}</li>
						<li>性别：{sex}</li>
						<li>年龄：{age}</li>
					</ul>
				)
		}
		Person.propTypes = {
			name:PropTypes.string.isRequired, //限制name必传，且为字符串
			sex:PropTypes.string,//限制sex为字符串
			age:PropTypes.number,//限制age为数值
		}

		//指定默认标签属性值
		Person.defaultProps = {
			sex:'男',//sex默认值为男
			age:18 //age默认值为18
		}
		//渲染组件到页面
		ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
	</script>
~~~





### 3.3	ref属性(不推荐)

#### 3.3.1	字符串形式

~~~react
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			//展示左侧输入框的数据
			showData = ()=>{
				const {input1} = this.refs
				alert(input1.value)
			}
			//展示右侧输入框的数据
			showData2 = ()=>{
				const {input2} = this.refs
				alert(input2.value)
			}
			render(){
				return(
					<div>
						<input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
					</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
	</script>
~~~

#### 3.3.2	回调函数形式

~~~react
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			//展示左侧输入框的数据
			showData = ()=>{
				const {input1} = this
				alert(input1.value)
			}
			//展示右侧输入框的数据
			showData2 = ()=>{
				const {input2} = this
				alert(input2.value)
			}
			render(){
				return(
					<div>
						<input ref={c => this.input1 = c } type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input onBlur={this.showData2} ref={c => this.input2 = c } type="text" placeholder="失去焦点提示数据"/>&nbsp;
					</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
	</script>
~~~

###### 注:调用次数问题





#### 3.3.3	容器形式: createRef

~~~react
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			/* 
				React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
			 */
			myRef = React.createRef()
			myRef2 = React.createRef()
			//展示左侧输入框的数据
			showData = ()=>{
				alert(this.myRef.current.value);
			}
			//展示右侧输入框的数据
			showData2 = ()=>{
				alert(this.myRef2.current.value);
			}
			render(){
				return(
					<div>
						<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input onBlur={this.showData2} ref={this.myRef2} type="text" placeholder="失去焦点提示数据"/>&nbsp;
					</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
	</script>
~~~





### 4.事件处理

~~~react
<script type="text/babel">
		//创建组件
		class Demo extends React.Component{
			/* 
				(1).通过onXxx属性指定事件处理函数(注意大小写)
						a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
						b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
				(2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref
			 */
			//创建ref容器
			myRef = React.createRef()
			myRef2 = React.createRef()

			//展示左侧输入框的数据
			showData = (event)=>{
				console.log(event.target);
				alert(this.myRef.current.value);
			}

			//展示右侧输入框的数据
			showData2 = (event)=>{
				alert(event.target.value);
			}

			render(){
				return(
					<div>
						<input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
						<button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
						<input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>&nbsp;
					</div>
				)
			}
		}
		//渲染组件到页面
		ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
	</script>
~~~





### 5.收集表单数据

#### 5.1	非受控组件

~~~react
<script type="text/babel">
		//创建组件
		class Login extends React.Component{
			handleSubmit = (event)=>{
				event.preventDefault() //阻止表单提交
				const {username,password} = this
				alert(`你输入的用户名是：${username.value},你输入的密码是：${password.value}`)
			}
			render(){
				return(
					<form onSubmit={this.handleSubmit}>
						用户名：<input ref={c => this.username = c} type="text" name="username"/>
						密码：<input ref={c => this.password = c} type="password" name="password"/>
						<button>登录</button>
					</form>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Login/>,document.getElementById('test'))
	</script>
~~~



#### 5.2	受控组件

~~~react
<script type="text/babel">
		//创建组件
		class Login extends React.Component{

			//初始化状态
			state = {
				username:'', //用户名
				password:'' //密码
			}

			//保存用户名到状态中
			saveUsername = (event)=>{
				this.setState({username:event.target.value})
			}

			//保存密码到状态中
			savePassword = (event)=>{
				this.setState({password:event.target.value})
			}

			//表单提交的回调
			handleSubmit = (event)=>{
				event.preventDefault() //阻止表单提交
				const {username,password} = this.state
				alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
			}

			render(){
				return(
					<form onSubmit={this.handleSubmit}>
						用户名：<input onChange={this.saveUsername} type="text" name="username"/>
						密码：<input onChange={this.savePassword} type="password" name="password"/>
						<button>登录</button>
					</form>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Login/>,document.getElementById('test'))
	</script>
~~~





### 6.函数写法

#### 6.1	高级函数_函数柯里化

~~~react
<script type="text/babel">
		//#region 
				/* 
					高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
									1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
									2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
									常见的高阶函数有：Promise、setTimeout、arr.map()等等

					函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 
						function sum(a){
							return(b)=>{
								return (c)=>{
									return a+b+c
								}
							}
						}
					*/
		//#endregion
		//创建组件
		class Login extends React.Component{
			//初始化状态
			state = {
				username:'', //用户名
				password:'' //密码
			}

			//保存表单数据到状态中
			saveFormData = (dataType)=>{
				return (event)=>{
					this.setState({[dataType]:event.target.value})
				}
			}

			//表单提交的回调
			handleSubmit = (event)=>{
				event.preventDefault() //阻止表单提交
				const {username,password} = this.state
				alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
			}
			render(){
				return(
					<form onSubmit={this.handleSubmit}>
						用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
						密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
						<button>登录</button>
					</form>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Login/>,document.getElementById('test'))
	</script>
~~~



#### 6.2	不使用函数柯里化

~~~react
<script type="text/babel">
		//创建组件
		class Login extends React.Component{
			//初始化状态
			state = {
				username:'', //用户名
				password:'' //密码
			}

			//保存表单数据到状态中
			saveFormData = (dataType,event)=>{
				this.setState({[dataType]:event.target.value})
			}

			//表单提交的回调
			handleSubmit = (event)=>{
				event.preventDefault() //阻止表单提交
				const {username,password} = this.state
				alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
			}
			render(){
				return(
					<form onSubmit={this.handleSubmit}>
						用户名：<input onChange={event => this.saveFormData('username',event) } type="text" name="username"/>
						密码：<input onChange={event => this.saveFormData('password',event) } type="password" name="password"/>
						<button>登录</button>
					</form>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Login/>,document.getElementById('test'))
	</script>
~~~





### 7.生命周期

### 7.1	生命周期引入

~~~react
生命周期回调函数 <=> 生命周期钩子函数 <=> 生命周期函数 <=> 生命周期钩子
~~~

~~~react
<script type="text/babel">
		//创建组件
		class Life extends React.Component{
			state = {opacity:1}
			death = ()=>{
				//卸载组件
				ReactDOM.unmountComponentAtNode(document.getElementById('test'))
			}
			//组件挂完毕
			componentDidMount(){
				console.log('componentDidMount');
				this.timer = setInterval(() => {
					//获取原状态
					let {opacity} = this.state
					//减小0.1
					opacity -= 0.1
					if(opacity <= 0) opacity = 1
					//设置新的透明度
					this.setState({opacity})
				}, 200);
			}
			//组件将要卸载
			componentWillUnmount(){
				//清除定时器
				clearInterval(this.timer)
			}
			//初始化渲染、状态更新之后
			render(){
				console.log('render');
				return(
					<div>
						<h2 style={{opacity:this.state.opacity}}>React学不会怎么办？</h2>
						<button onClick={this.death}>不活了</button>
					</div>
				)
			}
		}
		//渲染组件
		ReactDOM.render(<Life/>,document.getElementById('test'))
	</script>
~~~

#### 7.2	(旧)生命周期

![](F:\markdown\React\react生命周期(旧).png)

~~~react
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
									1.	constructor()
									2.	componentWillMount()
									3.	render()
									4.	componentDidMount() =====> 常用
													一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
				2. 更新阶段: 由组件内部this.setSate()或父组件render触发
									1.	shouldComponentUpdate()
									2.	componentWillUpdate()
									3.	render() =====> 必须使用的一个
									4.	componentDidUpdate()
				3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
									1.	componentWillUnmount()  =====> 常用
													一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
~~~

示例:

~~~react
class Count extends React.Component{
			//构造器
			constructor(props){
				console.log('Count---constructor');
				super(props)
				//初始化状态
				this.state = {count:0}
			}
			//加1按钮的回调
			add = ()=>{
				//获取原状态
				const {count} = this.state
				//更新状态
				this.setState({count:count+1})
			}
			//卸载组件按钮的回调
			death = ()=>{
				ReactDOM.unmountComponentAtNode(document.getElementById('test'))
			}
			//强制更新按钮的回调
			force = ()=>{
				this.forceUpdate()
			}
			//组件将要挂载的钩子
			componentWillMount(){
				console.log('Count---componentWillMount');
			}
			//组件挂载完毕的钩子
			componentDidMount(){
				console.log('Count---componentDidMount');
			}
			//组件将要卸载的钩子
			componentWillUnmount(){
				console.log('Count---componentWillUnmount');
			}
			//控制组件更新的“阀门”
			shouldComponentUpdate(){
				console.log('Count---shouldComponentUpdate');
				return true
			}
			//组件将要更新的钩子
			componentWillUpdate(){
				console.log('Count---componentWillUpdate');
			}
			//组件更新完毕的钩子
			componentDidUpdate(){
				console.log('Count---componentDidUpdate');
			}

			render(){
				console.log('Count---render');
				const {count} = this.state
				return(
					<div>
						<h2>当前求和为：{count}</h2>
						<button onClick={this.add}>点我+1</button>
						<button onClick={this.death}>卸载组件</button>
						<button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
					</div>
				)
			}
		}
		
		//父组件A
		class A extends React.Component{
			//初始化状态
			state = {carName:'奔驰'}

			changeCar = ()=>{
				this.setState({carName:'奥拓'})
			}

			render(){
				return(
					<div>
						<div>我是A组件</div>
						<button onClick={this.changeCar}>换车</button>
						<B carName={this.state.carName}/>
					</div>
				)
			}
		}
		
		//子组件B
		class B extends React.Component{
			//组件将要接收新的props的钩子
			componentWillReceiveProps(props){
				console.log('B---componentWillReceiveProps',props);
			}
			//控制组件更新的“阀门”
			shouldComponentUpdate(){
				console.log('B---shouldComponentUpdate');
				return true
			}
			//组件将要更新的钩子
			componentWillUpdate(){
				console.log('B---componentWillUpdate');
			}
			//组件更新完毕的钩子
			componentDidUpdate(){
				console.log('B---componentDidUpdate');
			}
			render(){
				console.log('B---render');
				return(
					<div>我是B组件，接收到的车是:{this.props.carName}</div>
				)
			}
		}
		
		//渲染组件
		ReactDOM.render(<Count/>,document.getElementById('test'))
	</script>
~~~



7.3 	(新)生命周期

![](F:\markdown\React\react生命周期(新).png)









































