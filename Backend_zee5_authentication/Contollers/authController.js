const Mailgen = require("mailgen");
const { UserEmailModel } = require("../Model/user.model.email");
const { UserMobileModel } = require("../Model/user.model.mobile");

const nodemailer = require("nodemailer");

require("dotenv").config();



let AuthDataController = async(req,res)=>{
    try{
        let query = req.query
        let users = await UserEmailModel.find(query)
       res.send({"users":users})
    }
    catch(err){
        res.send({"msg":err})
    }
}



let registerContoller = async(req,res)=>{

    try{
        const {email,mobileNo} = req.body;
        console.log(req.body,email);
        

        if(email)
        {
            let isUserExist = await UserEmailModel.findOne({ email : email});
            // console.log(isUserExist,"hello")
            
            if (isUserExist && isUserExist.email)
            {
                return res.status(409).json({
                    msg:"Email already exists"
                })
            }
           
                let user = new UserEmailModel({email});
                await user.save();
                res.status(201).send("Congrats user has been registered")
        }
        else if(mobileNo)
        {
            let isUserExist = await UserMobileModel.findOne({mobileNo});
            console.log(isUserExist,"hello")
            
            if (isUserExist && isUserExist.mobileNo)
            {
                return res.status(409).json({
                    msg:"Mobile Number already exists"
                })
            }
           
                let user = new UserMobileModel({mobileNo});
                await user.save();
                res.status(201).send("Congrats user has been registered")
        }
        else if(!email && !mobileNo){
            res.send({error:"Please Provide Email or Mobile Number"})
        }
    }
    catch(err){
        res.send({"msg":"User already exist","Error":err.message})
    }
}



let loginController = async(req,res)=>{
    let {email,mobileNo} = req.body;
   
   try{
      if(email)
      {
        let isUserExist = await UserEmailModel.find({email});
        if(isUserExist.length>0)
        {
            let config = {
                service : "gmail",
                auth:{
                    user:process.env.GMAIL,
                    pass:process.env.PASSWORD
                }
            }
         
        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
            theme : "default",
            product : {
                name : "SP5",
                link: '#',  /* Provide a link of your project */
            }
        });


        function generateOTP() {
            // Generate a random number between 1000 and 9999 (inclusive)
            const otp = Math.floor(Math.random() * 9000) + 1000;
            return otp;
          }
          let OTP = generateOTP();


        let response = {
            body :{
                intro:`<br><br>To verify your email address, please use the following One Time Password(OTP) <b style="font-size:'2rem'">${OTP} </b> please do not share your OTP with anybody.<br><br>`,
                outro : "This email address will be used to share periodic updates regarding new TV Shows, Movies, Originals that are available on ZEE5.<br><br><h1>Thank You</h1><h1>Team SP5</h1>",
                signature: false,
                greeting: false
            }
        }

        let mail = MailGenerator.generate(response);

        let message = {
            from : process.env.GMAIL,
            to: email,
            subject : `${OTP} is your SP5 verification OTP`,
            html: mail
        }

        transporter.sendMail(message)
        .then(()=>{
            return res.status(201).json({
                msg : "You should reciive an email"
            })
        })
        .catch(error=>{
            return res.status(500).json({error})
        })
           
        }
        else{
            res.send("You are not registed!")
        }
      }
    
      
   }
   catch(err){
     res.send({"msg":"Login failed!"})
   }
}



module.exports = {
    AuthDataController, registerContoller, loginController
}