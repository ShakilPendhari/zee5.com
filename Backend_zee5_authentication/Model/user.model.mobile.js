const mongoose = require("mongoose");

const userMobileSchema = mongoose.Schema({
    mobileNo:{type:Number,required:true},
    otp:String,
    createAt:Number,
    expireAt:Number
},{
    versionKey:false
});

const UserMobileModel = mongoose.model("mobileauth",userMobileSchema);

module.exports = {
    UserMobileModel
}