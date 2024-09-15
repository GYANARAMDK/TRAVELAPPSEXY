const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    "username":{type:String,require:true},
    "number":{type:Number,require:true,uniquie:true},
    "email":{type:String,require:true,uniquie:true},
    "password":{type:String,require:true}
})
const User=mongoose.model('User',UserSchema);
module.exports=User;