#### 基本用法

- Set 本身是一个构造函数，用来生成Set数据结构（类似于数组，但是其成员的值都是唯一的，没有重复）。

  ```javascript
  const s = new Set();
  [2,3,5,4,5,2,2].forEach(x=> s.add(x));
  for (let i of s){
      console.log(i);
  }
  //运行结果：2 3 5 4
  ```

- 去除数组的重复成员

  ```javascript
  const items = new Set([1,2,3,4,5,5,5,5]);
  items.size //5
  ```

- 向Set加入值时不会发生类型转换，其内部判断两个值是否相同时使用的算法叫做"Same-value equality",类似于精确相等运算符（===），（精确相等运算符认为NaN不等于自身）。在Set内部两个NaN是相等的，两个对象总是不相等的。

#### Set实例的属性和方法

- ##### 属性

  - Set.prototype.constructor:构造函数，默认就是Set函数
  - Set.prorotype.size: 返回Set实例的成员总数
  - 

- ##### 方法

  ```javascript
  const s = new Set([1,2,3,4,5,5,5]);
  console.log(s.size);
  console.log(s.has(1));
  console.log(s.has(9));
  s.add(9);//增加一个元素9，返回Set结构本身
  s.delete(1);//删除元素1,返回一个布尔值，表示删除是否成功
  console.log(s.has(1));//返回一个布尔值，表示参数是否为Set的成员
  console.log(s.has(9));
  s.clear();//清除所有成员，没有返回值
  console.log(s);
  ```

#### 遍历操作

- ###### keys()返回键名的遍历器

- ###### values()返回键值的遍历器（由于Set结构只有键值没有键名，所以keys()方法和values()方法的行为完全一致）

- ###### entries()返回键值对的遍历器

  ``` javascript 
  let set = new Set(['red','green','blue']);
  for(let item of set.keys()){
      console.log(item);
  }
  //red
  //green
  //blue
  for(let item of set.values()){
      console.log(item);
  }
  //red
  //green
  //blue
  for(let item of set.entries()){
      console.log(item);
  }
  //["red","red"]
  //["green","green"]
  //["blue","blue"]
  ```

- Set的遍历顺序就是插入顺序，**默认可遍历可以省略values方法，直接用for...of循环遍历Set**

- ###### forEach()用于对每个成员执行某种操作，没有返回值,参数依次为键值、键名、集合本身(可省略)，还可以有第二个参数，表示绑定的this对象

  ```javascript 
  let set = new Set([1,2,3]);
  set.forEach((value,key) => console.log(value*2));
  //2
  //4
  //6
  ```

- ##### 数组的map和filter方法也可以用于Set

  ```javascript
  let a = new Set([1,2,3]);
  let b = new Set([4,3,2]);
  //并集
  let union = new Set([...a, ...b]);//展开语法连接两个Set构成新的Set
  //Set(1,2,3,4);
  
  //交集
  let intersect = new Set([...a].filter(x => b.has(x)));
  //Set(2,3);
  
  //差集
  let difference = new Set([...a].filter(x => !b.has(x)));
  Set {1}
  //扩展运算符(...)内部使用for...of循环
  ```

- ##### 在遍历操作中同步改变原来Set的值

  ```javascript 
  //方法一
  let set = new Set([1,2,3]);
  set = new Set(Array.from(set,val => val*2));
  console.log(set);//set里面的值为2,4,6

  //方法二
  let set = new Set([1,2,3]);
  set = new Set([...Set].map(varl => varl * 2));
  //map方法  这里的map不是“地图”的意思，而是指“映射”。[].map(); 基本用法跟forEach方法类似
  ```
  
  











