# AJAX

发送异步请求，无刷新的发送数据获取数据

**思考**

- 要会基本的服务端设置
- 要回基本的请求发送



**知识点**

- **HTTP了解知识**

  - 请求报文
    - 行			GET/POST			/数据路径				HTTP版本
    - 头 		   键值对
    - 空行
    - 体		    get请求该部分为空,post请求该部分可以不为空
  - 响应报文
    - 行			HTTP版本			响应状态码			响应字符串
    - 头			键值对
    - 空行
    - 体			返回结果

- **Express服务框架 -- 简单设置服务**

  - 在外层文件夹安装，`npm i express`

    - 思：npm i  与  npm  install 的区别？

  - 启动服务，`node 文件名`

  - 基本使用

    - 引入express	`const express = require('express');`

    - 创建应用对象	`const app = express();`

    - 创建路有规则	`app.get('/', (request, response)=>{..});`	只有在对应路径下才会调用回调，后俩是对象的封装

      - 设置不同的请求接受方式已处理对应的请求

        - 可以设置app.all()来处理任意类型请求

      - 设置跨域    `response.setHeader('Access-Control-Allow-Origin','*');`

      - 发送JSON数据

        - ~~~js
          const data = {
              name:"me",
              age:19
          }
          let dataStr = JSON.stringify(data);
          response.send(dataStr);
          ~~~

          - send()只能发送字符串和另一种格式，不支持JSON

    - 监听端口启动服务	`app.listen(端口号, ()=>{....});`

- **前端请求发送和响应处理**

  - 创建对象		`const xhr = new XMLHttpRequest();`

  - 设置响应数据类型、超时时间、超时回调、异常回调

    - `xhr.responseType = 'json'`
      - 手动对JSON数据处理
        - `let data = JSON.parse(xhr.response);`
      - 自动格式转换(推荐)
        - 在创建完对象后设置 `xhr.responseType = 'json'` 
    - `xhr.timeoyt = 2000;`
    - `xhr.ontimeout = function(){...};`

  - 设置请求类型和请求地址		`xhr.open("get","http://127.0.0.1:8080");`

  - 设置请求头信息	`xhr.setRequestHeader('name','value');`

    - 多用于身份校验信息
    - 可设置多个

  - 发送			`xhr.send();`

  - 事件绑定，处理服务端返回结果

    - readystate是xhr的属性，有状态码0、1、2、3、4

    - ~~~js
      xhr.onreadystatechange = function()(  
      	//判断结果是否完全返回（4）
      	if(xhr.readystate == 4){
          	//判断响应状态码,2xx为正常
          	if(xhr.status >= 200 && xhr.status<300){
                  //处理结果（处理源响应结果：头 行 空行 体）		//见下一部分
              	....
      		}
      	}
      );
      ~~~

      - status    响应状态码
      - statusText    状态字符串
      - getAllResponseHeaders()    获取所有的响应头
      - response    响应体

  - 设置参数

    - get类型设置
      - 在open()内URL后设置	`http://127.0.0.1:8080?a=1&b=2&c=3`
        - 在地址后面设置参数：`属性名 = 值`，用`&`分割

    - post类型设置
      - 在send()内设置	`xhr.send("a:1&b:2")`
        - 发送格式可以任意，例a = 1或 a : 1等都可以

  - 取消请求

    - xhr.abort()

  - 设置节流阀

    - 解决重复请求问题，缓解服务器压力
    - 用法：添加变量来判断是否正在发送，如果是则取消请求并重新发送请求



# HTTP

HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定, 规则

## 请求报文

重点是格式与参数

```
行      POST(请求类型)  /s?ie=utf-8(URL路径)  HTTP/1.1 (HTTP协议版本)
头      Host: atguigu.com()
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded(请求体类型)
        User-Agent: chrome 83(用户浏览器)
空行
体      username=admin&password=admin(get请求该部分为空,post请求该部分可以不为空) 
```

## 响应报文

```
行      HTTP/1.1(HTTP版本)  200(响应码)  OK(响应状态字符串)
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行    
体      <html>
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>
```

* 404(找不到)
* 403(被禁止)
* 401(未授权)
* 500(内部错误)
* 200(成功)



~~~js
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response)=>{
    //设置响应
    // 第一个参数是路径,若请求该路径则触发函数
    
    response.send('HELLO EXPRESS');//发送
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});
~~~

