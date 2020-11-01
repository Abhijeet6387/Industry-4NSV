const mongoose =require('mongoose');
const Schema=mongoose.Schema;

 

const newEmployeeSchema = new Schema({
       email:{type:String,required:true},
       name:{type:String,required:true},
       post:{type:String,required:true},
       startDate:{type:Date,required:true},
       endDate:{type:Date,required:true},
       salary:{type:Number,default:0},
       projectNo:{type:String,required:true}

});


module.exports=mongoose.model('NewEmployee',newEmployeeSchema);