const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

url = process.env.database_url
mongoose.connect("mongodb+srv://abcd:abcd@cluster0.n3r7f.mongodb.net/wanderers?retryWrites=true&w=majority",{
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
     console.log("Connected")
}).catch((err)=>{
     console.log(err)
})
require('../models/user')
