// 1.promise是一个构造函数，既然是构造函数，那么就可以new Promise()得到一个Promise的实例
// 2.在promise上，有两个函数，一个是resolve(成功之后的回调函数)，一个是reject(失败之后的回调函数)
// 3.在promise构造函数的prototype属性上有一个.then()方法，也就是说，只要是promise构造函数创建的实例，都可以访问到.then()方法
// 4.promise表示一个异步操作，每当我们new一个promise的实例，这个实例，就表示一个具体的异步操作
// 5.既然promise创建的实例是一个异步操作，那么这个异步操作的结果，只能有两种状态
// 5.1 状态1：异步执行成功，需要在内部调用函数resolve把结果返回给调用者
// 5.2 状态2：异步执行失败，需要在内部调用函数reject把结果返回给调用者
// 5.3 由于promise的实例，是一个异步操作，所以，内部拿到操作的结果后，无法使用return把操作的结果返回给调用者，这时候，只能使用回调函数
// 的形式，来把成功或失败的结果，返回给调用者
// 6.可以在new出来的promise实例上，调用.then()方法，预先为这个promise异步
// 操作，指定成功（resolve）和失败（reject）的回调函数


// var promise = new Promise()
// 上面new出来的promise只是代表形式上的一个异步操作，即我们只知道它是一个异步操作，但是具体做什么事情，目前还不清楚


// 这是一个具体的异步操作，其中function指定一个具体的异步操作
// var promise = new Promise(function(){
//     // 这个function内部写的就是具体的异步操作
// })



const fs = require ('fs')
const path = require ('path')


// 每当new一个Promise实例的时候，就会立即执行这个异步操作中的代码
// new的时候，除了能够的到一个promise实例之外，还会立即调用我们为Promise构造函数传递的那个function,
// 执行这个function里面的代码
// var promise = new Promise(function(){
//     fs.readFile(path.join(__dirname,'./files/2.txt'),'utf-8',(err,dataStr) => {
//         if(err) throw err
//         console.log(dataStr)
//     })
// })




// function getFileByPath(fpath){
//     var promise = new Promise(function(resolve,reject){
//         fs.readFile(fpath,'utf-8',(err,dataStr) => {
//             // if(err) throw err
//             // console.log(dataStr)
//             if(err) return reject(err)
//             resolve(dataStr)
//         })
//     })
//     return promise
// }
// var p = getFileByPath('./files/3.txt');
// p.then(function(data){
//     console.log(data);
// },function(err){
//     console.log(err.message);
// })


function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,dataStr) => {
            // if(err) throw err
            // console.log(dataStr)
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}
getFileByPath('./files/3.txt').then(function(data){
    console.log(data);
},function(err){
    console.log(err.message);
})