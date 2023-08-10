import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import style from "./../../style/ComponentElement/login.module.css";

const Icons = () => {
  return (
    <>
      <Flex
        height={"2rem"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className={style.icons}
        width={{base:"10rem",sm:"10rem",md:"10rem"}}
      >
        <Link href={process.env.REACT_APP_GOOGLE_AUTH}>
          <Image
            width="3.4rem"
            height="3.4rem"
            cursor="pointer"
            src="./SocialMediaIcon/zee5GoogleIcon.svg"
            alt="Google Icon"
          />
        </Link>
        <Link href={process.env.REACT_APP_GITHUB_AUTH}>
          <Image
            boxShadow="0px 4px 3px grey"
            borderRadius="50%" 
            width="3rem"
            height="3rem"
            cursor="pointer"
            src="./SocialMediaIcon/zee5GitHubIcon.png"
            alt="GitHub Icon"
          />
        </Link>
        {/* <Image
          cursor="not-allowed"
          src="./SocialMediaIcon/zee5FaceBookIcon.svg"
          alt="FaceBook Icon"
        />
        <Image
          cursor="not-allowed"
          src="./SocialMediaIcon/zee5Twittericon.svg"
          alt="Twitter Icon"
        />
        <Image
          cursor="not-allowed"
          src="./SocialMediaIcon/zee5AppleIcon.svg"
          alt="Apple Icon"
        /> */}
      </Flex>

      <Flex className={style.optionOr}>
        <Box>or</Box>
      </Flex>
    </>
  );
};

export default Icons;
