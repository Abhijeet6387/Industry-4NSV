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
            res.redirect("/softwareDesign/get");
            console.log(err);
        }
        else{
            // console.log(softwaredesign);
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
            res.redirect("/softwareDesign/get");
            console.log(err);
        }
        else{
            res.redirect("/softwareDesign/get");
            // res.send(newlyCreatedsoftwareDesign);
            console.log(newlyCreatedsoftwareDesign);
        } 
    })
})
//show route
router.get("/edit/:id",function(req,res){
    softwareDesign.findById(req.params.id,function(err,foundSoftwareDesign){
        if(err)
        {
            res.redirect("/softwareDesign/get");
            console.log(err);
        }
        else{
            // res.send("show",{foundSoftwareDesign: foundSoftwareDesign })
            res.render("editSoftwareDetail",{item:foundSoftwareDesign})
        }
    })
});
//edit route
router.get("/softwaredesign/:id/edit",function(req,res){
    
    softwareDesign.findById(req.params.id,function(err,foundSoftwareDesign){
        if(err)
        {
            res.redirect("/softwareDesign/get");
            console.log(err);
        }
        else{
            res.send("edit",{softwareDesign: foundSoftwareDesign})
        }
    })
//update route    
})
router.post("/update/:id",function(req,res){
    softwareDesign.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            res.redirect("/softwareDesign/get");
            console.log(err);
        }else{
            res.redirect("/softwareDesign/get");
            // res.send("updated");
        }
    })
})
//delete route
router.delete("/delete/:id",function(req,res){
    softwareDesign.findByIdAndRemove(req.params.id,function(err,deletesoftwareDesign){
        if(err){
            // res.redirect("/softwaredesign");
            console.log("err is "+err);
        }
        else{
            // res.redirect("/softwaredesign");
            res.send("deleted");
            console.log("deleted")
            // res.redirect("/softwareDesign/get");
        }
    })
})
       
       
module.exports=router;