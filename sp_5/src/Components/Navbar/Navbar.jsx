import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Box, Flex, HStack, Stack, Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BiMicrophone } from "react-icons/bi";
import { RiVipCrownFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./Navbar.module.css";
import { Button } from "@chakra-ui/react";
import RightSideLogo from "../../Routes/RightSideLogo";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData } from "../../Redux/Video/action";


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

let activeStyle = {
  textDecoration: "underline",
  color: "red",
  textUnderlineOffset:"9px",
  textDecorationColor:"white",
  textDecorationThickness:"2px"
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
  const {page} = useSelector((store)=>store.data);

  useEffect(() => {
    //// debouncing
    // id = setTimeout(()=>{
    //   if(query)
    //   {
    //     dispatch(UpdateData({query,page}));
    //   }
    //     navigate("/Searching")
    //  },600)
     return ()=>clearTimeout(id)
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
      dispatch(UpdateData({query:e.target.value,page}));
      navigate("/Searching");
    }, 1000);
  };

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
          <Box display="flex" gap="2.5rem" alignItems="center">
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
        <Flex alignItems="center" gap={{base:"5px",sm:"10px",md:"30px"}}>
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
              <Button
                    className={style.login}
                  >
                    LOGIN
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
                    leftIcon={ <RiVipCrownFill/>}
                    cursor="not-allowed"
                  >
                    BUY PLAN
                  </Button>
          <Box>
            <GiHamburgerMenu />
          </Box>
        </Flex>
      </div>
    );
  }
};

export default Navbar;
