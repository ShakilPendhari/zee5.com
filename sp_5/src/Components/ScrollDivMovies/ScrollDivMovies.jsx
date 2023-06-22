import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./scrolldivmovies.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";


let scrollAmountSum = 0;
const ScrollDivMovies = ({ url, head, imgCount }) => {
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  // const arrow = useRef(null);
  const but = useRef();

  useEffect(() => {}, [divScroll, leftArrow, but]);

  if (!imgCount) {
    imgCount = 10;
  } else {
    imgCount = Number(imgCount);
  }

  const handleScroll = (scrollAmount=0,imgCount) => {
    console.log(scrollAmountSum)
    scrollAmountSum += scrollAmount;
    // if (divScroll.current) {
      divScroll.current.scrollLeft = scrollAmountSum;
    // }
    if( scrollAmountSum>=800)
    {
      setLeftArrow(true);
    }
    else{
      setLeftArrow(false);
    }
    if( scrollAmountSum>=2358)
    {
      setRightArrow(false);
    }
    else{
      setRightArrow(true);
    }
  };

  return (
    <div className="trendBoxDiv">
    {
      console.log(leftArrow,rightArrow)
    }
      <Heading id="head" as="h2" m="2.7rem 0rem 0.2rem 0rem">
        {head}
      </Heading>

      <div id="mainTopDiv" >
        {leftArrow && (
          <IoIosArrowBack
            
            onClick={() => handleScroll(-800,imgCount)}
            size="2rem"
            className="arrowIcons back"
          />
        )}
        <div className="trendDiv" ref={divScroll}>
          {Array(imgCount)
            .fill(1)
            .map((item, i,arr) => (
              <Box
                key={i + 1}
                className="box BoxHover"
                width="16rem"
              >
                {" "}
                <RiVipCrownFill className="KingCrown" />
                <img
                  className="trendImg"
                  src={`${url}${i + 1}.png`}
                  alt={`${url}${i + 1}.png`}
                />
                <Box ref={but} className="but">
                  <Button
                   leftIcon={<MdPlayArrow size="1.2rem"/>}
                    variant="outline"
                    colorScheme="green"
                    _hover={{
                      backgroundColor: "rgb(211, 14, 211)",
                      transition: "background-color .5s ease-in",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Watch
                  </Button>
                  <Button
                    leftIcon={<FaShare />}
                    cursor="no-drop"
                    border="0px solid"
                    backgroundColor="white"
                    variant="ghost"
                    color="grey"
                  >
                    {" "}
                    Share
                  </Button>
                </Box>
              </Box>
            ))}
        </div>

        {rightArrow && (
          <IoIosArrowForward
            onClick={() => handleScroll(800,imgCount)}
            size="2rem"
            className="arrowIcons forward"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollDivMovies;
