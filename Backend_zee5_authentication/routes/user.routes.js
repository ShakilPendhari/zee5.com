const express = require("express");
const { UserModel } = require("../Model/user.model");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


UserRouter.get("/authData", async(req,res)=>{
    try{
        let query = req.query
        let users = await UserModel.find(query)
       res.send({"users":users})
    }
    catch(err){
        res.send({"msg":err})
    }
})

UserRouter.post("/register",async(req,res)=>{
    const {name,email,password,mobileNo} = req.body;
    if(!name || !email || !password || !mobileNo)
    {
        res.send({error:"Please fill your details"})
    }
    try{
        let user = await UserModel.findOne({ "$or": [ { email: email }, { mobileNo: mobileNo} ] });
        console.log(user,"hello")
        if (user.email || user.mobileNo)
        {
             res.send({ error: "Email or Phone number already exists" });
             return 
        }
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err)
            {
                res.send({"msg":"Something went wrong","Error":err.message})
            }
            let obj = req.body;
            let user = new UserModel({...obj,password:hash});
            await user.save();
           res.send("Congrats user has been registered")
        });
       
    }
    catch(err){
        res.send({"msg":"User already exist","Error":err.message})
    }
})


UserRouter.post("/login", async(req,res)=>{
    let {email,password} = req.body;
   try{
      let userLogin = await UserModel.find({email});
      if(userLogin.length>0)
      {
        bcrypt.compare(password, userLogin[0].password, function(err, result) {
           if(result){
                let token = jwt.sign({ userID:userLogin[0]._id }, "zee5sp", { expiresIn:"3h" });
                res.send({"msg":"Congrats!, Login successful","token":token})
           }
        });
      }
   }
   catch(err){
     res.send({"msg":"Login failed!"})
   }
})





























// UserRouter.post("/login",async(req,res)=>{
//     const {email,password} = req.body
//     try{
//          let userLogin = new UserModel.find({email});
//          if(user.length>0)
//          {
//             bcrypt.compare(password, userLogin[0].password, function(err, result) {
//                if(result){
//                    let token =  jwt.sign({ userID:userLogin[0]._id }, "zee5sp",{expiresIn:"2h"});
//                    res.send({"msg":"Congrats!, Login successful","token":token})
//                }
//                res.send({"msg":"Login failed!"})

//             });
//             //  if(user[0].password===password)
//             //  {
//             //     res.send({"msg":"Congrats!, Login successful"})
//             //  }
//          }
//     }
//     catch(err){
//         res.send({"msg":"Login failed!"})
//     }
// })

module.exports = {
    UserRouter
}