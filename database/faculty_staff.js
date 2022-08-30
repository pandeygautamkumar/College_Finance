const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    middlename:{
        type:String,
    },
    lastname:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    doj:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    accountno:{
        type:Number,
        required:true,
        unique:true
    },
    ifsccode:{
        type:String,
        required:true
    },
    bankname:{
        type:String,
        required:true
    },
    branchaddress:{
        type:String,
        required:true
    },
    basicsalary:{
        type:Number,
        required:true
    },
    ta:{
        type:Number,
        required:true
    },
    da:{
        type:Number,
        required:true
    },
    hra:{
        type:Number,
        required:true
    },
    Tax:{
        type:Number,
        required:true
    },
    totalsalary:{
        type:Number,
        required:true
    },
    netsalary:{
        type:Number,
        required:true
    },
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

const Register=new mongoose.model("Employee",employeeSchema);
module.exports=Register;