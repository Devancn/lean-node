var fs=require('fs');

var writer =fs.createWriteStream('./test.txt',{highWaterMark:1024});

writeOnceMillion(writer,'data','utf8',function () {
    
});
function writeOnceMillion(writer,data,encoding,callback) {
    var i=1000000;
    write();
    function write() {
        var ok=true;
        do{
            i-=1;
            if(i===0){
                writer.write(data,encoding,callback)
            }else{
                ok=writer.write(data,encoding);
                console.log(ok);
            }
        }while (i>0 && ok);
        if(i>0){
            //i>0意味着没写完,提前停止
            writer.once('drain',write)
        }
    }
}