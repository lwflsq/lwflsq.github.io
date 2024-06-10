---
title: 类型转换
---

### 字符串转换
当我们需要一个字符串形式的值时，就会进行字符串转换。

比如，`alert(value)` 将 `value` 转换为字符串类型，然后显示这个值。

我们也可以显式地调用 `String(value) `来将 `value` 转换为字符串类型：
```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
alert(typeof value); // string
```
字符串转换最明显。false 变成 "false"，null 变成 "null" 等。

### 数字型转换
在算术函数和表达式中，会自动进行 number 类型转换。

比如，当把除法 / 用于非 number 类型：
```javascript
alert( "6" / "2" ); // 3, string 类型的值被自动转换成 number 类型后进行计算
```

我们也可以使用 Number(value) 显式地将这个 value 转换为 number 类型。
```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

当我们从 `string` 类型源（如文本表单）中读取一个值，但期望输入一个数字时，通常需要进行显式转换。

如果该字符串不是一个有效的数字，转换的结果会是 `NaN`。例如：
```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN，转换失败
```

number 类型转换规则：
|值|变成……|
| ----------- | ----------- |
|undefined|NaN|
|null|0|
|true 和 false|1 and 0|
|string|去掉首尾空白字符（空格、换行符 \n、制表符 \t 等）后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN。|
```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```
请注意 `null` 和 `undefined` `在这有点不同：null` 变成数字 0，`undefined` 变成 `NaN`。

大多数数学运算符都执行这种转换，我们将在下一节中进行介绍。

### 布尔型转换
布尔（boolean）类型转换是最简单的一个。

它发生在逻辑运算，但是也可以通过调用 Boolean(value) 显式地进行转换。

转换规则如下：

* 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false。
* 其他值变成 true。
比如：
```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

::: info 请注意：包含 0 的字符串 "0" 是 true
一些编程语言（比如 PHP）视 "0" 为 false。但在 JavaScript 中，非空的字符串总是 true。
```javascript
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 空格，也是 true（任何非空字符串都是 true）
```
:::