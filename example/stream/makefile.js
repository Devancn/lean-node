//创建一个128k的文件
var fs= require('fs');
fs.writeFile('./128.txt',new Buffer(128*1024+1));