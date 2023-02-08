const mongoose = require("mongoose");
const studentShema = new mongoose.Schema({

name:{
    type:String,
    required:true

},
Department:{
    type:String,
    required:true

} ,
 Branch: 
 {
    type:String,
    required:true
 },
  Sem:{ type:String,
    required:true

  } ,
   Roll :{
    type:String,
    required:true,
    unique :true
  },
  Room :{
    type:String,
    required:true
  } , 
  Lt:{
    // required:true} 
  },
  Ld: {
    // type:String,
    // required:true
  },
   Rd:{
    // type:String,
    // required:true
   } ,
   Rt:
   {
        // type:String,
    // required:true

   },
   Add:{
    type:String,
    // required:true
   },
    Pur :{
        type:String,
        // required:true
    }
});
const schema= new mongoose.model("schema" ,studentShema);
module.exports =schema;