var express = require('express');
var app = express();
var userList = [];

app.get("/login",function(req,res){
	console.log(req.query)
	let{username,password} = req.query;
	if(username == "" && password == ""){
	return;
	}
	let data = userList.find(item => item.username == username);
	console.log("返回对象",data);
	if(data && data.password == password){
	res.send('200');
	}else{
	res.send("201")
	}
})

app.get("/register",function(req,res){
	console.log(req.query);
	let {username,password,password2} = req.query;
	if(username !="" && password == password2 && password !=""){
	console.log("注册成功");
	userList.push({username,password});
	console.log(userList)
	res.send("200");
	}else{
	res.send("201")
	}
})

app.listen(3000,"0.0.0.0",() =>{
	console.log("请访问：http://127.0.0.1:3000");
})