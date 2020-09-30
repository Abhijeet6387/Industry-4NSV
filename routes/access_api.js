const express = require("express");
const router= express.Router();  
const Tmember = require('../models/temp_member_model.js');
const Member = require('../models/member_model.js');
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');
const checkauth = require("../auth.js");

// router.get("/signup",(req,res)=>
// {
//   res.render('signup')
// })
router.post("/request",(req,res) => {
 
     bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err)
        {
          return res.send(err);
        } 
        else{
            const tmember = new Tmember({
            email: req.body.email,
            password:hash,
            name:req.body.name,
            role:req.body.role
        });
        tmember.save().then(
         (result) => {
            res.send("success");
            console.log(result);
         }
        )
          .catch(err=>{
            console.log(err);
             res.status(500).json({
                error:err
              });
          });
  
      }
    });
  });

router.get("/get",checkauth,function(req,res){

    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
        Tmember.find({},function(err,accessRequestList){
            if(err)
            {
                console.log(err);
            }
            else{
      
                res.status(200).json({message:"Success",accessRequestList:accessRequestList})

            }
        })
     }   
     else{
         console.log("Unauthorized")
       res.status(403).json({message:"Unauthorized"})
     }
})


router.get("/details/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    Tmember.findById(req.params.id,function(err,foundedRequest){
        if(err)
        {
            console.log(err);
        }
        else{
            res.status(200).json({message:"Success",item:foundedRequest});
        }
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"})
   }
});


//allow route
router.get("/allow/:id",checkauth,function(req,res){
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"secret");
    req.userData =decoded;
    const userrole= req.userData.role;
    if(userrole=='admin'){
    Tmember.findById(req.params.id,function(err,data){
        if(err){
            console.log("err");
        }
        else{
            console.log(data)
            const member = new Member({
                email: data.email,
                password:data.password,
                name:data.name,
                role:data.role
            });
            member.save().then(
             (result) => {
                res.send("success");
                console.log(result);
                Tmember.findByIdAndRemove(req.params.id,function(err,deletedRequest){
                    if(err){
                        console.log("err is "+err);
                    }
                    else{
                        
                        console.log("deleted from temp data")
                    }
                })

             }
            )
              .catch(err=>{
                console.log(err);
                 res.status(500).json({
                    error:err
                  });
              });
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
    Tmember.findByIdAndRemove(req.params.id,function(err,deletedRequest){
        if(err){
            console.log("err is "+err);
        }
        else{
            
            res.status(200).json({message:"deletedRequest"});
        }
    })
   }
   else
   {
    res.status(403).json({message:"Unauthorized"})
   }
})

module.exports= router;