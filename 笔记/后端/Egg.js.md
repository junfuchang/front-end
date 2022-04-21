# Egg.js

## 创建项目

#### 脚手架创建

~~~bash
mkdir egg-example && cd egg-example
npm init egg --type=simple		--
npm i
~~~

#### 手动创建

1. 初始化项目

~~~bash
npm init
npm i egg --save
npm i egg-bin --save-dev

~~~

~~~js
// 配置package.json
"scripts": {
  "dev": "egg-bin dev"
}
~~~

2. 编写router和controller

~~~js
// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;
~~~

~~~js
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
~~~

3. 添加配置文件

~~~js
// config/config.default.js
exports.keys = <此处改为你自己的 Cookie 安全字符串>;
~~~









## 问题及解决

[node连接Mysql报错ER_NOT_SUPPORTED_AUTH_MODE - 给时光以生命 - 博客园 (cnblogs.com)](https://www.cnblogs.com/jing-tian/p/11688073.html)

[(12条消息) ERROR 1396 (HY000): Operation ALTER USER failed for ‘root‘@‘localhost‘_张小凡-CSDN博客](https://blog.csdn.net/q258523454/article/details/84555847)





[(12条消息) react解析md文件_天空影-CSDN博客](https://blog.csdn.net/jx950915/article/details/107670872)

[react解析markdown文件 - 星期九 - 博客园 (cnblogs.com)](https://www.cnblogs.com/yesu/p/10998594.html)

