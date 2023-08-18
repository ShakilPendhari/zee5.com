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
            fontSize={{ base: "1.2rem", sm: "1.2rem", md: "1.3rem" }}
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
            fontSize={{ base: "1.2rem", sm: "1.2rem", md: "1.3rem" }}
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
          base: "3rem 0rem",
          sm: "4rem 0rem",
          md: "5rem 0rem"
        }}
        width={{base:"100%",sm:"100%",md:"63%"}}
        gap={{base:"2rem",sm:"3rem",md:"4rem"}}
        gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(4,1fr)"}}
      >
        <Box>
          <Heading size="sm" margin="0px 20px 50px " fontWeight="400" as="h5">
            About Us
          </Heading>
          <Text m="-4.5rem 0rem" >|</Text>
        </Box>
        <Box>
          <Heading size="sm" margin="0px 20px " fontWeight="400" as="h5">
            Help Center
          </Heading>
          <Text m="-1.4rem 0rem">|</Text>
        </Box>
        <Box>
          <Heading size="sm" margin="0px 20px " fontWeight="400" as="h5">
            Privacy Policy
          </Heading>
          <Text m="-1.4rem 0rem">|</Text>
        </Box>
        <Box>
          <Heading size="sm" margin="0px 20px " fontWeight="400" as="h5">
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
        gap={6}
      >
        <GridItem>
          <Heading size="sm" as="h3">
            Popular Tv Shows
          </Heading>
          <Box>
            <Heading size="sm" fontWeight="300" as="h6">
              Kumkum Bhagya
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Kundali Bhagya
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Bhagya Lakshmi
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Tujhse Hai Raabta
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Kyun Rishton Mein Katti Batti
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading size="sm" as="h3">
            Premium Movies
          </Heading>
          <Box>
            <Heading size="sm" fontWeight="300" as="h6">
              Kya Meri Sonam Gupta Bewafa Hai
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Helmet
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              200 Halla Ho
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              14 Phere
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Dial 100
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading size="sm" as="h3">
            Popular LIVE TV Channels
          </Heading>
          <Box>
            <Heading size="sm" fontWeight="300" as="h6">
              Aaj Tak
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Zee News
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Zee Tv Hd
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              &tv Hd
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Zee Marathi Hd
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading size="sm" as="h3">
            Popular Web Series
          </Heading>
          <Box>
            <Heading size="sm" fontWeight="300" as="h6">
              Sunflower
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Jeet Ki Zid
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              State Of Siege 26/11
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Naxalbari
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Tripling
            </Heading>
          </Box>
        </GridItem>
        <GridItem>
          <Heading size="sm" as="h3">
            Bollywood Top Celebrities
          </Heading>
          <Box>
            <Heading size="sm" fontWeight="300" as="h6">
              Sunny Leone
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Disha Patani
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Deepika Padukone
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Salman Khan
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Nora Fatehi
            </Heading>
          </Box>
        </GridItem>

        <GridItem>
          <Heading size="sm" as="h3">
            Games & News
          </Heading>
          <Box>
            <Heading size="sm" fontWeight="300" as="h6">
              Play
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Stories
            </Heading>
            <Heading size="sm" fontWeight="300" as="h6">
              Articles
            </Heading>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Footer;
