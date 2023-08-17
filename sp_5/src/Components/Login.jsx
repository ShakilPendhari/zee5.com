import React, { useState } from "react";
import style from "./../style/ComponentElement/login.module.css";
import { Box, useToast } from "@chakra-ui/react";
import Icons from "./auth/Icons";
import TopSection from "./auth/TopSection";
import Bottom from "./auth/Bottom";
import Inputsection from "./auth/Inputsection";
import { login } from "../Redux/Auth/auth.api";
import { useNavigate } from "react-router-dom";

let obj = { data: "" };

const Login = () => {
  const [Intvalue, setIntvalue] = useState(obj);
  const [flag, setFlag] = useState(false);
  const [phoneCode, setPhoneCode] = useState(91);
  const [isNumber, setIsNumber] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isShowMobileError, setIsShowMobileError] = useState(false);
  const [isbtndisabled, setisbtndisabled] = useState(true);
  const navigate = useNavigate();
  const toast = useToast();

  const handleonChange = (e) => {
    const { name, value } = e.target;

    setIntvalue((val) => {
      let newVal = val.data + value;

      // check isNumber or not
      if (+value >= 0) {
        setIsNumber(() => true);
      } else {
        setIsNumber(() => false);
      }

      if (value && +value >= 0) {
        setFlag(() => false);
        if (value.length < 10 || value.length > 10) {
          setIsShowMobileError(() => true);
          setisbtndisabled(() => true);
        } else {
          setIsShowMobileError(() => false);
          setIsNumber(() => true);
          setisbtndisabled(() => false);
        }
      } else {
        setIsNumber(() => false);
        setIsShowMobileError(() => false);
        if (newVal.length === 1 && Intvalue.data.length === 1) {
          setFlag(() => true);
          setisbtndisabled(() => true);
        } else {
          setFlag(() => false);
          let checkAtTheRateSign = value.trim().split("@");
          if (checkAtTheRateSign.length === 2) {
            let g = checkAtTheRateSign[1];
            g = g.trim().split(".");
            if (
              g[0] &&
              g[0].length >= 1 &&
              g[1] &&
              g[1].length >= 2 &&
              g[1].length <= 4
            ) {
              if (value.length > 1) {
                setisbtndisabled(() => false);
              }
            } else {
              setisbtndisabled(() => true);
            }
          } else {
            setisbtndisabled(() => true);
          }
        }
      }

      return { ...val, [name]: value };
    });
  };

  const handleDropdown = () => {
    setDropDown((menu) => !menu);
  };

  const handleMouseLeave = () => {
    setDropDown(() => false);
  };

  const handleSubmit = () => {
    let cred = +Intvalue.data;
    let number = Number(cred);
     if(number%1===0)
     {
       login({mobileNo:`+${phoneCode}${Intvalue.data}`},navigate,toast);
       localStorage.setItem("sp5-Mobile",JSON.stringify({mobileNo:`+${phoneCode}${Intvalue.data}`,time:new Date().getTime()}));
      //  navigate("/verify-mobileNo")
     }
     else{
       login({email:Intvalue.data},navigate,toast);
       localStorage.setItem("sp5-Email",JSON.stringify({email:Intvalue.data,time:new Date().getTime()}));
      //  navigate("/verify-email")
     }
    console.log("hello this is input value", Intvalue);
  };

  return (
    <Box className={style.login} onMouseLeave={handleMouseLeave}>

      {/* Heading and Text */}
      <TopSection heading="Login to ZEE5" text="Login to continue enjoying uninterrupted video and personalised experience." />

      {/* Icon section */}
      <Icons />

      {/* Input section */}
      <Inputsection
        flag={flag}
        handleDropdown={handleDropdown}
        isNumber={isNumber}
        phoneCode={phoneCode}
        dropDown={dropDown}
        Intvalue={Intvalue}
        handleonChange={handleonChange}
        setPhoneCode={setPhoneCode}
        setDropDown={setDropDown}
        isShowMobileError={isShowMobileError}
      />

      <Bottom isbtndisabled={isbtndisabled} handleSubmit={handleSubmit} auth="Login" toggle="Register" info="New to ZEE5 ?" />

    </Box>
  );
};

export default Login;
