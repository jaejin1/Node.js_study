var express = require('express');
var app = express(); //익스프레스를 만든사람이 내가 만든것은 이렇게 해야해요

app.use(express.static('public'));  //정적인 파일이 위치하는 곳을 지정한다.

app.get('/', function(req, res){
	  //send()를 응답할것이다.
	res.send('네이버 접속하기  <a href="https://www.naver.com">접속</a>');
});

app.get('/dynamic', function(req, res){
	var lis = '';
	for(var i=0; i<5; i++){
		lis = lis + '<li>coding</li>';
	}

	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title></title>
	  </head>
	  <body>
	    Hello dynamic!
			<ul>
				${lis}
			</ul>
			${time}
	  </body>
	</html>
	`;
	res.send(output);
})

app.get('/route', function(req,res){
	res.send('Hello Routesr, <img src="/aaa.gif">')
})

app.get('/login', function(req, res){
	res.send('<h1>login please</h1>');
})

app.listen(3000, function(){
	console.log('Conneted 3000 port!');
});


//listem메소드에 포트번호를 집어넣으면 웹애플리케이션이 포트를 listening이 된다.
