const express = require("express");
const router= express.Router(); 
const meeting=require("../models/meeting_model.js");
const rmeeting= require("../models/RUTAG_meeting_model");
const checkauth = require("../auth.js");
const jwt= require('jsonwebtoken');




// get all
router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='IITK' || userrole=='MCF' || userrole=='admin'){
    meeting.find({},function(err,meeting){
        if(err)
        {
            console.log("error");
        }
        else{
            res.status(200).json({message:"Success",meeting:meeting})
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

   if(userrole=='IITK' || userrole=='MCF' || userrole=='admin'){
    const nw_meeting = {
        Title:req.body.Title,
        Objective:req.body.Objective,
        By:req.userData.email,
        For: userrole,
        Link:req.body.Link,
        WhichDate:req.body.WhichDate,
        WhichTime:req.body.WhichTime,
        CreatedTime:req.body.CreatedTime
    }

   meeting.create(nw_meeting,function(err,newmeeting){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newmeeting);
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
    if(userrole=='IITK' || userrole=='MCF' || userrole=='admin'){
    meeting.findById(req.params.id,function(err,foundmeeting){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundmeeting});
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
    if((userrole=='IITK' || userrole=='MCF' || userrole=='admin')&&req.body.By == req.userData.email){  
    meeting.findByIdAndUpdate(req.params.id,req.body,function(err){
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
    if((userrole=='IITK' || userrole=='MCF' || userrole=='admin') && req.headers.data==req.userData.email){
    meeting.findByIdAndRemove(req.params.id,function(err,deletemeeting){
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
    if(userrole=='IITK' || userrole=='admin'){
    rmeeting.find({},function(err,meeting){
        if(err)
        {
            console.log("error");
        }
        else{
            res.status(200).json({message:"Success",meeting:meeting})
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

   if(userrole=='IITK' || userrole=='admin'){
    const nw_meeting = {
        Title:req.body.Title,
        Objective:req.body.Objective,
        By:req.userData.email,
        For: userrole,
        Link:req.body.Link,
        WhichDate:req.body.WhichDate,
        WhichTime:req.body.WhichTime,
        CreatedTime:req.body.CreatedTime
    }

   rmeeting.create(nw_meeting,function(err,newmeeting){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newmeeting);
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
    if(userrole=='IITK' || userrole=='admin'){
    rmeeting.findById(req.params.id,function(err,foundmeeting){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundmeeting});
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
    if((userrole=='IITK' || userrole=='admin') && req.body.By == req.userData.email){  
    rmeeting.findByIdAndUpdate(req.params.id,req.body,function(err){
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
    if((userrole=='IITK' || userrole=='admin') && req.headers.data==req.userData.email){
    rmeeting.findByIdAndRemove(req.params.id,function(err,deletemeeting){
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