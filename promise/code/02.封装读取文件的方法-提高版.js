// 需求：需要封装一个方法，我给你一个要读取文件的路径，你的这个方法能帮我读取文件，并且把内容返回给我

const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return errCb(err);
        }
        succCb(dataStr)
    })
}

// getFileByPath(path.join(__dirname,'./files/11.txt'),function(data){
//     console.log(data);
// },function(err){
//     console.log(err.message);
// })

// 需求，先读取文件1，再读取文件2，最后读取文件3


// 异步嵌套
// promise可以单纯的解决回调地狱的问题，并不能帮我们减少代码量
getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
        console.log(data);
        getFileByPath(path.join(__dirname, './files/2.txt'), function (data) {
                console.log(data);
                getFileByPath(path.join(__dirname, './files/3.txt'), function (data) {
                        console.log(data);
                    }, function (err) {
                        console.log(err);
                    }

                )
            }, function (err) {
                console.log(err);
            }

        )

    }, function (err) {
        console.log(err);
    }

)