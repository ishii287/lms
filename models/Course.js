var mongoose = require('mongoose')
var CourseSchema = new mongoose.Schema({
  title : {type:String, required: true} ,
  description:{type : String},
},{
  timestamps : true
})
module.exports = mongoose.model('Course', CourseSchema)