// node class 1


var express = require("express");

var app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
    //authentication
    if(3===3){
        next()
    }
    else{
        res.send("Invalid User")
    }
})

app.use('/',(req,res,next)=>{
    //authorisation
    const users = "admin"
    if(users==="admin"){
        next()
    }
    else{
        res.send("Invalid Admin")
    }
})

app.use('/admin',(req,res,next)=>{
    res.send("V.Piraisoodan is a correct Admin.")
})

app.listen('3001')