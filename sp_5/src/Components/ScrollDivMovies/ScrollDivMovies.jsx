import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./scrolldivmovies.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";



const ScrollDivMovies = ({ url, head, imgCount }) => {
  const [ scrollAmountSum, setScrollAmountSum ] = useState(0)
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  // const arrow = useRef(null);
  const but = useRef();
  const containerRef = useRef(null);

  useEffect(() => {}, [divScroll, leftArrow, but,rightArrow]);

  if (!imgCount) {
    imgCount = 10;
  } else {
    imgCount = Number(imgCount);
  }


  const handleScroll = (scrollAmount=0) => {
   
    setScrollAmountSum((scrollAmountValue)=>{
      const occupiedElements = divScroll.current.childNodes;
      let occupiedWidth = 0;
  
      for (let i = 0; i < occupiedElements.length; i++) {
        occupiedWidth += occupiedElements[i].offsetWidth;
      }
      if(scrollAmountValue+scrollAmount>=800)
      {
        setLeftArrow(true);
      }
      else{
        setLeftArrow(false);
      }


      if(scrollAmountValue+scrollAmount+1600>=occupiedWidth)
      {  
        setRightArrow(false);
      }
      else{
        setRightArrow(true);
      }

      divScroll.current.scrollLeft = scrollAmountValue + scrollAmount;
     
      return scrollAmountValue + scrollAmount;
    })
   
  };

  
  return (
    <div className="trendBoxDiv">
   
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
                  loading="lazy"
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
