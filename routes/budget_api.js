const express = require("express");
const router= express.Router(); 
const budget=require("../models/budget_model");
const checkauth = require("../auth.js");
const jwt= require('jsonwebtoken');




// get all
router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    budget.find({},function(err,budget){
        if(err)
        {
            console.log("error");
        }
        else{
            var total= 0.0;
            for (i = 0; i < budget.length; i++) {
                var obj= budget[i];
                total += obj.itemTotal;
              }
              console.log(total);
            //  res.json(softwareMes) 
            res.status(200).json({message:"Success",total:total,budget:budget})
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

   budget.create(req.body,function(err,newlyCreatedbudget){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newlyCreatedbudget);
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
    budget.findById(req.params.id,function(err,foundbudget){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundbudget});
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
    budget.findByIdAndUpdate(req.params.id,req.body,function(err){
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
    budget.findByIdAndRemove(req.params.id,function(err,deletesbudget){
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