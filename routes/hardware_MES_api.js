const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const hardwareMes=require("../models/hardware_MES_model");
const jwt= require('jsonwebtoken');
const checkauth = require("../auth.js");
var path = require("path")


router.get("/get",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='admin'){
    hardwareMes.find({},function(err,hardwareMES){
        if(err)
        {
            console.log("error");
        }
        else{
            var total= 0.0;
            for (i = 0; i < hardwareMES.length; i++) {
                var obj= hardwareMES[i];
                if(obj.Total!='null')
                total += parseFloat(obj.Total)
              }
              console.log(total);
              res.status(200).json({message:"Success",total:total,hardwareMES:hardwareMES})
        }
    })
    }
    else
    {
    res.status(403).json({message:"Unauthorized"});
    }
})

router.post("/add",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='admin'){

   hardwareMes.create(req.body,function(err,newlyCreatedhardwareMes){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newlyCreatedhardwareMes);
        } 
    })
    }
    else
    {
    res.status(403).json({message:"Unauthorized"});
    }
})

router.get("/details/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='admin'){
    hardwareMes.findById(req.params.id,function(err,foundHardwareMes){
        if(err)
        {
           
            console.log(err);
        }
        else{
            res.status(200).json({message:"Success",item:foundHardwareMes});
        }
    })
    }
    else
    {
    res.status(403).json({message:"Unauthorized"});
    }
});


router.post("/update/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='admin'){
    hardwareMes.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            console.log(err);
        }else{
            res.status(200).json({message:"updated"});
        }
    })
    }
    else
    {
    res.status(403).json({message:"Unauthorized"});
    }
})
//delete route
router.delete("/delete/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='admin'){
    hardwareMes.findByIdAndRemove(req.params.id,function(err,deletehardwareMes){
        if(err){
           
            console.log(err);
        }
        else{
            res.status(200).json({message:"deleted"});
        }
    })
  }
    else
    {

    res.status(403).json({message:"Unauthorized"});
    }
})
       
       
module.exports=router;