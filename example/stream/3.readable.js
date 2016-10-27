var fs = require('fs');
var rs=fs.createReadStream('128.txt',{});//创建一个可读流
var arr=[];
//大桶读到小桶里面
rs.on('readable',function () {
    console.log('= = = = = readable = = = = =');
    var data;
    while(null !=(data = rs.read())){//read方法读取小桶中的数据
        arr.push(data);
        console.log(data.length);
    }
});
rs.on('end',function () {
    var result=Buffer.concat(arr);
    console.log(result.length)
});