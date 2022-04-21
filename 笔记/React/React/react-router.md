# react-router@6

[github官方文档](https://github.com/remix-run/react-router/tree/main/docs/)

## Component

### 1.`<BrowserRouter>`

~~~ react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
	{/*App组件结构*/}
    </BrowserRouter>,
  document.getElementById("root")
);
~~~

### 2.`<HashRouter>`

- 作用与<BrowserRouter>一样，但<HasnRouter>修改的是地址栏的hash值

### 3.`<Routes>与<Route>`

1. `<Route>`需要被`<Routes>`包裹

2. `<Route caseSensitive>`属性用于指定：匹配时是否区分大小写（默认false）
3. `<Route>`可以嵌套使用，也可以配合`useRoutes()`配置路由表
4. `<Route>`的**path**设置为`"*"`时，该路由将会在任何路径都不匹配不上时渲染内容
5. 路径匹配时将**采用精准匹配**，要求path和URL相匹配才会生效

~~~react
/*1.嵌套写法*/
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="Expenses" element={<Expenses />} />
            <Route path="Invoices" element={<Invoices />}>
                <Route index element={<h2>请选择一个发票</h2>}></Route>
                <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
        </Route>
    </Routes>
</BrowserRouter>

/*路由表写法*/
const appRouter = [
    {
        path:'/',
        element:<Navigate to='/home'>
    },
    {
        path:'/home',
        element:<Main />,
        children:[
            {
                path:'son',
                element:<Son />
            },
        ]
    },        
]

      
            
const navigate = useRoutes(appRoutet);             
~~~

### 4.`<Link>与<NavLink>`

~~~react
<Link to='路径'>名称</Link>

<NavLink 
    to='路径' 
    calssName={({isActive}) => {
		return isActive ? 'base active' : 'base';
    }}>名称
</NavLink>


//NavLink的活动样式设置
<NavLink 
    to="/somewhere"
    style={(isAtive)=>({
        color:isActive ? 'red' : 'black'
})}></NavLink>
~~~

### 5.`<Navigate>`

- 被渲染时 立即 跳转到 目标路径

~~~react
{newValue === 1 ? <h1>{newValue}</h1> : <Navigate to="/" replace={true}>}
~~~

### 6.`<Outlet>`

- 用于渲染子路由内容

~~~react
<li>
	<Link to='/'>点我</Link>
    <Link to='/about' state={{ userId:001 }}>点我</Link>
</li>

<Outlet />
~~~



## Hooks

### 1.useRoutes()

- 根据路由表来创建路由结构

### 2.useNavigate()

- 用于实现编程式路由

~~~react
const navigate = useNavigate();
// 用于跳转到指定路径(第二个参数可选)
navigate('/about',{		//只能传递state参数
    replace: true,	
    state: { userId:001, name:'哈'}
})
// 用于网页前进或后退
navigate(1)		//前进
navigate(-1)	//后退
~~~

### 3.useParams()

- 获取路由中的params参数
- URL params取出的值均为`String`类型

~~~react
// 路由中需要首先设置下params
<Routes>
    <Route path="/data/:id"></Route>
</Routes>
// 使用useParams()获取参数对象
cosnt { id } = useParams();
~~~

### 4.useSearchParams()

- 用于查询和修改查询字符串
- 返回值与useState极其类似，可以取值，也可以设置值

~~~react
const [theParams, setTheParams] = useSearchParams();
// 查询
theParams.get('id');
// 修改
setTheParams({id: 001, name:'jack'})
setTheParams('?id=001&name=jack')
~~~

~~~react
import { useSearchParams } from "react-router-dom";

function Demo() {
  const [searchParams, setSearchParams] = useSearchParams();		//所得到的是SearchParams 对象
  return (
      <input
          value={searchParams.get("filter") || ""}		//取值
          onChange={e => {
              let value = e.target.value;
              if (value) {
                  setSearchParams({ filter: value });	//设置值
              } else {
                  setSearchParams({});
              }
          }}
       ></input>
  );
}
~~~

### 5.useLocation()

- 获取location对象

~~~react
// location对象
{
    "pathname": "/",
    "search": "",
    "hash": "",
    "state": null,
    "key": "default"
}
// 例子
import { useLocal } from "react-router-dom";
function Demo(){
    const localURL = useLocal();
    return(
        <NavLink
            to={`/somewhere${localURL.search}`}		//实现："/somewhere?filter=s"
            style={({isActive})=>({
                color:isActive ? 'red' : 'black'
            })}
        >链接</NavLink>
    )
}
~~~

### 6.useMatch()

- 返回传给的匹配信息

~~~react
  let myLocation = useLocation();
  let mes = useMatch(myLocation.pathname);
  console.log(mes);
// 匹配信息
{
    "params": {},
    "pathname": "/",
    "pathnameBase": "/",
    "pattern": {
        "path": "/",
        "caseSensitive": false,
        "end": true
    }
}
~~~

### 7.useInRouterContext()

- 判断当前是否处于路由的环境（被<BrowserRouter>等包裹）

### 8.useNavigationType()

- 返回当前的导航类型（用户怎么来到该界面的）
  - POP		在浏览器中直接打开了这个路由组件（如刷新页面）
  - PUSH
  - REPLACE

### 9.useOutlet()

- 用于显示当前组件的嵌套路由
  - 若还未挂载嵌套路由，返回null
  - 已挂载嵌套路由，则返回嵌套的路由对象

### 10.useResolvePath()

- 解析传入URL的path、search、hash值





## 传参方式

### 1.params参数

​    路由链接(携带参数)：`<Link to='/demo/test/tom/18'}>详情</Link>`
​    注册路由(**声明接收**)：`<Route path="/demo/test/:name/:age" element={<Test />}/>`
​    接收参数：`const theParams = useParams();`

### 2.search参数

​    路由链接(携带参数)：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`
​    注册路由(**无需声明，正常注册即可**)：`<Route path="/demo/test" element={Test}/>`
​    接收参数：

~~~react
const [theParams, setTheParams] = useSearchParams()

//获取
theParams.get('id');
// 修改
setTheParams({id: 001, name:'jack'})
setTheParams('?id=001&name=jack')
~~~

### 3.state参数

​    路由链接(携带参数)：`<Link to='/' state={{ name:'tom', age:18 }}>详情</Link>`
​    注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" element={Test}/>`
​    接收参数：`const { state:{ userId } } = useLocation()` 
​    备注：刷新也可以保留住参数

## 嵌套路由

- **嵌套效果**可以通过**对路由的嵌套**实现，父路由里需要用**`<Outlet>`**来渲染子路由的内容
- 指定`<Route>`中的**index**属性（不可和path一起使用）可以在当其他子路由匹配不到路径时，渲染指定的默认内容	

~~~react
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoice/" element={<Invoice />}>
          <Route
            index
            element={<main><p>请选择一个发票</p></main>}
          ></Route>
          <Route path=":invoice" element={<InvoiceItem />}></Route>
        </Route>
        <Route path="expenses/" element={<Expenses />}></Route>
        <Route		
          path={"*"}
          element={<main><h2>错误的地址！</h2></main>}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

~~~
