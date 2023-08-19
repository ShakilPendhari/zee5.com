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
import { CheckEmailorMob, Login, Loginn } from "../Redux/Auth/auth.action";
import { useDispatch, useSelector } from "react-redux";

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
  const [time, setTime] = useState(60);
  const toast = useToast();
  let id;
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const { loading_otp } = auth;

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
    // console.log(val1,val2)
    if (val1.time > val2.time) {
      emailormobileLS.current = val1.email;
    } else {
      emailormobileLS.current = val2.mobileNo;
    }
  }

  function countTime() {
    id = setInterval(() => {
      // console.log("time:", time);

      setTime((t) => {
        if (t <= 1) {
          clearInterval(id);
        }
        return t - 1;
      });
    }, 1000);
  }

  const handleSubmit = () => {
    if (loading_otp) {
      // setIsData(()=>obj)
      return;
    }
    if (emailormobileLS.current[0] === "+") {
      dispatch(
        CheckEmailorMob(
          {
            mobileNo: emailormobileLS.current,
            otp: isData.int1 + isData.int2 + isData.int3 + isData.int4,
          },
          navigate,
          toast
        )
      );
    } else {
      dispatch(
        CheckEmailorMob(
          {
            email: emailormobileLS.current,
            otp: isData.int1 + isData.int2 + isData.int3 + isData.int4,
          },
          navigate,
          toast
        )
      );
    }
    // setIsData(()=>obj)
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

      // console.log("val:", val);
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
      {/* {
        console.log("auth:",auth,"isData:",isData)
    } */}
      <Box
        m={{ base: "1rem", sm: "5rem", md: "8rem" }}
        backgroundColor="white"
        color="black"
        border="1px solid"
        padding="1rem"
        borderRadius="0.5rem"
        width={{base:"16rem",sm:"17rem",md:"19rem"}}
        height={{base:"18rem",sm:"19rem",md:"21.5rem"}}
      >
        <Heading fontSize={{base:"1.3rem",sm:"1.5rem",md:"1.8rem"}} textAlign="center" as="h1">
          Verify With OTP
        </Heading>
        <Text fontWeight="500" fontSize={{base:"0.8rem",sm:"0.9rem",md:"1.05rem"}} m={{base:"0.7rem 0rem", sm:"0.3rem 0rem" ,md:"0.1rem 0rem" }} textAlign="center">
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
            m={{base:"0.6rem auto",sm:"0.8rem auto",md:"1rem auto"}}
            fontSize={{base:"0.65rem",sm:"0.80rem",md:"0.9rem"}}
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
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (
                    isData.int1 &&
                    isData.int2 &&
                    isData.int3 &&
                    isData.int4
                  ) {
                    handleSubmit();
                  }
                }
              }}
              value={isData.int1}
              onChange={handleChange}
              name="int1"
              ref={ref}
            />
            <PinInputField
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (
                    isData.int1 &&
                    isData.int2 &&
                    isData.int3 &&
                    isData.int4
                  ) {
                    handleSubmit();
                  }
                }
              }}
              value={isData.int2}
              onChange={handleChange}
              name="int2"
            />
            <PinInputField
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (
                    isData.int1 &&
                    isData.int2 &&
                    isData.int3 &&
                    isData.int4
                  ) {
                    handleSubmit();
                  }
                }
              }}
              value={isData.int3}
              onChange={handleChange}
              name="int3"
            />
            <PinInputField
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (
                    isData.int1 &&
                    isData.int2 &&
                    isData.int3 &&
                    isData.int4
                  ) {
                    handleSubmit();
                  }
                }
              }}
              value={isData.int4}
              onChange={handleChange}
              name="int4"
            />
          </PinInput>
        </HStack>
        <Bottom
          loading={loading_otp}
          isbtndisabled={isbtndisabled}
          handleSubmit={handleSubmit}
          auth="Verify OTP"
        />
        {time <= 0 ? (
          <Text
            w={{base:"45%",sm:"45%",md:"40%"}}
            m="auto"
            fontSize={{base:"0.9rem",sm:"1rem",md:"1.1rem"}}
            cursor="pointer"
            borderBottom="1px dashed"
            onClick={() => {
              if (
                emailormobileLS.current[0] === "+"
                  ? dispatch(
                      Loginn({ mobileNo: emailormobileLS.current }, "", toast)
                    )
                  : dispatch(
                      Loginn({ email: emailormobileLS.current }, "", toast)
                    )
              );
              setTime(60);
              countTime();
            }}
          >
            Resend OTP
          </Text>
        ) : (
          <Text m="auto" fontSize={{base:"0.8rem",sm:"0.9rem",md:"1.1rem"}}  w={{base:"90%",sm:"90%",md:"90%"}} >Fetching OTP in {time} seconds</Text>
        )}
      </Box>
    </Flex>
  );
};

export default Otp;
