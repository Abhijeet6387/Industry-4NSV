const express = require("express");
const router= express.Router(); 
const softwareMes=require("../models/software_MES_model");
const checkauth = require("../auth.js");
const jwt= require('jsonwebtoken');




// get all
router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    softwareMes.find({},function(err,softwareMES){
        if(err)
        {
            console.log("error");
        }
        else{
            var total= 0.0;
            for (i = 0; i < softwareMES.length; i++) {
                var obj= softwareMES[i];
                if(obj.Price!='NULL')
                total += parseFloat(obj.Price)
              }
              console.log(total);
            //  res.json(softwareMes) 
            res.status(200).json({message:"Success",total:total,softwareMES:softwareMES})
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
   if(userrole=='admin'){

   softwareMes.create(req.body,function(err,newlyCreatedsoftwareMes){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newlyCreatedsoftwareMes);
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
    if(userrole=='admin'){
    softwareMes.findById(req.params.id,function(err,foundSoftwareMes){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundSoftwareMes});
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
    if(userrole=='admin'){  
    softwareMes.findByIdAndUpdate(req.params.id,req.body,function(err){
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
    softwareMes.findByIdAndRemove(req.params.id,function(err,deletesoftwareMes){
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