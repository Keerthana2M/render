const mongoose=require("mongoose");
const loginschema=mongoose.Schema({
    Email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("login",loginschema);