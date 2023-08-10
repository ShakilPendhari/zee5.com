const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const { connection } = require("./db");
const { UserRouter } = require("./routes/user.routes");
// const authenticate = require("./Middleware/auth.middleware");
const passport = require("./routes/google.auth.js");
const GitHub_passport = require("./routes/github.auth.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());



let callBackUrlFrontSide = process.env.FRONTENDURL || "http://localhost:3000"

// Google Auth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${callBackUrlFrontSide}/login`,
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    // let token = jwt_decode(req.user);
    // let token = req.user;
    // console.log("userInfo:::", token);
    res.redirect(`${callBackUrlFrontSide}`);
  }
);


// Github Auth

app.get(
  "/auth/github",
  GitHub_passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  GitHub_passport.authenticate("github", {
    failureRedirect: `${callBackUrlFrontSide}/login`,
    session: false,
  }),
  function (req, res) {
    let userData = req.user;
    // console.log("userInfo:::", userData);
    res.redirect(`${callBackUrlFrontSide}`);
  }
);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/auth", UserRouter);

// app.use(authenticate)
app.use("/hello", (req, res) => {
  res.send("hello this side");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`Db is running at port ${process.env.port}`);
  } catch (err) {
    console.log("Db is Cannot connected");
  }
});
