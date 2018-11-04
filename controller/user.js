const userModel = require("./../model/user")
const jwt=require('jsonwebtoken');
const userlist =(req,res)=>{
     //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  userModel.find({},(err,data)=>{
    if(!err) {
        res.json({user:data});
    }
  })
}

const register = (req, res)=>{
    const user = userModel({
        username :req.body.username,
        password :req.body.password,
        email  : req.body.email
    });
    user.save().then((resdata)=>{
        res.status(200).json({"msg":"success",user:resdata});
    }).catch(err=>{
        res.status(505);
        res.json(err);
    });

}

const login = (req, res)=>{
    let userInfo={email:req.body.email,password:req.body.password};
    console.log(userInfo);
    userModel.find(userInfo,(err,resdata)=>{
        if(err){
            res.status(505);
            res.json(err);
        }else{
           const token=jwt.sign(userInfo,'jwtkeyname',{expiresIn:'1h'});
           res.status(200).json({"msg":"success",user:resdata,token:token});
        }
    }).catch(err=>{
        res.status(505);
        res.json(err);
    });

}


//Update user data
const userUpdate = (req,res)=>{
    var id= req.body.userId;
    var email= req.body.email;
    var password= req.body.password;
    var updatecol = {"email":email,"password":password};
    //console.log(req.params.userId);
    if(req.params.userId != '')
    {
        userModel.updateOne(
            {
                _id:id     //req.params.userId
            },
            { 
                $set:{
                    email:email,
                    password:password
                }
            },
            (err,data)=>{
                if(!err) {
                        res.status(200).json({"msg":"successfully updated", data});
                } else {
                    res.status(500).json("error occur")
                }
            });
        } else {
            res.status(500).json("error occur")
    }
    
}

const deleteUser = (req,res)=>{
    if(req.params.userId !=""){
        userModel.remove({"_id":req.params.userId},(err,data)=>{
            if(!err){
                res.status(200).json({"msg":"successfully deleted", data});
            }
            else {
                res.status(500).json({"msg":"error occur"});
            }
        })
    }
    else {
        res.json("value is balnk");
    }
}



module.exports={
    userlist:userlist,
    login:login,
    register:register,
    deleteUser:deleteUser,
    userUpdate:userUpdate
}