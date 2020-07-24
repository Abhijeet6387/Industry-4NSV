const express = require("express");
const router= express.Router(); 
const mongoose = require("mongoose");
const Event=require("../models/event_model");
var path = require("path")




router.get('/addevent',(req,res)=>{

    console.log( "add event form needs to linked");
    res.render('event_form') 
})
 


router.get('/getevent',(req,res) =>{             
    Event.find({})                                  
   
   
    .exec(function(err,event){                          
      if(err){console.log("error in retrieving events");    
      }
      else{
        console.log(event)                    
        res.render("event_list", {event: event});
      }
       });                                          
     
    
});
router.post('/addevent',(req,res) =>{
 
    const event = new Event({
        _id:new mongoose.Types.ObjectId(),
       
        Title: req.body.Title,
        Description: req.body.Description
       
    });
    event.save().then(
        (event)=>{console.log('the event is' +event)
        // res.json(event)
        res.redirect("/event/getevent");
        
    }
    ).catch(err=>console.log('the error is' +err));


});

module.exports=router;