# 重点掌握

## 按钮

[按钮 Button - Ant Design Vue (antdv.com)](https://www.antdv.com/components/button-cn/)

#### 普通使用

~~~html
<a-button type="primary">
    Primary
</a-button>
~~~
#### 添加图标

~~~html
1.使用Icon 组件,可以控制位置
<a-button type="primary"><a-icon type="left"/> Go back </a-button>		
2.使用Icon属性
<a-button type="primary" icon="cloud"/>
~~~

#### 下拉按钮框

~~~html
<a-dropdown>	/--/
    <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">
            1st item
        </a-menu-item>
        <a-menu-item key="2">
            2nd item
        </a-menu-item>
    </a-menu>
    
    <a-button> Actions <a-icon type="down" /> </a-button>
</a-dropdown>
~~~

#### 按钮组

~~~html
<a-button-group>	/--/
    <a-button type="primary"> <a-icon type="left" />Go back </a-button>
    <a-button type="primary"> Go forward<a-icon type="right" /> </a-button>
</a-button-group>
~~~



#### API


| 属性         | 说明                                                         | 类型                         | 默认值    | 立即生效 |
| ------------ | ------------------------------------------------------------ | ---------------------------- | --------- | -------- |
| **disabled** | 按钮失效状态                                                 | boolean                      | `false`   |          |
| ghost        | 幽灵属性，使按钮背景透明                                     | boolean                      | false     |          |
| htmlType     | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                       | `button`  |          |
| icon         | 设置按钮的图标类型                                           | string                       | -         |          |
| **loading**  | 设置按钮载入状态                                             | boolean \| { delay: number } | `false`   |          |
| shape        | 设置按钮形状，可选值为 `circle`、 `round` 或者不设           | string                       | -         |          |
| **size**     | 设置按钮大小，可选值为 `small` `large` 或者不设(中)          | string                       | `default` |          |
| **type**     | 设置按钮类型，可选值为 `primary` `dashed` `danger` `link` 或者不设 | string                       | `default` |          |
| block        | 将按钮宽度调整为其父宽度的选项                               | boolean                      | `false`   |          |


| 事件名称 | 说明             | 回调参数        | 版本 |
| :------- | :--------------- | :-------------- | :--- |
| click    | 点击按钮时的回调 | (event) => void |      |



## 布局

[布局 Layout - Ant Design Vue (antdv.com)](https://www.antdv.com/components/layout-cn/)



### 侧边布局

~~~html
<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
~~~

### 响应式布局

~~~html
<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
~~~



### API

#### Layout 

布局容器。

| 参数     | 说明                                                         | 类型    | 默认值 |
| :------- | :----------------------------------------------------------- | :------ | :----- |
| class    | 容器 class                                                   | string  | -      |
| style    | 指定样式                                                     | object  | -      |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | -      |

> `Layout.Header` `Layout.Footer` `Layout.Content` API 与 `Layout` 相同

#### Layout.Sider 

侧边栏。

| 参数                  | 说明                                                         | 类型                                         | 默认值 | 版本  |
| :-------------------- | :----------------------------------------------------------- | :------------------------------------------- | :----- | :---- |
| breakpoint            | 触发响应式布局的[断点](https://www.antdv.com/components/grid#API) | Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } | -      |       |
| class                 | 容器 class                                                   | string                                       | -      |       |
| collapsed(v-model)    | 当前收起状态                                                 | boolean                                      | -      |       |
| collapsedWidth        | 收缩宽度，设置为 0 会出现特殊 trigger                        | number                                       | 80     |       |
| collapsible           | 是否可收起                                                   | boolean                                      | false  |       |
| defaultCollapsed      | 是否默认收起                                                 | boolean                                      | false  |       |
| reverseArrow          | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用            | boolean                                      | false  |       |
| style                 | 指定样式                                                     | object\|string                               | -      |       |
| theme                 | 主题颜色                                                     | string: `light` `dark`                       | `dark` |       |
| trigger               | 自定义 trigger，设置为 null 时隐藏 trigger                   | string\|slot                                 | -      |       |
| width                 | 宽度                                                         | number\|string                               | 200    |       |
| zeroWidthTriggerStyle | 指定当 `collapsedWidth` 为 0 时出现的特殊 trigger 的样式     | object                                       | -      | 1.5.0 |

#### 事件 

| 事件名称   | 说明                                                         | 回调参数                |
| :--------- | :----------------------------------------------------------- | :---------------------- |
| collapse   | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | (collapsed, type) => {} |
| breakpoint | 触发响应式布局[断点](https://www.antdv.com/components/grid#api)时的回调 | (broken) => {}          |

#### breakpoint width

```js
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
```



## 日期时间选择器



















## 表单

## 输入框

## 选择器

## 开关

## 表格

## 全局提示

## 气泡确认框





## 其他

### a-divider	//分隔线

[分割线 Divider - Ant Design Vue (antdv.com)](https://1x.antdv.com/components/divider-cn/)

```html
<a-divider> 正常 </a-divider>		
```

| 参数        | 说明             | 类型                          | 默认值       |
| :---------- | :--------------- | :---------------------------- | :----------- |
| dashed      | 是否虚线         | Boolean                       | false        |
| orientation | 分割线标题的位置 | enum: `left` `right`          | `center`     |
| type        | 水平还是垂直类型 | enum: `horizontal` `vertical` | `horizontal` |



### a-card	//卡片容器

[卡片 Card - Ant Design Vue (antdv.com)](https://1x.antdv.com/components/card-cn/#)

~~~html
<a-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
</a-card>
~~~





### a-avatar	//头像

[头像 Avatar - Ant Design Vue (antdv.com)](https://1x.antdv.com/components/avatar-cn/#Avatar-)

| 参数      | 说明                                                         | 类型                                          | 默认值    |
| :-------- | :----------------------------------------------------------- | :-------------------------------------------- | :-------- |
| icon      | 设置头像的图标类型，可设为 Icon 的 `type` 或 VNode           | string \| VNode \| slot                       | -         |
| shape     | 指定头像的形状                                               | Enum{ 'circle', 'square' }                    | `circle`  |
| size      | 设置头像的大小                                               | number \| Enum{ 'large', 'small', 'default' } | `default` |
| src       | 图片类头像的资源地址                                         | string                                        | -         |
| srcSet    | 设置图片类头像响应式资源地址                                 | string                                        | -         |
| alt       | 图像无法显示时的替代文本                                     | string                                        | -         |
| loadError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean                                 | -         |