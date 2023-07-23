import React, { useState } from "react";
import style from "./../style/ComponentElement/login.module.css";
import codes from "country-calling-code";

import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";

let obj = { data: "" };

const Login = () => {
  const [Intvalue, setIntvalue] = useState(obj);
  const [flag, setFlag] = useState(false);
  const [phoneCode, setPhoneCode] = useState(91);
  const [isNumber, setIsNumber] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isShowMobileError, setIsShowMobileError] = useState(false);

  const handleonChange = (e) => {
    const { name, value } = e.target;
   
    setIntvalue((val) => {

      let newVal = val.data + value;

      if ((newVal * 1) / 1 === newVal * 1) {
        setIsNumber(() => true);;
        setDropDown(()=>true);
      } else {
        setIsNumber(() => false);
        setDropDown(()=>false);
      }
     console.log("value:",value,+value>=0)

      if(value&&+value>=0)
      {
        setDropDown(()=>true)
        if(value.length<10 || value.length>10)
        {
           setIsShowMobileError(()=>true);
           setFlag(() => false);
        }
        else{
           setIsShowMobileError(()=>false);
           setIsNumber(()=>true);
           setFlag(() => false);
        }
      }
      else{
        setDropDown(()=>false);
        setIsNumber(() => false);
        if (newVal.length === 1 && Intvalue.data.length === 1 ) {
          setFlag(() => true);
          setIsShowMobileError(()=>false);
         
        } else {
          setFlag(() => false);
          setIsShowMobileError(()=>false);
        }
      }
     
      return { ...val, [name]: value };
    });
  };

  return (
    <Box className={style.login}>
      {/* {
     
      codes.forEach((el)=>{console.log(el.countryCodes[0])})
    } */}

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
        w="90%"
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
        className={style.input}
      >
        <Text display={isNumber?"block":"none"} p="0.5rem">{ phoneCode }</Text>
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
          borderRadius={"5px"}
          pos="absolute"
          top="3.8rem"
          left="-0.1rem"
        >
          {codes.map((el, i) => (
            <Text onClick={(e)=>setPhoneCode(()=>e.target.textContent)} className={style.options} key={i}>
              {el.countryCodes[0]}
            </Text>
          ))}
        </Box>
      )}
      </Flex>
      {
         isShowMobileError&&<Text
        w="80%"
        m="auto"
        textAlign={"left"}
        color="red"
        fontSize={"0.75rem"}
      >
        Incorret Mobile Number
      </Text>
      }
      <Text
        visibility={flag ? "visible" : "hidden"}
        w="80%"
        m="auto"
        textAlign={"left"}
        color="red"
        fontSize={"0.75rem"}
      >
        Enter Email ID OR Mobile Number
      </Text>
      
      <Box>
        <button disabled="disabled" className={style.button}>
          Login
        </button>
      </Box>

      <Text>
        New to ZEE5 ? <span>Register</span>
      </Text>
    </Box>
  );
};

export default Login;
