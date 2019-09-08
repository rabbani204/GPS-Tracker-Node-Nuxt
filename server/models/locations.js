var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var locationSchema=new Schema({
  busid: {type:String, required:true},
  location: {type:String, required:true},
});
module.exports=mongoose.model('locations',locationSchema);