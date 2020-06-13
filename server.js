const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const db = "mongodb://localhost:27017/NSV"
const event_api=require("./routes/event_api");
const component_api=require("./routes/component_api");
const path=require("path");






app.use(bodyParser.urlencoded({
    extended:false             
}))
app.use(bodyParser.json()); 








app.set('view engine','pug');
app.set('views', __dirname + '/views');  
app.use('/public', express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
    res.redirect('http://localhost:3000/public/introduction.html');
   
})
app.use('/event',event_api);
app.use('/component',component_api);




mongoose.Promise=global.Promise;


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)
    }
    else
    console.log("connected to db")
})



app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});


