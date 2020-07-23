const mongoose = require("mongoose"); 



const Schema=mongoose.Schema;

const softwareDesignSchema = new Schema({
    Manufacturer:{
        type:String, required:true
    },

    Softwares:{
        type:String, required:true
    },
    Quantity:{
        type:String,required:true
    },
    price:{
        type:String, required:true
    },
    Status:{
         type:String, required:true
    }

})


module.exports=mongoose.model('SoftwareDesign',softwareDesignSchema) 
