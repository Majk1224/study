---
sidebar: auto
sidebarDepth: 2
---
## 基础算法(二)
### 斐波那契 (递归)
```js
function fibonacci(n){
  if (n <= 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}
但是递归会有严重的效率问题。比如想要求得f(10)，首先需要求f(9)和f(8)。同样，想求f(9)，首先需要f(8)和f(7)…这样就有很多重复值，计算量也很大。

改进：从下往上计算，首先根据f(0)和f(1)计算出f(2)，再根据f(1)和f(2)计算出f(3)……以此类推就可以计算出第n项。时间复杂度O(n)。

function fibonacci(n){
  let ori = [0,1];
  if (n < 2) {
    return ori[n];
  };
  let fiboOne = 1,fiboTwo = 0,fiboSum = 0;
  for (let i = 2; i <= n; i++) {
    fiboSum = fiboOne + fiboTwo;
    fiboTwo = fiboOne;
    fiboOne = fiboSum;
  }
  return fiboSum;
}
console.log(fibonacci(5));
```
### 二分查找
::: tip 思路分析
二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：
1. 首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。
2. 如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找（目标元素大于中间元素，从中间元素的右侧查询，否组左边），然后重复第一步的操作。
3. 如果某一步数组为空，则表示找不到目标元素。
:::
```js
// 非递归
function binary_search(arr, key) {
  var low = 0,
  high = arr.length - 1;
  while(low <= high){
    var mid = parseInt((high + low) / 2);
    if (key == arr[mid]) {
      return  mid;
    } else if(key > arr[mid]) {
      low = mid + 1;
    } else if(key < arr[mid]) {
      high = mid -1;
    }  else {
      return -1;
    }
  }
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr,10);
console.log('result', result, arr.length)

// 递归
function binary_search(arr,low, high, key) {
  if (low > high){
    return -1;
  }
  var mid = parseInt((high + low) / 2);
  if(arr[mid] == key){
    return mid;
  }else if (arr[mid] > key){
    high = mid - 1;
    return binary_search(arr, low, high, key);
  }else if (arr[mid] < key){
    low = mid + 1;
    return binary_search(arr, low, high, key);
  }
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr, 0, 13, 10);
```
### 加油站问题-贪心算法
```js
一辆汽车加满油后可行驶n公里。旅途中有若干个加油站。设计一个有效算法，指出应在哪些加油站停靠加油，使沿途加油次数最少。对于给定的n(n <= 5000)和k(k <= 1000)个加油站位置，编程计算最少加油次数。并证明算法能产生一个最优解。

要求：无锡人流医院哪家好 http://www.bhnnkyy120.com/

输入：第一行有2个正整数n和k，表示汽车加满油后可行驶n公里，且旅途中有k个加油站。接下来的1 行中，有k+1 个整数，表示第k个加油站与第k-1 个加油站之间的距离。第0 个加油站表示出发地，汽车已加满油。第k+1 个加油站表示目的地。

输出：输出编程计算出的最少加油次数。如果无法到达目的地，则输出”NoSolution”。

function greedy(n, k, arr){ // n:加满可以行驶的公里数; k:加油站数量; arr:每个加油站之间的距离数组
  if (n == 0 || k == 0 || arr.length == 0 || arr[0] > n) {
    return "No Solution!"; // arr[0] > n ：如果第一个加油站距离太远，也无法到达
  };
  let res = 0, distance = 0; // res：加油次数;distance：已行驶距离
  for(let i = 0; i <= k; i++){
    distance += arr[i];
    if (distance > n) { // 已行驶距离 > 加满可以行驶的公里数
      if(arr[i] > n){ // 如果目前加油站和前一个加油站的距离 > 加满可以行驶的公里数，则无法到达
        return "No Solution!";
      };
      // 可以在上一个加油站加油，行驶到目前的加油站i：
      distance = arr[i];
      res++; // 加油次数+1
    }
  }
  return res;
}
let arr = [1,2,3,4,5,1,6,6];
console.log(greedy(7,7,arr)) // 4
```
### 宣讲会安排
::: tip 思路分析
一些项目要占用一个会议室宣讲，会议室不能同时容纳两个项目的宣讲。 给你每一个项目开始的时间和结束的时间(数组，里面是一个个具体的项目)，你来安排宣讲的日程，要求会议室进行 的宣讲的场次最多。返回这个最多的宣讲场次。
步骤：
1. 先按照会议的end时间升序排序;
2. 排除了因为正在进行会议而无法进行的会议(now > obj[i].start);
3. 会议能举行，则 res++，并且更新目前时间now (now = obj[i].end;)。
:::
```js
function getMostCount(obj){
  if (!obj || obj.length < 1) {
  return;
  };
  obj.sort(sortEndTime);
  let res = 1, now = obj[0].end;
  for(let i = 1; i < obj.length; i++){
    if (now < obj[i].start) {
      res++;
      now = obj[i].end;
    }
  }
  return res;
}
// 自定义排序法
function sortEndTime(obj1,obj2){
  return obj1.end - obj2.end;
}
var obj = [
  {start:6,end:8},
  {start:7,end:9},
  {start:11,end:12},
  {start:10,end:14},
  {start:16,end:18},
  {start:17.5,end:21},
  {start:15,end:17},
  {start:22,end:23}
];
console.log("最大场次：" + getMostCount(obj));
```
### 汉诺塔问题
::: tip 思路分析
把A杆上的金盘全部移到C杆上，并仍保持原有顺序叠好。操作规则：每次只能移动一个盘子，并且在移动过程中三根杆上都始终保持大盘在下，小盘在上，操作过程中盘子可以置于A、B、C任一杆上。
1. 递归解决：把问题转化为规模缩小了的同类问题的子问题;
2. 明确递归结束的条件(base case)：n == 1
3. 其他过程：from：来源地;to：目的地;help：辅助。
:::
```js
function hanoiProcess(n,from,to,help){
  if (n < 1) {
    return;
  }
  if (n == 1) { // 最后一个从from移到to
    console.log("Move 1 from " + from + " to " + to);
  } else {
    hanoiProcess(n-1, from, help, to); // 前n-1个从from移到help上，可以借助to
    console.log("Move "+ n +" from " + from + " to " + to);
    hanoiProcess(n-1, help, to, from); // 再把n-1个从help移到to，可以借助from
  }
}
hanoiProcess(3, "左", "右", "中");
结果：
Move 1 from 左 to 右
Move 2 from 左 to 中
Move 1 from 右 to 中
Move 3 from 左 to 右
Move 1 from 中 to 左
Move 2 from 中 to 右
Move 1 from 左 to 右
```
### 母牛生母牛问题
::: tip 思路分析
1. 母牛每年生一只母牛，新出生的母牛成长三年后也能每年生一只母牛，假设不会死。求N年后，母牛的数量。
2. 因为新生的母牛，只有等到第四年才能生小母牛。所以前4年，只有原来的一头母牛每年生一头。
3. 第五年以后，除了有前一年的牛数量，还有三年前的牛可以生新的小牛。(最近3年内生的牛还不能生)
:::
```js
function cow(n){
  if (n < 1) {
    return;
  };
  let count = 0;
  if (n > 4) {
    count = cow(n-1) + cow(n-3);
  } else{
    count = n;
  }
  return count;
}
let n = 7;
console.log(n + " 年后，牛的数量是： " + cow(n))
// 7 年后，牛的数量是： 13
```