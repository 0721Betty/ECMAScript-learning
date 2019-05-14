#### 含义

- WeakSet结构与Set结构类似，是不重复的值的集合，但是WeakSet的成员只能是对象，不能是其他类型的值
- WeakSet适合临时存放一组对象，以及存放跟对象绑定的信息，只要这些对象在外部消失，它在WeakSet里面的引用就会自动消失

#### 语法

- WeakSet的成员只能是对象

  ```javascript
  const a = [[1,3],[2,4]];
  const ws = new WeakSet(a);
  //WeakSet {[1,3],[2,4]} a是一个数组，它有两个成员，也都是数组，WeakSet数组的成员是a数组的成员，而不是a数组本身
  ```

- ##### 方法

  ```javascript
  const ws = new WeakSet();
  const obj = {};
  const foo = {};
  ws.add(window);
  ws.add(obj);
  ws.has(window);//true
  ws.has(foo);//false
  ws.delete(window);//清除一个指定的成员
  ws.has(window);//false
  ```

- WeakSet没有size属性，没有办法遍历其成员，成员都是弱引用，随时可能消失。WeakSet的一个用处是存储DOM节点，不用担心这些节点从文档移除时会引发内存泄漏

