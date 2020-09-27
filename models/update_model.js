const mongoose = require("mongoose"); 

 
const Schema=mongoose.Schema; 


const updateSchema = new Schema({

    Title:{
        type:String, required:true
    },
    Summary:{
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
    
    Time:  { type : Date, default: Date.now }

})

module.exports=mongoose.model('Update',updateSchema) 
