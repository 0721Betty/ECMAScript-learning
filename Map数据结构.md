#### 含义和基本用法

- 也是一个构造函数，类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。即Object结构提供了“字符串---值”的对应，Map结构提供了“值---值“的对应

- Map 的键实际上是和内存地址绑定的，只要内存地址不一样，就视为两个键，这样解决了同名属性碰撞的问题，扩展别人的库时，使用对象作为键名，不用担心自己的属性与原作者的属性同名。**只有对同一个对象的引用，Map结构才将其视为同一个键。**

  ``` javascript
  const map = new Map();
  const k1 = ['a'];
  const k2 = ['a'];
  map.set(k1, 111);
  map.set(k2, 222);
  console.log(map.get(k1));//111
  console.log(map.get(k2));//222
  ```

- 只要两个值严格相等，Map就将其视为一个键，包括0和-0，虽然NaN不严格等于自身，但是Map将其视为同一个键

#### 实例的属性和操作方法

##### 属性

- size属性返回Map结构的成员总数

##### 方法

- set（key，value）方法设置key所对应的键值，然后返回整个Map结构，如果key已经有值，则键值会被更新，新的替换旧的。否则就新生成该键
- get（key）方法获取key对应的值，找不到key返回undefined
- has（key）方法判断某个键是否在Map数据结构中
- delete（key）删除某个键，删除成功返回true。失败返回false
- clear()清除所有成员，没有返回值

#### 遍历方法

- keys()返回键名的遍历器

- values()返回键值的遍历器

- entries()返回所有成员的遍历器

- forEach()遍历Map的所有成员

- 遍历顺序就是插入顺序

  ```javascript
  const map = new Map([
      ['F','no'],
      ['T','yes']
  ]);
  for(let key of map.keys()){
      console.log(key);
  }
  //"F"
  //"T"
  for(let key of map.values()){
      console.log(key);
  }
  //"no"
  //"yes"
  for(let item of map.entries()){
      console.log(item[0],item[1]);
  }
  //"F" "no"
  //"T" "yes"
  //或者
  for(let [key,value] of map.entries()){
      console.log(key,value);
  }
  //"F" "no"
  //"T" "yes"
  //等同于
  for(let [key,value] of map){
      console.log(key,value);
  }
  //"F" "no"
  //"T" "yes"
  //Map结构的默认遍历器接口就是entries方法
  ```

  

#### 与其他数据结构的互相转换

- Map转为数组（使用扩展运算符(...)）

  ```javascript
  const myMap = new Map()
   .set(true,7)
   .set({foo: 3},['abc']);//链式写法
  [...myMap]
  //[[true,7],[{foo:3},['abc']]]
  ```

  

- 数组转为Map（将数组传入Map构造函数就可以转换为Map）

  ```javascript
  new Map([
      [true,7],
      [{foo:3},['abc']]
  ])
  //Map{
  //	true => 7,
  //   Object {foo:3} => ['abc']
  //}
  ```

  

- Map转为对象（Map的所有键都是字符串则可以转换为对象）

  ```javascript
  function strMapToObj(strMap){
      let obj = Object.create(null);
      for(let [k,v] of strMap){
          obj[k] = v;
      }
      return obj;
  }
  const myMap = new Map()
  	.set('yes',true)
  	.set('no',false);
  strMapToObj(myMap)
  //{yes:true,no:false}
  ```

  

- 对象转为Map

  ```javascript
  function objToStrMap(obj){
      let strMap = new Map();
      for(let k of Objcet.keys(obj)){
          strMap.set(k, obj[k]);
      }
      return strMap;
  }
  objTostrMap({yes:true,no:false})
  //Map {"yes" =>true,"no" =>false}
  ```

  

- Map转为JSON

  - 第一种情况，Map的键名都是字符串，这时可以选择转为对象JSON

    ```javascript
    function strMapToJson(strMap){
        return JSON.stringify(strMapToObj(strMap));
    }
    let myMap = new map().set('yes',true).set('no',false);
    strMapToJson(myMap)
    //'{"yes":true,"no":false}'
    ```

    

  - 第二种情况,Map的键名有非字符串，这时可以选择转为数组JSON

    ```javascript
    function mapToArrayJson(map){
        return JSON.stringify([...map]);
    }
    let myMap = new Map().set(true,7).set({foo:3},['abc']);
    mapToArrayJson(mymap)
    //'[[true,7],[{"foo":3},["abc"]]]'
    ```

    

  

- JSON转为Map

  - 正常情况下，所有键名都是字符串

    ```javascript
    function jsonTosStrMap(jsonStr){
        return objToStrMap(JSON.parse(jsonStr));
    }
    jsonToStrMap('{"yes":true,"no":false}')
    //Map {'yes' => true,'no' =>false}
    ```

    

  - 特殊情况，整个JSON就是一个数组，且每个数组成员本身又是一个具有两个成员的数组。这时，它可以 一一对应的转为Map

    ```javascript
    function jsonTOMap(jsonStr){
        return new Map(JSON.parse(jsonStr));
    }
    jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
    //Map {true=>7,Object{foo:3}=>['abc']}
    ```

    

