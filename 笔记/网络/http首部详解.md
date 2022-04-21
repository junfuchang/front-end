# HTTP 首部

主要分为通用首部、请求首部、响应首部和实体首部四种：

- 通用首部字段：既可以出现在请求报文中，也可以出现在响应报文中，它提供了与报文相关的最基本的信息；
- 请求首部字段：从客户端向服务器发送请求报文时使用的首部字段，补充了请求的附加内容，客户端信息，响应内容相关优先级等信息；
- 响应首部字段：从服务器向客户端返回响应报文时使用的首部字段；补充了响应的附加内容，也会要求客户端附加额外的内容信息；
- 实体首部字段：针对请求报文和响应报文的实体部分使用的首部，补充了资源内容的更新时间等与实体有关的信息。
- 其他报文字段：这些字段不是HTTP协议中定义的，但被广泛应用于HTTP请求中。

## 1. 通用首部字段

| 首部字段名        | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| **Cache-Control** | 控制缓存行为。                                               |
| Connection        | 在完成当前事务后是否继续链接，值为Keep-Alive可实现长连接。   |
| Date              | 创建HTTP报文的日期和时间。                                   |
| Pragma            | Http/1.1之前的历史遗留字段，仅作为HTTP/1.0向后兼容而定义，虽然是通用字段，当通常被使用在客户单的请求中，如Pragma: no-cache, 表示客户端在请求过程中不循序服务端返回缓存的数据。 |
| Trailer           | 报文尾部的首部。                                             |
| Transfer-Encoding | 规定了传输报文主题时使用的传输编码，如Transfer-Encoding: chunked。 |
| Upgrade           | 用于检查HTTP协议或其他协议是否有可使用的更高版本。           |
| Via               | 追踪客户端和服务端之间的报文的传输路径，还可避免会环的发生，所以在经过代理时必须添加此字段。 |
| Warning           | Http/1.1的报文字段，从Http/1.0的AfterRetry演变而来，用来告知用户一些与缓存相关的警告信息。 |

- Cache-Control，默认为private。

```
private     私有缓存
public      共享缓存
max-age     缓存的内容将在 xxx 秒后失效
no-cache    需要使用对比缓存来验证缓存数据（启用协商缓存）
no-store    所有内容都不会缓存，强缓存、协商缓存都不会触发
```

## 2. 请求首部字段

| 首部字段名            | 说明                                                         |
| --------------------- | ------------------------------------------------------------ |
| Accept                | 客户端能够处理的媒体类型                                     |
| Accept-Charset        | 表示客户端支持的字符集。例如：Accept-Charset: GB2312, ISO-8859-1 |
| Accept-Encoding       | 表示客户端支持的内容编码格式。如：Accept-Encoding：gzip      |
| Accept-Language       | 表示客户端支持的语言。如：Accept-Language: zh-cn, en         |
| Authorization         | 表示客户端的认证信息。客户端在访问需要认证的也是时，服务器会返回401，随后客户端将认证信息加在Authorization字段中发送到服务器后，如果认证成功，则返回200 |
| Host                  | 表示访问资源所在的主机名，即URL中的域名部分。如：m.baidu.com |
| If-Match              | If-Match的值与所请求资源的ETag值（实体标记，与资源相关联。资源变化，实体标记跟着变化）一致时，服务器才处理此请求 |
| **If-Modified-Since** | 用于确认客户端拥有的本地资源的时效性                         |
| **If-None-Match**     | If-Match的值与所请求资源的ETag值不一致时服务器才处理此请求   |
| If-Range              | If-Range的值（ETag值或时间）与所访问资源的ETag值或时间相一致时，服务器处理此请求，并返回Range字段中设置的指定范围的数据。如果不一致，则返回所有内容。If-Range其实算是If-Match的升级版，因为它的值不匹配时，依然能够返回数据，而If-Match不匹配时，请求不会被处理，需要数据时需再次进行请求 |
| If-Unmodified-Since   | 与If-Modified-Since相反，表示请求的资源在指定的时间之后未发生变化时，才处理请求，否则返回412 |
| Max-Forwards          | 表示请求可经过的服务器的最大数目，请求每被转发一次，Max-Forwards减1，当Max-Forwards为0时，所在的服务器将不再转发，而是直接做出应答。通过此字段可定位通信问题 |
| Proxy-Authorization   | 当客户端接收到来自代理服务器的认证质询时，客户端会将认证信息添加到Proxy-Authorization来完成认证。与Authorization类似，只不过Authorization是发生在客户端与服务端之间 |
| Range                 | 获取部分资源，例如：Range: bytes=500-1000表示获取指定资源的第500到1000字节之间的内容，如果服务器能够正确处理，则返回206作为应答，表示返回了部分数据，如果不能处理这种范围请求，则以200作为应答，返回完整的数据 |
| Referer               | 告知服务器请求是从哪个页面发起的                             |
| User-Agent            | 将发起请求的浏览器和代理名称等信息发送给服务端               |
| Cookie                | 在请求时添加Cookie, 以实现HTTP的状态记录                     |

## 3. 响应首部字段

| 首部字段名         | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| Accept-Ranges      | 是否接受字节范围。                                           |
| Age                | 服务端告知客户端，源服务器（而不是缓存服务器）在多久之前创建了响应，单位为秒。 |
| **ETag**           | 实体资源标识，可用来请求指定的资源。                         |
| Location           | 请求的资源所在的新位置。                                     |
| Proxy-Authenticate | 将代理服务器需要的认证信息发送给客户端。                     |
| Retry-After        | 服务端告知客户端多久之后再重试，一般与503和3xx重定向类型的应答一起使用。 |
| Server             | 告知服务端当前使用的HTTP服务器应用程序的相关信息。           |
| Vary               | 代理服务器缓存的管理信息。                                   |
| WWW-Authenticate   | 告知客户端适用于所访问资源的认证方案，如Basic或Digest。401的响应中肯定带有WWW-Authenticate字段。 |
| Set-Cookie         | 服务器通过此字段给客户端传递Cookie信息。                     |

## 4. 实体首部字段

| 首部字段名       | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| Allow            | 通知客户端，服务器所支持的请求方法。                         |
| Content-Encoding | 告知客户端，服务器对资源的内容编码。                         |
| Content-Language | 告知客户端，资源所使用的自然语言。                           |
| Content-Length   | 告知客户端资源的长度                                         |
| Content-Location | 告知客户端资源所在的位置。                                   |
| **Content-Type** | 资源类型，用于定义网络文件的类型和网页的编码，取值同请求首部字段中的Accept。 |
| Expires          | 告知客户端资源的失效日期。可用于对缓存的处理。               |
| Last-Modified    | 告知客户端资源最后一次修改的时间。                           |

- Content-Type
  - 常见的媒体类型： 
    - 文本文件：text/html, text/plain, text/css, application/xml 
    - 图片文件：iamge/jpeg, image/gif, image/png; 
    - 视频文件：video/mpeg
    - 应用程序使用的二进制文件：application/octet-stream, application/zip
  - 常用的内容编码： 
    - gzip: 由文件压缩程序gzip生成的编码格式； 	
    - compress: 由Unix文件压缩程序compress生成的编码格式； 
    - deflate: 组合使用zlib和deflate压缩算法生成的编码格式； 
    - identity：默认的编码格式，不执行压缩。

## 5. 其他报文字段

X-Frame-Options：首部字段X-Frame-Options属于HTTP响应首部 用于控制网站内容在其他Web网站的Frame标签内的显示问题，主要目的是为了防止点击劫持攻击

X-XSS-Protection：首部字段X-XSS-Protection属于HTTP响应首部 针对跨站脚本攻击的一种对策,用于控制浏览器XSS防护机制的开关

DNT(Do Not Track)：拒绝个人信息被收集,表示拒绝被精准广告追踪的一种方法



# HTTP 状态返回码

> 状态码负责表示客户端请求的返回结果、标记服务器端是否正常、通知出现的错误。

| 状态码 | 类别                             | 分类描述             |
| ------ | -------------------------------- | -------------------- |
| 1XX    | Informational（信息性状态码）    | 请求正在被处理       |
| 2XX    | Success（成功状态码）            | 请求处理成功         |
| 3XX    | Redirection（重定向状态码）      | 需要进行重定向       |
| 4XX    | Client Error（客户端错误状态码） | 服务器无法处理请求   |
| 5XX    | Server Error（服务器错误状态吗） | 服务器处理请求时出错 |

## 1. 信息响应

| 状态码 | 短句                | 含义                             |
| ------ | ------------------- | -------------------------------- |
| 100    | Continue            | 继续，客户端应继续其请求         |
| 101    | Switching Protocols | 切换协议，只能切换到更高级的协议 |

## 2. 成功响应

| 状态码 | 短句     | 含义                               |
| ------ | -------- | ---------------------------------- |
| 200    | OK       | 请求成功，一般用于GET与POST请求    |
| 201    | Created  | 已创建，成功请求并创建了新的资源   |
| 202    | Accepted | 已接受，已经接受请求，但未处理完成 |

## 3. 重定向

| 状态码  | 短句               | 含义                                                         |
| ------- | ------------------ | ------------------------------------------------------------ |
| 300     | Multiple Choices   | 多种选择，请求的资源可包括多个位置                           |
| 301     | Moved Permanently  | 永久移动                                                     |
| 302     | Found              | 临时移动，GET 或者 HEAD 请求                                 |
| 303     | See Other          | 查看其它地址，与302类似。需使用GET请求查看                   |
| **304** | Not Modified       | 未修改，服务器返回此状态码时，不会返回任何资源（将直接使用缓存） |
| 307     | Temporary Redirect | 临时重定向，不该改变请求方法                                 |

## 4. 客户端错误

| 状态码  | 短句               | 含义                                           |
| ------- | ------------------ | ---------------------------------------------- |
| 400     | Bad Request        | 客户端请求的语法错误，服务器无法理解           |
| 401     | Unauthorized       | 请求要求用户的身份认证                         |
| 402     | Payment Required   | 保留，将来使用                                 |
| **403** | Forbidden          | 服务器理解请求客户端的请求，但是拒绝执行此请求 |
| **404** | Not Found          | 服务器无法根据客户端的请求找到资源（网页）     |
| 405     | Method Not Allowed | 客户端请求中的方法被禁止                       |

## 5. 服务器错误

| 状态码 | 短句                       | 含义                                           |
| ------ | -------------------------- | ---------------------------------------------- |
| 500    | Internal Server Error      | 服务器内部错误，无法完成请求                   |
| 501    | Not Implemented            | 服务器不支持请求的功能，无法完成请求           |
| 502    | Bad Gateway                | 从远程服务器接收到了一个无效的响应             |
| 503    | Service Unavailable        | 服务器暂时的无法处理客户端的请求               |
| 504    | Gateway Time-out           | 未及时从远端服务器获取请求                     |
| 505    | HTTP Version not supported | 服务器不支持请求的HTTP协议的版本，无法完成处理 |





# （面试）说一说常见的请求头和相应头都有什么呢？

## 1)请求(客户端->服务端[request])

  GET(请求的方式) /newcoder/hello.html(请求的目标资源) HTTP/1.1(请求采用的协议和版本号)
  Accept: */*(客户端能接收的资源类型)
  Accept-Language: en-us(客户端接收的语言类型)
  Connection: Keep-Alive(维护客户端和服务端的连接关系)
  Host: localhost:8080(连接的目标主机和端口号)
  Referer: http://localhost/links.asp(告诉服务器我来自于哪里)
  User-Agent: Mozilla/4.0(客户端版本号的名字)
  Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型)
  If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间) 
  Cookie(客户端暂存服务端的信息)

  Date: Tue, 11 Jul 2000 18:23:51 GMT(客户端请求服务端的时间)



## 2)响应(服务端->客户端[response])

  HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)
  Location: http://www.baidu.com(服务端需要客户端访问的页面路径) 
  Server:apache tomcat(服务端的Web服务端名)
  Content-Encoding: gzip(服务端能够发送压缩编码类型) 
  Content-Length: 80(服务端发送的压缩数据的长度) 
  Content-Language: zh-cn(服务端发送的语言类型) 
  Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)
  Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)
  Refresh: 1;url=http://www.it315.org(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)
  Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)
  Transfer-Encoding: chunked(分块传递数据到客户端）  
  Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)
  Expires: -1//3种(服务端禁止客户端缓存页面数据)
  Cache-Control: no-***(服务端禁止客户端缓存页面数据)  
  Pragma: no-***(服务端禁止客户端缓存页面数据)  
  Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)  

  Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)

**在服务器响应客户端的时候，带上Access-Control-Allow-Origin头信息，解决跨域的一种方法。**