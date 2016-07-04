//console.log(process.argv);
var tam = process.argv.length;
var total = 0;
for(var i = 2 ; i < tam ; i++){
  //console.log(process.argv[i]);
  total += parseInt(process.argv[i]);
  //console.log(total);
}
console.log(total);
