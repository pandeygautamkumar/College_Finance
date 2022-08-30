const bodyParser = require('body-parser');
const express=require('express');
const mongoose=require('mongoose');
const ejs=require('ejs');
const app=express();
const path=require('path');
require("./database/conn")
const employee=require("./database/faculty_staff");
const Admin=require("./database/adminmodel");
const router=express.Router();
const PORT=8080;
//////////////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const static_path=path.join(__dirname,"");
app.use(express.static(static_path));
app.set("view engine","ejs");

//////////////////////////////////////////////

app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    res.render("login");
})

app.get("/adminlogin",function(req,res){
    res.render("adminlogin");
})
app.get("/adminlogin/adminHome",function(req,res){
    res.render("adminHome");
})

app.get("/adminlogin/adminHome/addFaculty",function(req,res){
    res.render("addFaculty");
})

app.get("/adminlogin/adminHome/addStaff",function(req,res){
    res.render("addStaff");
})


app.get("/adminlogin/adminHome/show",async function(req,res){ 
    const emp=await employee.find({});
    res.render("Show",{Emp:emp});
});
//////////////////////////////////////////////////////////////////
app.post("/adminlogin",async(req,res)=>{
    try{
        const Userid=req.body.userid;
        const Pass=req.body.password;
        const User=await Admin.findOne({userid:Userid});
        if(User.password===Pass){
            res.render("adminHome");
        }
        else{
            res.send("Password is incorrect.");
        }
    }catch(error){
        res.status(400).send("Userid not Exist.");
    }
});


app.post("/addFaculty",async(req,res)=>{
    var bs=req.body.basicsalary;
    var ta=req.body.ta;
    var da=req.body.da;
    var hra=req.body.hra;

    var Ta=(bs*ta)/100;
    var Da=(bs*da)/100;
    var Hra=(bs*hra)/100;
    var T_salary=Number(bs)+Number(Ta)+Number(Da)+Number(Hra);
    var tax=0;
    if(T_salary>300000){
         tax=(T_salary*18)/100;
    }
    var NetSalary=Number(T_salary)-Number(tax);

    try{
        const registerEmployee=new employee({
            firstname:req.body.firstname,
            middlename:req.body.middlename,
            lastname:req.body.lastname,
            mobilenumber:req.body.mobilenumber,
            email:req.body.email,
            gender:req.body.gender,
            designation:req.body.designation,
            dob:req.body.dob,
            doj:req.body.doj,
            address:req.body.address,
            accountno:req.body.accountno,
            ifsccode:req.body.ifsccode,
            bankname:req.body.bankname,
            branchaddress:req.body.branchaddress,
            basicsalary:bs,
            ta:Ta,
            da:Da,
            hra:Hra,
            Tax:tax,
            totalsalary:T_salary,
            netsalary:NetSalary,
            userid:req.body.userid,
            password:req.body.password
       })
       const tmp=await registerEmployee.save();
       res.status(201).render("adminHome");
    }catch(error){
        res.status(400).send("error");
    }
});

app.post("/stafflogin",async(req,res)=>{
    try{
        const Userid=req.body.staffuserid;
        const Pass=req.body.staffpassword;
        const Staff=await employee.findOne({userid:Userid});
        if(Staff.password===Pass){
            res.render("staffHome",{faculty:Staff});
        }
        else{
            res.send("Password is incorrect.");
        }
    }catch(error){
        res.status(400).send("Userid Not Exist.");
    }
});

/////////////////////////////////////////////
//app.listen(process.env.PORT,()=>{
  //  console.log(`server is running at port no: ${process.env.PORT}`);
//})
app.listen(PORT,()=>{
    console.log(`server is running at port no:${PORT}`);
})