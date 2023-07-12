import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./scrolldivshow.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";



const ScrollDivShow = ({ url, head, imgCount }) => {
  const [ scrollAmountSum, setScrollAmountSum ] = useState(0)
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const but = useRef();

  useEffect(() => {}, [divScroll, leftArrow, but]);

  if (!imgCount) {
    imgCount = 10;
  } else {
    imgCount = Number(imgCount);
  }

  const handleScroll = (value=0) => {
    setScrollAmountSum((scrollAmountValue)=>{
      const occupiedElements = divScroll.current.childNodes;
      let occupiedWidth = 0;
  
      for (let i = 0; i < occupiedElements.length; i++) {
        occupiedWidth += occupiedElements[i].offsetWidth;
      }

      let standard = Math.abs(value);
      if(scrollAmountValue+value>=standard)
      {
        setLeftArrow(true);
      }
      else{
        setLeftArrow(false);
      }


      if(scrollAmountValue+value+(standard*2)>=occupiedWidth)
      {  
        setRightArrow(false);
      }
      else{
        setRightArrow(true);
      }

      divScroll.current.scrollLeft = scrollAmountValue + value;
     
      return scrollAmountValue + value;
    })
  };


  return (
    <div className="trendBoxDiv">
      <Heading id="head" as="h2" m="2.7rem 0rem 0.2rem 0rem">
        {head}
      </Heading>

      <div id="mainTopDiv">
        {leftArrow && (
          <IoIosArrowBack
            
            onClick={() => handleScroll(-800,)}
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
                className="BoxHover showBox"
              >
                <RiVipCrownFill className="KingCrown" />
                <img
                  loading="lazy"
                  className="trendImg"
                  src={`${url}${i + 1}.png`}
                  alt={`${url}${i + 1}.png`}
                />
                <Box ref={but} className="but1">
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
                    colorScheme="green"
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
            onClick={() => handleScroll(800)}
            size="2rem"
            className="arrowIcons forward"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollDivShow;
