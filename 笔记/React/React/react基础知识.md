# React

## 函数式组件基本结构

~~~react
//组件名需要大写，否则会被当成普通标签来使用
function Demo(props){
	const {name,age} = props	
	return (<div>DemoText<div/>)
}
//对组件props限制类型
Demo.propTypes={
	name:PropTypes.string.isRequired,
	age:PropTypes.number,
	showAge:PropTypes.func,
}
//对组件props设置默认值           
Demo.defaultProps={
	name:"xiaohong"
	age:18,
	showAge:PropTypes.func,
}
ReactDOM.render(<Demo/>,document.getElementById('root'))

~~~

## 类式组件基本结构

~~~react
class Demo extends React.Component{
    static propTypes={
        name:PropTypes.string.isRequired,
        age:PropTypes.number,
        showAge:PropTypes.func,
    }
    static defaultProps={
        name:"xiaohong"
        age:18,
    }
    //直接放在实例上当作属性
    state = {time:'10:00'}

	//render中的this指向实例
    render(){
        const { name } = this.props;
        return (<h1 onClick={this.ShowTime}>{ name }</h1>)
    }
	//因为函数定义在实例原型上，所以箭头函数中this指向实例
	showTime = () => {
        console.log(this.state.time)	
    }
}

ReactDOM.render(<Demo/>,document.getElementById('root'))

~~~







# React注意点

## 事件调用（this问题）

1.`onClick={this.func}`为什么需要在函数前加this调用

~~~react
类中定义的函数会放在实例的原型上,
即render函数中的this指向实例

//有问题的示例代码
class Demo extends React.Component{
    //直接放在实例上当作属性
    state = {time:'10:00'}
	//render中的this指向实例
    render(){
        return (<h1 onClick={this.showTime}>Demo标题</h1>)		//该处是有问题的，这里去调用原型上的showTime，但showTime中的this不再指向实例，因为他并非被实例所调用
    }
	//函数中的this有问题，因为不是实例去调用showTime
	showTime(){
        console.log(this.state.time)
    }
}

ReactDOM.render(<Demo/>,document.getElementById('root'))

~~~

## 构造器的使用

~~~react
1. 可以不适用构造器

2. 使用构造器的注意点
constructor(props){			//props为接受的参数对象,可以不加
  super(props)				//向上层传递参数（React.Component）
  console.log(this.props)	//如果不使用super，则无法在构造函数中使用this
}

~~~

## refs注意点

**不要过度使用ref**

1. 回调形式的ref (推荐)

~~~react
//存在性能问题，更新时会调用两次，第一次为null，第二次才为DOM节点，多数场景影响不大
<input ref={(Node)=>{this.input1 = Node}}/>	//直接在this中创建了个属性（将节点传递给this.input）,直接拿this.input1调用即可
~~~

2. createRef创建ref容器 (推荐)

~~~react
myRef = React.createRef() 		//这里直接当作实例属性，可以写在构造器中
<input ref={this.myRef}/>
this.myRef.current.XXX			//调用
~~~

3. 字符串形式的ref (不推荐)

~~~react
//存在性能问题，官方不推荐，即将费用
<input ref="input1"/>
~~~

## 高阶函数及柯里化

~~~
高阶函数: 函数接收一个函数作参数 或 函数返回一个函数
柯里化: 调用一个函数的返回值

例：
function Time(day){
	return (time)=>{
		console.log(`今天是${day},时间是${time}`)
	}
}
Time("10月1号")("12点钟")
~~~









