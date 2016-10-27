var fs = require('fs');
var rs=fs.createReadStream('128.txt',{autoClose:false,highWaterMark:3});
//当读到数据的时候，调用回调函数
rs.setEncoding('utf8');
rs.on('open',function () {
    console.log('文件被打开了');
});
rs.on('error',function (err) {
    console.log(err);
});
//data事件会切换到流动模式 (没有小桶一直往下流，不管小桶有没有数据有没有满)
rs.on('data',function (data) {
    console.log(data);
});
//读完数据后被触发
rs.on('end',function () {
    console.log('读取完结');
});
//当文件描述符被关闭时触发(并不是所有有流都会触发这个事件 网络流就不会)
rs.on('close',function () {
    console.log('文件被关闭了');
});

