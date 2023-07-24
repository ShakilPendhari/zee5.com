import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import style from "./../../style/ComponentElement/login.module.css"

const Icons = () => {
  return (
    <>
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
    </>
   
  )
}

export default Icons