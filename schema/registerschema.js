
const mongoose=require("mongoose");
const registerschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    USN:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    check_password:{
        type:String,
        required:true,
    }
        
    })
    module.exports=mongoose.model("register",registerschema);


