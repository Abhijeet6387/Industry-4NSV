const express = require("express");
const router= express.Router(); 
const nwemployee=require("../models/new_employee_model");
const checkauth = require("../auth.js");
const jwt= require('jsonwebtoken');




// get all
router.get("/getex",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    var d = new Date();
    nwemployee.find({ "endDate": { $lt: d } }).sort({date: -1}).exec(function(err,employee){
        if(err)
        {
            console.log("error");
        }
        else{
            var total= 0.0;
            for (i = 0; i < employee.length; i++) {
                var obj= employee[i];
                total += obj.salary;
              }
              console.log(total);
            //  res.json(softwareMes) 
            res.status(200).json({message:"Success",total:total,employee:employee})
        }
    })
   }
   else{
    console.log("Unauthorized")
    res.status(403).json({message:"Unauthorized"})
  }
})

// get all
router.get("/getcurrent",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
        var d = new Date();
       nwemployee.find({ "endDate": { $gte: d } }).sort({date: -1}).exec(function(err,employee){
        if(err)
        {
            console.log("error");
        }
        else{
            var total= 0.0;
            for (i = 0; i < employee.length; i++) {
                var obj= employee[i];
                total += obj.salary;
              }
              console.log(total);
            //  res.json(softwareMes) 
            res.status(200).json({message:"Success",total:total,employee:employee})
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
  
    var data={
        email: req.body.email,
        name: req.body.name,
        post:  req.body.post,
        startDate: new Date(req.body.startDate.toString()),
        endDate: new Date(req.body.endDate.toString()),
        salary: req.body.salary,
        projectNo: req.body.projectNo
    }
   nwemployee.create(data,function(err,newlyCreatedemployee){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newlyCreatedemployee);
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
    nwemployee.findById(req.params.id,function(err,foundemployee){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundemployee});
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
    var data={
            email: req.body.email,
            name: req.body.name,
            post:  req.body.post,
            startDate: new Date(req.body.startDate.toString()),
            endDate: new Date(req.body.endDate.toString()),
            salary: req.body.salary,
            projectNo: req.body.projectNo
    }
    nwemployee.findByIdAndUpdate(req.params.id,data,function(err){
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
    nwemployee.findByIdAndRemove(req.params.id,function(err,deleteemployee){
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