import React,{useEffect, useState } from 'react'
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import { Box, Flex, Input, HStack, Stack, Avatar} from "@chakra-ui/react"
import Logo from "./logoo.png"
import {SearchIcon} from "@chakra-ui/icons";
import { BiMicrophone } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'
import { RiVipCrownFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css'
import {Button} from "@chakra-ui/react"
import RightSideLogo from "../../Routes/RightSideLogo";
import { useDispatch, useSelector } from 'react-redux';
import { GetData } from '../../Redux/action';

const links = [
 
  {
    to:"/",
    title:"Home",
    cn:"link2",
  },
  {
    to:"/TvShows",
    title:"TvShows",
    cn:"link2",
  },
  {
    to:"/Movies",
    title:"Movies",
    cn:"link2",
  },
  {
    to:"/WebSeries",
    title:"WebSeries",
    cn:"link2",
  },
  {
    to:"/News",
    title:"News",
    cn:"link2",
  },
];

let activeStyle = {
  textDecoration: "none",
  color: "red"
};

let normal = {
  textDecoration: "none",
  color: "White"
};


const search = true;
const authState = true;
let id;

const Navbar = () => {
  const [state, setState] = useState(false);
  const [ query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store)=>store.data)

  useEffect(()=>{
    // debouncing
    id = setTimeout(()=>{
        dispatch(GetData(query));
        navigate("/Video")
     },1000)
     return ()=>clearTimeout(id)
  },[authState,query]);

  const handlequery = (e)=>{
    setQuery(e.target.value);
  }


  // if(loading){
  //   return <Loading/>
  // }

  if(true){
    return (
      <div className='Navbar'>
      {/* {
        data && console.log(data)
      } */}
      <Flex  minWidth='max-content' alignItems='center' gap='2' justifyContent="space-between" >
      <Box display="flex" gap="30px" alignItems="center">
         <NavLink className="LogoBox" to="/">
          <img className='Logo' alt="logo" src={Logo}/>
         </NavLink>
        
           {
            links.map((el)=>(
              <NavLink 
                className={el.cn}
                key={el.to}
                style={({ isActive }) => (isActive ? activeStyle : normal)}
                to={el.to}
                end
                >
                 {el.title}
               </NavLink>
              ))
           }
           <NavLink className="link2" to="/RightSideLogo">
            <RightSideLogo/>
           </NavLink>
      </Box>
      </Flex>
      <Flex alignItems="center" gap="30px">
      { search &&
        <Box>
        <HStack className='inputBox'>
           <SearchIcon/>
           <Input 
           type="text" 
          //  onClick={()=>{setState(true); 
          //  /*navigate("/Searching")*/}}
            placeholder="Serach for Movies, and TvShows"
            onChange={handlequery}
           />
           {state && <BiMicrophone/>}
        </HStack>
      </Box>
      }
      
      <Box className="link2">
         <MdLanguage style={{width:"27px", height:"27px"}} />
      </Box>
      <Stack direction='row' >
      <Link to="/Login">
      { authState.isAuth && <Avatar  bg='teal.500'   w={"35px"} src='https://bit.ly/broken-link' /> }
      {
        !authState.isAuth &&  <Button className='butt' colorScheme='teal' variant='outline'>
    Login
  </Button>
      }
      </Link>
  </Stack>
      <Box>
        <NavLink style={{color:"white", backgroundColor:"green" ,padding:"7px", borderRadius:"10px", fontWeight:"500",
        display:"flex"}}>
          <RiVipCrownFill style={{color:"white", margin:"0px 3px 0px 3px", width:"35px",
           height:"20px"}} />
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
}

export default Navbar