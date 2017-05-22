var express = require('express');
var app = express(); //익스프레스를 만든사람이 내가 만든것은 이렇게 해야해요

app.locals.pretty = true ;
app.set('view engine','jade');
app.set('views','./views');   //jade 파일은 views 안에다 넣어야한다.  기본값으로 views를 가지고 있음.

app.use(express.static('public'));  //정적인 파일이 위치하는 곳을 지정한다.
app.get('/topic/:id',function(req,res){
	var topics = [
		'Javascript is ...',
		'Nodejs is ... ',
		'Express is ...'
	];
	var as = `
		<a href="/topic?id=0">JavaScript</a><br>
		<a href="/topic?id=1">Nodejs</a><br>
		<a href="/topic?id=2">Express</a><br>
		${topics[req.params.id]}
	`
	res.send(as);
})

app.get('/topic/:id/:mode',function(req,res){
	res.send(req.params.id+','+req.params.mode)
})
app.get('/template', function(req,res){
	res.render('temp', {time:Date(), _title:'Jade'});  //템플릿 파일을 읽어오는ㄱ누나
})
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
