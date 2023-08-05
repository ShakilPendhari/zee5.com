const Mailgen = require("mailgen");
const { UserEmailModel } = require("../Model/user.model.email");
// const crypto = require("crypto");
const { UserMobileModel } = require("../Model/user.model.mobile");
const nodemailer = require("nodemailer");
require("dotenv").config();
const client = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")


let AuthDataController = async (req, res) => {
  try {
    let query = req.query;
    let users = await UserEmailModel.find(query);
    res.send({ users: users });
  } catch (err) {
    res.send({ msg: err });
  }
};


////    Register controller    ////

let registerContoller = async (req, res) => {
  function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const otp = Math.floor(Math.random() * 9000) + 1000;
    return otp;
  }
  try {
    const { email, mobileNo } = req.body;
    console.log(req.body,email);

    if (email) {
      let isUserExist = await UserEmailModel.findOne({ email: email });
      // console.log(isUserExist,"hello")

      if (isUserExist && isUserExist.email) {
        return res.status(409).json({
          msg: "Email already exists",
        });
      }

      let otp = generateOTP() + ""
      let saltRound = Number(process.env.SALTROUND);

      bcrypt.hash(otp, saltRound , async function(err, hash) {
         if(err)
         {
          console.log("Error:",err);
          res.send({"error":err})
         }

       
        //  Save user Credential in MongoDB  //

         let user = new UserEmailModel({ email:email, otp:hash });
         await user.save();


        // Create token //
   
         token = jwt.sign({email:user.email}, process.env.SECRETEKEY,{ expiresIn: 60*30 });
         // console.log(token)
         res.status(201).send({"token":token,"hash":hash,"msg":"Congrats user has been registered","Token Expires In":"30 minutes"});
         
    });
     
    } 
    else if (mobileNo) {

      let isUserExist = await UserMobileModel.findOne({ mobileNo });
      console.log(isUserExist, "hello");

      if (isUserExist && isUserExist.mobileNo) {
        return res.status(409).json({
          msg: "Mobile Number already exists",
        });
      }

      let user = new UserMobileModel({ mobileNo });
      await user.save();
      res.status(201).send("Congrats user has been registered");
    } else if (!email && !mobileNo) {
      res.send({ error: "Please Provide Email or Mobile Number" });
    }
  } catch (err) {
    res.send({ msg: "User already exist", Error: err.message });
  }
};



////    Login controller    ////

let loginController = async (req, res) => {
  let { email, mobileNo } = req.body;
  function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const otp = Math.floor(Math.random() * 9000) + 1000;
    return otp;
  }

  try {    

    if (email) {

      ////    Login with Gmail    ////

      let isUserExist = await UserEmailModel.find({ email });
      // console.log("isUserExits:",isUserExist);
      // return
      if (isUserExist.length > 0) {
        let config = {
          service: "gmail",
          auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
          },
        };

        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
          theme: "default",
          product: {
            name: "SP5",
            link: "#" /* Provide a link of your project */,
          },
        });

        let OTP = generateOTP();

        // let userModel = UserEmailModel.findByIdAndUpdate(isUserExist._id, { otp: 'new otp' });
        // console.log("userModel:",userModel)
        // return

        let response = {
          body: {
            intro: `<br><br>To verify your email address, please use the following One Time Password(OTP) <b style="font-size:'2rem'">${OTP} </b> please do not share your OTP with anybody.<br><br>`,
            outro:
              "This email address will be used to share periodic updates regarding new TV Shows, Movies, Originals that are available on ZEE5.<br><br><h1>Thank You</h1><h1>Team SP5</h1>",
            signature: false,
            greeting: false,
          },
        };

        let mail = MailGenerator.generate(response);

        let message = {
          from: process.env.GMAIL,
          to: email,
          subject: `${OTP} is your SP5 verification OTP`,
          html: mail,
        };

        //  Sending Gmail to your gmail account  //
        transporter
          .sendMail(message)
          .then(() => {
            return res.status(201).json({
              msg: "You should receive an email",
            });
          })
          .catch((error) => {
            return res.status(500).json({ error });
          });
      } else {
        res.send("You are not registed!");
      }
    } 
    else if (mobileNo) {

     ////    Login With Mobile Number    ////
    
      let OTP = generateOTP();

      let isUserExist = await UserMobileModel.find({ mobileNo });
      console.log("lets check isUserExist:",isUserExist)
      if (isUserExist.length > 0) {
        console.log("MobileNoPlus:","+"+isUserExist[0].mobileNo)
        //  const ttl = 30*60*1000 // half hour in milliseconds
        //  let expires = Date.now();
        //  expires += ttl;
        //  const data = `${phone}.${OTP}.${expires}`
        //  const fullHash = crypto.createHmac("sha256",process.env.SMSKEY).update(data).digest("hex");
        //  console.log("FullHash",fullHash)
        client.messages
        .create({
          body: `Your OTP is : ${OTP}.@SP5.vercel ${OTP} - SP5`,
          to: `+${isUserExist[0].mobileNo}`,
          from: process.env.PHONENUMBER,
        })
        .then((message) => {
          console.log(message);
          return res.status(201).json({ msg: message });
        })
        .catch((error) => {
          // You can implement your fallback code here
          return res.status(500).json({ err: error });
        });
      }
      else{
        res.status(500).json({err:"User need to register"});
      }
    }
  } catch (err) {
    res.send({ msg: "Login failed!","Error":err });
  }
};

module.exports = {
  AuthDataController,
  registerContoller,
  loginController,
};
