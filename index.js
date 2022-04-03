require('./utils/db')
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const session = require('express-session')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const newUser = mongoose.model('Users')

dotenv.config()

app.use(session({
     secret:'souvik',
     saveUninitialized:true,
     resave: false
}))
const port = process.env.PORT || 4000
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({
     extended:true
}))
app.use(express.static("public"))

app.get('/',(req,res)=>{
     res.render("index",{msg:0})
})
app.get('/about',(req,res)=>{
     res.render("about",{msg:0})
})
app.get('/package',(req,res)=>{
     res.render("package",{msg:0})
})
app.get('/rajasthan',(req,res)=>{
     res.render("rajasthan",{msg:0})
})
app.get('/rajasthan_pay',(req,res)=>{
     res.render("form_Rajasthan",{msg:0})
})
app.get('/andaman',(req,res)=>{
     res.render("andaman",{msg:0})
})
app.get('/andaman_pay',(req,res)=>{
     res.render("form_Andaman",{msg:0})
})
app.get('/ap',(req,res)=>{
     res.render("ap",{msg:0})
})
app.get('/ap_pay',(req,res)=>{
     res.render("form_AP",{msg:0})
})
app.get('/chitrakote_pay',(req,res)=>{
     res.render("form_Chitrakote",{msg:0})
})
app.get('/chitrakote',(req,res)=>{
     res.render("chitrakote",{msg:0})
})
app.get('/gokarna_pay',(req,res)=>{
     res.render("form_Gokarna",{msg:0})
})
app.get('/gokarna',(req,res)=>{
     res.render("gokarna",{msg:0})
})
app.get('/contactus',(req,res)=>{
     res.render("contactus",{msg:0})
})
app.get('/coorg_pay',(req,res)=>{
     res.render("form_Coorg",{msg:0})
})
app.get('/coorg',(req,res)=>{
     res.render("coorg",{msg:0})
})
app.get('/kurseong_pay',(req,res)=>{
     res.render("form_Kurseong",{msg:0})
})
app.get('/kurseong',(req,res)=>{
     res.render("kurseong",{msg:0})
})
app.get('/pelling',(req,res)=>{
     res.render("pelling",{msg:0})
})
app.get('/pelling_pay',(req,res)=>{
     res.render("form_Pelling",{msg:0})
})
app.get('/ladakh_pay',(req,res)=>{
     res.render("form_Ladakh",{msg:0})
})
app.get('/ladakh',(req,res)=>{
     res.render("ladakh",{msg:0})
})
app.get('/takdah_pay',(req,res)=>{
     res.render("form_Takdah",{msg:0})
})
app.get('/takdah',(req,res)=>{
     res.render("takdah",{msg:0})
})
app.get('/register',(req,res)=>{
     res.render('register',{msg:0})
})

app.get('/thanks',(req,res)=>{
     res.render('thanks',{msg:0})
})
app.get('/thanks_form',(req,res)=>{
     res.render('form_thanks')
})
app.post('/register',(req,res)=>{
     const user = new newUser()
     console.log(req.body)
     user.uname = req.body.uname
     user.pwd = req.body.pwd
     user.mail = req.body.mail
     user.phone = req.body.phone
     user.packages = 'na'
     user.save((err,data)=>{
          if(!err){
               console.log("Database Saved Succesfully")
               res.render('login',{msg:1})
          }
          else
               console.log(err)    
     })
})

app.get('/login',(req,res)=>{
     res.render('login',{msg:0})
})

app.post('/login',(req,res)=>{
     const mail = req.body.mail
     const pwd = req.body.pwd
     
     qr9 = { $and : [{mail : mail}, {pwd : pwd}]}
     newUser.find(qr9).then((result) =>{
          if(result.length != 0){
               req.session.uid = mail
               req.session.save()
               res.render("index",{msg:1,uname:result.uname})
          }
          else{
               res.render('login',{msg:2,alr:'Invalid Credentials'})
          }
     }).catch((err)=>{
          console.log(err)
     })
})

app.get('/logout',(req,res)=>{
     console.log(req.session.uid)
     
     req.session.destroy()
     console.log(req.session)
     res.render("login",{msg:3})
})


app.listen(port,(req,res)=>{
     console.log(`SERVER is running at port ${port}`)
})