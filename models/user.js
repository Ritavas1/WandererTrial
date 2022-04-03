const mongoose = require('mongoose')
// const { string } = require('prop-types')  // for mac users only

const newUserSchema = new mongoose.Schema({
     uname:String,
     pwd:String,
     mail:String,
     phone:Number,
     packages:String
})

module.exports = mongoose.model('Users',newUserSchema)