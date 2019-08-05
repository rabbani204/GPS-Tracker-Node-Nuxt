var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var routeSchema=new Schema({
  title: {type:String, required:true}
});

module.exports=mongoose.model('Route',routeSchema);