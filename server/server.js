const express=require("express");
const router=require("../router/router")
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
app.use("/",router);
mongoose.connect("mongodb://127.0.0.1:27017/about")
.then(()=>{
    console.log("Mongodb connected");
})
.catch((err)=>{
    console.log(err);
});
app.listen(7000, ()=> {
    console.log("server running on the port");
});