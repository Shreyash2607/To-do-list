const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
//var urlencodedparser = body-parser.urlencoded({extended:true});
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
var Items=[];

app.get("/" , function(req,res){
	var today = new Date();
	var currentDay = today.getDay();
	var options = {
		weekday : "long",
		day : "numeric",
		month : "long"
	};

	var day = today.toLocaleDateString("en-US",options);
	res.render("list" , {kindOfDay:day , newListItems:Items});
});

app.post("/",function(req,res){
	console.log(req.body);
	var Item = req.body.newItem;
	Items.push(item);
	res.redirect("/");
});


app.listen(3000,function(){
	console.log("Server is running on port 3000");
});