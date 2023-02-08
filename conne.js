const mongoose= require("mongoose");
const dotenv =require("dotenv")
mongoose.connect("mongodb+srv://rishuraj2401:Rishu%402002@cluster0.twrql.mongodb.net/mydata" ,
{useNewUrlParser:true , useUnifiedTopology:true,autoIndex:true}
).then(()=>{
    console.log("conection successfulllll");
}).catch((e)=>{
    console.log("error in connection" + e);
})
// module.exports=mongoose;
