var http = require('http');
var bl = require('bl');
var urls = process.argv; urls.splice(0,2);
var resp = [];
var index = 0;
urls.forEach(function(url,num){
  http.get(url,function(response){
    response.pipe(bl(function(err,data){
      if(err) return console.error(err);
      resp[num] = data.toString();
      index++;
      if(index === urls.length)
        printResults(resp);
    }));
  });
});

function printResults(resp){
  resp.forEach(function(res){
    console.log(res);
  });
}
