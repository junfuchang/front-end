# CSS选取器分类

## 1. 通配符选择器



## 2. 元素（标签）选择器



## 3. 类选择器



## 4. ID选择器

**优先级**

> !important>行内样式>ID选择器>类、伪类、属性>元素、伪元素>继承>通配符



## 5. 属性选取器

- **[attribute]**								
  - 选择所有带 `foo` 属性的元素
- **[attribute=value]**
  - 选择 attribute=value 的所有元素。
- **[attribute~=value]**
  - 选择 attribute 属性包含**单词 value** 的所有元素。
- **[attribute^=value]**
  - 选择其 attribute 属性值以 value **开头**的所有元素。
- **[attribute$=value]**
  - 选择其 attribute 属性值以 value **结束**的所有元素。
- **[attribute*=value]**
  - 选择其 attribute 属性中**包含** `value` **子串**的每个元素。
- **[attribute|=value]**
  -  用于选取带有以指定值**开头**的属性值的元素，该值必须是整个**单词**。



## 6. 文档结构选择器

示例html

```
<ul>
    <li>
        <h1>h1</h1>
        <p>p1</p>
    </li>
    <li>
        <h1>h1</h1>
        <p>p1</p>
    </li>
</ul>
```



![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171ddfe9039c4bfa~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



#### 后代选择器 element element

> 选择 element 元素内部的所有 element 元素。

```
ul li{
    border: 1px solid red;
}
```



![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de078cbd17ad9~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



#### 子选择器 element>element

> 选择父元素为 element 元素的所有 element 子元素。

```
 ul>li>p{
   border: 1px solid red;
}
```



![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de0ccf183e9eb~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



#### 相邻兄弟选择器 element+element

> 选择紧接在 element元素之后的 element 元素。

示例html

```
<div>
    <h1>h1</h1>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
</div>
```

![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de1b82f68bd6c~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



```
h1+p{
    color:red;
}
```

![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de1c81da895d1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



#### 一般兄弟选择器 element1~element2

> 选择前面有 element1 元素的每个 elem 元素。

示例html

```
<div>
    <h1>h1</h1>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
</div>
```

![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de1b82f68bd6c~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



```
 h1~p{
   border: 1px solid red;
}
```

![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de1fbe4d8e4dd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



## 7. 伪类选择器

#### :root 文档根元素伪类

```
:root{
    background-color:red;
}
```

#### :nth-child(n) 孩子选择器

示例html

```
<div>
    <h1>h1</h1>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
</div>
```



![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de1b82f68bd6c~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



```
div :nth-child(1){
    color:red;
}
```



![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de2c3f2388982~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



#### :nth-of-type(n) 同类型的第n个元素

```
div p:nth-of-type(2){
    color: red;
}
```



![html](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/4/171de279b1503cec~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)



#### element:first-child

> 选择属于父元素element的第一个子元素。 等同 :nth-child(1)

#### element:last-child

> 选择属于父元素element的最后一个子元素。

#### element:first-of-type

> 同类型的第一个子元素

#### element:last-of-type

> 同类型的最后一个子元素

#### element:only-child

> 选择了父元素 element 唯一的子元素

#### :empty

> 选中子元素为空的元素

```html
p:empty{
    width:100px;
    height:20px;
    background:#ff0000;
}
```

生效的是 `<p></p>`,没有子元素

#### :nth-last-child(n) 

>倒数第n个子元素

```
<!DOCTYPE html>
<html>
<head>
<style> 
div :nth-last-child(1){
    color:red;
}
</style>
</head>
<body>
    <div>
        <p>第一个段落。</p>
        <p>第二个段落。</p>
        <p>第三个段落。</p>
        <p>第四个段落。</p>
        <p>第五个段落。</p>
    </div>	
</body>
</html>
```

父元素div的倒数第一个元素 被选中

#### element:nth-last-of-type(n)

> 同类型的倒数第n个子元素

```
<!DOCTYPE html>
<html>
<head>
<style> 
div p:nth-last-of-type(2){
	color:red;
}
</style>
</head>
<body>
  <div>
    <h1>h11</h1>
    <p>第一个段落。</p>
    <p>第二个段落。</p>
    <p>第三个段落。</p>
    <h1>h11</h1>
    <p>第四个段落。</p>
    <p>第五个段落。</p>
    <h1>h11</h1>
  </div>	
</body>
</html>
```

> `<p>第四个段落。</p>` 处于同类型 p标签 倒数第2个

```
div p:nth-last-of-type(2n+1){
	color:red;
}
```

> 2n+1(odd):奇数、2n(even)：偶数

#### element:last-of-type

> 同类型的倒数第一个子元素

#### element:first-of-type

> 同类型的第一个子元素

#### element:only-of-type

> 父元素里唯一同类型子元素

```
<!DOCTYPE html>
<html>
<head>
<style> 

div h1:only-of-type{
    color: red;
}

</style>
</head>
<body>
<div>
    <h1>h1</h1>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
    <h1>h1</h1>
</div>
<div>
    <h1>h2</h1>
</div>
</body>
</html>
```

> `<h1>h2</h1>` 符合，被选中

#### a:link

> 没有访问过的状态

#### a:active

> 链接正在被点击

#### a:hover

> 选择鼠标指针位于其上的链接。

#### a:visited

> 选择所有已被访问的链接。

#### :focus

> :focus 选择器用于选取获得焦点的元素。

提示：接收键盘事件或其他用户输入的元素都允许 :focus 选择器。

#### :enabled / :disabled

> 选择每个启用的 `input` 元素 / 选择每个禁用的 `input` 元素

#### :checked

> 选择每个被选中的 `input` 元素。自定义开关可以用这个实现

#### :not(selector)

> 选择非 selector 元素的每个元素。（反向选择）

## 8. 伪元素选择器

#### element::first-line

> 让元素内容的第一行发生改变

#### element::first-letter

> 让元素内容的第一个字发生改变

#### element::before

> 在每个 element 元素的内容之前插入内容。我们更多的可能是当作一个div来用

#### element::after

> 在每个element元素的内容之后插入内容。我们可能更多的是用来**清除浮动**或**验证表单提示**等其它

#### ::selection

> 选择被用户选取的元素部分（设置被选中时的样式）。