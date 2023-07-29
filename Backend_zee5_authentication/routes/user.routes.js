const express = require("express");
const UserRouter = express.Router();
const { AuthDataController , registerContoller, loginController } = require("../Contollers/authController");


// authData
UserRouter.get("/authData",AuthDataController)

// register
UserRouter.post("/register",registerContoller)

// login
UserRouter.post("/login", loginController)


module.exports = {
    UserRouter
}