const express = require("express");
const UserRouter = express.Router();
const {
  AuthDataController,
  registerContoller,
  loginController,
  checkOTPController,
} = require("../Contollers/authController");


// authData
UserRouter.get("/authData", AuthDataController);

// register
UserRouter.post("/register", registerContoller);

// login
UserRouter.post("/login", loginController);

// check otp
UserRouter.post("/verify/otp", checkOTPController);


module.exports = {
  UserRouter,
};
