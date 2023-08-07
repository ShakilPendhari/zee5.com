import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Flex,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";

import Bottom from "../Components/auth/Bottom";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CheckEmail, login } from "../Redux/Auth/auth.api";

let obj = {
  int1: "",
  int2: "",
  int3: "",
  int4: "",
};

const takeEmailFromLS = () => {
  try {
    return JSON.parse(localStorage.getItem("sp5-Email")) || "";
  } catch (err) {
    console.log("Error:", err);
  }
};

const Otp = () => {
  const ref = useRef();
  const [isData, setIsData] = useState(obj);
  const [isbtndisabled, setIsbtndisabled] = useState(true);
  const navigate = useNavigate();
  const emailLS = takeEmailFromLS();
  const [ time, setTime ] = useState(60);
  let id;

  useEffect(() => {
    ref.current.focus();
    countTime();

    return ()=>clearInterval(id);
  }, []);

  function countTime(){
    id = setInterval(()=>{
      console.log("time:",time)
      
       setTime((t)=>{
        if(t<=1)
        {
           clearInterval(id);
        }
        return t - 1;
       })
    },1000)
  }

  const handleSubmit = () => {
      CheckEmail({email:emailLS,otp:isData.int1+isData.int2+isData.int3+isData.int4})
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setIsData((val) => {
      val = { ...val, [name]: value };

      if (val.int1 && val.int2 && val.int3 && val.int4) {
        setIsbtndisabled(() => false);
      } else {
        setIsbtndisabled(() => true);
      }

      console.log("val:", val);
      return val;
    });
  };

  return (
    <Flex
      width="100vw"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        m={{ base: "2rem", sm: "5rem", md: "8rem" }}
        backgroundColor="white"
        color="black"
        border="1px solid"
        padding="1rem"
        borderRadius="0.5rem"
        width="20rem"
        height="23rem"
      >
        <Heading textAlign="center" as="h1">
          Verify With OTP
        </Heading>
        <Text fontWeight="500" m="0.7rem 0rem" textAlign="center">
          Enter the 4-digit code sent to:
        </Text>
        <Flex w="89%" justifyContent="center" gap="0.1rem" alignItems="center" m="auto">
          <Text
            fontWeight="600"
            w="80%"
            borderBottom="1px dashed"
            textAlign="center"
            m="1rem auto"
          >
            {emailLS}
          </Text>
          <Box
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            <FaPen />
          </Box>
        </Flex>
        <HStack w="65%" m="auto">
          <PinInput defaultValue="">
            <PinInputField
              value={isData.int1}
              onChange={handleChange}
              name="int1"
              ref={ref}
            />
            <PinInputField
              value={isData.int2}
              onChange={handleChange}
              name="int2"
            />
            <PinInputField
              value={isData.int3}
              onChange={handleChange}
              name="int3"
            />
            <PinInputField
              value={isData.int4}
              onChange={handleChange}
              name="int4"
            />
          </PinInput>
        </HStack>
        <Bottom
          isbtndisabled={isbtndisabled}
          handleSubmit={handleSubmit}
          auth="Verify OTP"
        />
       {
        time<=0?<Text w="30%" m="auto" cursor="pointer" borderBottom="1px dashed"  onClick={()=>{ login({email:emailLS}); setTime(60); countTime()}}>Resend OTP</Text>: <Text>Fetching OTP in {time} seconds</Text>
       }
      </Box>
    </Flex>
  );
};

export default Otp;
