const mongoose = require("mongoose"); 



const Schema=mongoose.Schema;

const softwareMesSchema = new Schema({
    Softwares:{
        type:String, required:true
    },

    Quantity:{
        type:String, required:true
    },
    Price:{
        type:String,required:true
    },
    Order:{
        type:String, required:true
    }
    

})


module.exports=mongoose.model('SoftwareMes',softwareMesSchema) 
