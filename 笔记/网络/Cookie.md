**Cookie主要用于以下三个方面：**

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

------

Cookie曾一度用于客户端数据的存储，因当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，**Cookie渐渐被淘汰**。

由于**服务器指定Cookie后，浏览器的每次请求都会携带Cookie数据**，会带来**额外的性能开销**（尤其是在移动环境下）。

**新的浏览器API已经允许开发者直接将数据存储到本地**，如使用 Web storage API （本地存储和会话存储）或 IndexedDB 。  

------

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

(1) **会话期Cookie** 浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。

(2) **持久性Cookie**可以指定一个特定的过期时间（Expires）或有效期（Max-Age），关闭浏览器不会直接失效。

(3) Secure 和 HttpOnly

- **标记为 `Secure` 的Cookie只应通过被HTTPS协议加密过的请求发送给服务端。**
- **为避免跨域脚本 (XSS) 攻击，通过JavaScript的 Document.cookie API无法访问带有 `HttpOnly` 标记的Cookie，它们只应该发送给服务端。**

(4) Cookie的作用域 Domain 和 Path 标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。