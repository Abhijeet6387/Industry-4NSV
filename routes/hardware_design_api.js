const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const hardwareDesign=require("../models/hardware_design_model");
var path = require("path")



//Restful routes
//index route
router.get("/get",function(req,res){
    hardwareDesign.find({},function(err,hardwaredesign){
        if(err)
        {
            console.log("error");
            res.redirect("/hardwareDesign/get");
        }
        else{
            // console.log(hardwaredesign);
            res.render("hardwareDesignList",{hardwaredesign:hardwaredesign})
        }
    })
})
//new route
router.get("/add",function(req,res){
    res.render("addHardwareDetails");
})
router.post("/add",function(req,res){
//    console.log(req.body);
   hardwareDesign.create(req.body,function(err,newlyCreatedhardwareDesign){
        if (err){
            console.log(err);
            res.redirect("/hardwareDesign/get");
        }
        else{
            res.redirect("/hardwareDesign/get");
            // res.send(newlyCreatedhardwareDesign);
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
router.get("/edit/:id",function(req,res){
    hardwareDesign.findById(req.params.id,function(err,foundHardwareDesign){
        if(err)
        {
            res.redirect("/hardwareDesign/get");
            console.log(err);

        }
        else{
            res.render("editHardwareDetail",{item: foundHardwareDesign})
        }
    })
//update route    
})
router.post("/update/:id",function(req,res){
    hardwareDesign.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            res.redirect("/hardwareDesign/get");
            console.log(err);
        }else{
            res.redirect("/hardwareDesign/get");
        }
    })
})
//delete route
router.delete("/delete/:id",function(req,res){
    hardwareDesign.findByIdAndRemove(req.params.id,function(err,deletehardwareDesign){
        if(err){
            // res.redirect("/hardwaredesign");
            console.log("err is "+err);
        }
        else{
            // res.redirect("/hardwaredesign");
            res.send("deleted");
            console.log("deleted")
        }
    })
})
       
       
module.exports=router;