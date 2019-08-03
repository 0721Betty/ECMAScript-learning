const fs = require('fs')

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

// 先读取文件1，再读取文件2，最后读取文件3
// 注意：通过.then指定回调函数的时候，成功的回调函数，必须传，但是失败的回调，可以省略不传

// 如果，前面的promise执行失败，我们不想让后续的Promise操作被终止，可以为每个promise指定失败的回调
// getFileByPath('./files/1.txt')
//     .then(function(data){
//         console.log(data)// 读取文件1
//         return getFileByPath('./files/2.txt')
//     },function(err){
//         console.log("这是失败的结果"+err.message)
//         // return一个新的promise
//         return getFileByPath('./files/2.txt')
//     })
//     .then(function(data){
//         console.log(data)// 读取文件2
        
//         return getFileByPath('./files/3.txt')
//     },function(err){
//         console.log("这是失败的结果"+err.message)
//         // return一个新的promise
//         return getFileByPath('./files/3.txt')
//     })
//     .then(function(data){
//         console.log(data)// 读取文件3
//     })

// 在上一个.then中返回一个新的promise实例，可以继续用下一个.then来处理



getFileByPath('./files/1.txt')
    .then(function(data){
        console.log(data)// 读取文件1
        return getFileByPath('./files/2.txt')
    })
    .then(function(data){
        console.log(data)// 读取文件2     
        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data)// 读取文件3
    })
    .catch(function(err){
        console.log(err.message)
        // 如果前面的任何一个.then出错了，会立即捕获错误，终止后续的.then
    })