const express = require("express");
const router= express.Router();  
const mongoose = require("mongoose");
const Component=require("../models/component_model");
var path = require("path")


router.get('/addcomponent',(req,res)=>{

    console.log( "add component form needs to linked");
    res.render('addcomponentform')   
  
})

router.get('/getcomponentform',(req,res)=>{

    console.log( "add component form needs to linked");
    res.render('componentdetailform') 
      
  
})

router.get('/getcomponentdetails',(req,res) =>{   
    console.log("hey")           
    Component.find({ Listname: req.query.Listname, Level: req.query.Level, Item: req.query.Item})                                    
   
   
    .then(function(component){                              
      
     
        console.log(component)                    
        res.render("componentdetailform", {component: component});
         
       }).catch(err=>console.log('the error is' +err));                                          
     
    
});
router.post('/addcomponent',(req,res) =>{
 
    const component = new Component({
        _id:new mongoose.Types.ObjectId(),
        Listname: req.body.Listname,
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