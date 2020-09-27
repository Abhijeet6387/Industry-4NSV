const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const budgetSchema = new Schema({
       item:{type:String,required:true},
       firstyear:{type:Number,default:0},
       secondyear:{type:Number,default:0},
       itemTotal:{type:Number,default:0}

});


module.exports=mongoose.model('Budget',budgetSchema);