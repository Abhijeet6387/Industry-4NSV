const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const softwareDesign=require("../models/software_design_model");
var path = require("path")



//Restful routes
//index route
router.get("/get",function(req,res){
    softwareDesign.find({},function(err,softwaredesign){
        if(err)
        {
            console.log("error");
        }
        else{
            res.render("softwareDesignList",{softwaredesign:softwaredesign})
        }
    })
})
//new route
router.get("/add",function(req,res){
    res.render("addSoftwareDetails");
})
router.post("/add",function(req,res){

   softwareDesign.create(req.body,function(err,newlyCreatedsoftwareDesign){
        if (err){
            console.log(err);
        }
        else{
            res.redirect("/softwareDesign/get");
            // res.send(newlyCreatedsoftwareDesign);
        } 
    })
})
//show route
router.get("/softwaredesign/:id",function(req,res){
    softwareDesign.findById(req.params.id,function(err,foundSoftwareDesign){
        if(err)
        {
            res.redirect("/softwaredesign");
        }
        else{
            res.send("show",{foundSoftwareDesign: foundSoftwareDesign })
        }
    })
});
//edit route
router.get("/softwaredesign/:id/edit",function(req,res){
    softwareDesign.findById(req.params.id,function(err,foundSoftwareDesign){
        if(err)
        {
            res.redirect("/softwaredesign");
        }
        else{
            res.send("edit",{softwareDesign: foundSoftwareDesign})
        }
    })
//update route    
})
router.put("/softwaredesign/:id",function(req,res){
    softwareDesign.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            res.redirect("/softwaredesign");
        }else{
            res.redirect("/softwaredesign/"+ req.params.id);
        }
    })
})
//delete route
router.delete("/softwaredesign/:id",function(req,res){
    softwareDesign.findByIdAndRemove(req.params.id,function(err,deletesoftwareDesign){
        if(err){
            res.redirect("/softwaredesign");
        }
        else{
            res.redirect("/softwaredesign");
        }
    })
})
       
       
module.exports=router;