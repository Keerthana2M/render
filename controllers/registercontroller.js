const express=require("express");
const UserRegister=require("../schema/registerschema");
const register=async function(req,res){
    try{
        const newUser=new UserRegister({
         firstname:req.body.firstname,
        lastname:req.body.lastname,
        USN:req.body.USN,
        Email:req.body.Email,
        password:req.body.password,
        check_password:req.body.check_password});

        await newUser.save();
        return res.status(200).json({message:"registerd"});
    }
    catch(error){
        console.log(error);
    }
}
     module.exports=register;