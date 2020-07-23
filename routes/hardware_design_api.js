const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const hardwareDesign=require("../models/hardware_design_model");
var path = require("path")



//Restful routes
//index route
router.get("/hardwaredesign",function(req,res){
    hardwareDesign.find({},function(err,hardwaredesign){
        if(err)
        {
            console.log("error");
        }
        else{
            res.send("hardwaredesign",{hardwaredesign:hardwaredesign})
        }
    })
})
//new route
router.get("/hardwaredesign/new",function(req,res){
    res.send("new");
})
router.post("/hardwaredesign",function(req,res){
   console.log(req.body);
   hardwareDesign.create(req.body,function(err,newlyCreatedhardwareDesign){
        if (err){
            console.log(err);
        }
        else{
            // res.redirect("/hardwaredesign");
            res.send(newlyCreatedhardwareDesign);
        } 
    })
})
//show route
router.get("/hardwaredesign/:id",function(req,res){
    hardwareDesign.findById(req.params.id,function(err,foundHardwareDesign){
        if(err)
        {
            res.redirect("/hardwaredesign");
        }
        else{
            res.send("show",{foundHardwareDesign: foundHardwareDesign })
        }
    })
});
//edit route
router.get("/hardwaredesign/:id/edit",function(req,res){
    hardwareDesign.findById(req.params.id,function(err,foundHardwareDesign){
        if(err)
        {
            res.redirect("/hardwaredesign");
        }
        else{
            res.send("edit",{hardwareDesign: foundHardwareDesign})
        }
    })
//update route    
})
router.put("/hardwaredesign/:id",function(req,res){
    hardwareDesign.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            res.redirect("/hardwaredesign");
        }else{
            res.redirect("/hardwaredesign/"+ req.params.id);
        }
    })
})
//delete route
router.delete("/hardwaredesign/:id",function(req,res){
    hardwareDesign.findByIdAndRemove(req.params.id,function(err,deletehardwareDesign){
        if(err){
            res.redirect("/hardwaredesign");
        }
        else{
            res.redirect("/hardwaredesign");
        }
    })
})
       
       
module.exports=router;