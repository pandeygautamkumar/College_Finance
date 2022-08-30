const mongoose=require('mongoose');
require('./adminmodel');
require('./faculty_staff');
//mongodb+srv://Gautam123:8ebRgpk0r4gYjH3A@bookshop.fay7uyu.mongodb.net/MIS?retryWrites=true&w=majority
//"mongodb://localhost:27017/MIS"
mongoose.connect(`mongodb://localhost:27017/MIS`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((error)=>{
    console.log(`Connection is Not Establish`);
});