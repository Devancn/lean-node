var fs = require('fs');
var src=fs.createReadStream('big.flv');
var dest=fs.createWriteStream('big3.flv');
src.pipe(dest);