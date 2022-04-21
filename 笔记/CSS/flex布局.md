# Flex布局

flex-direction：决定元素的排列方向

flex-wrap：决定元素如何换行

flex-flow：是 flex-direction 和 flex-wrap 的简写

justify-content：元素在主轴上的对齐方式

align-items：元素在交叉轴上的对齐方式

flex-grow：当有多余空间时，元素的放大比例

flex-shrink：当空间不足时，元素的缩小比例

flex-basis：元素在主轴上占据的空间

flex：是grow、shrink、basis的排列顺序

align-self：定义元素自身的对齐方式



### 容器属性

- flex-direction：决定元素的排列方向
  - flex-direction: row | row-reverse | column | column-reverse;

- flex-wrap：决定元素如何换行
  - flex-wrap: nowrap | wrap | wrap-reverse;

- flex-flow：是 flex-direction 和 flex-wrap 的简写

- **justify-content：元素在主轴上的对齐方式**
  - justify-content: flex-start | flex-end | center | space-between | space-around;

- **align-items：元素在交叉轴上的对齐方式**
  - align-items: flex-start | flex-end | center | baseline | stretch;

- align-content：多轴线对齐方式
  - align-content: flex-start | flex-end | center | space-between | space-around | stretch;

 

### 项目属性

- order：定义项目的排列顺序
  - 数值越小越靠前 默认为0

- flex-grow：当有多余空间时，元素的放大比例
  - 放大比例    默认为0,不放大

- flex-shrink：当空间不足时，元素的缩小比例
  - 缩小比例    默认为1

- flex-basis：元素在主轴上占据的空间
  - 项目主轴空间  默认auto

- flex：是grow、shrink、basis的排列顺序
  - 默认0 1 auto，该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
- **align-self：定义元素自身的对齐方式**
  - align-self: auto | flex-start | flex-end | center | baseline | stretch（默认）;



### 学习链接

[Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[Flex 布局教程：实例篇 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)