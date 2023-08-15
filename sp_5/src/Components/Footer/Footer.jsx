import React from 'react'
import { Box,Heading, Img, Stack, Grid,GridItem, Flex, HStack } from "@chakra-ui/react"
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
// import "../Navbar/CSS/Footer.css"

const Footer = () => {
  return (
    <div style={{ margin:"1rem",marginBottom:"2rem", textAlign:"left"}}>
    <hr style={{margin:"150px 5px 30px"}}/>
        <Box display={"flex"} justifyContent="space-between">
             <Flex alignItems='center' gap='15px'>
               <Heading size="sm"  fontWeight="300"as={"h5"}>Download Apps</Heading>
               <Img src="https://www.zee5.com/images/play_store.png?ver=2.52.51"/>
               <Img src="https://www.zee5.com/images/app_store.png?ver=2.52.51"/>
            </Flex>
            <Box>
                <Heading m="10px 20px 10px 0" size="sm" as="h2">Connect with us</Heading>
                <HStack  m="10px 20px 10px 20px" gap="10px">
                  <BsFacebook size="1.5rem"/>
                  <AiFillGoogleCircle size="1.8rem"/>
                  <AiFillTwitterCircle size="1.8rem"/>
                  <AiFillYoutube size="1.8rem"/>
                </HStack>
               
            </Box>
        </Box>
        <Flex m="20px 20px 20px 10px" >
            <Heading size="sm" margin="0px 20px 50px " fontWeight="400" as="h5">About Us</Heading>
            <p margin="0px 20px ">|</p>
            <Heading size="sm" margin="0px 20px " fontWeight="400" as="h5">Help Center</Heading>
            <p margin="0px 20px ">|</p>
            <Heading size="sm" margin="0px 20px " fontWeight="400"  as="h5">Privacy Policy</Heading>
            <p margin="0px 20px ">|</p>
            <Heading size="sm" margin="0px 20px " fontWeight="400" as="h5">Terms of Use</Heading>
        </Flex>
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
           <GridItem >
               <Heading size="sm" as="h3">Popular Tv Shows</Heading>
               <Box>
                  <Heading size="sm" fontWeight="300"  as="h6">Kumkum Bhagya</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Kundali Bhagya</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Bhagya Lakshmi</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Tujhse Hai Raabta</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Kyun Rishton Mein Katti Batti</Heading>
               </Box>
           </GridItem>


           <GridItem >
               <Heading size="sm" as="h3">Premium Movies</Heading>
               <Box>
                  <Heading size="sm" fontWeight="300" as="h6">Kya Meri Sonam Gupta Bewafa Hai</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Helmet</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">200 Halla Ho</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">14 Phere</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Dial 100</Heading>
               </Box>
           </GridItem>


           <GridItem >
               <Heading size="sm" as="h3">Popular LIVE TV Channels</Heading>
               <Box>
                  <Heading size="sm" fontWeight="300" as="h6">Aaj Tak</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Zee News</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Zee Tv Hd</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">&tv Hd</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Zee Marathi Hd</Heading>
               </Box>
           </GridItem>

           <GridItem >
               <Heading size="sm" as="h3">Popular Web Series</Heading>
               <Box>
                  <Heading size="sm" fontWeight="300" as="h6">Sunflower</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Jeet Ki Zid</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">State Of Siege 26/11</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Naxalbari</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Tripling</Heading>
               </Box>
           </GridItem>
           <GridItem >
               <Heading size="sm" as="h3">Bollywood Top Celebrities</Heading>
               <Box>
                  <Heading size="sm" fontWeight="300" as="h6">Sunny Leone</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Disha Patani</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Deepika Padukone</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Salman Khan</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Nora Fatehi</Heading>
               </Box>
           </GridItem>

           <GridItem >
               <Heading size="sm" as="h3">Games & News</Heading>
               <Box>
                  <Heading size="sm" fontWeight="300" as="h6">Play</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Stories</Heading>
                  <Heading size="sm" fontWeight="300" as="h6">Articles</Heading>
               </Box>
           </GridItem>

        </Grid>
    </div>
  )
}

export default Footer