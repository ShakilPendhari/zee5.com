// for google auth
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { UserEmailModel } = require("../Model/user.model.email");
require("dotenv").config();
const bcrypt = require("bcrypt");
const generateOTP = require("../util/otpGenerator");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.BACKEND_CALLBACK_URL_GOOGLE,
    },
    async function (accessToken, refreshToken, profile, done) {
      let otp = generateOTP() + "";

      let email = profile["_json"].email;

      let saltRound = Number(process.env.SALTROUND);

      bcrypt.hash(otp, saltRound, async function (err, hash) {
        // UpdateElement in DB

        if (hash) {

          let isUserExist = await UserEmailModel.find({email});
          // console.log(isUserExist)

          if(isUserExist.length)
          {

            await UserEmailModel.findOneAndUpdate(
              { email: email },
              {
                otp: hash,
                createAt: Number(Date.now()),
                expireAt: Number(Date.now()) + 1000 * 60 * 30,
              }
            );
            return done(null, isUserExist[0]);
          }
          else{

            let user = UserEmailModel({
              email: email,
              otp: hash,
              createAt: Number(Date.now()),
              expireAt: Number(Date.now()) + 1000 * 60 * 30,
            });
  
            await user.save();
  
            return done(null, profile);
          }

        }
      });
    }
  )
);

module.exports = passport;
