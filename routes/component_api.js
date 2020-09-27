const express = require("express");
const router= express.Router();  
const mongoose = require("mongoose");
const Component=require("../models/component_model");
var path = require("path")
const checkauth = require("../auth.js");
const jwt= require('jsonwebtoken');



router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    Component.find({ Listname: req.query.Listname, Level: req.query.Level, Item: req.query.Item},function(err,component){
        if(err)
        {
            console.log("error");
        }
        else{
            res.status(200).json({message:"Success",component:component})
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

   Component.create(req.body,function(err,newlyCreatedcomponent){
        if (err){
            console.log(err);
        }
        else{
            res.status(200).json({message:"Added"});
            console.log(newlyCreatedcomponent);
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
    Component.findById(req.params.id,function(err,foundcomponent){
        if(err)
        {
            console.log(err);
            
        }
        else{
            res.status(200).json({message:"Success",item:foundcomponent});
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
    Component.findByIdAndUpdate(req.params.id,req.body,function(err){
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
    Component.findByIdAndRemove(req.params.id,function(err,deletecomponent){
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

// router.get('/addcomponent',(req,res)=>{

//     console.log( "add component form needs to linked");
//     res.render('addcomponentform')   
  
// })

// router.get('/getcomponentform',(req,res)=>{

//     console.log( "add component form needs to linked");
//     res.render('componentdetailform') 
      
  
// })

// router.get('/getcomponentdetails',(req,res) =>{   
//     console.log("hey")           
//     Component.find({ Listname: req.query.Listname, Level: req.query.Level, Item: req.query.Item})                                    
   
   
//     .then(function(component){                              
      
     
//         console.log(component)                    
//         res.render("componentdetailform", {component: component});
         
//        }).catch(err=>console.log('the error is' +err));                                          
     
    
// });
// router.post('/addcomponent',(req,res) =>{
 
//     const component = new Component({
//         _id:new mongoose.Types.ObjectId(),
//         Listname: req.body.Listname,
//         Level: req.body.Level,
//         Item: req.body.Item,
//         Description: req.body.Description,
//         Drawing_number: req.body.Drawing_number
       
//     });
//     component.save().then(
//         (component)=>{console.log('the component is' +component)
//         // res.json(component);
//         res.redirect("/component/getcomponentdetails");
    
//     }
//     ).catch(err=>console.log('the error is' +err));


// });



module.exports=router;