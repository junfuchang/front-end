# 阮一峰 Fetch API 教程   -  有改动

## 一、基本用法

在用法上，`fetch()`接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。下面是一个例子，从服务器获取 JSON 数据。

 ```javascript
 //链式调用
 fetch('URL')
 .then(response = response.json())		//接收到的`response`是一个 Stream 对象
 .then(json = console.log(json))
 .catch(err = console.log(err)); 
 
 
 //函数式需要使用try...catch捕捉错误
 async function getJSON() {
     try {
         let response = await fetch('URL');
         return await response.json();
     } catch (error) {
         console.log(error);
     }
 }
 ```

`response.json()`是一个异步操作，取出所有内容，并将其转为 JSON 对象。



## 二、Response 对象 API

### 2.1 同步(可以立即读取)属性介绍

 ```javascript
 async function fetchText() {
   let response = await fetch('/readme.txt');
   console.log(response.status); 
   console.log(response.statusText);
 }
 ```

标头信息属性有下面这些。

1. **Response.ok**

`Response.ok`属性返回一个布尔值，表示请求是否成功，`true`对应 HTTP 请求的状态码 200 到 299，`false`对应其他的状态码。

2. **Response.status**

`Response.status`属性返回一个数字，表示 HTTP 回应的状态码（例如200，表示成功请求）。

3. **Response.statusText**

`Response.statusText`属性返回一个字符串，表示 HTTP 回应的状态信息（例如请求成功以后，服务器返回"OK"）。

4. **Response.url**

`Response.url`属性返回请求的 URL。如果 URL 存在跳转，该属性返回的是最终 URL。

5. **Response.type**

`Response.type`属性返回请求的类型。可能的值如下：

 - `basic`：普通请求，即同源请求。
 - `cors`：跨域请求。
 - `error`：网络错误，主要用于 Service Worker。
 - `opaque`：如果`fetch()`请求的`type`属性设为`no-cors`，就会返回这个值，详见请求部分。表示发出的是简单的跨域请求，类似`<form`表单的那种跨域请求。
 - `opaqueredirect`：如果`fetch()`请求的`redirect`属性设为`manual`，就会返回这个值，详见请求部分。

6. **Response.redirected**

`Response.redirected`属性返回一个布尔值，表示请求是否发生过跳转。

### 2.2 判断请求是否成功

- 只有网络原因fetch才会报错（即使服务器返回的状态码是 4xx 或 5xx，`fetch()`也不会报错，即不会变为 `rejected`状态）

- 通过以下方式判断（`fetch()`会将跳转的状态码自动转为 200）

 ```javascript
 if (response.ok) 
 OR 
 if (response.status = 200 && response.status < 300)
 ```

### 2.3 headers 对象属性

**最常用的是`response.headers.get()`，用于读取某个标头的值**

 ```javascript
 const response = await fetch(url);
 // for...of 遍历
 for (let [key, value] of response.headers) { 
   console.log(`${key} : ${value}`);  
 }
 ```

//增删改

 - `Headers.get()`：根据指定的键名，返回键值。
 - `Headers.has()`： 返回一个布尔值，表示是否包含某个标头。
 - `Headers.set()`：将指定的键名设置为新的键值，如果该键名不存在则会添加。
 - `Headers.append()`：添加标头。
 - `Headers.delete()`：删除标头。

//进行读取遍历

 - `Headers.keys()`：返回一个遍历器，可以依次遍历所有键名。
 - `Headers.values()`：返回一个遍历器，可以依次遍历所有键值。
 - `Headers.entries()`：返回一个遍历器，可以依次遍历所有键值对（`[key, value]`）。
 - `Headers.forEach()`：依次遍历标头，每个标头都会执行一次参数函数（value，key）。

上面的有些方法可以修改标头，那是因为继承自 Headers 接口。对于 HTTP 回应来说，修改标头意义不大，况且很多标头是只读的，浏览器不允许修改。

### 2.4 读取返回值的方法

`Response`对象根据服务器返回的不同类型的数据，提供了不同的读取方法。

 - `response.text()`：得到文本字符串。
 - `response.json()`：得到 JSON 对象。
 - `response.blob()`：得到二进制 Blob 对象。
 - `response.formData()`：得到 FormData 表单对象。
 - `response.arrayBuffer()`：得到二进制 ArrayBuffer 对象。

上面5个读取方法都是异步的，返回的都是 Promise 对象。必须等到异步操作结束，才能得到服务器返回的完整数据。

**response.text()**

`response.text()`可以用于**获取文本数据**，比如 HTML 文件。

**response.json()**

`response.json()`主要用于获取服务器返回的 **JSON 数据**，前面已经举过例子了。

**response.formData()**

`response.formData()`主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。

**response.blob()**

`response.blob()`用于获取**二进制文件**。

 ```javascript
 const response = await fetch('flower.jpg');
 const myBlob = await response.blob();
 const objectURL = URL.createObjectURL(myBlob);
 
 const myImage = document.querySelector('img');
 myImage.src = objectURL;
 ```

上面示例读取图片文件`flower.jpg`，显示在网页上。

**response.arrayBuffer()**

`response.arrayBuffer()`主要用于获取**流媒体文件**。

 ```javascript
 const audioCtx = new window.AudioContext();
 const source = audioCtx.createBufferSource();
 
 const response = await fetch('song.ogg');
 const buffer = await response.arrayBuffer();
 
 const decodeData = await audioCtx.decodeAudioData(buffer);
 source.buffer = buffer;
 source.connect(audioCtx.destination);
 source.loop = true;
 ```

上面示例是`response.arrayBuffer()`获取音频文件`song.ogg`，然后在线播放的例子。

#### Response.clone()

**Stream 对象（response对象）只能读取一次，读取完就没了。**Response 对象提供`Response.clone()`方法，创建`Response`对象的副本，实现多次读取。

 ```javascript
const response1 = await fetch('flowers.jpg');
const response2 = response1.clone();
const myBlob1 = await response1.blob();
const myBlob2 = await response2.blob();
 ```

Response 对象还有一个`Response.redirect()`方法，用于将 Response 结果重定向到指定的 URL。该方法一般只用在 Service Worker 里面，这里就不介绍了。

### 2.5 body 属性

`Response.body`属性是 Response 对象暴露出的底层接口，返回一个 ReadableStream 对象，供用户操作。

它可以用来分块读取内容，应用之一就是显示下载的进度。

 ```javascript
 const response = await fetch('flower.jpg');
 const reader = response.body.getReader();	//方法返回一个遍历器。它的`read()`方法每次返回一个对象，表示本次读取的内容块。
 
 while(true) {
   const {done, value} = await reader.read();	//`value`属性是一个 arrayBuffer 数组，表示内容块的内容，而`value.length`属性是当前块的大小。
   if (done) {	//用来判断有没有读完
     break;
   }
   console.log(`Received ${value.length} bytes`)
 }
 ```



## 三、第二个参数 - 请求头设置

**HTTP 请求的方法、标头、数据体都在这个对象里面设置。**下面是一些示例。

### （1）POST 请求

 ```javascript
 const response = await fetch(url, {
   method: 'POST',
   headers: {	//设置标头
     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
   },
   body: 'foo=bar&lorem=ipsum',	//请求体
 });
 
 const json = await response.json();
 ```

 - 

**有些标头不能通过`headers`属性设置**，比如`Content-Length`、`Cookie`、`Host`等等。它们是由浏览器自动生成，无法修改。

### （2）提交 JSON 

 ```javascript
 const user =  { name:  'John', surname:  'Smith'  };
 const response = await fetch('/article/fetch/post/user', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json;charset=utf-8'		//!!!!
   }, 
   body: JSON.stringify(user) 
 });
 ```

上面示例中，标头`Content-Type`要设成`'application/json;charset=utf-8'`。因为默认发送的是纯文本，`Content-Type`的默认值是`'text/plain;charset=UTF-8'`。

（3）提交表单

 ```javascript
 const form = document.querySelector('form');
 
 const response = await fetch('/users', {
   method: 'POST',
   body: new FormData(form)
 })
 ```

（4）文件上传

如果表单里面有文件选择器，可以用前一个例子的写法，上传的文件包含在整个表单里面，一起提交。

另一种方法是用脚本添加文件，构造出一个表单，进行上传，请看下面的例子。

 ```javascript
 const input = document.querySelector('input[type="file"]');
 
 const data = new FormData();
 data.append('file', input.files[0]);
 data.append('user', 'foo');
 
 fetch('/avatars', {
   method: 'POST',
   body: data
 });
 ```

上传二进制文件时，不用修改标头的`Content-Type`，浏览器会自动设置。

（5）直接上传二进制数据

`fetch()`也可以直接上传二进制数据，将 Blob 或 arrayBuffer 数据放在`body`属性里面。

 ```javascript
 let blob = await new Promise(resolve =   
   canvasElem.toBlob(resolve,  'image/png')
 );
 
 let response = await fetch('/article/fetch/post/image', {
   method:  'POST',
   body: blob
 });
 ```



## 四、取消`fetch()`请求

`fetch()`请求发送以后，如果中途想要取消，需要使用`AbortController`对象。

 ```javascript
 //一个1秒后自动取消请求的例子
 let controller = new AbortController();		//创建AbortController实例
 setTimeout(() = controller.abort(), 1000);		// 取消
 try {
   let response = await fetch('/long-operation', {
     signal: controller.signal		//如要中止,需要对应一个中止控制对象的signal
   });
 } catch(err) {
   if (err.name == 'AbortError') {
     console.log('Aborted!');
   } else {
     throw err;
   }
 }
 console.log(controller.signal.aborted);		//判断取消信号是否已经发出。
 
 
 //其他: controller.abort()方法用于发出取消信号。这时会触发`abort`事件，这个事件可以监听
 controller.signal.addEventListener('abort',
   () = console.log('abort!')
 );
 ```



## 五、第二个参数的完整 API

`fetch()`第二个参数的完整 API 如下。

 ```javascript
 const response = fetch(url, {
     method: "GET",	//请求方式
     headers: {	//设置头信息
       "Content-Type": "text/plain;charset=UTF-8"
     },
     body: undefined,	//设置请求体（默认）
     referrer: "about:client",	//设置referer标头
     referrerPolicy: "no-referrer-when-downgrade",	//
     mode: "cors", 		//请求的模式
     credentials: "same-origin",		//是否发送 Cookie
     cache: "default",	//缓存模式
     redirect: "follow",	//重定向方式
     integrity: "",		//校验哈希值
     keepalive: false,	//是否
     signal: undefined	//用于绑定中止实例(如果需要中止的话)的属性
 });
 ```

`fetch()`请求的底层用的是 [Request() 对象](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)的接口，参数完全一样，因此上面的 API 也是`Request()`的 API。



**method**

- HTTP 请求的方法，`POST`、`DELETE`、`PUT`都在这个属性设置。

**headers**

- 一个对象，用来定制 HTTP 请求的标头

**body**

- POST 请求的数据体

**cache**

`cache`属性指定如何处理缓存。可能的取值如下：

 - `default`：默认值，先在缓存里面寻找匹配的请求。
 - `no-store`：直接请求远程服务器，并且不更新缓存。
 - `reload`：直接请求远程服务器，并且更新缓存。
 - `no-cache`：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。
 - `force-cache`：缓存优先，只有不存在缓存的情况下，才请求远程服务器。
 - `only-if-cached`：只检查缓存，如果缓存里面不存在，将返回504错误。

**mode**

`mode`属性指定请求的模式。可能的取值如下：

 - `cors`：默认值，允许跨域请求。
 - `same-origin`：只允许同源请求。
 - `no-cors`：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨域的复杂标头，相当于提交表单所能发出的请求。

**credentials**

`credentials`属性指定是否发送 Cookie。可能的取值如下：

 - `same-origin`：默认值，同源请求时发送 Cookie，跨域请求时不发送。
 - `include`：不管同源请求，还是跨域请求，一律发送 Cookie。
 - `omit`：一律不发送。

跨域请求发送 Cookie，需要将`credentials`属性设为`include`。

 ```javascript
 fetch('http://another.com', {
   credentials: "include"
 });
 ```

**signal**

`signal`属性指定一个 AbortSignal 实例，用于取消`fetch()`请求，详见下一节。

**keepalive**

`keepalive`属性用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。

一个典型的场景就是，用户离开网页时，脚本向服务器提交一些用户行为的统计信息。这时，如果不用`keepalive`属性，数据可能无法发送，因为浏览器已经把页面卸载了。

 ```javascript
 window.onunload = function() {
   fetch('/analytics', {
     method: 'POST',
     body: "statistics",
     keepalive: true
   });
 };
 ```

**redirect**

`redirect`属性指定 HTTP 跳转的处理方法。可能的取值如下：

 - `follow`：默认值，`fetch()`跟随 HTTP 跳转。
 - `error`：如果发生跳转，`fetch()`就报错。
 - `manual`：`fetch()`不跟随 HTTP 跳转，但是`response.url`属性会指向新的 URL，`response.redirected`属性会变为`true`，由开发者自己决定后续如何处理跳转。

**integrity**

`integrity`属性指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值。

比如，下载文件时，检查文件的 SHA-256 哈希值是否相符，确保没有被篡改。

 ```javascript
 fetch('http://site.com/file', {
   integrity: 'sha256-abcdef'
 });
 ```

**referrer**

`referrer`属性用于设定`fetch()`请求的`referer`标头。

这个属性可以为任意字符串，也可以设为空字符串（即不发送`referer`标头）。

 ```javascript
 fetch('/page', {
   referrer: ''
 });
 ```

**referrerPolicy**

`referrerPolicy`属性用于设定`Referer`标头的规则。可能的取值如下：

 - `no-referrer-when-downgrade`：默认值，总是发送`Referer`标头，除非从 HTTPS 页面请求 HTTP 资源时不发送。
 - `no-referrer`：不发送`Referer`标头。
 - `origin`：`Referer`标头只包含域名，不包含完整的路径。
 - `origin-when-cross-origin`：同源请求`Referer`标头包含完整的路径，跨域请求只包含域名。
 - `same-origin`：跨域请求不发送`Referer`，同源请求发送。
 - `strict-origin`：`Referer`标头只包含域名，HTTPS 页面请求 HTTP 资源时不发送`Referer`标头。
 - `strict-origin-when-cross-origin`：同源请求时`Referer`标头包含完整路径，跨域请求时只包含域名，HTTPS 页面请求 HTTP 资源时不发送该标头。
 - `unsafe-url`：不管什么情况，总是发送`Referer`标头。
