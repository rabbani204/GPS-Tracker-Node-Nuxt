
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schedulSchema=new Schema({
  from: {type:String, required:true},
  to: {type:String, required:true},
  time: {type:String, required:true}, 
  busname: {type:String, required:true}
});
module.exports=mongoose.model('Schedul',schedulSchema);