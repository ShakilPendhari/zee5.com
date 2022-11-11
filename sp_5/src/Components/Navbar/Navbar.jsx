import React,{useEffect, useState, } from 'react'
import { NavLink } from "react-router-dom";
import { Box, Flex, Input, HStack} from "@chakra-ui/react"
import Logo from "./logoo.png"
import "./Navbar.css"
import {SearchIcon} from "@chakra-ui/icons";
import { BiMicrophone } from 'react-icons/bi'
// import { MdSettings } from 'react-icons/md'

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
     },4000)
  },[])

  return (
    <div ClassName='Navbar' style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
    <Flex>
    <Box>
       <NavLink to="/">
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
    <Box>
      <HStack className='inputBox'>
         <SearchIcon/>
         <Input type="text" onClick={()=>{setState(true)}}/>
         {state && <BiMicrophone/>}
      </HStack>
     
    </Box>

    </Flex>
   
   
    </div>
  )
}

export default Navbar