const mongoose = require("mongoose"); 



const Schema=mongoose.Schema;

const hardwareMesSchema = new Schema({
    Specification:{
        type:String, required:true
    },

    RequiredAt:{
        type:String, required:true
    },
    PricePerUnit:{
        type:String,required:true
    },
    NoOfUnits:{
        type:String, required:true
    },
    Total:{
         type:String, required:true
    },
    PurchasedQuantity:{
        type:String, required:true
    },
    PriceInLakhs:{
        type:String, required:true
    },
    BoughtFor:{
            type:String, required:true
    },
    Status:{
        type:String, required:true
    }

})


module.exports=mongoose.model('HardwareMes',hardwareMesSchema) 
