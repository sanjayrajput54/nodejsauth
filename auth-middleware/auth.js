const jwt=require('jsonwebtoken');
//how to get authorization token in node js from header
//https://jwt.io/#debugger
//https://stackoverflow.com/questions/44366993/get-authorization-header-token-with-node-js
//https://security.stackexchange.com/questions/108662/why-is-bearer-required-before-the-token-in-authorization-header-in-a-http-re
const auth=(req,res,next) => {
    const token=req.headers.authorization.split(" ")[1];
    //console.log(token);
    try{
        const decoded=jwt.verify(token,'jwtkeyname');
    // res.userData=decoded;
        next();
        console.log("Auth middleware");
    }catch(err){
        res.status(502).json({
        message:'Auth failed',
        success:false
    });

}
// console.log(req.headers.authorization);
// next();
}
module.exports=auth;