# 重学React之状态管理细析(redux)

我们知道，当我们的项目逐渐壮大，就需要依赖很多数据，而且数据会在各个组件中用到，所以我们就需要共享这些数据，来做到响应式的更新页面。 [中文文档请看这里](https://link.juejin.cn/?target=http%3A%2F%2Fcn.redux.js.org%2Ftutorials%2Fessentials%2Fpart-1-overview-concepts)

## Redux核心内容

### action

- Redux要求我们通过action来更新数据。所有数据的变化，必须通过派发（dispatch）action来更新。
- action是一个普通的JavaScript对象，用来描述这次更新的type和value。

```js
    import {INCREMENT, DECREMENT} from './constants'
    // 返回一个对象{type, value}

    export const increment = num => ({
      type: INCREMENT,
      value: num
    })
    export const decrement = num => ({
      type: DECREMENT,
      value: num
    })
复制代码
```

### reducer

- reducer是一个纯函数。将state和action联系在一起。
- reducer做的事情就是将传入的state和action结合起来生成一个新的state。

```js
    import {INCREMENT, DECREMENT} from './constants'
    export default function reducer(state = {count: 0}, action) {
      switch (action.type) {
        case INCREMENT:
          return {...state, count: state.count + action.value}
        case DECREMENT:
          return {...state, count: state.count - action.value}
        default:
          return state
      }
    }
复制代码
```

### store

- 提供可以访问的变量和方法。

```js
    import {createStore} from 'redux';
    import reducer from './reducer'

    const store = createStore(reducer);

    export default store;
复制代码
```

## Redux的三大原则

### 单一数据源

- 整个应用程序的state被存储在一颗object tree中，并且这个object tree只存储在一个 store 中。
- Redux并没有强制让我们不能创建多个Store，但是那样做并不利于数据的维护。
- 单一的数据源可以让整个应用程序的state变得方便维护、追踪、修改。

### State是只读的

- 唯一修改State的方法一定是触发action，不要试图在其他地方通过任何的方式来修改State。
- 这样就确保了View或网络请求都不能直接修改state，它们只能通过action来描述自己想要如何修改state。
- 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心race condition（竟态）的问题。

### 使用纯函数来执行修改

- 通过reducer将 旧state和 actions联系在一起，并且返回一个新的State。
- 随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers，分别操作不同state tree的一部分。
- 但是所有的reducer都应该是纯函数，不能产生任何的副作用。

下面是redux官网提供的一幅图。![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c0b71d6d2f9478b87158dcc33b65356~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

## 基本案例

下面我们来看一下在项目中如何使用吧。这个案例就是点击按钮，调整数字，然后响应在两个组件中。

### 文件结构

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/605b1b4db3564815ad9b853be91abfb8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

### 代码

- actionCreators.js： 定义action对象。写成函数，方便扩展。

```js
    import {INCREMENT, DECREMENT} from './constants'
    // 返回一个对象{type, value}

    export const increment = num => ({
      type: INCREMENT,
      value: num
    })
    export const decrement = num => ({
      type: DECREMENT,
      value: num
    })
复制代码
```

- constants.js: 定义action常量，防止多处使用写错。

```js
    export const INCREMENT = "increment"
    export const DECREMENT = "decrement"
复制代码
```

- index.js

```js
    import {createStore} from 'redux';
    import reducer from './reducer'

    const store = createStore(reducer);

    export default store;
复制代码
```

- reducer.js

```js
    import {INCREMENT, DECREMENT} from './constants'
    export default function reducer(state = {count: 0}, action) {
      switch (action.type) {
        case INCREMENT:
          return {...state, count: state.count + action.value}
        case DECREMENT:
          return {...state, count: state.count - action.value}
        default:
          return state
      }
    }
复制代码
```

- 组件一

```js
import React, { PureComponent } from 'react'
import { increment, decrement } from '../store/actionCreators.js'
import store from '../store'
export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  decrement(num) {
    store.dispatch(decrement(num))
  }
  increment(num) {
    store.dispatch(increment(num))
  }

  render() {
    return (
      <div>
        <hr />
        <div>about</div>
        <div>{this.state.count}</div>
        <button onClick={(e) => this.decrement(5)}>-5</button>
        <button onClick={(e) => this.increment(5)}>+5</button>
      </div>
    )
  }
}
复制代码
```

- 组件二

```js
import React, { PureComponent } from 'react'
import { increment, decrement } from '../store/actionCreators.js'
import store from '../store'
export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  decrement(num) {
    store.dispatch(decrement(num))
  }
  increment(num) {
    store.dispatch(increment(num))
  }

  render() {
    return (
      <div>
        <div>home</div>
        <div>{this.state.count}</div>
        <button onClick={(e) => this.decrement(5)}>-5</button>
        <button onClick={(e) => this.increment(5)}>+5</button>
      </div>
    )
  }
}
复制代码
```

![btn2.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59ad2efd3dd84d198201aaef27911bd8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

## 封装高阶组件

从上面的代码可以看出，有很多重复的代码逻辑，所以我么可以抽离代码，让其变的更简洁。

- mapStateToProps。高阶组件中，调用该函数并传入state。

其实我们的逻辑还是在组件中书写的，即mapStateToProps的方法体。

- mapDispatchToProps。高阶组件中，调用该函数并传入store.dispatch。

其实我们的action函数依旧是在组件中写的，只是我们在高阶组件中触发而已。

```js
    import React, { PureComponent } from 'react'
    import store from '../store'

    export default function StoreHOC(mapStateToProps, mapDispatchToProps) {
      return (WrappedComponent) => {
        class HoComponent extends PureComponent {
          constructor(props) {
            super(props)
            this.state = store.getState()
          }

          componentDidMount() {
            store.subscribe(() => {
              this.setState(store.getState())
            })
          }
          render() {
            return (
              <WrappedComponent
                {...this.props}
                {...mapStateToProps(this.state)}
                {...mapDispatchToProps(store.dispatch)}
              />
            )
          }
        }
        return HoComponent
      }
    }
复制代码
```

使用

```js
    import React, { PureComponent } from 'react'
    import { increment, decrement } from '../store/actionCreators.js'

    import StoreHOC from './StoreHOC'
    class Home extends PureComponent {


      render() {
        return (
          <div>
            <div>home</div>
            <div>{this.props.count}</div>
            <button onClick={(e) => this.props.decrement(5)}>-5</button>
            <button onClick={(e) => this.props.increment(5)}>+5</button>
          </div>
        )
      }
    }

    const mapStateToProps = (state) => ({
      ...state
    })
    const mapDispatchToProps = (dispatch) => ({
      decrement(num) {
        dispatch(decrement(num))
      },
      increment(num) {
        dispatch(increment(num))
      }
    })

    export default StoreHOC(mapStateToProps, mapDispatchToProps)(Home)
复制代码
```

## 再次优化

但是上面代码的耦合性还是挺高的，必须的引入store。如果你想让别人使用这个高阶组件，那么他们也需要在你的代码中导入store。所以就有了下面的封装。

我们可以通过React.createContext。

```js
    // context.js
    import  {createContext} from 'react';

    const StoreContext = createContext();
    export default StoreContext
复制代码
```

高阶组件

- 就是将store换成this.context

```js
import React, { PureComponent } from 'react'
- // import store from '../store'
import StoreContext from './context.js'

export default function StoreHOC(mapStateToProps, mapDispatchToProps) {
  return (WrappedComponent) => {
    class HoComponent extends PureComponent {
      + static contextType = StoreContext
      + constructor(props, context) {
        super(props, context)
        this.state = context.getState()
      }

      componentDidMount() {
       - // 需要跟新state
       - // store.subscribe(() => {
       - //   this.setState(store.getState())
       - // })
       + this.context.subscribe(() => {
       +   this.setState(this.context.getState())
       + })
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.state)}
            + {...mapDispatchToProps(this.context.dispatch)}
          />
        )
      }
    }
    return HoComponent
  }
}
复制代码
```

使用

```js
    import StoreContext from './storeTest/context'
    import store from './store'
    ReactDOM.render((
        <div>
          <StoreContext.Provider value={store}>
            <Home></Home>
            <About></About>
          </StoreContext.Provider>
        </div>
    ), document.getElementById("root"))
复制代码
```

## 使用react-redux

但是在工作中，我们都会使用react-redux库。

### 安装

```js
    npm install react-redux
复制代码
```

### 使用

使用方法和上面我们自己封装的高阶函数一样。只不过我们给Provider组件设置共享数据时，是使用store，而非value。

```js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App'
    import store from './app/store'
    import { Provider } from 'react-redux'

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
复制代码
```

## redux处理异步

我们只打，当我们做项目时，需要请求数据，所以就需要发送网络请求获取数据。那么如何在redux中处理异步请求呢？

### 网络请求位置

- 可以放在组件的生命周期函数中。
- 可以放在redux中。

但是网络请求到的数据也属于我们状态管理的一部分，更好的应该是将其也交给redux来管理。所以我们就需要使用`redux-thunk`来完成这些操作。

### redux-thunk的介绍

- 默认情况下的dispatch(action)，action需要是一个JavaScript的对象。
- redux-thunk可以让dispatch(action函数)，action可以是一个函数。
  - 该函数会自动被调用，并且会传给这个函数一个dispatch函数和getState函数。
  - dispatch函数用于我们之后再次派发action。
  - getState函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态。

#### 具体使用

我们需要redux中内置的applyMiddleware来使用redux-thunk。

```js
    import {createStore, applyMiddleware, compose} from 'redux'

    import reducer from './reducer'

    import thunk from 'redux-thunk'
    
    // 这里也使用了redux-devtools工具
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) : compose

    const enhancer = composeEnhancers(applyMiddleware(thunk))
    const store = createStore(
      reducer,
      enhancer
    )

    export default store
复制代码
```

在action操作中发送网络请求。

```js
    export const getBannerList = (dispatch, getState) => {
      axios({
        url: 'http://123.207.32.32:8000/home/multidata'
      }).then((res) => {
      // 二次dispatch
        dispatch({
            type: "getBannerList",
            value: res.data.data.banner.list
          })
      })
    }
复制代码
```

组件中的一些逻辑

```js
    componentDidMount() {
    // 调用映射后的action函数。实现一次dispatch。
        this.props.getBannerList()
    }
    const mapDispatchToProps = (dispatch) => ({
      getBannerList() {
        dispatch(getBannerList)
      }
    })
    export default connect(mapStateToProps, mapDispatchToProps)(Home)
复制代码
```

## 简单剖析redux中间件

```js
    function thunk(store) {
      const next = store.dispatch;
      // 把它当做dispatch函数
      function dispatchAndThunk(action) {
        if(typeof action === "function") {
          action(store.dispatch, store.getState)
        }else {
          next(action)
        }
      }
      // 方式一
      // store.dispatch = dispatchAndThunk
      // 方式二
      return dispatchAndThunk
    }


    function applyMiddleware(...middleware) {
      for(let i = 0; i < middleware.length; i++) {
      // 方式一
      // middleware[i](store)
      // 方式二
        store.dispatch = middleware[i](store)
      }
    }
    // 可以传入多个中间件函数
    applyMiddleware(thunk)
复制代码
```

## 拆分reducer

我们发现，由于项目的不断壮大，数据量越来越多，如果将所有的状态都放到一个reducer中进行管理，reducer也会变得非常臃肿。不利于维护。所以我们需要对reducer进行拆分。

如何拆分呢？

学习过vuex的同学的知道，有模块的概念。所以我们也可以将对应的数据分为一个模块，让各自维护自己的reducer, actionCreator, constants文件。然后再在总的reducer中进行合并。![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/877293a74213494189cee33fc9cd8c05~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)那么如何在总的reducer合并呢？

这时候我们就需要用到redux提供的combineReducers函数了。![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/164478551f704ca29ea9beddc2f60146~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

redux这部分还是比较难理解的，不会像vuex一样拿来即用。所以还需要自己好好理解redux,多多练习。



[重学React之状态管理细析(redux) - 掘金 (juejin.cn)](https://juejin.cn/post/7079277020521185293)



