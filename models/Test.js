var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId;

var TestSchema = new mongoose.Schema({
  title : {type:String, required: true} ,
  description:{type : String},
  courseId:{type: ObjectId, required:true}
},{
  timestamps : true
})
module.exports = mongoose.model('Test', TestSchema)