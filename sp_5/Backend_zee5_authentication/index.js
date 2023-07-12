const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const {connection} = require("./db");
const { UserRouter } = require("./routes/user.routes");
const authenticate = require("./Middleware/auth.middleware");

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome to home page")
});

app.use("/auth",UserRouter)
app.use(authenticate)
app.use("/hello",(req,res)=>{
    res.send("hello this side")
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`Db is running at port ${process.env.port}`);
    }
    catch(err){
        console.log("Db is Cannot connected");
    }
})

