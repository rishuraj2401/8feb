const mongoose = require("mongoose");
const cschema= new mongoose.Schema({
      cEmail:{
       type:String,
       require:true
      } ,
      cpassword:{
       type:String,
       require:true
      }
   });
   const cregistration= new mongoose.model("cregistration" ,cschema);
   module.exports=cregistration;