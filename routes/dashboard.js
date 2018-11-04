const express = require("express");
const dashboardRoutes = express.Router();
const dashboardController = require("./../controller/dashboard")
const authCheckFunc=require('./../auth-middleware/auth');


// userRoutes.post("/userUpdate", (req,res)=>{
//     res.json({"msg":"Welcome to user deshboard..", "type":"plan/text"});
// });

dashboardRoutes.get("/",authCheckFunc, dashboardController.dashboard);
dashboardRoutes.post("/createitem",authCheckFunc, dashboardController.createItem);
//userRoutes.post("/deleteUser/:userId", userController.deleteUser);
//userRoutes.post("/userUpdate/:userId", userController.userUpdate);

module.exports =  dashboardRoutes;