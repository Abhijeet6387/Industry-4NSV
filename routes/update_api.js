const express = require("express");
const router= express.Router(); 
const update=require("../models/update_model.js");
const rupdate=require("../models/RUTAG_update_model");

const checkauth = require("../auth.js");
const jwt= require('jsonwebtoken');




// get all
router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK' || userrole=='MCF'){
    update.find({},function(err,update){
        if(err)
        {
            console.log("error");
        }
        else{
            res.status(200).json({message:"Success",update:update})
        }
    })
   }
   else{
    console.log("Unauthorized")
    res.status(403).json({message:"Unauthorized"})
  }
})

//post route

router.post("/add",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='IITK' || userrole=='MCF'){
    const nw_update = {
        Title:req.body.Title,
        Summary:req.body.Summary,
        By:req.userData.email,
        For: userrole,
        Link:req.body.Link,
        Time:req.body.Time
    }
   update.create(nw_update,function(err,newupdate){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newupdate);
        } 
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"});
   }
})


// get details
router.get("/details/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK' || userrole=='MCF'){
    update.findById(req.params.id,function(err,foundupdate){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundupdate});
        }
    })
    }
    else{
        res.status(403).json({message:"Unauthorized"})
    }
});


router.post("/update/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    console.log(req.userData.email)
    console.log(req.body.By)
    if((userrole=='IITK' || userrole=='MCF') && req.body.By == req.userData.email){  
    update.findByIdAndUpdate(req.params.id,req.body,function(err){
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
    console.log(req.headers.data)
    console.log(req.userData.email)
    if((userrole=='IITK' || userrole=='MCF') && req.headers.data==req.userData.email){
    update.findByIdAndRemove(req.params.id,function(err,deleteupdate){
        if(err){
            console.log("err is "+err);
        }
        else{
            res.status(200).json({message:"deleted"});
        }
    })
    }
    else{
        res.status(403).json({message:"Unauthorized"}) 
    }
})

router.get("/getRUTAG",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK'){
    rupdate.find({},function(err,update){
        if(err)
        {
            console.log("error");
        }
        else{
            res.status(200).json({message:"Success",update:update})
        }
    })
   }
   else{
    console.log("Unauthorized")
    res.status(403).json({message:"Unauthorized"})
  }
})

//post route

router.post("/addRUTAG",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
   if(userrole=='IITK'){
    const nw_update = {
        Title:req.body.Title,
        Summary:req.body.Summary,
        By:req.userData.email,
        For: userrole,
        Link:req.body.Link,
        Time:req.body.Time
    }
   rupdate.create(nw_update,function(err,newupdate){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newupdate);
        } 
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"});
   }
})


// get details
router.get("/detailsRUTAG/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK'){
    rupdate.findById(req.params.id,function(err,foundupdate){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundupdate});
        }
    })
    }
    else{
        res.status(403).json({message:"Unauthorized"})
    }
});


router.post("/updateRUTAG/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK' && req.body.By == req.userData.email){  
    rupdate.findByIdAndUpdate(req.params.id,req.body,function(err){
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
router.delete("/deleteRUTAG/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK' && req.headers.data==req.userData.email){
    rupdate.findByIdAndRemove(req.params.id,function(err,deleteupdate){
        if(err){
            console.log("err is "+err);
        }
        else{
            res.status(200).json({message:"deleted"});
        }
    })
    }
    else{
        res.status(403).json({message:"Unauthorized"}) 
    }
})
module.exports=router;