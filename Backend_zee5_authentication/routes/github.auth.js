// for github auth
const GitHubStrategy = require('passport-github2').Strategy;
const GitHub_passport = require("passport");
const { UserEmailModel } = require("../Model/user.model.email");
require("dotenv").config();
const bcrypt = require("bcrypt");
const generateOTP = require("../util/otpGenerator");

GitHub_passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.BACKEND_CALLBACK_URL_GITHUB,
      scope: ['user:email'],
    },
    function (accessToken, refreshToken, profile, done) {
      let otp = generateOTP() + "";

    //   let email = profile["_json"].email;   // check here also

      let email = profile.emails[0].value;
      
      
    //   console.log('Profile:',profile.emails);
      

      let saltRound = Number(process.env.SALTROUND);

      bcrypt.hash(otp, saltRound, async function (err, hash) {
        // UpdateElement in DB

        if (hash) {

          let isUserExist = await UserEmailModel.find({email});
        //   console.log(isUserExist)

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

module.exports = GitHub_passport;









// const passport = require("passport");
// const GitHubStrategy = require('passport-github').Strategy;
// require("dotenv").config();
// passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/github/callback",
//     profileFields: ['email']
//   },
//  async function(accessToken, refreshToken, profile, done) {
//    const user = profile._json;
//    const {email,name,avatar_url} = user;
//    console.log(user);
//    return done(null,user)
//  }
// ));

// module.exports = passport;
