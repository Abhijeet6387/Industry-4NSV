const express = require("express");
const router= express.Router();  //INITIALISE ROUTE USING EXPRESS FRAMEWORK
const mongoose = require("mongoose");
const Event=require("../models/event_model");
var path = require("path")


//A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.

//ROUTE FUNCTION or API-
// IT SIMPLY RENDERS THE HTML PAGE STORED IN VIEW FOLDER IF A GET REQUEST THROUGH THE BELOW URL IS MADE.
router.get('/addevent',(req,res)=>{

    console.log( "add event form needs to linked");
    res.render('event_form')    //when template engine like ejs and pug is there
    // res.sendFile(__dirname + '/../views/feed_form.html')     // without using path join gives forbidden error
    // res.sendFile(path.join(__dirname, '..', 'views', 'form.html'))  //with path.join it works 
})
// SAME  FUNCTION
// IT FIRST FINDS ALL THE AVAILABLE FEEDS STORED IN FEED COLLECTION OF DATABASE AND PASSES THE RESULT TO PROJECTLIST.PUG IN FORM OF ARRAY OF FEEED OBJECTS


router.get('/getevent',(req,res) =>{               // FUNCTION CALL
    Event.find({})                                    //FINDING THE ARRAY OF FEED OBJS IN FEED COLLECTION OF DATABASE
   
   
    .exec(function(err,event){                              // "feed" IS THE REQUIRED ARRAY OF FEED'S OBTAINED BY function Feed.find()
      if(err){console.log("error in retrieving events");    // for the use of the array of feed once found.
      }
      else{
        console.log(event)                    // print statement for backend conole.
        res.render("eventlist", {event: event});
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
        res.json(event)}
    ).catch(err=>console.log('the error is' +err));


});

module.exports=router;