---
sidebar: auto
sidebarDepth: 2
---
## 基础算法(一)

### 找出数组最大值
```js
1.es6拓展运算符...
    Math.max(...arr)
2.es5 apply(与方法1原理相同)
    Math.max.apply(null,arr)
3.for循环
    let max = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      max = max < arr[i+1] ? arr[i+1] : max
    }
4.数组sort()
    arr.sort((num1, num2) => {
      return num1 - num2 < 0
    })
    arr[0]
5.数组reduce
    arr.reduce((num1, num2) => {
      return num1 > num2 ? num1 : num2
    })
```
### 去重
```js
1. reduce和includes
var arr=["1","1","3","4","2"];
  newArr=arr.reduce((a,b)=>{
    if(!a.includes(b)){
        return a.concat(b)
    }else{
        return a
    }
  },[])
console.log(newArr)
    
2. 过滤器和indexof
var arr = [2,3,4,4,5,2,3,6];
var arr2 = arr.filter(function(element,index,self){
  return self.indexOf(element) === index;
});
console.log(arr2); //[2, 3, 4, 5, 6]
    
3. 循环和indexof
var arr = [2,3,4,4,5,2,3,6],
  arr2 = [];
for(var i = 0;i< arr.length;i++){
    if(arr2.indexOf(arr[i]) < 0){
        arr2.push(arr[i]);
    }
}
console.log(arr2);//[2, 3, 4, 5, 6]

4. 把数组的值作为对象的键
var arr = [0,2,3,4,4,0,2];
var obj = {};
var tmp = [];
for(var i = 0 ;i< arr.length;i++){
  if( !obj[arr[i]] ){
      obj[arr[i]] = 1;
      tmp.push(arr[i]);
  }
}
console.log(tmp); //[0, 2, 3, 4]

5. 利用数组的循环和includes方法
var arr = [0,2,3,4,4,0,2];
var res = [];
for(var i=0; i<arr.length; i++){
  if( !res.includes(arr[i]) ){ // 如果res新数组包含当前循环item
    res.push(arr[i]);
}
console.log(res);

6. 利用数组的filter和includes
var arr = [0,2,3,4,4,0,2];
var res = [];
res = arr.filter(function(item){
    return res.includes(item) ? '' : res.push(item);
});

7. 利用es6的set方法
var arr = [0,2,3,4,4,0,2];
var arr2=Array.from(new Set(arr));
console.log(arr2);

8. 对原数组进行遍历,获取arr[i]的值 j,对应到辅助数组 exits 的位置 j 的值，如果没有，则证明arr[i] 的值没有重复，此时将 值j 存入res数组，并将辅助数组 j 位置的值置为 true。最后返回res数组。

function removeDuplicate(arr){
  if (arr === null || arr.length < 2) {
　　  return arr;
  };
　let res = [],exits = [];
　for(let i = 0; i < arr.length; i++){
　  let j = arr[i];
　  while( !exits[j] ){
　　  res.push(arr[i]);
　　  exits[j] = true;
　　}
　}
　return res;
}
console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1])) // [1,3,5,6,7,8]
```
### 删除重复的字符
```js
function removeDuplicateChar(str){
  if (!str || str.length < 2 || typeof str != "string") {
　  return;
　};
  let charArr = [],res = [];
　for(let i = 0; i < str.length; i++){
　　  let c = str[i];
  　　if (charArr[c]) {
  　　  charArr[c]++;
  　　} else {
  　　  charArr[c] = 1;
  　　}
  }
　for(let j in charArr){
　　if (charArr[j] === 1) {
　　  res.push(j);
　　}
　}
  return res.join("");
}
console.log(removeDuplicateChar("Learn more javascript dude"));
```
### 每隔一秒输出数组的一项
```js
var arr = ["1", "5", "3", "4", "2"],i=0;
var t=setInterval('show()',2000)
function show(){
  console.log(arr[i])
  i++;
  if(i>=arr.length){
    clearInterval(t)
  }
}
```
### 判断一个字符串中出现最多的字符和出现的次数

::: tip 思路分析
  - 将字符串转化为对象：字符串的每一个字符作为对象的键，字符出现的次数作为值。
  - 遍历这个对象，比较每一个键值对的值，取最大的键值对，即得到字符串出现最多的字符和出现的次数。
:::

```js
var str = 'aabbccddd';
var obj = {}; /* 定义一个空的对象来接收结果 */
for (var i = 0; i < str.length; i++) {
  /* charAt获取字符串的索引 */
  /* 判断obj是否存在一个为 obj[str.charAt(i)] 的键；
　　　　　　如果不存在，那么就添加这个键，并且赋值为1；
　　　　　　如果已经存在这个键，那么就给这个键的值加1 */
  if (!obj[str.charAt(i)]) {
    obj[str.charAt(i)] = 1;
  } else {
    obj[str.charAt(i)]++;
  }
}
console.log(obj);

/* 假设一个为0的值 和 一个空的字符串来存放键；
　　for in 遍历obj对象 然后把每一个值和max对比；
　　然后获取最大的值max 和 最大值对应的键maxno */
var max = 0;
var maxno = '';
for (var k in obj) {
  if (obj[k] > max) {
    max = obj[k];
    maxno = k;
  }
}
console.log(max + ' ' + maxno);
```
### 数组扁平化处理
```js
let tempArr = [1,[2,3],[4,5,[6,7]]];
let result_str1 = tempArr.join(',').split(',');
console.log(result_str1); //  ["1", "2", "3", "4", "5", "6", "7"]
```
### JS 如何从一个length为12的数组中按顺序取每5个元素为一组放到新数组中，最后不够5个的也存为一个数组
```js
var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(newArrFn(5,arr))
function newArrFn(n,arr) {
    var R = [],F;
    for (F = 0;F < arr.length;){
        R.push(arr.slice(F,F += 5))
    }
    return R
}

function chunk(arr,size ) {
    var num = [];
    for(var i=0;i<Math.ceil(arr.length/size);i++){
      var start = i*size;
      var end = start+size;
      num.push(arr.slice(start,end));
      
    }
   return num;
 
 }  
chunk(["a", "b", "c", "d"], 3);
```
### 找出数组中不重复的元素，并输出最小的值
```js
/*var a = ["span","span","strong","span","b"];*/
var a = [1,2,3,1,2,4];
function norepeat(a) {
    var i = a.length, j, b;
    while (i--) {
        j = i;
        b = false;
        while (j--) {
            // console.log(a[i], a[j])
            if (a[i] === a[j]) {
                a.splice(j, 1);
                i--;
                b = true;
            }
        }
        if (b) a.splice(i, 1);
    }
    // console.log(a)
    return a;
}
console.log(norepeat(a), Math.min.apply(null, norepeat(a))
```
### 验证一个数是否是素数
::: tip 思路分析
  - 如果这个数是 2 或 3，一定是素数;
  - 如果是偶数，一定不是素数;
  - 如果这个数不能被3~它的平方根中的任一数整除，m必定是素数。而且除数可以每次递增2(排除偶数)
:::

```js
function isPrime(num){
  if (num === 2 || num === 3) {
　　return true;
　};
　if (num % 2 === 0) {
　　return false;
　};
　let divisor = 3,limit = Math.sqrt(num);
　while(limit >= divisor){
　　if (num % divisor === 0) {
　　  return false;
　　} else {
　　  divisor += 2;
　　}
　}
　　return true;
}
console.log(isPrime(30)); // false
```
### 求最大公约数
::: tip 思路
  除数 在a和b的范围内，如果同时a和b处以除数的余等于0，就将此时的除数赋值给res;除数自增，不断循环上面的计算，更新res。
:::

```js
解法1：
  function greatestCommonDivisor(a, b){
　  let divisor = 2,res = 1;
　  if (a < 2 || b < 2) {
　　  return 1;
　　};
　　while(a >= divisor && b >= divisor){
　　  if (a%divisor === 0 && b%divisor === 0) {
　　    res = divisor;
　　  }
　　  divisor++;
　　}
　　return res;
  };
  console.log(greatestCommonDivisor(8, 4)); // 4
  console.log(greatestCommonDivisor(69, 169)); // 1
解法2：
  function greatestCommonDivisor(a,b){
　　if (b === 0) {
　　  return a;
　　} else {
　　  return greatestCommonDivisor(b,a%b);
　　}
  };
```
### 排序两个已经排好序的数组
::: tip 思路分析
  - 如果 b数组已经遍历完，a数组还有值 或 a[i] 的值 小于等于 b[i] 的值，则将 a[i] 添加进数组res，并 i++;
  - 如果不是上面的情况，则将 b[i] 添加进数组res，并 i++;
:::
``` js
function mergeSortedArr(a,b){
  if (!a || !b) {
    return;
  };
  let aEle = a[0],bEle = b[0],i = 1,j = 1,res = [];
  while(aEle || bEle){
    if ((aEle && !bEle) || aEle <= bEle) {
      res.push(aEle);
      aEle = a[i++];
    } else {
      res.push(bEle);
      bEle = b[j++];
    }
  }
  return res;
}
console.log(mergeSortedArr([2,5,6,9], [1,2,3,29])) // [1,2,2,3,5,6,9,29]
```
### 字符串反向
```js
最简单的方法：
function reverse(str){
  let resStr = "";
  for(let i = str.length-1; i >= 0; i--){
    resStr += str[i];
  }
  return resStr;
}
console.log(reverse("ABCDEFG"));

方法2：

function reverse2(str){
  if (!str || str.length < 2 || typeof str != "string") {
    return str;
  };
  let res = [];
  for(let i = str.length-1; i >= 0; i--){
    res.push(str[i]);
  }
  return res.join("");
}
console.log(reverse2("Hello"));

方法3：将函数添加到String.prototype

String.prototype.reverse3 = function(){
  if (!this || this.length < 2) {
    return;
  };
  let res = [];
  for(let i = this.length-1; i >= 0; i--){
    res.push(this[i]);
  }
  return res.join("");
}
console.log("abcdefg".reverse3());
```
### 字符串原位反转
``` js
例如：将“I am the good boy”反转变为 “I ma eht doog yob”。
提示：使用数组和字符串方法。
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseInPlace('I am the good boy'));
```
### 判断是否是回文
```js
function isPalindrome(str){
  if (!str || str.length < 2) {
  return;
  }
  for(let i = 0; i < str.length/2; i++){
    if (str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("madama"))
```
### 判断数组中是否有两数之和
::: tip 思路分析
eg：在一个未排序的数组中找出是否有任意两数之和等于给定的数。给出一个数组[6,4,3,2,1,7]和一个数9，判断数组里是否有任意两数之和为9。
- 循环遍历数组，let subStract = num - arr[i];
- 如果 differ[subStract] 里有值，则返回true;如果没有，将 differ[arr[i]] 置为 true。
:::
```js
function sumFind(arr,num){
  if (!arr || arr.length < 2) {
    return;
  };
  let differ = {};
  for(let i = 0; i < arr.length; i++){
    let subStract = num - arr[i];
    if (differ[subStract]) {
      return true;
    } else {
  　　differ[arr[i]] = true;
    }
  }
  return false;
}
console.log(sumFind([6,4,3,2,1,7], 9)); // true
```
### 连字符转成驼峰
```js
如：get-element-by-id 转为 getElementById
let str = 'get-element-by-id';
let arr = str.split('-');
for(let i=1; i < arr.length; i++){
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
}
console.log(arr.join('')); // getElementById
```
### 用正则实现trim() 清除字符串两端空格
```js
String.prototype.trim1 = function(){
  // return this.replace(/\s*/g,""); // 清除所有空格
  return this.replace(/(^\s*)|(\s*$)/g,""); // 清除字符串前后的空格
};
console.log(" hello word ".trim1()) // "hello word"
```
### 将数字12345678转化成RMB形式：12,345,678
::: tip 思路分析
  将字符串切割成数组再反转，遍历数组，加入辅助数组，当数组长度为3的倍数，再向辅助数组加入 ","。
:::
```js
function RMB(str){
  let arr = str.split("").reverse();
  let res = [];
  for(let i = 0; i < arr.length; i++){
    res.push(arr[i]);
    if ((i + 1) % 3 === 0) {
      res.push(",");
    }
  }
  return res.reverse().join("");
}
console.log(RMB("12345678"))
```
### 删除相邻相同的字符串
```js
function delSrt(str){
  let res = [], nowStr;
  for(let i = 0; i < str.length; i ++){
    if (str.charAt(i) != nowStr) {
      res.push(str.charAt(i));
      nowStr = str.charAt(i);
    }
  }
  return res.join("");
}
console.log(delSrt("aabcc11"))
```