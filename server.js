const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const db = process.env.MONGODB_URI || "mongodb+srv://aditya:Sriganesh@3@cluster0-knzmq.mongodb.net/test"
const static_api = require("./routes/static_api");
const event_api=require("./routes/event_api");
const member_api= require("./routes/member_api");
const component_api=require("./routes/component_api");
const hardware_design_api=require("./routes/hardware_design_api");
const hardware_MES_api = require("./routes/hardware_MES_api");
const software_design_api=require("./routes/software_design_api");
const software_MES_api = require("./routes/software_MES_api");
const budget_api = require("./routes/budget_api");
const employee_api = require("./routes/employee_api");
const meeting_api = require("./routes/meeting_api");
const update_api = require("./routes/update_api");
const Admin_router=require('./routes/admin_api');


const path=require("path");

app.use("/admin",Admin_router)



console.log(db)

app.use(bodyParser.urlencoded({
    extended:false             
}))
app.use(bodyParser.json()); 








// app.set('view engine','pug');
// app.set('views', __dirname + '/views');  
// app.use('/public', express.static(__dirname + '/public'));

// app.use('/',static_api);
app.use('/event',event_api);
app.use('/member',member_api);
app.use('/component',component_api);
app.use('/hardwareDesign',hardware_design_api);
app.use('/hardwareMES',hardware_MES_api);
app.use('/softwareDesign',software_design_api);
app.use('/softwareMES',software_MES_api);
app.use('/budget',budget_api);
app.use('/employee',employee_api);
app.use('/meeting',meeting_api);
app.use('/update',update_api);


    app.use(express.static(path.join(__dirname,  'frontend','build')));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname,  'frontend','build','index.html'));
      });

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


