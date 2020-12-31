---
sidebar: auto
sidebarDepth: 2
---

## CSS
### 盒模型
- 标准模型和IE模型
``` css
盒模型的组成：由里向外content,padding,border,margin
盒模型是有两种标准的，一个是标准模型，一个是IE模型
标准模型中，盒模型的宽高只是内容（content）的宽高，设置标准模型：box-sizing:content-box;
IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高。设置IE模型：box-sizing：border-box；
```
- box-sizing：介绍
``` css
box-sizing: content-box|border-box|inherit;
```

值 | 描述
----------|----------
content-box（默认）| 这是由 CSS2.1规定的宽度高度行为宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。
border-box | 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
inherit | 规定应从父元素继承 box-sizing 属性的值。

- 边距重叠
```css
边距重叠就是父元素没有设置margin-top，而子元素设置了margin-top：20px;父元素也一起有了边距。
```
- 边距重叠解决方案(BFC)
```css
1. BFC的基本概念
首先要明确BFC是什么意思，其全英文拼写为 Block Formatting Context 直译为“块级格式化上下文”,
与之并列的是IFC（内联元素的格式化上下文）

2. 说下BFC的原理？
BFC原理就是BFC的渲染规则，共四点：
a) 在BFC这个元素垂直方向的边距会发生重叠。
b) BFC的区域不会与浮动元素box重叠，用来清除浮动的和布局的。
c) BFC在页面上是一个独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。
d) 计算BFC元素的高度的时候，浮动元素也会参与计算。

3.说下如何创建BFC？
a) overflow除了 visible以外的值（hidden，auto，scroll）。
b) float 除 none 以外的值。
c) position值不是relative或者static，absolute，fixed。
d) display属性inline-block，table-cell，table-caption
```
### CSS的单位和应用场景及Rem的设置

px | em | rem | rpx
---|--- |---|---
绝对单位 | 相对单位 |相对单位 | 绝对单位
独来独往，棱角分明，一就是一，二就是二，1px就是显示器上的1像素 | 听从父元素的，没有半点主张 |听html的，下面所有的元素都听html的 | 1rpx就是显示器上的0.5px
px单位的代码成本比较高 | 页面层级比较复杂时候不适合用 |注意浏览器的兼容性 | 小程序独有
一般用于网站的搭建 | H5网页 |H5网页 | 小程序

### 回流与重绘
 ```css
 1. 当render tree中的一部分(或全部)，因为元素的规模尺寸、布局、隐藏等改变而需要重新构建，这就是回流(reflow)
    (1) 每个页面至少回流一次，即页面首次加载
    (2) 回流时，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树
    (3) 回流完成后，浏览器会重新绘制受影响的部分，是重绘过程
 2. 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观、风格，而不影响布局(例如：background-color)，则称为重绘(repaints)
```
:::warning
回流必将引起重绘，重绘不一定引起回流;回流比重绘的代价更高.
::: 

### 如何减少回流、重绘
    
减少回流、重绘就是需要减少对render tree的操作，并减少对一些style信息的请求，合理利用浏览器优化策略。
    
1. 直接改变className，如果动态改变样式，使用cssText(减少设置多项内联样式)
```js
// bad
elem.style.left = x + "px";
elem.style.top = y + "px";
// good
elem.style.cssText += ";left: " + x + "px;top: " + y + "px;";
```
2. 让要操作的元素进行“离线处理”，处理完后一起更新
```js
当用DocumentFragment进行缓存操作，引发一次回流和重绘 
使用display:none技术，只引发两次回流和重绘
使用cloneNode(true or false)和replaceChild技术，引发一次回流和重绘
```      
3. 不要经常访问会引起浏览器flush队列的属性，确实要访问，利用缓存
```js
// bad
for (var i = 0; i < len; i++) {
  el.style.left = el.offsetLeft + x + "px";
  el.style.top = el.offsetTop + y + "px";
}
// good
var x = el.offsetLeft,
    y = el.offsetTop;
for (var i = 0; i < len; i++) {
  x += 10;
  y += 10;
  el.style = x + "px";
  el.style = y + "px";
  ```   
4. 让元素脱离动画流，减少render tree的规模，动画效果应用position属性的fixed值或absolute值
5. 尽可能在DOM树的最末端改变class，尽可能在DOM树的里面改变class（可以限制回流的范围）
6. 牺牲平滑度换区速度
7. 避免使用table布局
### link与@import的区别
```
1.从属关系区别
  @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
2.加载顺序区别
  加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。
3.兼容性区别
  @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。
4.DOM可控性区别
  可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。
5.权重区别(该项有争议，下文将详解)
  link引入的样式权重大于@import引入的样式。
```
## 兼容问题
### 不同浏览器的标签默认的外补丁( margin )和内补丁(padding)不同
```css
解决方案： css 里增加通配符 * { margin: 0; padding: 0; }
```
### IE6双边距问题；在 IE6中设置了float , 同时又设置margin , 就会出现边距问题
```css
解决方案：设置display:inline;
```
### 当标签的高度设置小于10px，在IE6、IE7中会超出自己设置的高度
```css
解决方案：超出高度的标签设置overflow:hidden,或者设置line-height的值小于你的设置高度
```
### 图片默认有间距
```css
解决方案：使用float 为img 布局
```
### IE9一下浏览器不能使用opacity
```css
解决方案：
opacity: 0.5;filter: alpha(opacity = 50);filter: progid:DXImageTransform.Microsoft.Alpha(style = 0, opacity = 50);
```
### 边距重叠问题；当相邻两个元素都设置了margin 边距时，margin 将取最大值，舍弃最小值；
```css
解决方案：为了不让边重叠，可以给子元素增加一个父级元素，并设置父级元素为overflow:hidden；
```
### cursor:hand 显示手型在safari 上不支持
```css
解决方案：统一使用 cursor:pointer
```
### 两个块级元素，父元素设置了overflow:auto；子元素设置了position:relative ;且高度大于父元素，在IE6、IE7会被隐藏而不是溢出；
```css
解决方案：父级元素设置position:relative
```
## JS
### 闭包
```
闭包是js开发惯用的技巧，什么是闭包？
闭包指的是：**能够访问另一个函数作用域的变量的函数**。
清晰的讲：闭包就是一个函数，这个函数能够访问其他函数的作用域中的变量。
```
### 封装bind
:::tip 思路分析
1. 返回一个新的函数
2. 新的函数里面实际上执行的还是原来的函数
3. 只不过用apply方法改变了this的方向
4. 用数组的concat方法吧内外参数列表连接起来,形成一个新的数组，给apply方法第二个参数
5. 在返回的函数的prototype上加一个属性,如果函数内部的this找得到这个属性就说明是new执行的
:::
```js
function bind(fnc, context){
  var outerArgs = Array.prototype.slice.call(arguments,2); 
  //此处的arguments为调用此函数时传进来的参数；2代表只需要保存第二个参数之后的其他的参数
  return function(){ //返回值应该是一个函数
    var innerArgs = Array.prototype.slice.call(arguments);
    //此处的arguments为内部函数的参数
    var finalArgs = outerArgs.concat(innerArgs);
    return fnc.apply(context,finalArgs); //使用apply方法来改变this的指向
  }
}
```
### 防抖
```js
// 防抖
function debounce(fn, wait) {    
  var timeout = null;    
  return function() {        
    if(timeout !== null)   clearTimeout(timeout);        
    timeout = setTimeout(fn, wait);    
  }
}
// 处理函数
function handle() {    
  console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```
### 节流
```js
function throttle(fn, gapTime) {
  let _lastTime = null;
  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}
let fn = ()=>{
  console.log('boom')
}
setInterval(throttle(fn,1000),10)
```
### [isPrototypeOf、instanceof、hasOwnProperty函数](https://www.jianshu.com/p/44ba37660b4a)
- isPrototypeOf
```
作用：检测一个对象是否是另一个对象的原型。或者说一个对象是否被包含在另一个对象的原型链中
```
- instanceof
```
instanceof运算符希望左操作数是一个对象，右操作数标识对象的类。如果左侧对象是右侧类的实例，则表达式返回为true，否则返回false。
```
- hasOwnProperty
```
 检测集合成员的所属关系，判断某个属性是否存在于某个对象中。可以通过in运算符，hasOwnProperty()来完成。
```
### 继承
- 原型链继承：
```js
function SuperType(){
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.Fun = function(){
 
};
function SubType(){
}
//继承了SuperType
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green,black"
```
::: warning
优点：能通过instanceOf和isPrototypeOf的检测

注意：给原型添加方法的语句一定要放在原型替换SubType.prototype = new SuperType();之后
缺点:
1. SuperType中的属性(不是方法)也变成了SubType的prototype中的公用属性如上面例子中的color属性，可以同时被instance1和instance2修改
2. 创建子类型的时候，不能像父类型的构造函数中传递参数。
:::
- 借用构造函数
```js
function SuperType(){
    this.colors = ["red", "blue", "green"];
}
function SubType(){
    //继承了SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green"
 
 
function SuperType(name){
    this.name = name;
}
function SubType(){
    //继承了SuperType，同时还传递了参数
    SuperType.call(this, "Nicholas");
    //实例属性
    this.age = 29;
}
var instance = new SubType();
alert(instance.name); //"Nicholas";
alert(instance.age); //29
```
::: warning
原理：在子类型构造函数的内部调用超类型构造函数

优点：解决了superType中的私有属性变公有的问题，可以传递参数

缺点：方法在函数中定义，无法得到复用
:::
- 组合继承：
```js
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    SuperType.call(this, name);//借用构造函数继承属性，二次调用
    this.age = age;
}
SubType.prototype = new SuperType();//借用原型链继承方法，一次调用
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27
```
::: warning
优点：继承前两者的优点，能通过instanceOf和isPrototypeOf的检测

缺点：两次调用父构造器函数，浪费内存。
:::
- 原型式继承：
```js
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
```
::: warning
使用场合：没必要构建构造函数，仅仅是想模拟一个对象的时候
:::
- 寄生继承：
```js
function createAnother(original){
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function(){ //以某种方式来增强这个对象
        alert("hi");
    };
    return clone; //返回这个对象
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"
```
::: warning
缺点：方法在函数中定义，无法得到复用
:::

- 寄生组合继承(最理想)：
```js
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
}
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);//实现继承
SubType.prototype.sayAge = function(){
    alert(this.age);
};
```
### new 操作符具体干了什么
1. 创建一个新对象
2. 将构造函数的作用域赋给这个对象。（因此this就指向这个对象）
3. 执行构造函数中的代码（为这个新对象添加属性）    
4. 返回新对象
### 无 new 实例化
```js
    function Pro() {
        console.log("1", Pro.prototype.isPrototypeOf(this))
        if (!Pro.prototype.isPrototypeOf(this)) {
            return new Pro()
        }
        console.log("2", Pro.prototype.isPrototypeOf(this))
        console.log(this)
    }
    Pro()
```
### 本地存储之间区别
- 存储大小：
    cookie 数据大小不能超过4k
    sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大的多，可以达到 5M 或者更大
    
- 过期时间：
    localStorage 存储持久化数据，浏览器关闭后不会丢失数据除非主动删除数据；
    sessionStorage 数据在当前浏览器窗口关闭后自动删除
    cookie 设置的过期时间之内一直有效，即使浏览器或窗口关闭
### [ajax和axios、fetch的区别](https://www.jianshu.com/p/8bc48f8fde75)
- jQuery ajax
```js
$.ajax({
   type: 'POST',
   url: url,
   data: data,
   dataType: dataType,
   success: function () {},
   error: function () {}
});
```
:::tip
传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，隶属于原始js中，核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现回调地狱。

JQuery ajax 是对原生XHR的封装，除此以外还增添了对JSONP的支持。经过多年的更新维护，真的已经是非常的方便了，优点无需多言；如果是硬要举出几个缺点，那可能只有：
1. 本身是针对MVC的编程,不符合现在前端MVVM的浪潮
2. 基于原生的XHR开发，XHR本身的架构不清晰。
3. JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受CDN服务）
4. 不符合关注分离（Separation of Concerns）的原则
5. 配置和调用方式非常混乱，而且基于事件的异步模型不友好。

PS:MVVM(Model-View-ViewModel), 源自于经典的 Model–View–Controller（MVC）模式。MVVM 的出现促进了 GUI 前端开发与后端业务逻辑的分离，极大地提高了前端开发效率。MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的最重要一环。
:::

如下图所示：
![请求交互](/study/ajax.png)
- axios
```js
axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```
:::tip
Vue2.0之后，尤雨溪推荐大家用axios替换JQuery ajax，想必让axios进入了很多人的目光中。

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：
1. 从浏览器中创建 XMLHttpRequest
2. 支持 Promise API
3. 客户端支持防止CSRF
4. 提供了一些并发请求的接口（重要，方便了很多的操作）
5. 从 node.js 创建 http 请求
6. 拦截请求和响应
7. 转换请求和响应数据
8. 取消请求
9.  自动转换JSON数据

PS:防止CSRF:就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。
:::

- fetch
```js
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
```
:::tip
fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。

fetch的优点：
1. 符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
2. 更好更方便的写法

坦白说，上面的理由对我来说完全没有什么说服力，因为不管是Jquery还是Axios都已经帮我们把xhr封装的足够好，使用起来也足够方便，为什么我们还要花费大力气去学习fetch？
我认为fetch的优势主要优势就是：

1. 语法简洁，更加语义化
2. 基于标准 Promise 实现，支持 async/await
3. 同构方便，使用 [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
4. 更加底层，提供的API丰富（request, response）
5. 脱离了XHR，是ES规范里新的实现方式

最近在使用fetch的时候，也遇到了不少的问题：

fetch是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装。

例如：

1）fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。

2）fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})

3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费

4）fetch没有办法原生监测请求的进度，而XHR可以
:::
::: warning 总结
axios既提供了并发的封装，也没有fetch的各种问题，而且体积也较小，当之无愧现在最应该选用的请求的方式。
:::