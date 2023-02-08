const mongoose = require("mongoose");
const rschema= new mongoose.Schema({
    sname:{
      type:String,
      require:true
      },
      sEmail:{
       type:String,
       require:true
      } ,
      sRoll:{
       type:String,
       require:true
      } ,
      spassword:{
       type:String,
       require:true
      } ,
      scpassword:{
       type:String,
       require:true
      } 
   });
   const registration= new mongoose.model("registration" ,rschema);
   module.exports=registration;