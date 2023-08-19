import { ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react'
import style from "./../../style/ComponentElement/login.module.css"
import codes from "country-calling-code";

const Inputsection = ({flag,handleDropdown,isNumber,phoneCode,dropDown,Intvalue,handleonChange,setPhoneCode,setDropDown,isShowMobileError,obj,handleSubmit}) => {
  return (
    <Flex
    pos="relative"
    outline="none"
    border={flag || isShowMobileError ? "1px solid red" : "1px solid black"}
    borderRadius="5px"
    alignItems="center"
    className={style.input}
  >

   {/* Country code section */}

    <Flex
      pos="relative"
      onClick={handleDropdown}
      display={isNumber ? "flex" : "none"}
      justifyContent="center"
      alignItems="center"
    >
      <Text p="0.5rem">{phoneCode}</Text>
      <ChevronUpIcon
        width="2rem"
        height="2rem"
        transition="transform 0.5s ease-in 0.1s"
        transform={dropDown ? "rotate(0deg)" : "rotate(180deg)"}
      />
    </Flex>

   {/* Main input section */}
    <Input
      value={Intvalue.data}
      onChange={handleonChange}
      name="data"
      outline="none"
      transition="none"
      placeholder="Enter email or mobile number"
      border="none"
      focusBorderColor="tranparent"
      onKeyPress={(e) => {
                if (e.key === "Enter") {
                  if (Intvalue.data) {
                    handleSubmit();
                  }
                }
              }}
    />
    {dropDown && (
      <Box
        height="11.2rem"
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
          <Text
            onClick={(e) => {
              setPhoneCode(() => e.target.textContent);
              setDropDown(() => false);
            }}
            className={style.options}
            key={i}
          >
            {el.countryCodes[0]}
          </Text>
        ))}
      </Box>
    )}

    {/* Error section  */}

    {isShowMobileError && (
      <Text
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
    )}
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
  )
}

export default Inputsection