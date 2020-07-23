const mongoose = require("mongoose"); //INITIALISE MONGOOSE 


//The Schema allows you to define the fields stored in each document along with their validation requirements and default values. 
const Schema=mongoose.Schema; //SCHEMA DEFINED

//BY PASSING ANY CUSTOMISED OBJECT OF REQUIRED TYPE INTO THE SCHEMA FUNCTION WE CAN CREATE OUR OWN
//COSTOMISED OBJECT SCHEMA
const eventSchema = new Schema({

    Title:{
        type:String, required:true
    },
    Description:{
        type:String, required:true
    }

})

 //Schemas are  "compiled" into models using the mongoose.model() method. simply by mongoose.model we can decide which schema or template is to be used in our collection.
module.exports=mongoose.model('Event',eventSchema) 


