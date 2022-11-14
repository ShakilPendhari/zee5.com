import React from 'react'
import { Box,Heading, Img, Stack, Grid,GridItem, Flex, HStack } from "@chakra-ui/react"
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
// import "../Navbar/CSS/Footer.css"

const Footer = () => {
  return (
    <div style={{ margin:"1rem",marginBottom:"2rem"}}>
    <hr style={{margin:"150px 5px 30px"}}/>
        <Box display={"flex"} justifyContent="space-between">
             <Flex alignItems='center' gap='15px'>
               <Heading size="sm" as={"h4"}>Download Apps</Heading>
               <Img src="https://www.zee5.com/images/play_store.png?ver=2.52.51"/>
               <Img src="https://www.zee5.com/images/app_store.png?ver=2.52.51"/>
            </Flex>
            <Box>
                <Heading m="10px 20px 10px 0" size="sm" as="h2">Connect with us</Heading>
                <HStack  m="10px 20px 10px 20px" gap="10px">
                  <BsFacebook/>
                  <AiFillGoogleCircle/>
                  <AiFillTwitterCircle/>
                  <AiFillYoutube/>
                </HStack>
               
            </Box>
        </Box>
        <Flex m="20px" >
            <Heading size="sm" margin="0px 20px 50px " as="h4">About Us</Heading>
            <p margin="0px 20px ">|</p>
            <Heading size="sm" margin="0px 20px " as="h4">Help Center</Heading>
            <p margin="0px 20px ">|</p>
            <Heading size="sm" margin="0px 20px " as="h4">Privacy Policy</Heading>
            <p margin="0px 20px ">|</p>
            <Heading size="sm" margin="0px 20px " as="h4">Terms of Use</Heading>
        </Flex>
        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
           <GridItem >
               <Heading size="sm" as="h3">Popular Tv Shows</Heading>
               <Box>
                  <Heading size="sm" className="h4" as="h5">Kumkum Bhagya</Heading>
                  <Heading size="sm" as="h6">Kundali Bhagya</Heading>
                  <Heading size="sm" as="h5">Bhagya Lakshmi</Heading>
                  <Heading size="sm" as="h5">Tujhse Hai Raabta</Heading>
                  <Heading size="sm" as="h5">Kyun Rishton Mein Katti Batti</Heading>
               </Box>
           </GridItem>


           <GridItem >
               <Heading size="sm" as="h3">Premium Movies</Heading>
               <Box>
                  <Heading size="sm" as="h5">Kya Meri Sonam Gupta Bewafa Hai</Heading>
                  <Heading size="sm" as="h5">Helmet</Heading>
                  <Heading size="sm" as="h5">200 Halla Ho</Heading>
                  <Heading size="sm" as="h5">14 Phere</Heading>
                  <Heading size="sm" as="h5">Dial 100</Heading>
               </Box>
           </GridItem>


           <GridItem >
               <Heading size="sm" as="h3">Popular LIVE TV Channels</Heading>
               <Box>
                  <Heading size="sm" as="h5">Aaj Tak</Heading>
                  <Heading size="sm" as="h5">Zee News</Heading>
                  <Heading size="sm" as="h5">Zee Tv Hd</Heading>
                  <Heading size="sm" as="h5">&tv Hd</Heading>
                  <Heading size="sm" as="h5">Zee Marathi Hd</Heading>
               </Box>
           </GridItem>

           <GridItem >
               <Heading size="sm" as="h3">Popular Web Series</Heading>
               <Box>
                  <Heading size="sm" as="h5">Sunflower</Heading>
                  <Heading size="sm" as="h5">Jeet Ki Zid</Heading>
                  <Heading size="sm" as="h5">State Of Siege 26/11</Heading>
                  <Heading size="sm" as="h5">Naxalbari</Heading>
                  <Heading size="sm" as="h5">Tripling</Heading>
               </Box>
           </GridItem>
           <GridItem >
               <Heading size="sm" as="h3">Bollywood Top Celebrities</Heading>
               <Box>
                  <Heading size="sm" as="h5">Sunny Leone</Heading>
                  <Heading size="sm" as="h5">Disha Patani</Heading>
                  <Heading size="sm" as="h5">Deepika Padukone</Heading>
                  <Heading size="sm" as="h5">Salman Khan</Heading>
                  <Heading size="sm" as="h5">Nora Fatehi</Heading>
               </Box>
           </GridItem>

           <GridItem >
               <Heading size="sm" as="h3">Games & News</Heading>
               <Box>
                  <Heading size="sm" as="h5">Play</Heading>
                  <Heading size="sm" as="h5">Stories</Heading>
                  <Heading size="sm" as="h5">Articles</Heading>
               </Box>
           </GridItem>

        </Grid>
    </div>
  )
}

export default Footer