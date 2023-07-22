import React, { useState } from "react";
import style from "./../style/ComponentElement/login.module.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

let obj ={data:""}

const Login = () => {
  const [Intvalue, setIntvalue] = useState(obj);
  const [flag, setFlag] = useState(false);

  const handleonChange = (e) => {
    const { name, value } = e.target;
    // setFormstate({ ...formstate, [name]: value });
    setIntvalue((val)=>{
      let newVal = val.data+value;
      console.log("valData::::",val.data)
      if(newVal.length===1&&Intvalue.data.length===1)
      {
        setFlag(()=>true)
      }
      else{
        setFlag(()=>false)
      }
      return {...val,[name]:value}
    });
  
  };

  return (
    <Box color="black" className={style.login}>
      <Heading fontSize={"1.8rem"} p="0rem 0rem 0.5rem" lineHeight={"1.35rem"} className={style.mainHead} as="h4">Login to ZEE5</Heading>
      <Text w="90%" fontWeight="500" textAlign="center" className={style.subhead}>
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
      <Box className={style.input}>
        <Input
          value={Intvalue.data}
          onChange={handleonChange}
          name="data"
          onClick={(e)=>{console.log("Input::",e)}}
          border={flag?"1px solid red":"1px solid black"}
          outline="none"
          transition="none"
          focusBorderColor={flag?"red":"black"}
          placeholder="Enter email or mobile number"
        />
        <Text visibility={flag?"visible":"hidden"} textAlign={'left'} color="red" fontSize={'0.75rem'}>Enter Email ID OR Mobile Number</Text>
      </Box>
      <Box>
        <button className={style.button}>Login</button>
      </Box>
      <Text>
        New to ZEE5 ? <span>Register</span>
      </Text>
    </Box>
  );
};

export default Login;
