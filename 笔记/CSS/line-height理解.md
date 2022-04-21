# CSS深入理解之line-height

## 基本概念

### 1. 行高的定义与图解

`行高`，顾名思义指的就是一行文字的高度。**按照定义来解释，就是两行文字之间基线之间的距离**。那么问题来了，**什么是基线呢**？大家回想下我们刚开始学习汉语拼音的时候，使用四线格本子的四条线，其中倒数第二条线就是基线，如果你说，抱歉，我已经全部还给老师了，没有任何印象。呵呵，别急呢，我已经给大家准备好了，请看下面的这副图，其中，`a、c、e、x、z`等字母的底边线（倒数第二根线）就是我们说的基线。



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd2183090e4d~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



了解完基线的定义后，我们接着来聊行高`line-height`。上面我们说过，行高就是两条基线的之间的距离，如下图所示。



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd21b06c977f~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



大家是不是已经😓了，大家耐着性子仔细看下，其实挺好理解的：

- 两条红线之间的距离就是`行高（line-height）`。
- 上一行的底线和下一行的顶线之间的距离就是`行距`，业界的共识是：行距=行高-em-box（暂时理解为font-size的大小），因此，用CSS语言来解释行距就是： 行距=line-height-font-size。
- 同一行顶线和底线之间的距离就是`font-size`。
- 行距的一半就是`半行距`。

结合上面图和文字描述，其实可以很容易搞清楚`行高、行距、半行距、font-size`的意思。大家一定要弄清楚这些定义，因为，下文中的内容和这些定义有关。

### 2.  内容区、行内框、行框、包含框

所谓一图胜千言：



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd218984d6e9~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



**内容区**：内容区域可以近似理解为FireFox/IE浏览器下文本选中带背景的区域，在上图中，深灰色背景区域就是内容区域。

**行内框**：每一个行内元素都会生成一个行内框，高度等于`font-size`，当我们设置`line-height`的时候，行内框的高度保持不变，改变的是行距的高度。

**行框**：指本行的一个虚拟的矩形框，由本行中的行内框组成。当有多行内容的时候，每一行都有自己的的一个行框。

**包含框**： 包裹着上述三种box的box，晕了，直接看图吧，上面黄颜色的框就是包含框。

## 深入理解line-height

### 1. line-height的各类属性值

line-height的默认值是normal，同时还支持数值、百分比值、长度值、继承。请看下面的表格：

| 值      | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| normal  | 默认。设置合理的行间距。                                     |
| number  | 设置数字，此数字会与当前的字体尺寸相乘来设置行间距，即number为当前font-size的倍数。 |
| length  | 设置固定的行间距。                                           |
| %       | 基于当前字体尺寸的百分比行间距。                             |
| inherit | 规定应该从父元素继承 line-height 属性的值。                  |

- normal

大家在使用`line-height`的时候，设置为该值很少，为什么呢？因为normal是一个与`font-family`有着密切联系的变量值。例如：

```
div{
    line-height: normal;
    font-family: 'microsoft yahei';
}
```

和

```
div{
    line-height: normal;
    font-family: 'simsun';
}
```

这两段代码在不同浏览器中测试数据如下：

| 字体     | Chrome | Firefox | IE    |
| -------- | ------ | ------- | ----- |
| 微软雅黑 | 1.32   | 1.321   | 1.32  |
| 宋体     | 1.141  | 1.142   | 1.141 |

从上面的表格中可以看到，指定字体后，在不同浏览器中`line-height`的解析值基本是一样的。然而，不同的浏览器使用的默认字体不一样，并且不同的操作系统使用的默认字体也是不一样的。因此，我们在实际开发的时候，都需要对行高`line-height`进行重置操作。

- inherit

  字面意思是继承，即继承父元素`line-height`的值，父元素是多少，当前节点的`line-height`就是多少，如果当前节点的子节点不设置任何的`line-height`，子节点的`line-height`也是这个值。

- length

  也就是带单位的值，比如`line-height: 21px`和`line-height: 1.5em`等。如果当前的`font-size`为14px，则`line-height`计算后的值为`1.5*14px=21px`。

- number

  例如，`line-height: 1.5`，最终的计算值是和当前的`font-size`相乘后的值，比如`font-size`为14px，则`line-height`计算值是`1.5*14px=21px`。

- %

  例如，当前`font-size`为16px，`line-height`为120%，则计算后的行高为`16*120%=19.2px`。

不知道大家发现没有，`line-height:1.5`、`line-height: 150%`以及`line-height: 150%`这三种用法计算的结果 是一样的，最终计算的行高都是根据`font-size`来计算的。是不是它们可以相互替代呢？其实不然，实际上，`line-height:1.5`和另外两个的继承细节有些区别，我们直接看例子吧。

```
body{
    font-size: 14px;
    line-height: 1.5;
}
body{
    font-size: 16px;
    line-height: 150%;
}
body{
    font-size: 14px;
    line-height: 1.5em;
}
```

对于`<body>`元素而言，上面三种方式计算后的的行高都是21px，但是，如果`body`下还有子元素，例如：

```
<body>
    <h3>这是标题</h3>
    <p>这是内容</p>
</body>
h3, p{
    margin: 0;
}
h3{
    font-size: 32px;
}
p{
    font-size:  20px;
}
```

最终结果是`line-height: 150%`和`line-height: 1.5em`的最终表现是两行文字重叠到了一起，如下图：



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd2186b84382~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



而设置了`line-height:1.5`的最终表现是两行文字没有重叠，排版良好，效果如下图：



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd21cf4aa564~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



设置`line-height: 150%`和`line-height: 1.5em`后，子元素继承的是计算后的值，即21px，而不是继承150%和1.5em，所以`<h3>`和`<p>`的行高都是21px，而`<h3>`的font-size是32px，则根据上面的公式计算出来的半行距是`-5.5px`，因此，两行文字发生了重叠。

不同属性下的`line-height`最终的计算方式比较如下。

| 设置方式 | line-height           | 计算后的line-height                 | 子元素继承的line-height                                   |
| -------- | --------------------- | ----------------------------------- | --------------------------------------------------------- |
| inherit  | 父元素的line-height值 | 不用计算                            | 父元素的line-height值                                     |
| length   | 20px                  | 不用计算                            | 20px                                                      |
| %        | 150%                  | 自身font-size (14px) * 150% = 21px  | 继承父元素计算后的line-height值 21px，而不是150%          |
| normal   | 假如为1.2             | 自身font-size (16px) * 1.2 = 19.2px | 继承1.2，line-height = 自身font-size(32px) * 1.2 = 38.4px |
| 纯数字   | 1.5                   | 自身font-size (14px) * 1.5 = 21px   | 继承1.5，line-height = 自身font-size(32px) * 1.5 = 48px   |

所以，在实际开发中， 我们一般设置行高的值为 `纯数字是最推荐的方式，因为其会随着对应的 font-size 而缩放，排版效果良好。

### 2. line-height的"大值特性"

现在，请大家仔细阅读下面的代码：

```
<div class="box">
    <span>这是内容...</span>
</div>
复制代码
.box{
    line-height: 50px;
}
.box span{
    line-height: 10px;
}
复制代码
```

和

```
.box{
    line-height: 10px;
}
.box span{
    line-height: 50px;
}
复制代码
```

抛出问题：请问`div`的高度是多少？直接上正确答案：**都是50px**。请看图



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd218d76260b~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



感觉说不通啊，那么请看解释吧。

首先，我们要始终记着，内联元素前面有一个看不见的"幽灵空白节点"，因此，上面的html代码可以等价为：

```
<div class="box">
    幽灵空白节点<span>这是内容...</span>
</div>
复制代码
```

所以，当`.box`元素设置`line-height:50px`的时候，"幽灵空白节点"高度为50px，而当`.box`元素设置`line-height: 20px`的时候，`span`元素的高度变成了50px，而又因为行框盒子是由高度最高的那个`内联盒子`决定的，所以`.box`元素的高度永远是最大的那个`line-height`的原因，根据张鑫旭老师的总结，这可以称为`line-height`的大值特性，不知道这样解释大家清楚了没有呢？

### 3. line-height与内联元素"垂直居中"

- 行高让单行文字"垂直居中"

不知道你是否和我一样，在刚开始写CSS的时候，控制单行文字垂直居中的时候，设置`line-height`和`height`的值一样就可以实现文字垂直居中的效果，即：

```
.title{
    height: 50px;
    line-height: 50px
}
复制代码
```

其实，这里只需要保留`line-height`这个属性就可以了，完全没有任何必要设置`height`的大小。

```
<div style="height: 50px; background-color: #cd0000; color: #fff">
    <span style="line-height: 50px">元素元素元素</span>
</div>
复制代码
```



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd219814d0c4~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



因此，流传比较广的"设置`line-height`和`height`的值一样就可以实现文字垂直居中效果", 应该修改为：**把line-height设置为您需要的box的大小可以实现单行文字的垂直居中**。

- 行高让多行文字“垂直居中”

多行文字垂直居中效果需要借助`line-height`的好朋友的帮助才能实现，代码如下：

```
<div class="box">
    <div class="content">基于行高是实现的多行文本垂直居中...我发现文字很短，于是随便写了一点文字凑个数..</div>
</div>
复制代码
.box{
    line-height: 120px;
    background-color: #cd0000;
    color: #fff;
}
.content{
    display: inline-block;
    line-height: 20px;
    margin: 0 20px;
    vertical-align: middle;
}
复制代码
```

效果图如下所示：



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd21a9092884~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



实现的原理如下：

1. 多行文字使用一个标签包裹，同时设置`display: inline-block`，保持了内联元素的特性，使元素具有单行效果，该设置使元素形成了一个非常关键的"行框盒子"，而每一个行框盒子都会附带一个"幽灵空白节点"（宽度为0，但是表现和普通字符相同）。而我们设置了外层的`line-height: 120px`，因此，`.content`内容"幽灵空白节点"的`line-height`也将是120px；
2. 内联元素默认是基线对齐的，通过设置`vertical-align:middle`可以实现我们想要的"垂直居中"效果。

### 4. 真的是"垂直居中"吗

不知道大家有没有留意上文中的单行文本和多行文本的**垂直居中**都加了引号，难道还不是真正的垂直居中？没错，`line-height`实现的垂直居中效果只是`近似的垂直居中`。为什么是"近似"？我们拿一个例子说明问题：

```
<p>微软雅黑</p>
复制代码
p{
    font-size: 80px;
    line-height: 120px;
    background-color: #cd0000;
    color: #fff;
    font-family: "Microsoft YaHei";
}
```

在浏览器中（windows系统）的效果如下：



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/6/8/163dcd21ae372720~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



大家看到没有，这些文字的位置明显偏下。因为，有些字体的位置偏下，比如"微软雅黑"，在平时我们使用的过程中，字体大小基本在16~18px之间，虽然下沉，但是也就是1px的偏差，我们的肉眼根本察觉不到。因此，**使用`line-height`实现的"垂直居中"并不是绝对的垂直居中**。

同理，使用`line-height`和`vertical-align`实现的多行文本垂直居中也不是绝对的垂直居中，在上文中多行文本垂直居中的例子中，我们可以明显的看到字体位置偏下。

其实，不居中并不是`line-height`导致的，而是他的好基友`vertical-align`造成的，我们会在`vertical-align`文章中详细阐述，敬请期待。

## line-height继承

父元素的 `line-height` 写了**具体数值**，比如 `30px`，则子元素 `line-height` 继承该值。

父元素的 `line-height` 写了**比例**，比如 `1.5 或 2`，则子元素 `line-height` 也是继承该比例。

父元素的 `line-height` 写了**百分比**，比如 `200%`，则子元素 `line-height` 继承的是父元素 `font-size * 200%` 计算出来的值。



## 参考

- 张鑫旭《CSS世界》
- [[学习笔记\] css中的line-height](https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000003038583)