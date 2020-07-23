const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const softwareMes=require("../models/software_MES_model");
var path = require("path")



//Restful routes
//index route
router.get("/get",function(req,res){
    softwareMes.find({},function(err,softwareMes){
        if(err)
        {
            console.log("error");
        }
        else{
            res.render("softwareMESlist",{softwareMes:softwareMes})
        }
    })
})
//new route
router.get("/add",function(req,res){
    res.render("addSoftwareMes");
})
router.post("/add",function(req,res){

   softwareMes.create(req.body,function(err,newlyCreatedsoftwareMes){
        if (err){
            console.log(err);
        }
        else{
            // res.redirect("/softwaremes");
            res.send(newlyCreatedsoftwareMes);
        } 
    })
})
//show route
router.get("/softwaremes/:id",function(req,res){
    softwareMes.findById(req.params.id,function(err,foundSoftwareMes){
        if(err)
        {
            res.redirect("/softwaremes");
        }
        else{
            res.send("show",{foundSoftwareMes: foundSoftwareMes })
        }
    })
});
//edit route
router.get("/softwaremes/:id/edit",function(req,res){
    softwareMes.findById(req.params.id,function(err,foundSoftwareMes){
        if(err)
        {
            res.redirect("/softwaremes");
        }
        else{
            res.send("edit",{softwareMes: foundSoftwareMes})
        }
    })
//update route    
})
router.put("/softwaremes/:id",function(req,res){
    softwareMes.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            res.redirect("/softwaremes");
        }else{
            res.redirect("/softwaremes/"+ req.params.id);
        }
    })
})
//delete route
router.delete("/softwaremes/:id",function(req,res){
    softwareMes.findByIdAndRemove(req.params.id,function(err,deletesoftwareMes){
        if(err){
            res.redirect("/softwaremes");
        }
        else{
            res.redirect("/softwaremes");
        }
    })
})
       
       
module.exports=router;