## 块级格式化上下文

### BFC 的创建

以下元素会创建 `BFC`：

- 根元素（`<html>`）
- 浮动元素（`float` 不为 `none`）
- 绝对定位元素（`position` 为 `absolute` 或 `fixed`）
- 表格的标题和单元格（`display` 为 `table-caption`，`table-cell`）
- 匿名表格单元格元素（`display` 为 `table` 或 `inline-table`）
- 行内块元素（`display` 为 `inline-block`）
- `overflow` 的值不为 `visible` 的元素
- 弹性元素（`display` 为 `flex` 或 `inline-flex` 的元素的直接子元素）
- 网格元素（`display` 为 `grid` 或 `inline-grid` 的元素的直接子元素）

以上是 `CSS2.1` 规范定义的 `BFC` 触发方式，在最新的 `CSS3` 规范中，弹性元素和网格元素会创建 `F(Flex)FC` 和 `G(Grid)FC`。

### BFC 的范围

直译过来就是，`BFC` 包含创建它的元素的所有子元素，但是不包括创建了新的 `BFC` 的子元素的内部元素。

简单来说，子元素如果又创建了一个新的 `BFC`，那么它里面的内容就不属于上一个 `BFC` 了，这体现了 `BFC` **隔离** 的思想，我们还是以 `table` 为例：

```html
<table>
  <tr>
    <td></td>
  </tr>
</table>
```

假设 `table` 元素创建的 `BFC` 我们记为 `BFC_table`，`tr` 元素创建的 `BFC` 记为 `BFC_tr`，根据规则，两个 `BFC` 的范围分别为：

- `BFC_tr`：`td` 元素
- `BFC_table`：只有 `tr` 元素，不包括 `tr` 里的 `td` 元素

也就是所说，**一个元素不能同时存在于两个 BFC 中**。

### BFC 的特性

`BFC` 除了会创建一个隔离的空间外，还具有以下特性，`附 CodePen 示例链接地址，可结合示例进行理解`：

- `BFC` 内部的块级盒会在垂直方向上一个接一个排列 [①](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FBaNYLNO%3Feditors%3D1100)
- 同一个 `BFC` 下的相邻块级元素可能发生外边距折叠，创建新的 `BFC` 可以避免的外边距折叠 [②](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FmdJXrwK%3Feditors%3D1100)
- 每个元素的外边距盒（margin box）的左边与包含块边框盒（border box）的左边相接触（从右向左的格式化，则相反），即使存在浮动也是如此 [③](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FJjdpbGZ%3Feditors%3D1100)
- 浮动盒的区域不会和 `BFC` 重叠 [④](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FmdJXaXK%3Feditors%3D1100)
- 计算 `BFC` 的高度时，浮动元素也会参与计算 [⑤](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FwvayENb%3Feditors%3D1100)

### BFC 的应用

#### 自适应多栏布局

利用 `特性③` 和 `特性④`，中间栏创建 `BFC`，左右栏宽度固定后浮动。由于盒子的 margin box 的左边和包含块 border box 的左边相接触，同时浮动盒的区域不会和 `BFC` 重叠，所以中间栏的宽度会自适应，[示例](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FXWbEjNJ%3Feditors%3D1100)。

#### 防止外边距折叠

利用 `特性②`，创建新的 `BFC` ，让相邻的块级盒位于不同 `BFC` 下可以防止外边距折叠，[示例](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FeYNMdjJ%3Feditors%3D1100)。

#### 清除浮动

利用 `特性⑤`，`BFC` 内部的浮动元素也会参与高度计算，可以清除 `BFC` 内部的浮动，[示例](https://link.juejin.cn?target=https%3A%2F%2Fcodepen.io%2Flycheelee%2Fpen%2FZEGxpgO%3Feditors%3D1100)。