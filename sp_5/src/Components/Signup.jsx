import React, { useEffect, useState } from "react";
import style from "./../style/ComponentElement/login.module.css";
import { Box, Flex, useToast } from "@chakra-ui/react";
import Icons from "./auth/Icons";
import TopSection from "./auth/TopSection";
import Bottom from "./auth/Bottom";
import Inputsection from "./auth/Inputsection";
import { useNavigate } from "react-router-dom";
import { Register } from "../Redux/Auth/auth.action";
import { useDispatch, useSelector } from "react-redux";

let obj = { data: "", checkbox:false };

const Signup = () => {
  const [Intvalue, setIntvalue] = useState(obj);
  const [flag, setFlag] = useState(false);
  const [phoneCode, setPhoneCode] = useState(91);
  const [isNumber, setIsNumber] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isShowMobileError, setIsShowMobileError] = useState(false);
  const [isbtndisabled, setisbtndisabled] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading_register } = useSelector((store)=>store.auth);

  
  useEffect(()=>{
    document.title = "SP5 | Signup"
  },[])



  const handleonChange = (e) => {
    
    const { name, value, type, checked  } = e.target;

    let currentValue = type==="checkbox"?checked:value;
    setIntvalue((newInt)=>{
      newInt = {...newInt,[name]:currentValue}
      // console.log("newInt::",newInt)
      // check isNumber or not
      if (+newInt.data >= 0) {
        setIsNumber(() => true);
      } else {
        setIsNumber(() => false);
      }

      if (newInt.data && +newInt.data >= 0) {
        setFlag(() => false);
        if (newInt.data.length < 10 || newInt.data.length > 10) {
          setIsShowMobileError(() => true);
          setisbtndisabled(() => true);
        } else {
          setIsShowMobileError(() => false);
          setIsNumber(() => true);
          if(newInt.checkbox)
          {
            setisbtndisabled(() => false);
          }
          else{
            setisbtndisabled(() => true);
          }
        }
      } else {
        setIsNumber(() => false);
        setIsShowMobileError(() => false);
      
        if (newInt.data.length === 0) {
          setFlag(() => true);
          setisbtndisabled(() => true);
        } else {
          setFlag(() => false);
          let checkAtTheRateSign = newInt.data.trim().split("@");
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
              if (newInt.data.length > 0) {
                if(newInt.checkbox)
                {
                  setisbtndisabled(() => false);
                }
                else{
                  setisbtndisabled(() => true);
                }
              }
            } else {
              setisbtndisabled(() => true);
            }
          } else {
            setisbtndisabled(() => true);
          }
        }
      }
     
      return newInt
    });
  
  };

  const handleDropdown = () => {
    setDropDown((menu) => !menu);
  };

  const handleMouseLeave = () => {
    setDropDown(() => false);
  };

  const handleSubmit = () => {
    if(loading_register)
    {
      return
    }
    let cred = +Intvalue.data;
    let number = Number(cred);
     if(number%1===0)
     {
       dispatch(Register({mobileNo:`+${phoneCode}${Intvalue.data}`},navigate,toast));
     }
     else{
       dispatch(Register({email:Intvalue.data},navigate,toast));
     }
    // console.log("hello this is input value", Intvalue);
    setIntvalue(obj)
  };

  return (
    <Box className={style.login} onMouseLeave={handleMouseLeave}>

      {/* Heading and Text */}
      <TopSection heading="Create a new account" text="Create an account to continue enjoying uninterrupted video and personalised experience." />

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
        handleSubmit={handleSubmit} 
        obj = {obj}
      />
      <Flex gap="0.2rem" alignItems="flex-start" justifyContent="space-between" width="80%" m="2rem auto 0rem">
        <input onChange={handleonChange} name="checkbox" value={Intvalue.checkbox} className={style.checkBoxint} type="checkbox"/> <span className={style.checkbox}>By proceeding you agree to our <span className={style.btnColor}>Terms of Services</span> & <span className={style.btnColor}>Privacy Policy.</span></span>
      </Flex>
      <Bottom loading={loading_register} isbtndisabled={isbtndisabled} handleSubmit={handleSubmit} auth="Create Account" toggle="Login" info="Already registered?" />

    </Box>
  );
};

export default Signup;
