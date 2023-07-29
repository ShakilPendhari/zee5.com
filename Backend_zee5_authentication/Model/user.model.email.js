const mongoose = require("mongoose");

const userEmailSchema = mongoose.Schema({
    email:{type:String,required:true},
    otp:Number
},{
    versionKey:false
});

const UserEmailModel = mongoose.model("emailauth",userEmailSchema);

module.exports = {
    UserEmailModel
}