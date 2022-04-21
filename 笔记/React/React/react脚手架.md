# React脚手架

## 安装脚手架

~~~bash
1.安装node
2.安装 create-react-app 包
npm install create-react-app -g
3.创建React脚手架项目
create-react-app ReactDemo
~~~



## 运行脚手架

~~~bash
npm start
~~~



## 脚手架目录结构

~~~
my-app
├─ README.md // readme说明文档
├─ package.json // 对整个应用程序的描述：包括应用名称、版本号、一些依赖包、以及项目的启动、打包等等（node管理项目必备文件）
├─ public
│    ├─ favicon.ico // 应用程序顶部的icon图标
│    ├─ index.html // 应用的index.html入口文件
│    ├─ logo192.png // 被在manifest.json中使用
│    ├─ logo512.png // 被在manifest.json中使用
│    ├─ manifest.json // 和Web app配置相关
│    └─ robots.txt // 指定搜索引擎可以或者无法爬取哪些文件
├─ src // 基本所有开发都在这个文件夹中进行
│    ├─ App.css // App组件相关的样式
│    ├─ App.js // App组件的代码文件
│    ├─ App.test.js // App组件的测试代码文件
│    ├─ index.css // 全局的样式文件
│    ├─ index.js // 整个应用程序的入口文件
│    ├─ logo.svg // 刚才启动项目，所看到的React图标
│    ├─ serviceWorker.js // 默认帮助我们写好的注册PWA相关的代码（离线缓存技术）
│    └─ setupTests.js // 测试初始化文件
├─ node_modules // 所有依赖安装文件夹
└─ yarn.lock // 依赖本地下载版本管理文件
~~~



