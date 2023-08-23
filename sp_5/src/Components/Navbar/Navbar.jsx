import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Avatar,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  AddIcon,
  CloseIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  SearchIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { BiMicrophone } from "react-icons/bi";
import { RiVipCrownFill } from "react-icons/ri";
import { GiCrossShield, GiHamburgerMenu } from "react-icons/gi";
import style from "./Navbar.module.css";
import { Button } from "@chakra-ui/react";
import RightSideLogo from "../../Routes/RightSideLogo";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData } from "../../Redux/Video/action";
import { IoMdLogOut } from "react-icons/io";
import { Logout } from "../../Redux/Auth/auth.api";
import { LOGOUTUSER } from "../../Redux/Auth/auth.action.type";

const links = [
  {
    to: "/",
    title: "Home",
    cn: "link2",
  },
  {
    to: "/TvShows",
    title: "TvShows",
    cn: "link2",
  },
  {
    to: "/Movies",
    title: "Movies",
    cn: "link2",
  },
  {
    to: "/WebSeries",
    title: "WebSeries",
    cn: "link2",
  },
  // {
  //   to: "/News",
  //   title: "News",
  //   cn: "link2",
  // },
];

const navbarHam = [
  {
    login: {
      text: "LOGIN",
      icon: <Avatar bg="rgb(197, 6, 197)" height="0.9rem" width="0.9rem" />,
      link: "/Login",
    },
    logout: {
      text: "LOGOUT",
      icon: (
        <RiVipCrownFill
          color="rgb(197, 6, 197)"
          height="1.5rem"
          width="1.5rem"
        />
      ),
      link: "/",
    },
  },
  {
    text: "BUY PLAN",
    icon: (
      <IoMdLogOut color="rgb(197, 6, 197)" height="1.5rem" width="1.5rem" />
    ),
    link: "/",
  },
];

let activeStyle = {
  textDecoration: "underline",
  color: "red",
  textUnderlineOffset: "9px",
  textDecorationColor: "white",
  textDecorationThickness: "2px",
};

let normal = {
  textDecoration: "none",
  color: "White",
};

const search = true;
const authState = true;
let id;

const Navbar = () => {
  const [state, setState] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page } = useSelector((store) => store.data);
  const [ham, setHam] = useState(true);
  const { token } = useSelector((store) => store.auth);
  // const [isLogin, setIsLogin] = useState(token);

  // useEffect(()=>{
  //    setIsLogin(token)
  // },[dispatch])

  useEffect(() => {
    //// debouncing
    // id = setTimeout(()=>{
    //   if(query)
    //   {
    //     dispatch(UpdateData({query,page}));
    //   }
    //     navigate("/Searching")
    //  },600)
    return () => clearTimeout(id);
  }, [authState, query]);

  const handlequery = (e) => {
    // if(e.target.value)
    //     {
    //       dispatch(UpdateData({query:e.target.value,page}));
    //     }
    //       navigate("/Searching")

    // setQuery((q)=>{
    //   console.log("hello")
    //   id = setTimeout(()=>{
    //     if(e.target.value)
    //     {
    //       dispatch(UpdateData({query:e.target.value,page}));
    //     }
    //       navigate("/Searching")
    //    },600)
    //    return e.target.value
    // });
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(function () {
      clearTimeout(id);
      dispatch(UpdateData({ query: e.target.value, page }));
      navigate("/Searching");
    }, 1000);
  };

  const handeClick = (el) => {
    if (el.text === "LOGOUT") {
      dispatch(Logout());
      return;
    }
    setHam(true);
    navigate(`${el.link}`);
  };

  const handleLogin = (e)=>{
     if(e.target.innerText === "LOGOUT")
     {
        dispatch(Logout());
     }
  }
  // if(loading){
  //   return <Loading/>
  // }

  if (true) {
    return (
      <div className={style.Navbar}>
        {/* {
        data && console.log(data)
      } */}
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          justifyContent="space-between"
        >
          <Box display="flex" gap="2vw" alignItems="center">
            <NavLink className={style.LogoBox} to="/">
              <img className={style.Logo} alt="logo" src="logoo.png" />
            </NavLink>

            {links.map((el) => (
              <NavLink
                className={style.link2}
                key={el.to}
                style={({ isActive }) => (isActive ? activeStyle : normal)}
                to={el.to}
                end
              >
                {el.title}
              </NavLink>
            ))}
            {/* <NavLink className="link2" display={{base:"block",sm:"block",md:"none"}}  to="/RightSideLogo">
              <RightSideLogo  />
            </NavLink> */}
          </Box>
        </Flex>
        <Flex alignItems="center" gap={{ base: "5px", sm: "10px", md: "2vw" }}>
          {search && (
            <Box>
              <HStack className={style.inputBox}>
                <SearchIcon className={style.searchIcon} />
                <input
                  type="text"
                  className={style.navbarInput}
                  //  onClick={()=>{setState(true);
                  //  /*navigate("/Searching")*/}}
                  placeholder="Search for Movies, and TvShows"
                  onChange={handlequery}
                />
                {state && <BiMicrophone />}
              </HStack>
            </Box>
          )}

          <Box className={style.link2}>
            {/* <MdLanguage style={{ width: "27px", height: "27px" }} /> */}
          </Box>
          <Stack direction="row">
            <Link to="/login">
              {/* {authState.isAuth && (
                <Avatar
                  bg="teal.500"
                  w={"35px"}
                  src="https://bit.ly/broken-link"
                />
              )}
              {!authState.isAuth && (
                <Button colorScheme="white" variant="outline" className={style.butt} >
                  Login
                </Button>
              )} */}
              <Button onClick={handleLogin} className={style.login}>
                { !token ? "LOGIN" : "LOGOUT"}
              </Button>
            </Link>
          </Stack>
          {/* <Box>
            <NavLink
              style={{
                color: "white",
                backgroundColor: "green",
                display: "flex",
                borderRadius:"10px"
              }}
              className={style.buyPlane}
            >
              <RiVipCrownFill
                style={{
                  color: "white",
                  margin: "4px 3px 0px 3px",
                }}
                // className={style.Kingcrown}
              />
              <span className={style.buyplaneBut}>
                   BUY PLAN
              </span>
            </NavLink>
          </Box> */}
          <Button
            className={style.buyplane}
            leftIcon={<RiVipCrownFill />}
            cursor="not-allowed"
          >
            BUY PLAN
          </Button>
          <Menu>
            <MenuButton
              // className={style.hambergerMenu}
              display={{ base: "block", md: "none" }}
              as={IconButton}
              color="white"
              aria-label="Options"
              icon={ham ? <HamburgerIcon /> : <CloseIcon width="0.7rem" />}
              onClick={() => setHam(!ham)}
              background="transparent"
              _hover={{
                backgroundColor: "transparent",
              }}
              // variant="outline"
            />
            <MenuList display={{ base: "block", md: "none" }}>
              {navbarHam &&
                navbarHam?.map((el, i) => {
                  if (el?.login?.text === "LOGIN" && !token) {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => handeClick(el.login)}
                        icon={el.logout.icon}
                        className={style.hamOpt}
                        fontSize={{ base: "0.6rem", sm: "0.8rem" }}
                        color="black"
                        _hover={{
                          backgroundColor: "cyan !important",
                          color: "blue !important",
                        }}
                      >
                        {el?.login?.text}
                      </MenuItem>
                    );
                  } else if (el?.logout?.text === "LOGOUT" && token) {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => handeClick(el.logout)}
                        icon={el.logout.icon}
                        className={style.hamOpt}
                        fontSize={{ base: "0.6rem", sm: "0.8rem" }}
                        color="black"
                        _hover={{
                          backgroundColor: "cyan !important",
                          color: "blue !important",
                        }}
                      >
                        {el.logout.text}
                      </MenuItem>
                    );
                  } else {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => handeClick(el)}
                        icon={el.icon}
                        className={style.hamOpt}
                        fontSize={{ base: "0.6rem", sm: "0.8rem" }}
                        color="black"
                        _hover={{
                          backgroundColor: "cyan !important",
                          color: "blue !important",
                        }}
                      >
                        {el.text}
                      </MenuItem>
                    );
                  }
                })}
            </MenuList>
          </Menu>
        </Flex>
      </div>
    );
  }
};

export default Navbar;
