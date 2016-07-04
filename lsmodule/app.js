var ls = require('./lsmodule.js');
var folder = process.argv[2];
var ext =  process.argv[3];
var path = require('path');


var files = ls(folder,ext,function(err,files){
  if(err) return   console.log(err);
  files.forEach(function(file){
    console.log(file);
  });
});
