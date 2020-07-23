const mongoose = require("mongoose"); 



const Schema=mongoose.Schema;

const componentSchema = new Schema({
    Listname:{
        type:String, required:true
    },

    Level:{
        type:String, required:true
    },
    Item:{
        type:String,required:true
    },
    Description:{
        type:String, required:true
    },
    Drawing_number:{
         type:String, required:true
    }

})


module.exports=mongoose.model('Component',componentSchema) 
