var fs = require('fs');
var pat = require('path');

module.exports  = function(path,ext,callback){
  fs.readdir(path,function(err,files){
    if(err) return callback(err,files);
    files = files.filter(function(file){
        return pat.extname(file) === "." + ext;
    });
    callback(err,files);
    });
};
