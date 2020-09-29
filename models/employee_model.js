const mongoose =require('mongoose');
const Schema=mongoose.Schema;

 

const employeeSchema = new Schema({
       email:{type:String,required:true},
       name:{type:String,required:true},
       post:{type:String,required:true},
       from:{type:String,required:true},
       to:{type:String,required:true},
       salary:{type:Number,default:0},
       isOld:{type:String,required:true},
       projectNo:{type:String,required:true}

});


module.exports=mongoose.model('Employee',employeeSchema);