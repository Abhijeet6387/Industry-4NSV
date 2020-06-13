const express = require("express");
const router= express.Router();  
const mongoose = require("mongoose");
const Component=require("../models/component_model");
var path = require("path")


router.get('/addcomponent',(req,res)=>{

    console.log( "add component form needs to linked");
    res.render('component_form')   
  
})

router.get('/getcomponentform',(req,res)=>{

    console.log( "add component form needs to linked");
    res.render('component_form') 
      
  
})

router.get('/getcomponentdetails',(req,res) =>{              
    Component.find({ Level: req.query.Level, Item: req.query.Item})                                    
   
   
    .exec(function(err,component){                              
      if(err){console.log("error in retrieving events");    
      }
      else{
        console.log(component)                    
        res.render("componentlist", {component: component});
      }
       });                                          
     
    
});
router.post('/addcomponent',(req,res) =>{
 
    const component = new Component({
        _id:new mongoose.Types.ObjectId(),
       
        Level: req.body.Level,
        Item: req.body.Item,
        Description: req.body.Description,
        Drawing_number: req.body.Drawing_number
       
    });
    component.save().then(
        (component)=>{console.log('the component is' +component)
        res.json(component)}
    ).catch(err=>console.log('the error is' +err));


});

module.exports=router;