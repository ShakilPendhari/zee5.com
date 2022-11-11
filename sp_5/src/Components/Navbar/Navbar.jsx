import React,{useEffect, useState, } from 'react'
import { NavLink } from "react-router-dom";
import { Box, Flex, Input, HStack, Stack, Avatar} from "@chakra-ui/react"
import Logo from "./logoo.png"
import {SearchIcon} from "@chakra-ui/icons";
import { BiMicrophone } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'
import { RiVipCrownFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import './CSS/Navbar.css'

// import { MdSettings } from 'react-icons/md'
// RiVipCrownFill

const links = [
 
  {
    to:"/Home",
    title:"Home"
  },
  {
    to:"/TvShows",
    title:"TvShows"
  },
  {
    to:"/Movies",
    title:"Movies"
  },
  {
    to:"/WebSeries",
    title:"WebSeries"
  },
  {
    to:"/News",
    title:"News"
  },
  {
    to:"/RightSideLogo",
    title:"icon"
  }
];

let activeStyle = {
  textDecoration: "none",
  color: "red"
};

let normal = {
  textDecoration: "none",
  color: "White"
};


const Navbar = () => {
  const [state, setState] = useState(false);

  useEffect(()=>{
     setTimeout(()=>{
         setState(false)
     },10000)
  },[])

  return (
    <div className='Navbar'>
    <Flex  minWidth='max-content' alignItems='center' gap='2' justifyContent="space-between" >
    <Box display="flex" gap="30px" alignItems="center">
       <NavLink className="LogoBox" to="/">
        <img className='Logo' alt="logo" src={Logo}/>
       </NavLink>
      
         {
          links.map((el)=>(
            <NavLink 
              key={el.to}
              style={({ isActive }) => (isActive ? activeStyle : normal)}
              to={el.to}
              end
              >
               {el.title}
             </NavLink>
            ))
         }
    </Box>
    </Flex>
    <Flex alignItems="center" gap="30px">
    <Box>
      <HStack className='inputBox'>
         <SearchIcon/>
         <Input type="text" onClick={()=>{setState(true)}}/>
         {state && <BiMicrophone/>}
      </HStack>
    </Box>
    <Box>
       <MdLanguage  />
    </Box>
    <Stack direction='row' >
  <Avatar  bg='teal.500'   w={"35px"} src='https://bit.ly/broken-link' />
</Stack>
    <Box>
      <NavLink style={{color:"white", backgroundColor:"green" ,padding:"7px", borderRadius:"10px"}}>
        <RiVipCrownFill style={{color:"blue"}} c="white"/>
        BUY PLAN
      </NavLink>
    </Box>
    <Box>
       <GiHamburgerMenu/>
    </Box>

    </Flex>
   
   
    </div>
  )
}

export default Navbar