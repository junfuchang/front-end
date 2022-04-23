# Redux

## 原理

<img src="..\imgs\redux原理图.png" alt="redux原理图" style="zoom:67%;" />

~~~react
Store中用来存放共享的数据
组件想要获取数据要使用Sotre.getState()
改变store的数据需要dispatch(派发)给action（一个对象，里面两个属性，type和data）给store
store会把action给reducer（一个函数而已，根据不同的type返回对应的数据）
reducer将返回值交给store
但store内容的变化不会引起render刷新，需要调用subscribe来进行监听（传入回调函数来控制界面刷新）
~~~

## 实例代码
<img src="D:\笔记\imgs\redux示例项目结构图.png" style="zoom: 80%;" />



**index.js**

~~~react
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
~~~

**App.js**

~~~react
import store from "./redux/store";
import React from "react";
import { asyncAdd, subCount } from "./redux/conut_action";
export default class App extends React.Component {
    
  //或在index.js中使用方式二
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
    //方式二
    //ReactDOM.render(<App />, document.getElementById("root"));
    //store.subscribe(() => {
    //  ReactDOM.render(<App />, document.getElementById("root"));
    //});

  add() {
    store.dispatch(asyncAdd(4));
  }
  sub() {
    store.dispatch(subCount(2));
  }

  render() {
    return (
      <div>
        <h1>现在值为：{store.getState()}</h1>
        <button onClick={() => this.add()}>点我+</button>
        <button onClick={() => this.sub()}>点我-</button>
      </div>
    );
  }
}
~~~

redux/constent.js

~~~react
export const INCREASE = "increase";
export const DECREASE = "decrease";
~~~

redux/conut_action.js

~~~react
import { INCREASE, DECREASE } from "./constent";

const addCount = (data) => ({ type: INCREASE, data });
const subCount = (data) => ({ type: DECREASE, data });
const asyncAdd = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addCount(data));
    }, 1000);
  };
};
export { addCount, subCount, asyncAdd };
~~~

redux/count_reducer.js

~~~react
import { INCREASE, DECREASE } from "./constent";

const initState = 0;
function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREASE:
      return preState + data;
    case DECREASE:
      return preState - data;
    default:
      return preState;
  }
}

export default countReducer;
~~~

redux/store.js

~~~react
import { createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));
~~~

## 效果图

![](D:\笔记\imgs\redux示例效果图.png)

