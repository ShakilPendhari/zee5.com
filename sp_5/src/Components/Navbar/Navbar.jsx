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
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { RiVipCrownFill } from "react-icons/ri";
import style from "./Navbar.module.css";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData } from "../../Redux/Video/action";
import { IoMdLogOut } from "react-icons/io";
import { Logout } from "../../Redux/Auth/auth.api";

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

let id;

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { page, isPremium } = useSelector((store) => store.data);
  const [ham, setHam] = useState(true);
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    return () => clearTimeout(id);
  }, []);

  const handlequery = (e) => {
    setQuery(e.target.value);

    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(function () {
      clearTimeout(id);
      dispatch(UpdateData({ title: e.target.value, page, isPremium }));
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

  const handleLogin = (e) => {
    if (e.target.innerText === "LOGOUT") {
      dispatch(Logout());
    }
  };

  if (true) {
    return (
      <Box height={{ base: "6.5rem", sm: "6.5rem", md: "4.5rem" }}>
        <Box className={style.Navbar}>
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
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            gap={{ base: "5px", sm: "10px", md: "2vw" }}
          >
            <Box>
              <HStack className={style.inputBox}>
                <SearchIcon className={style.searchIcon} />
                <input
                  type="text"
                  value={query}
                  className={style.navbarInput}
                  placeholder="Search for Movies, and TvShows"
                  onChange={handlequery}
                />
                {query && (
                  <CloseIcon
                    onClick={() => setQuery("")}
                    _hover={{ cursor: "pointer" }}
                    width="0.6rem"
                    height="0.6rem"
                    color="white"
                  />
                )}
              </HStack>
            </Box>
            <Stack direction="row">
              <Link to="/login">
                <Button onClick={handleLogin} className={style.login}>
                  {!token ? "LOGIN" : "LOGOUT"}
                </Button>
              </Link>
            </Stack>
            <Button
              className={style.buyplane}
              leftIcon={<RiVipCrownFill />}
              cursor="not-allowed"
            >
              BUY PLAN
            </Button>
            <Menu>
              <MenuButton
                className={style.hamberger}
                as={IconButton}
                color="white"
                aria-label="Options"
                icon={ham ? <HamburgerIcon /> : <CloseIcon width="0.7rem" />}
                onClick={() => setHam(!ham)}
                background="transparent"
                _hover={{
                  backgroundColor: "transparent",
                }}
              />
              <MenuList
                className={style.hamberger}
              >
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
        </Box>
        <Flex
          display={{ base: "flex", sm: "flex", md: "none" }}
          height="1rem"
          mt="0.2rem"
          width="100%"
          justifyContent="space-around"
        >
          {links.map((el) => (
            <NavLink
              className={style.link3}
              key={el.to}
              style={({ isActive }) => (isActive ? activeStyle : normal)}
              to={el.to}
              end
            >
              {el.title}
            </NavLink>
          ))}
        </Flex>
      </Box>
    );
  }
};

export default Navbar;
