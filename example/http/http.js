var http = require('http');
var fs = require('fs');
var mime = require('mime');//第三方插件
/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response) {
   var url = request.url;
    if(url == '/'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        //异步读取文件内容并且将读到内容写入响应体
        fs.readFile('index.html',function (err,data) {
            response.write(data);//写入响应体
            response.end();
        });
    }else {
        static(url,response);
    }
    function static(url,response) {
        response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
        //异步读取文件内容并且将读到内容写入响应体
        fs.readFile(url.slice(1),function (err,data) {
            response.write(data);//写入响应体
            response.end();
        });
    }
}
//每当有请求来的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);
server.listen(8080,'localhost');