const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine','ejs');

app.get("/" , function(req,res){
	var today = new Date();
	var currentDay = today.getDay();
	var day="";
	if(currentDay===6 || currentDay === 0)
	{
		day = "weekend";
		console.log(today);
	}
	else
	{
		day = "weekday";
		console.log(today);
	}
		 res.render("list" , {kindOfDay : day});
		 //res.sendFile(__dirname+"/index.html");

});
// app.get("/users", auth ,(req,res)=>{
// 	res.send('users page');
// })

// function logger (req,res,next){
// 	console.log('logger');
// 	next();
// }

// function auth(req,res,next){
	
// 	if(req.query.admin === 'true')
// 	{
// 		next();
// 	}
// 	else
// 	{
// 		res.send("No auth");
// 	}
// }


app.listen(3000,function(){
	console.log("Server is running on port 3000");
});