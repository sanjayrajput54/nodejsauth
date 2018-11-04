const express =  require("express");
const apps = express();

const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const userRoutes = require("./routes/user")
const dashboardRoutes = require("./routes/dashboard")

mongoose.connect('mongodb://localhost:27017/testnode',{
    useNewUrlParser:true
})
//apps.use('/' ,(req,res)=>{
//    res.json({"Name":"subhash","Profile":"Engineer"});
//});

// Add headers
apps.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

apps.use(bodyParser.json());
apps.use("/user", userRoutes);
apps.use("/dashboard", dashboardRoutes);

// apps.use((req,res,next)=>{

// const error=new Error("Url Not Found");
// error.status=404;
// next(error);

// });

// apps.use((errorCustom,req,res,next)=>{
// res.json({
//     message:errorCustom.message
// });
// });
    



module.exports=apps;