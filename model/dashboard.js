const mongoose = require("mongoose");

const dashboard = mongoose.Schema({
    //  _id:mongoose.Schema.Types.ObjectId(),
     category:String,
     name:String

});

module.exports = mongoose.model("Dashboard",dashboard);
