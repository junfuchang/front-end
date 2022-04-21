先生成npm配置文件

~~~bash
npm init -y
~~~



# ESLint

推荐npm包和插件都进行安装，因为插件是对自己的约束，而使用npm会对整个项目无论是谁都进行规范

~~~bash
npm i eslint -D

//生成eslint配置文件，推荐使用airbnb规范
npx eslint --init
//对所有文件进行修复，.表示全部
npx eslint . --fix		
~~~

将生成如下.eslintrc配置文件

~~~js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',	//关闭console警告
  },
};
~~~

## React注意点

注意eslint安装版本不要太高，推荐7.11.0版本，否则项目跑不起来

在React17之后，eslint的jsx语法检测会有问题，需要在 **extends**下添加 **"plugin:react/jsx-runtime"**



# Prettier

- 安装插件后手动新建.prettire配置

~~~js
{
    "singleQuote": true			//启用单引号
}
~~~

- 保存时启用代码格式化设置：

VSCode中打开Format On Save 选项，然后编译器中右键选择Format Document后即可







# 相关文章

[探究 VSCode 中 ESLint、Prettier，ESLint-loader - guangzan - 博客园 (cnblogs.com)](https://www.cnblogs.com/guangzan/p/14057876.html)

[【建议收藏】全网最全的讲清eslint和prettier的npm包和vscode插件的文章 - 掘金 (juejin.cn)](https://juejin.cn/post/6990929456382607374#heading-5)

[(11条消息) vscode prettier保存代码时自动格式化_前端小白成长记-CSDN博客_prettier 自动格式化](https://blog.csdn.net/qq_37815596/article/details/109225879)

[airbnb/javascript: JavaScript Style Guide (github.com)](https://github.com/airbnb/javascript)

