const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const jwt= require('jsonwebtoken');
const softwareDesign=require("../models/software_design_model");
const checkauth = require("../auth.js");

// get all 
router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
        softwareDesign.find({},function(err,softwaredesign){
            if(err)
            {
                // res.redirect("/softwareDesign/get");
                console.log(err);
            }
            else{
                // console.log(softwaredesign);
                var total= 0.0;
                for (i = 0; i < softwaredesign.length; i++) {
                    var obj= softwaredesign[i];
                    if(obj.price!='null')
                    total += parseFloat(obj.price)
                }
                console.log(total);
                res.status(200).json({message:"Success",total:total,softwaredesign:softwaredesign})

            }
        })
     }   
     else{
         console.log("Unauthorized")
       res.status(403).json({message:"Unauthorized"})
     }
})
// post route
router.post("/add",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='admin'){
   softwareDesign.create(req.body,function(err,newlyCreatedsoftwareDesign){
        if (err){
            // res.redirect("/softwareDesign/get");
            console.log(err);
        }
        else{
            // res.redirect("/softwareDesign/get");
            res.status(200).json({message:"Added"});
            console.log(newlyCreatedsoftwareDesign);
        } 
    })
    }
    else
    {
        res.status(403).json({message:"Unauthorized"});
    }
})
//get by id
router.get("/details/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    softwareDesign.findById(req.params.id,function(err,foundSoftwareDesign){
        if(err)
        {
            // res.redirect("/softwareDesign/get");
            console.log(err);
        }
        else{
            // res.send("show",{foundSoftwareDesign: foundSoftwareDesign })
            // res.render("editSoftwareDetail",{item:foundSoftwareDesign})
            res.status(200).json({message:"Success",item:foundSoftwareDesign});
        }
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"})
   }
});
//edit route
router.post("/update/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    softwareDesign.findByIdAndUpdate(req.params.id,req.body,function(err){
        if(err){
            // res.redirect("/softwareDesign/get");
            console.log(err);
        }else{
            // res.redirect("/softwareDesign/get");
            res.status(200).json({message:"updated"});
        }
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"})
   }
})
//delete route
router.delete("/delete/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    softwareDesign.findByIdAndRemove(req.params.id,function(err,deletesoftwareDesign){
        if(err){
            // res.redirect("/softwaredesign");
            console.log("err is "+err);
        }
        else{
            // res.redirect("/softwaredesign");
            res.status(200).json({message:"deleted"});
            // console.log("deleted")
            // res.redirect("/softwareDesign/get");
        }
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"})
   }
})
       
       
module.exports=router;