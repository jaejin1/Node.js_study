const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var server2 = http.createServer(function(req,res){  //요청, 응답 객체들
  //어떻게 응답할것인가.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server2.listen(port , hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
  //서버가 listening에 성공했을때 출력되는 코드
}); 
