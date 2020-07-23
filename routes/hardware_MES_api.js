const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const hardwareMes=require("../models/hardware_MES_model");
var path = require("path")



//Restful routes
//index route
router.get("/hardwaremes",function(req,res){
    hardwareMes.find({},function(err,hardwaremes){
        if(err)
        {
            console.log("error");
        }
        else{
            res.send("hardwaremes",{hardwaremes:hardwaremes})
        }
    })
})
//new route
router.get("/hardwaremes/new",function(req,res){
    res.send("new");
})
router.post("/hardwaremes",function(req,res){

   hardwareMes.create(req.body,function(err,newlyCreatedhardwareMes){
        if (err){
            console.log(err);
        }
        else{
            res.redirect("/hardwaremes");
        } 
    })
})
//show route
router.get("/hardwaremes/:id",function(req,res){
    hardwareMes.findById(req.params.id,function(err,foundHardwareMes){
        if(err)
        {
            res.redirect("/hardwaremes");
        }
        else{
            res.send("show",{foundHardwareMes: foundHardwareMes })
        }
    })
});
//edit route
router.get("/hardwaremes/:id/edit",function(req,res){
    hardwareMes.findById(req.params.id,function(err,foundHardwareMes){
        if(err)
        {
            res.redirect("/hardwaremes");
        }
        else{
            res.send("edit",{hardwareMes: foundHardwareMes})
        }
    })
//update route    
})
router.put("/hardwaremes/:id",function(req,res){
    hardwareMes.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            res.redirect("/hardwaremes");
        }else{
            res.redirect("/hardwaremes/"+ req.params.id);
        }
    })
})
//delete route
router.delete("/hardwaremes/:id",function(req,res){
    hardwareMes.findByIdAndRemove(req.params.id,function(err,deletehardwareMes){
        if(err){
            res.redirect("/hardwaremes");
        }
        else{
            res.redirect("/hardwaremes");
        }
    })
})
       
       
module.exports=router;