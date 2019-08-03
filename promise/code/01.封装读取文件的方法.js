// 需求：需要封装一个方法，我给你一个要读取文件的路径，你的这个方法能帮我读取文件，并且把内容返回给我

const fs = require('fs')
const path = require('path')

// 普通读取文件的方法
// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr) => {
//     if(err) throw err
//     console.log(dataStr);
// })



// 设定callback中有两个参数，第一个参数是失败的结果，第二个参数是成功的结果
// 如果成功后返回的成功结果位于第二位，由于没有出错，所以第一个位置放null
// 如果失败了，第一个位置放置error对象，第二个位置放置undefined
function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err){
            // 如果报错了，进入if分支后，if后面的代码就没有必要执行了
            return callback(err,undefined);
        } 
        // return dataStr; 该方法不行，因为读取文件是异步操作
        callback(null,dataStr)
    })
}

getFileByPath(path.join(__dirname,'./files/1.txt'),(err,dataStr) => {
    if(err) return console.log(err.message)
    console.log(dataStr + '----')
})