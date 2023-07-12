const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    mobileNo:{type:Number,required:true}
},{
    versionKey:false
});

const UserModel = mongoose.model("auth",userSchema);

module.exports = {
    UserModel
}