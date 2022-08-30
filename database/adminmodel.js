const mongoose=require('mongoose');
const adminSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const admin=new mongoose.model("admin",adminSchema);
module.exports=admin;