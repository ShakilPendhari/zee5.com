import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import style from "./../style/ComponentElement/scrolldivshow.module.css"



const ScrollDivShow = ({ url, head, imgCount }) => {
  const [ scrollAmountSum, setScrollAmountSum ] = useState(0)
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const but = useRef();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  useEffect(() => {}, [divScroll, leftArrow, but]);

  const updateWidth = () => {
    setWidth(() => {
      console.log("width:", window.innerWidth);
      return window.innerWidth;
    });
  };


  if (!imgCount) {
    imgCount = 10;
  } else {
    imgCount = Number(imgCount);
  }

  const handleScroll = (value=0) => {

    if (width >= 100 && width <= 480) {
      value = 280 * value;
    } else if (width >= 481 && width <= 768) {
      value = 550 * value;
    } else {
      value = 750 * value;
    }
    console.log("value:", value, width);

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
    <div className={style.trendBoxDivShows}>
      <Heading id="headShows" as="h2" m="2.7rem 0rem 0.2rem 0rem">
        {head}
      </Heading>

      <div id={style.mainTopDivShows}>
        {leftArrow && (
          <IoIosArrowBack
            
            onClick={() => handleScroll(-1,)}
            size="2rem"
            className={`${style.arrowIconsShows} ${style.backShows}`}
          />
        )}
        <div className={style.trendDivShows} ref={divScroll}>
          {Array(imgCount)
            .fill(1)
            .map((item, i,arr) => (
              <Box
                key={i + 1}
                className={`${style.BoxHoverShows} ${style.showBoxShows}`}
              >
                <RiVipCrownFill className={style.KingCrownShows} />
                <img
                  loading="lazy"
                  className={style.trendImgShows}
                  src={`${url}${i + 1}.png`}
                  alt={`${url}${i + 1}.png`}
                />
                 <Box ref={but} className={style.but1Shows}>
                  <Button
                    leftIcon={<MdPlayArrow size="1.2rem" />}
                    border="2px solid"
                    padding="0px 7px 0px 0px"
                    color="black"
                    variant="outline"
                    colorScheme="green"
                    _hover={{
                      backgroundColor: "rgb(211, 14, 211)",
                      transition: "background-color .5s ease",
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
                    Share
                  </Button>
                </Box>
              </Box>
            ))}
        </div>
        {rightArrow && (
          <IoIosArrowForward
            onClick={() => handleScroll(1)}
            size="2rem"
            className={`${style.arrowIconsShows} ${style.forwardShows}`}
          />
        )}
      </div>
    </div>
  );
};

export default ScrollDivShow;
