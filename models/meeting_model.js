const mongoose = require("mongoose"); 

 
const Schema=mongoose.Schema; 


const meetingSchema = new Schema({

    Title:{
        type:String, required:true
    },
    Objective:{
        type:String, required:true
    },
    By:{
        type:String, required:true
    },
    
    For:{
        type:String, required:true
    },
    Link:{

        type:String, required:true
    },
    WhichDate:{
        type:String, required:true
    },
    WhichTime:{
        type:String, required:true
    },
    CreatedTime:  { type : Date, default: Date.now }

})

module.exports=mongoose.model('Meeting',meetingSchema) 