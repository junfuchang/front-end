# Mock.js
## 安装

~~~shell
yarn add mockjs
~~~

## 使用

- 服务端生成数据

[RAP2 (taobao.org)](http://rap2.taobao.org/repository/joined?user=216319)

- 本地生成

~~~react
import mockjs from "mockjs";
export default function Mock(params) {
  const handleClick = () => {
    const data = mockjs.mock({
      "aStringRange|1-9": "@",
      "number1|1-100.1-10": 1,
      "bolen|1": 2222,
    });
    console.log(JSON.stringify(data, null, 4));
  };
  return <button onClick={handleClick}>生成数据</button>;
}
~~~

## 在线示例(文档)

[★★★★★包含所有示例（推荐）](http://mockjs.com/examples.html)

[文档 ：nuysoft/Mock(github.com)](https://github.com/nuysoft/Mock/wiki/Mock.Random)

## Random

详情直接在示例中搜索

| Type          | Method                                                       |
| ------------- | ------------------------------------------------------------ |
| Basic         | boolean, natural, integer, float, character, **string**, range, date, time, **datetime**, now |
| Image         | **image**, dataImage(base64格式)                             |
| Color         | **color**, rgb, rgba, hex, hsl                               |
| Text          | paragraph, sentence, word, **title**,  **cparagraph**, csentence, cword, **ctitle** |
| Name          | first, last, **name**, cfirst, clast, **cname**              |
| Web           | url, domain, **email**, ip, tld                              |
| Address       | province, **city**, county, region                           |
| Helper        | capitalize, upper, lower, pick, shuffle                      |
| Miscellaneous | **guid**, id                                                 |

其中常用的**（所有的参数都是可选的）**：

- string( pool?, min?, max? )

  - ```js
    ## pool
    {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        number: "0123456789",
        symbol: "!@#$%^&*()[]"
    }
    ```

  - ~~~js
    @string(5)
    @string('lower',4)
    ~~~

- datetime('yyyy-MM-dd HH:mm:ss')			参数是可选的

- @city(true)          加true可以返回省份+市名
- image( size?, background?, foreground?, format?, text? )			参数全部是可选的

  - ~~~js
    // Random.image( size, background, foreground, format, text )
    Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
    ~~~

- cparagraph(len)		  len指定有几句

## 基础类型

### String

~~~json
'name|min-max': string
'name|count': string
~~~

### Number

~~~json
'name|+1': number
'name|min-max': number
'name|min-max.dmin-dmax': number
~~~

### Boolean

~~~json
'name|1': boolean
'name|min-max': boolean
~~~

### Object

~~~json
'name|count': object
'name|min-max': object
~~~

### Array

~~~json
'name|1': array
'name|+1': array
~~~

### Function

~~~json
'name': function() {
  return this.foo
}
~~~

