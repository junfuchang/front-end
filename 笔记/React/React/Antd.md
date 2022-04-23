# Antd

## 基本使用

1. 下载antd库

~~~js
yarn add antd
~~~

2. 在App层引入css样式

~~~js
@import '~antd/dist/antd.css';
~~~



## 高级设置

### 前置步骤

~~~diff
1. 安装craco
yarn add @craco/craco

2. 修改 package.json 里的 scripts 属性
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}

3. 在项目根目录创建一个 craco.config.js 用于修改默认配置
/* craco.config.js */
module.exports = {
  // ...
};
~~~

### 自定义主题 

按照 [配置主题](https://ant.design/docs/react/customize-theme-cn) 的要求，自定义主题需要用到类似 [less-loader](https://github.com/webpack-contrib/less-loader/) 提供的 less 变量覆盖功能。我们可以引入 [craco-less](https://github.com/DocSpring/craco-less) 来帮助加载 less 样式和修改变量。

首先把 `src/App.css` 文件修改为 `src/App.less`，然后修改样式引用为 less 文件。

```diff
/* src/App.js */
- import './App.css';
+ import './App.less';
/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';
```

然后安装 `craco-less` 并修改 `craco.config.js` 文件如下。

```bash
$ yarn add craco-less
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
			//设置自定义颜色
            modifyVars: { '@primary-color': '#1DA57A' },
            //或
            modifyVars: getThemeVariables({
                dark: true, // 开启暗黑模式
                compact: true, // 开启紧凑模式
            }),

          },
        },
      },
     
    },
  ],
};
```

这里利用了 [less-loader](https://github.com/webpack/less-loader#less-options) 的 `modifyVars` 来进行主题配置，变量和其他配置方式可以参考 [配置主题](https://ant.design/docs/react/customize-theme-cn) 文档。修改后重启 `yarn start`，如果看到一个绿色的按钮就说明配置成功了。

antd 内建了深色主题和紧凑主题，你可以参照 [使用暗色主题和紧凑主题](https://ant.design/docs/react/customize-theme-cn#使用暗色主题和紧凑主题) 进行接入。



## 按需引入

~~~
module.exports = {
	babel: {//支持装饰器
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true //设置为css即是css 这里用的是less
                }
            ]
        ]
    },
};
~~~

