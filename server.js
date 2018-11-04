//var app = ()=>{ console.log('hello app');}

const http=require('http');
const apps=require('./app');
//const server = http.createServer(function(req,res){
//    res.write('Hello world');
//    res.end();
//})
const server = http.createServer(apps);
server.listen(3005);
console.log('server is running on port:3005..');