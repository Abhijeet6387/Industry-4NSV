const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const db = process.env.MONGODB_URI;
const event_api=require("./routes/event_api");
const member_api= require("./routes/member_api");
const component_api=require("./routes/component_api");
const hardware_design_api=require("./routes/hardware_design_api");
const hardware_MES_api = require("./routes/hardware_MES_api");
const software_design_api=require("./routes/software_design_api");
const software_MES_api = require("./routes/software_MES_api");
const budget_api = require("./routes/budget_api");
const employee_api = require("./routes/new_employee_api");
const meeting_api = require("./routes/meeting_api");
const update_api = require("./routes/update_api");
const access_api = require("./routes/access_api");
const Admin_router=require('./routes/admin_api');


////middle ware set up

app.use("/admin",Admin_router)



app.use(bodyParser.urlencoded({
    extended:false             
}))
app.use(bodyParser.json()); 

// app.use('/public', express.static(__dirname + '/public'));





///. API's connections
app.use('/event',event_api);
app.use('/access',access_api);
app.use('/member',member_api);
app.use('/component',component_api);
app.use('/hardwareDesign',hardware_design_api);
app.use('/hardwareMES',hardware_MES_api);
app.use('/softwareDesign',software_design_api);
app.use('/softwareMES',software_MES_api);
app.use('/budget',budget_api);
// app.use('/employee',employee_api);
app.use('/employee',employee_api);
app.use('/meeting',meeting_api);
app.use('/update',update_api);


///// static rendering starts here ....

app.get("/StaticPageName",function(req,res){
    res.sendFile(path.join(__dirname, "StaticFolder",'StaticPage.html'));
})







////react part

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,  'frontend','build')));
    app.get("*", (req, res) => {
          res.sendFile(path.join(__dirname,  'frontend','build','index.html'));
    });
}



///// DB and server setup
mongoose.Promise=global.Promise;


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)
    }
    else
    console.log("connected to db")
})



app.listen(process.env.PORT||4000, () => {
  console.log("Server is listening on port: 4000");
});


