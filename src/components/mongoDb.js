
const mongoose  = require("mongoose")

mongoose.connect("mongodb://localhost:27017//StudentDb")
.then(() =>{
  console.log("connect")
   
})
.catch(() =>{
  console.log("failed")
})


const newSchema = new mongoose.Schema({
   msg:{
     type:String,
     require:true
   }
})

const collection = mongoose.model("userdata", newSchema);


module.exports =  collection
