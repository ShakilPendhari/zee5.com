import React, { useState } from "react";
import style from "./../style/ComponentElement/login.module.css";
import codes from "country-calling-code";

import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";


let loginButtonStyleAllow = {cursor:"pointer",opacity:"1",fontWeight:"700",letterSpacing:"0.04rem",color:"#FFFFFF"}
let loginButtonStyleDontAllow = {cursor:"not-allowed",opacity:"0.5",fontWeight:"700",letterSpacing:"0.04rem",color:"#FFFFFF80"}

let obj = { data: "" };

const Login = () => {
  const [Intvalue, setIntvalue] = useState(obj);
  const [flag, setFlag] = useState(false);
  const [phoneCode, setPhoneCode] = useState(91);
  const [isNumber, setIsNumber] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isShowMobileError, setIsShowMobileError] = useState(false);
  const [isbtndisabled, setisbtndisabled] = useState(true);

  const handleonChange = (e) => {
    const { name, value } = e.target;
  
    setIntvalue((val) => {
      let newVal = val.data + value;

      // check isNumber or not
      if (+value>=0) {
        setIsNumber(() => true);;
      } else {
        setIsNumber(() => false);
      }

     
        if(value&&+value>=0)
        {
          setFlag(() => false);
          if(value.length<10 || value.length>10)
          {
             setIsShowMobileError(()=>true);
             setisbtndisabled(()=>true);
             
          }
          else{
             setIsShowMobileError(()=>false);
             setIsNumber(()=>true);
             setisbtndisabled(()=>false);
          }
        }
        else{
          setIsNumber(() => false);
          setIsShowMobileError(()=>false);
          if (newVal.length === 1 && Intvalue.data.length === 1 ) {
            setFlag(() => true);
            setisbtndisabled(()=>true)
           
          } else {
            setFlag(() => false);
              let checkAtTheRateSign = value.trim().split("@");
              if(checkAtTheRateSign.length===2)
              {
                let g = checkAtTheRateSign[1];
                console.log("gg:",g)
                g = g.trim().split(".");
                console.log("gg:",g)
                if((g[0]&&g[0].length>=1)&&(g[1]&&(g[1].length>=2&&g[1].length<=4)))
                {
                  console.log(value)
                  if(value.length>1)
                  {
                    setisbtndisabled(()=>false)
                  }
                }
                else{
                  setisbtndisabled(()=>true)
                }
              }
              else{
                setisbtndisabled(()=>true)
              }
          }
        }

      return { ...val, [name]: value };
    });
  };

  const handleDropdown = ()=>{
       setDropDown((menu)=>!menu);
  }

  const handleMouseLeave = ()=>{
      setDropDown(()=>false)
  }

  const handleSubmit = ()=>{
    console.log("hello this is input value",Intvalue)
  }

 
  return (
    <Box className={style.login} onMouseLeave={handleMouseLeave}>
      <Heading
        fontSize={"1.8rem"}
        p="0rem 0rem 0.5rem"
        lineHeight={"1.35rem"}
        className={style.mainHead}
        as="h4"
      >
        Login to ZEE5
      </Heading>
      <Text
        w="82%"
        fontWeight="500"
        textAlign="center"
        className={style.subhead}
      >
        Login to continue enjoying uninterrupted video and personalised
        experience.
      </Text>
      <Flex
        height={"2rem"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className={style.icons}
      >
        <Image src="./SocialMediaIcon/zee5GoogleIcon.svg" alt="Google Icon" />
        <Image src="./SocialMediaIcon/zee5FaceBookIcon.svg" alt="Apple Icon" />
        <Image src="./SocialMediaIcon/zee5Twittericon.svg" alt="Apple Icon" />
        <Image src="./SocialMediaIcon/zee5AppleIcon.svg" alt="Apple Icon" />
      </Flex>

      <Flex className={style.optionOr}>
        <Box>or</Box>
      </Flex>
      <Flex
        pos="relative"
        outline="none"
        border={flag ? "1px solid red" : "1px solid black"}
        borderRadius="5px"
        alignItems="center"
        className={style.input}
      >
        <Flex pos="relative" onClick={handleDropdown} display={isNumber?"flex":"none"} justifyContent="center" alignItems="center">
          <Text p="0.5rem">{ phoneCode }</Text>
          <ChevronUpIcon width="2rem" height="2rem" transition="transform 0.5s ease-in 0.1s" transform={(dropDown)?"rotate(0deg)":"rotate(180deg)"}  />
        </Flex>
        <Input
          value={Intvalue.data}
          onChange={handleonChange}
          name="data"
          outline="none"
          transition="none"
          placeholder="Enter email or mobile number"
          border="none"
          focusBorderColor="tranparent"
        />
        {dropDown && (
        <Box
          height="11.487rem"
          overflowY="scroll"
          border="1px solid black"
          zIndex="100"
          className="phoneNumber"
          bgColor="white"
          borderRadius={"3px"}
          pos="absolute"
          top="3.8rem"
          left="-0.1rem"
        >
          {codes.map((el, i) => (
            <Text onClick={(e)=>{setPhoneCode(()=>e.target.textContent); setDropDown(()=>false)}} className={style.options} key={i}>
              {el.countryCodes[0]}
            </Text>
          ))}
        </Box>
      )}


      {/* Error section  */}

      {
        isShowMobileError&&<Text
         pos="absolute"
         bottom="-1.17rem"
         w="80%"
         m="auto"
         textAlign={"left"}
         color="red"
         fontSize={"0.70rem"}
         letterSpacing="0.02rem"
         fontWeight="500"
      >
        Incorret Mobile Number
      </Text>
      }
      <Text
        visibility={flag ? "visible" : "hidden"}
         pos="absolute"
         bottom="-1.17rem"
         w="80%"
         m="auto"
         textAlign={"left"}
         color="red"
         fontSize={"0.70rem"}
         letterSpacing="0.02rem"
         fontWeight="500"
      >
        Enter Email ID OR Mobile Number
      </Text>
      </Flex>
      <Box>
        <button style={isbtndisabled?loginButtonStyleDontAllow:loginButtonStyleAllow} onClick={handleSubmit} disabled={isbtndisabled} className={style.button}>
          Login
        </button>
      </Box>

      <Text cursor="pointer">
       <span style={{color:"#000000"}} >New to ZEE5 ?</span>  <span id={style.register}>Register</span>
      </Text>
    </Box>
  );
};

export default Login;
