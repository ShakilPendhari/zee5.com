import {
  Box,
  // Button,
  Flex,
  // Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../RawMaterial/Home";
// import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Main.css";
import Slider from "react-slick";
import { MdPlayArrow } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { SliderHead } from "../../utils/Slider";
import { useDispatch } from "react-redux";
import { GetData } from "../../Redux/Video/action";
import { useNavigate } from "react-router-dom";

const MainSlider = () => {
  const [count, setCount] = useState(1);
  let clouser = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clouser.current = setInterval(() => {
      setCount((value) => {
        // console.log("Value:::",value)
        if (value >= 8) {
          return (value = 1);
        } else {
          return value + 1;
        }
      });
    }, 2500);
    return () => clearInterval(clouser.current);
  }, [count]);

  // const handleClick = (val) => {
  //   setCount(val);
  // };

  // const handleSliderLeft = () => {
  //   if (count === 1) {
  //     setCount((value) => (value = data.length));
  //   } else {
  //     setCount((value) => value - 1);
  //   }
  //   handleHover();
  // };

  // const handleSliderRight = () => {
  //   if (count === data.length) {
  //     setCount((value) => (value = 1));
  //   } else {
  //     setCount((value) => value + 1);
  //   }
  //   handleHover();
  // };

  // const handleHover = (e) => {
  //   e.target.style.cursor = "pointer";
  //   clearInterval(clouser.current);
  // };

  // const handleDehover = () => {
  //   setTimeout(
  //     () =>
  //       setCount((count) => {
  //         if (count >= 8) {
  //           return (count = 1);
  //         } else {
  //           return (count = count + 1);
  //         }
  //       }),
  //     500
  //   );
  // };

  const handlePlayVideo = (query)=>{
       dispatch(GetData({query,page:""}));
       navigate("/Video")
  }

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="MainSlider">
      <Slider {...settings}>
        {Array(8)
          .fill(1)
          .map((el, i) => {
            return (
              <Box
                key={i}
                height={{ base: "10rem", sm: "20rem", md: "27.5rem" }}
                width="100vw"
                overflow="hidden"
                position="relative"
              >
                <Box
                  position="relative"
                  key={i}
                  height="100%"
                  width="99%"
                  margin="auto"
                >
                  <Image
                    display="block"
                    style={{
                      width: "100%",
                      transition: "all 2s ease-in",
                      height: "100%",
                    }}
                    src={`Sliding/zee5_${i + 1}.png`}
                    className="slidingImg"
                    alt="movie"
                  />
                  {/* <LazyLoadImage
                    display="block"
                    effect="blur"
                    background="red"
                    alt={`Sliding/zee5_${i + 1}.png`}
                    className="slidingImg"
                    src={`Sliding/zee5_${i + 1}.png`}
                    style={{
                      width: "100%",
                      // transition: "all 2s ease-in",
                      height: "100%",
                    }}
                  /> */}
                  <Flex
                    gap="1rem"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    position="absolute"
                    bottom={{ base: "1rem", sm: "2rem", md: "1rem" }}
                    left={{ base: "1rem", sm: "2rem", md: "rem" }}
                  >
                    <Heading
                      m="0px"
                      p="0px"
                      textAlign="left"
                      fontWeight="400"
                      fontSize={{base:"1.05rem",sm:"1.2rem",md:"1.5rem"}}
                      as="h1"
                    >
                      {SliderHead[i]}
                    </Heading>
                    <Flex gap="1rem" direction="row">
                      <Flex
                        p="0.5rem 0.6rem"
                        background="rgba(0,0,0,.4)"
                        w="5rem"
                        borderRadius="5px"
                        fontFamily="NotoSansMedium,sans-serif"
                        border="1px solid white"
                        justifyContent="space-between"
                        alignItems="center"
                        onClick={()=>handlePlayVideo(SliderHead[i])}
                        _hover={{
                          cursor:"pointer"
                        }}
                      >
                        <MdPlayArrow />
                        <Text fontSize="0.9rem" fontWeight="500">
                          Watch
                        </Text>
                      </Flex>
                      <Flex
                        p="0.5rem 0.3rem"
                        background="#8230c6"
                        w="7.2rem"
                        borderRadius="5px"
                        fontFamily="NotoSansMedium,sans-serif"
                        justifyContent="space-around"
                        alignItems="center"
                      >
                        <RiVipCrownFill className="KingCrownSlider" />
                        <Text fontSize="0.9rem" fontWeight="600">
                          BUY PLAN
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            );
          })}
      </Slider>
    </div>
  );
};

export default MainSlider;
