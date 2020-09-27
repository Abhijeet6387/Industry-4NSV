const express = require("express");
const router= express.Router();  
const Member = require('../models/member_model.js');
const bcrypt= require('bcrypt');
const jwt=require('jsonwebtoken');

// router.get("/signup",(req,res)=>
// {
//   res.render('signup')
// })
router.post("/register",(req,res) => {
 
     bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err)
        {
          return res.send(err);
        } 
        else{
            const member = new Member({
            email: req.body.email,
            password:hash,
            name:req.body.name,
            role:req.body.role
        });
        member.save().then(
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
// router.get("/login",(req,res)=>
// {
//     res.render('login')
// });
router.post("/login",(req,res) => {
    // console.log(req.body.email);
    Member.find({email: req.body.email}).exec().then(
      user => {
        if(user.length <1){
          return res.status(401).json({
            message : 'Auth failed'
          });
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result) =>{
            
          if(err){
            return res.status(401).json({
              message : 'Auth failed'
            });
          }
  
          if(result)
          {  
               const token= jwt.sign({
               email:user[0].email,
               role:user[0].role,
              },"secret",
            {
               expiresIn:"1h" 
            }
            );
            
            return res.json({message:'success',token:token});
          }
  
          return res.json({
            message : 'failed',
            token: null
         });
       })
      }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
          });
      });
  });
module.exports= router;