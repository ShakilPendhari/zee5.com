const mongoose = require("mongoose");

const userMobileSchema = mongoose.Schema({
    mobileNo:{type:Number,required:true},
    otp:Number
},{
    versionKey:false
});

const UserMobileModel = mongoose.model("mobileauth",userMobileSchema);

module.exports = {
    UserMobileModel
}