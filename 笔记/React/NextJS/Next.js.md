# Next.js

## 安装脚手架

主要由三部分组成：react  react-dom  next

~~~js
npm install -g create-next-app
npx create-next-app next-demo
~~~



## 项目结构

- components文件夹:放置自定义组件
- pages文件夹：放置页面的，会自动生成路由
- static文件夹： 静态资源



## 首页

在page文件夹新建index.js文件即可，使用yarn dev就可以开启项目

~~~react
//不需要引入React
function Index(){
    return (<button>首页</button>)
}

export default Index;
~~~

## 路由

### 跳转

```react
//Link形式（标签路由）
import Link from 'next/link'
//注意：Link下只能包含一个子节点
<Link href="/route_path"><a>跳转</a></Link>
    
//函数式路由
Router.push('/route_path')
```

### 传参

Nextjs的路由只能通过query传参，即：

~~~react
import Router from 'next/router'
//形式1，直接在路由后面接?id=1的形式
function gotoA(){
    Router.push('/route_path?id=1')
}
//形式2，使用对象形式
function gotoA(){
    Router.push({
        pathname:'/route_path',
        query:{
        	id:1
    	}
    })
}

//Link形式的也适用
<Link href="/route_path?id=1"></Link>
<Link href={{pathname:"route_path",query:{id:1}}}></Link>
~~~

### 接参

参数放置在props中，用router取出来

注意：**需要使用 withRouter函数 包裹返回**

```react
import { withRouter} from 'next/router'
import Link from 'next/link'

const demo = ({router})=>{
    return (
        <>
            <div>{router.query.id}</div>
        </>
    )
}

export default withRouter(demo)		//withRouter是Next.js框架的高级组件，用来处理路由用的
```

### 钩子（路由的生命周期）

需要用Router组件，然后用`on`方法来进行监听

- routerChangeStart           路由发生变化时
- beforeHistoryChange      浏览器history触发前
- routeChangeComplete   路由变化完成时
- routeChangeError           路由出错时（不是404）
- hashChangeStart             路由hash变化时
- hashChangeComplete    路由hash发生完成时

~~~react
//监听示例
Router.events.on('routerChangeStart',(...args)=>{
    console.log('参数',...args)
})
~~~



## 请求数据

在组件的getInitialProps静态方法中获取数据

~~~react
//小示例
DemoComponent.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
            axios('url').then((res)=>{
                console.log('远程数据结果：',res)
                resolve(res.data.data)
            }
         )
    })
    return await promise
}
~~~



## 页面样式

使用style jsx语法

~~~react
import React, {useState} from 'react'

function Demo(){
    const [color,setColor] = useState('blue')
    const changeColor=()=>{
        setColor(color=='blue'?'red':'blue')
    }
    return (
        <>
            <div>样式</div>
            <button onClick={changeColor}>改变颜色</button>
            <style jsx>		//使用模板字符串而已
                {`
                    div { color:${color};}		
                `}
            </style>
        </>
    )
}
export default Demo
~~~



## 实现懒加载

### 懒加载模块

~~~react
//在需要使用的时候动态加载即可，如下面这个方法
const changeTime= async ()=>{ //把方法变成异步模式
    const moment = await import('moment') //等待moment加载完成
    console.log(moment.default(Date.now()).format()) //注意使用defalut
}
~~~

### 懒加载自定义组件

~~~react
//需要引入dynamic
import dynamic from 'next/dynamic'
//定义动态加载
const Demo = dynamic(import('../components/something'))
//后面正常使用即可,需要用到时将自动加载
<>
   <Demo/>
</>
~~~



## 设置网站标题

需要时自己加head标签即可：

~~~react
import Head from 'next/head'
<>
    <Head>
        <title> title </title>   
    </Head>
</>
~~~

也可以封装起来往其他地方引：

~~~react
import Head from 'next/head'

const MyHeader = ()=>{
    return (
        <>
            <Head>
                <title> global-title </title>   
            </Head>
        </>
    )
}

export default MyHeader
~~~



## 使用Antd

### 按需加载

```shell
yarn add antd

yarn add babel-plugin-import	//安装插件
```

在项目根目录建立`.babelrc`文件，然后写入如下配置文件

```js
{
    "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
    "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
        [
            "import",
            {
                "libraryName":"antd",
                /"style":"css"
            }
        ]
    ]
}
```

正常使用

```js
import {Button} from 'antd'
function Header(){ 
    return (
        <>
            <Button>我是按钮</Button>
        </> 
    )
}
export default Header
```



## 生产环境打包

> 打包 ：next build

> 运行：next start -p 80		//-p 指定端口号

### 使用antd注意

在page目录下，新建一个`_app.js`文件，然后写入下面的代码。

```js
import App from 'next/app'

import 'antd/dist/antd.css'

export default App
```



## 学习链接

[技术胖-React服务端渲染框架Next.js入门(共12集) (jspang.com)](http://jspang.com/detailed?id=51#toc21)

