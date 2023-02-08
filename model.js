const mongoose = require("mongoose");
const studentShema = new mongoose.Schema({

name:{
    type:String,
    required:true

},
Department:{
    type:String,
    // required:[true, "required"]

} ,
 Branch: 
 {
    type:String,
    // required:true
 },
  Sem:{ type:String,
    // required:true

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
  Lt:{type :String
    // required:true} 
  },
  Ld: {
    type:String,
    // required:true
  },
   Rd:{
    type:String,
    // required:true
   } ,
   Rt:
   {
        type:String,
    // required:true

   },
   Add:{
    type:String,
    // required:true
   },
    Pur:{
        type:String,
        // required:true
    },
    Permitted:{
      type:String,
      default:"Not Permitted"
    },
    Allowed:{
      type:String,
      default:"Not Allowed"
    },
    return:{
      type:String,
      default:"No"
    }
   
});
const model= new mongoose.model("model" ,studentShema);

module.exports =model ;
