const dashboardModel = require("./../model/dashboard")

const dashboardList =(req,res)=>{
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 dashboardModel.find({},(err,data)=>{
    if(!err) {
        res.json({
            message:data.length>0?'Success':"No data",
            user:data
        });
    }
  })
}

const createItem =(req,res)=>{

    let dashboardItem=dashboardModel();
    dashboardItem.name=req.body.name;
    dashboardItem.category=req.body.category;
    dashboardItem.save().then((data)=>{
    res.json({
        message:"Item created",
        data:data
    });
}).catch(err=>{
    res.status(505);
    res.json(err);
});
//  dashboardModel.find({},(err,data)=>{
//     if(!err) {
//         res.json({
//             message:data.length>0?'Success':"No data",
//             user:data
//         });
//     }
//   })
}
module.exports={
    dashboard:dashboardList,
    createItem:createItem
}