import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./../../style/ComponentElement/login.module.css"

let loginButtonStyleAllow = {
    cursor: "pointer",
    opacity: "1",
    fontWeight: "700",
    letterSpacing: "0.04rem",
    color: "#FFFFFF",
  };
  let loginButtonStyleDontAllow = {
    cursor: "not-allowed",
    opacity: "0.5",
    fontWeight: "700",
    letterSpacing: "0.04rem",
    color: "#FFFFFF80",
  };
  

const Bottom = ({isbtndisabled,handleSubmit,toggle,info,auth}) => {
    const navigate = useNavigate();
  return (
    <>
        <Box>
        <button
          style={
            isbtndisabled ? loginButtonStyleDontAllow : loginButtonStyleAllow
          }
          onClick={handleSubmit}
          disabled={isbtndisabled}
          className={style.button}
        >
          {auth}
        </button>
      </Box>

      <Text onClick={()=>{!(auth==="Login")?navigate("/login"):navigate("/signup"); console.log(auth==="Login")}} cursor="pointer">
        <span style={{ color: "#000000" }}>{info}</span>{" "}
        <span id={style.register}>{toggle}</span>
      </Text>
    </>
  )
}

export default Bottom