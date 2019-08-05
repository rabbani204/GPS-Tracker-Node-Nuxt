var mongoose=require('mongoose');
var Schema=mongoose.Schema;
     
var permissionSchema=new Schema({
//   userid: {type:String, required:true},
  routetitle: {type:String, required:true},
  useremail: {type:String, required:true}
});
   
module.exports=mongoose.model('Permission',permissionSchema);