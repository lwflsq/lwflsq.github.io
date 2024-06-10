---
title: Javascript数据类型
---

JavaScript 中的值都具有特定的类型。例如，字符串或数字。
在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。

### Number 类型

```javascript
let n = 123;
n = 12.345;
```

number 类型代表`整数`和`浮点数`。

数字可以有很多操作，比如，乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：Infinity、-Infinity 和 NaN。

* Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值。  
我们可以通过除以 0 来得到它：
```javascript
alert( 1 / 0 ); // Infinity
```
或者在代码中直接使用它：
```javascript
alert( Infinity ); // Infinity
```
NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：
```javascript
alert( "not a number" / 2 ); // NaN，这样的除法是错误的
```
NaN 是粘性的。任何对 NaN 的进一步数学运算都会返回 NaN：
```javascript
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
```
所以，如果在数学表达式中有一个 NaN，会被传播到最终结果（只有一个例外：NaN ** 0 结果为 1）。
::: info   数学运算是安全的
在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。

脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 NaN 的结果。  
而一般的逻辑错误会导致脚本终止运行，后面的代码将不再执行。
:::


### BigInt 类型
在 JavaScript 中，“number” 类型无法安全地表示大于 (2^53-1^)（即 `9007199254740991`），或小于 -(2^53-1^) 的整数。

更准确的说，“number” 类型可以存储更大的整数（最多 `1.7976931348623157 * 10308`），但超出安全整数范围 ±(2^53-1^) 会出现精度问题，因为并非所有数字都适合固定的 64 位存储。因此，可能存储的是“近似值”。

例如，这两个数字（正好超出了安全整数范围）是相同的：
```javascript
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

也就是说，所有大于 (253-1) 的奇数都不能用 “number” 类型存储。

在大多数情况下，±(253-1) 范围就足够了，但有时候我们需要整个范围非常大的整数，例如用于密码学或微秒精度的时间戳。

BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

可以通过将 n 附加到整数字段的末尾来创建 BigInt 值。
`一般很少需要 BigInt 类型的数字`

::: info 兼容性问题
目前 `Firefox/Chrome/Edge/Safari` 已经支持 BigInt 了，但 IE 还没有。
:::

### String 类型

```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

在 JavaScript 中，有三种包含字符串的方式。

1. 双引号："Hello".
2. 单引号：'Hello'.
3. 反引号：\`Hello\`.

双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如：
```javascript
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

${…} 内的表达式会被计算，计算结果会成为字符串的一部分。可以在 ${…} 内放置任何东西：诸如名为 name 的变量，或者诸如 1 + 2 的算数表达式，或者其他一些更复杂的。

需要注意的是，这仅仅在反引号内有效，其他引号不允许这种嵌入。
```javascript
alert( "the result is ${1 + 2}" );
 // the result is ${1 + 2}（使用双引号则不会计算 ${…} 中的内容
```

### Boolean 类型（布尔类型、逻辑类型）
boolean 类型仅包含两个值：true 和 false。

这种类型通常用于存储表示 yes 或 no 的值：true 意味着 “yes，正确”，false 意味着 “no，不正确”。

比如：
```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```
布尔值也可作为比较的结果：
```javascript
let isGreater = 4 > 1;
alert( isGreater ); // true（比较的结果是 "yes"）
```

### null 值
特殊的 null 值不属于上述任何一种类型。  
它构成了一个独立的类型，只包含 null 值：
```javascript
let age = null;
```
相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。  

JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。  
上面的代码表示 age 是未知的。

### undefined 值
特殊值 undefined 和 null 一样自成类型。  
undefined 的含义是 未被赋值。  
如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：  
```javascript
let age;

alert(age); // 弹出 "undefined"
```
从技术上讲，可以显式地将 undefined 赋值给变量：
```javascript
let age = 100;

// 将值修改为 undefined
age = undefined;

alert(age); // "undefined"
```
……但是不建议这样做。通常，使用 null 将一个“空”或者“未知”的值写入变量中，而 undefined 则保留作为未进行初始化的事物的默认初始值。

### Object 类型和 Symbol 类型
`object` 类型是一个特殊的类型。也被称为[对象]()

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，`object` 则用于储存数据集合和更复杂的实体。


`symbol` 类型用于创建对象的唯一标识符。我们在这里提到 `symbol` 类型是为了完整性，但我们要在学完 `object` 类型后再学习它。

### typeof 运算符
`typeof` 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

对 `typeof x` 的调用会以字符串的形式返回数据类型：
```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```
说明：  
Math 是一个提供数学运算的内建`object`。此处仅作为一个 object 的示例。

typeof null 的结果为 `"object"`。这是官方承认的 `typeof` 的错误，这个问题来自于 `JavaScript` 语言的早期阶段，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。typeof 的返回值在这里是错误的。

`typeof alert` 的结果是 "function"，因为 `alert` 在 `JavaScript` 语言中是一个函数。在 `JavaScript` 语言中没有一个特有的 “function” 类型。函数继承于 object 类型。但是 typeof 会对函数区别对待，并返回 `"function"`。这也是来自于 `JavaScript` 语言早期的问题。从技术上讲，这种操作是不正确的，但在实际编程中却非常方便。

::: info typeof(x) 语法
你可能还会遇到另一种语法：`typeof(x)`。它与 `typeof x` 相同。

简单点说：`typeof` 是一个操作符，不是一个函数。这里的括号不是 `typeof` 的一部分。它是数学运算分组的括号。

通常，这样的括号里包含的是一个数学表达式，例如 (2 + 2)，但这里它只包含一个参数 (x)。从语法上讲，它们允许在 typeof 运算符和其参数之间不打空格。

有些人更喜欢用 typeof(x)，但typeof x 语法更为常用。
:::

### 总结
JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始数据类型，而 object 为复杂数据类型）。

* 七种原始数据类型：
1. `number` 用于任何类型的数字：整数或浮点数，在 ±(2^53-1^) 范围内的整数。
2. `bigint` 用于任意长度的整数。
3. `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
4. `boolean` 用于 `true` 和 `false。`
5. `null` 用于未知的值 —— 只有一个 null 值的独立类型。
6. `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
7. `symbol` 用于唯一的标识符。
* 以及一种非原始数据类型：
  * `object` 用于更复杂的数据结构。
  
通过 `typeof` 运算符查看存储在变量中的数据类型。
*  `typeof x`或者 `typeof(x)` 。
* 以字符串的形式返回类型名称，例如 "`string`"。
* `typeof null` 会返回 "`object`" —— 这是 `JavaScript` 编程语言的一个错误，实际上它并不是一个 `object`。