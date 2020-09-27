const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const memberSchema = new Schema({
       email:{type:String,required:true},
       password:{
           type:String, required:true
       },
       name:{type:String,required:true},
       role:{type:String,required:true}
});


module.exports=mongoose.model('Member',memberSchema);