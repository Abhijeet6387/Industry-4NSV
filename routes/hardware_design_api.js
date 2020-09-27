const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const jwt= require('jsonwebtoken');
const checkauth = require("../auth.js");
const hardwareDesign=require("../models/hardware_design_model");
var path = require("path")



//Restful routes
//index route
router.get("/get",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    hardwareDesign.find({},function(err,hardwaredesign){
        if(err)
        {
            console.log("error");
            res.redirect("/hardwareDesign/get");
        }
        else{
            // console.log(hardwaredesign);
            var total= 0.0;
            for (i = 0; i < hardwaredesign.length; i++) {
                var obj= hardwaredesign[i];
                if(obj.Total!='NULL')
                total += parseFloat(obj.Total)
              }
              console.log(total);
              res.status(200).json({message:"Success",total:total,hardwaredesign:hardwaredesign})
        }
    })
    }   
    else{
    
       res.status(403).json({message:"Unauthorized"})
    }
})

router.post("/add",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
   hardwareDesign.create(req.body,function(err,newlyCreatedhardwareDesign){
        if (err){
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Added"});
            // res.send(newlyCreatedhardwareDesign);
        } 
    })
    }   
    else{
      
       res.status(403).json({message:"Unauthorized"})
    }
})


//edit route
router.get("/details/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    hardwareDesign.findById(req.params.id,function(err,foundHardwareDesign){
        if(err)
        {
           
            console.log(err);

        }
        else{
            res.status(200).json({message:"Success",item:foundHardwareDesign});
        }
    })
   }   
    else{
       
       res.status(403).json({message:"Unauthorized"})
    }   
})
router.post("/update/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    hardwareDesign.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            
            console.log(err);
        }else{
            res.status(200).json({message:"updated"});
        }
    })
    }   
    else{
      
        res.status(403).json({message:"Unauthorized"})
    }
})
//delete route
router.delete("/delete/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    hardwareDesign.findByIdAndRemove(req.params.id,function(err,deletehardwareDesign){
        if(err){
            // res.redirect("/hardwaredesign");
            console.log("err is "+err);
        }
        else{
            // res.redirect("/hardwaredesign");
            res.status(200).json({message:"deleted"});
        }
    })
    }   
    else{
        
        res.status(403).json({message:"Unauthorized"})
    }
})
       
       
module.exports=router;