#### 含义

- promise，一个对象，可以获取异步操作的消息，一个容器，保存某个未来才会结束的事件（通常是一个异步操作）的结果。

#### 特点

- 对象的状态不受外界影响，promise对象代表一个异步操作，有三种状态，由异步操作的结果决定状态
  - Pending(进行中)
  - FulFilled(已成功)
  - Rejected(已失败)

- 一旦状态改变就不会再变，发生下面两种情况，状态就凝固了，不会再变，这时称为Resolved(已定型)
  - Pending变为FulFilled
  - Pending变为Rejected

- 缺点
  - 一旦创建就会立即执行，无法中途取消
  - 如果不设置回调函数，Promise内部抛出的错误不会反应到外部
  - 当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
  - 如果某些事件不断的反复发生，一般来说，使用Stream模式（nodejs.org/api.stream.html）是比部署Promise更好的选择

- Resolved后面统一指Fulfilled状态，不包含Rejected状态

#### 用法

- Promise对象是一个构造函数，用来生成Promise实例

  ```javascript
  var promise = new Promise(function(resolve,reject){
      //...some code 
      if(/*异步操作成功*/){
         resolve(value);
      }else{
         reject(error);                  
      }
  });
  ```

  - Promise构造函数接受一个函数作为参数，该函数的两个参数分别为resolve(是一个函数，其作用是将Promise对象的状态从Pending变成Resolved，该函数在异步操作成功时调用，并将异步操作的结果作为参数传递出去)和reject(是一个函数，其作用是将Promise对象的状态从Pending变成Rejected，在异步操作失败时调用，并将异步操作报出的错误作为参数传递出去)

#### 案例



