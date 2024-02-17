const express=require("express");
const router=express.Router();
router.post("/about",require("../controllers/registercontroller"));
router.post("/login",require("../controllers/logincontroller"));
module.exports=router;

    
