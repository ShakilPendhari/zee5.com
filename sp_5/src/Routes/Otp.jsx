import React, { useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";

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
import { CheckEmailorMob, login } from "../Redux/Auth/auth.api";

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

const takeMobilesLS = () => {
  try {
    return JSON.parse(localStorage.getItem("sp5-Mobile")) || "";
  } catch (err) {
    console.log("Error:", err);
  }
};
const Otp = () => {
  const ref = useRef();
  const [isData, setIsData] = useState(obj);
  const [isbtndisabled, setIsbtndisabled] = useState(true);
  const navigate = useNavigate();
  let emailormobileLS = useRef(null);
  const [time, setTime] = useState(5);
  const toast = useToast();
  let id;

  useEffect(() => {
    ref.current.focus();
    updateEmailOrMobile();
  }, []);

  useEffect(() => {
    countTime();
    return () => clearInterval(id);
  }, []);

  function updateEmailOrMobile() {
      let val1 = takeEmailFromLS();
      let val2 = takeMobilesLS();
      console.log(val1,val2)
      if (val1.time > val2.time) {
        emailormobileLS.current = val1.email;
      } else {
        emailormobileLS.current = val2.mobileNo;
      }
  }

  function countTime() {
    id = setInterval(() => {
      console.log("time:", time);

      setTime((t) => {
        if (t <= 1) {
          clearInterval(id);
        }
        return t - 1;
      });
    }, 1000);
  }

  const handleSubmit = () => {
    if (emailormobileLS.current[0] === "+") {
      CheckEmailorMob(
        {
          mobileNo: emailormobileLS.current,
          otp: isData.int1 + isData.int2 + isData.int3 + isData.int4,
        },
        navigate,
        toast
      );
    } else {
      CheckEmailorMob(
        {
          email: emailormobileLS.current,
          otp: isData.int1 + isData.int2 + isData.int3 + isData.int4,
        },
        navigate,
        toast
      );
    }
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
    {
      console.log(emailormobileLS)
    }
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
        <Flex
          w="89%"
          justifyContent="center"
          gap="0.1rem"
          alignItems="center"
          m="auto"
        >
          <Text
            fontWeight="600"
            w="80%"
            borderBottom="1px dashed"
            textAlign="center"
            m="1rem auto"
          >
            {emailormobileLS.current}
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
        {time <= 0 ? (
          <Text
            w="30%"
            m="auto"
            cursor="pointer"
            borderBottom="1px dashed"
            onClick={() => {
              if (
                emailormobileLS.current[0] === "+"
                  ? login({ mobileNo: emailormobileLS.current }, "", toast)
                  : login({ email: emailormobileLS.current }, "", toast)
              );
              setTime(60);
              countTime();
            }}
          >
            Resend OTP
          </Text>
        ) : (
          <Text>Fetching OTP in {time} seconds</Text>
        )}
      </Box>
    </Flex>
  );
};

export default Otp;
