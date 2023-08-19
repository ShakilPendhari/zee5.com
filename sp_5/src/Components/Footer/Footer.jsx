import React from "react";
import {
  Box,
  Heading,
  Img,
  Stack,
  Grid,
  GridItem,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
// import "../Navbar/CSS/Footer.css"

const Footer = () => {
  return (
    <div style={{ margin: "1rem", marginBottom: "2rem", textAlign: "left" }}>
      <hr style={{ margin: "150px 5px 30px" }} />
      <Box
        display={"flex"}
        flexDir={{ base: "column", sm: "row", md: "row" }}
        justifyContent={{ base: "center", sm: "space-between", md: "space-between" }}
        alignItems={{ base: "center", sm: "center", md: "center" }}
      >
        <Flex
          flexDir={{ base: "column", sm: "row", md: "row" }}
          alignItems="center"
          gap="15px"
        >
          <Heading
            fontWeight="500"
            fontSize={{ base: "1rem", sm: "1.15rem", md: "1.3rem" }}
            as={"h5"}
          >
            Download Apps
          </Heading>
         <Flex gap={{base:"1rem",sm:"0.8rem",md:"0.6rem"}} flexDir={{ base: "column", sm: "column", md: "row" }} >
           <Img src="https://www.zee5.com/images/play_store.png?ver=2.52.51" />
           <Img src="https://www.zee5.com/images/app_store.png?ver=2.52.51" />
         </Flex>
        </Flex>
        <Box>
          <Heading
            m="10px 0px 0px 0"
            mt={{ base: "20px", sm: "10px", md: "10px" }}
            fontWeight="500"
            fontSize={{ base: "1rem", sm: "1.15rem", md: "1.3rem" }}
            as="h1"
            textAlign="center"
          >
            Connect with us
          </Heading>
          <HStack m="10px 20px 10px 20px" gap="10px">
            <BsFacebook size="1.5rem" />
            <AiFillGoogleCircle size="1.8rem" />
            <AiFillTwitterCircle size="1.8rem" />
            <AiFillYoutube size="1.8rem" />
          </HStack>
        </Box>
      </Box>
      <Grid
        m={{
          base: "1rem 0rem 2.5rem",
          sm: "1rem 0rem 2.5rem",
          md: "1rem 0rem 3rem"
        }}
        width={{base:"100%",sm:"100%",md:"63%"}}
        gap={{base:"1.4rem",sm:"2.1rem",md:"4rem"}}
        gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(4,1fr)"}}
      >
        <Box>
          <Heading fontSize={{base:"0.8rem",sm:"1rem",md:"1rem"}} margin="0px 20px 50px " fontWeight="400" as="h5">
            About Us
          </Heading>
          <Text m="-4.5rem 0rem" >|</Text>
        </Box>
        <Box>
          <Heading fontSize={{base:"0.8rem",sm:"1rem",md:"1rem"}} margin="0px 20px " fontWeight="400" as="h5">
            Help Center
          </Heading>
          <Text m="-1.4rem 0rem">|</Text>
        </Box>
        <Box>
          <Heading fontSize={{base:"0.8rem",sm:"1rem",md:"1rem"}} margin="0px 20px " fontWeight="400" as="h5">
            Privacy Policy
          </Heading>
          <Text m="-1.4rem 0rem">|</Text>
        </Box>
        <Box>
          <Heading fontSize={{base:"0.8rem",sm:"1rem",md:"1rem"}} margin="0px 20px " fontWeight="400" as="h5">
            Terms of Use
          </Heading>
          <Text m="-1.4rem 0rem">|</Text>
        </Box>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(6, 1fr)",
        }}
        gap={{base:"0.7rem",sm:"1rem",md:"1.5rem"}}
      >
        <GridItem>
          <Heading fontSize={{base:"0.7rem",sm:"0.8rem",md:"0.9rem"}} mb="0.3rem" as="h3">
            Popular Tv Shows
          </Heading>
          <Box>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Kumkum Bhagya
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Kundali Bhagya
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Bhagya Lakshmi
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Tujhse Hai Raabta
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Kyun Rishton Mein Katti Batti
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading fontSize={{base:"0.7rem",sm:"0.8rem",md:"0.9rem"}} mb="0.3rem" as="h3">
            Premium Movies
          </Heading>
          <Box>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Kya Meri Sonam Gupta Bewafa Hai
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Helmet
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              200 Halla Ho
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              14 Phere
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Dial 100
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading fontSize={{base:"0.7rem",sm:"0.8rem",md:"0.9rem"}} mb="0.3rem" as="h3">
            Popular LIVE TV Channels
          </Heading>
          <Box>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Aaj Tak
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Zee News
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Zee Tv Hd
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              &tv Hd
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Zee Marathi Hd
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading fontSize={{base:"0.7rem",sm:"0.8rem",md:"0.9rem"}} mb="0.3rem" as="h3">
            Popular Web Series
          </Heading>
          <Box>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Sunflower
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Jeet Ki Zid
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              State Of Siege 26/11
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Naxalbari
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Tripling
            </Heading>
          </Box>
        </GridItem>
        <GridItem>
          <Heading fontSize={{base:"0.7rem",sm:"0.8rem",md:"0.9rem"}} mb="0.3rem" as="h3">
            Bollywood Top Celebrities
          </Heading>
          <Box>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Sunny Leone
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Disha Patani
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Deepika Padukone
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Salman Khan
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Nora Fatehi
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading fontSize={{base:"0.7rem",sm:"0.8rem",md:"0.9rem"}} mb="0.3rem" as="h3">
            Games & News
          </Heading>
          <Box>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Play
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Stories
            </Heading>
            <Heading fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}} fontWeight="300" as="h6">
              Articles
            </Heading>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Footer;
