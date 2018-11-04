const express = require("express");
const userRoutes = express.Router();
const userController = require("./../controller/user")


// userRoutes.post("/userUpdate", (req,res)=>{
//     res.json({"msg":"Welcome to user deshboard..", "type":"plan/text"});
// });

userRoutes.get("/", userController.userlist);
userRoutes.post("/login", userController.login);
userRoutes.post("/register", userController.register);
userRoutes.post("/deleteUser/:userId", userController.deleteUser);
userRoutes.post("/userUpdate/:userId", userController.userUpdate);

module.exports =  userRoutes;