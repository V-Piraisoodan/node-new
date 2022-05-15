const express = require('express');
const dotenv = require("dotenv");
const mongo = require('./shared');
const employeeRouter = require('./router/employee')

dotenv.config();
const app = express();

app.use(express.json());
mongo.connect();

app.use('/',(req,res,next)=>{
    console.log('middleware')
    next();
})

app.use(['/employee',"/employeedetails"], employeeRouter);


app.listen(process.env.PORT || 3001);