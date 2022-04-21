# 专业前端怎么使用console?

![专业前端怎么使用console?](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74f653eddf8a4f77afcc9daaa1e94566~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)

「这是我参与2022首次更文挑战的第32天，活动详情查看：[2022首次更文挑战](https://juejin.cn/post/7052884569032392740)」。

学习前端开发时，几乎最先学习的就是`console.log()`。

毕竟多数人的第一行代码都是：`console.log('Hello World');`

`console`对象提供了对于浏览器调试控制台的访问，可以从任何全局对象中访问到console对象。

灵活运用`console`对象所提供的方法，可以让开发变得更简单。

## 最常见的控制台方法：

```
console.log()– 打印内容的通用方法。
console.info()– 打印资讯类说明信息。
console.debug()– 在控制台打印一条 "debug" 级别的消息。
console.warn()– 打印一个警告信息。
console.error()– 打印一条错误信息。
复制代码
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f256f816c61545f6babd7b513c903107~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.log()写css

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6592acd79f7d42588156ae7df3b5eaec~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.log() 使用参数

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8613ce2cee0d4037ad60a7af38ad7198~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.clear();

用于清除控制台信息。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c7ae62bf9dd491a96e48259c01ba8e7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.count(label);

输出`count()`被调用的次数，可以使用一个参数`label`。演示如下：

```
var user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
复制代码
```

输出

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17c5a1c1138d426fa9593cc43b6748ee~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.dir()

使用`console.dir()`可以打印对象的属性，在控制台中逐级查看对象的详细信息。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b260ff97e3084601b0b304fb84c1302a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.memory

`console.memory`是一个属性，而不是方法，使用memory属性用来检查内存信息。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/721c98870c4947a0bdbe4e9c7912b944~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.time() 和 console.timeEnd()

- `console.time()`– 使用输入参数的名称启动计时器。在给定页面上最多可以同时运行 10,000 个计时器。
- `console.timeEnd()`– 停止指定的计时器并记录自启动以来经过的时间（以毫秒为单位）。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7993909a1ab4a8380ff4016824e8130~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.assert()

如果断言为假，将错误信息写入控制台，如果为真，无显示。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6d9567ad8094a6998caf43eb1bdd562~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.trace();

`console.trace()`方法将堆栈跟踪输出到控制台。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92dba77816aa44cfad7973bfe8ed1045~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.table();

在`console`中还可以打印表格

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/caf0d6e66d374f0e8e31ad1cebf5f53a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d33eb163daad4c47a7671c1e73229117~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## 打印Html元素

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28b99e38f986432593e4b728fb986ccd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

## console.group() 和 console.groupEnd()

在控制台上创建一个新的分组，随后输出到控制台上的内容都会被添加到一个锁进，表示该内容属于当前分组，知道调用`console.groupEnd()`之后，当前分组结束。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc6491f24a8b42c9aaa673042cb92a1f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)





[专业前端怎么使用console? - 掘金 (juejin.cn)](https://juejin.cn/post/7065856171436933156)