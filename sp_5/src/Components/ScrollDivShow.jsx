import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import style from "./../style/ComponentElement/scrolldivshow.module.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetData } from "../Redux/Video/action";



const ScrollDivShow = (prop) => {
  let { url, head, imgCount,title } = prop
  const [ scrollAmountSum, setScrollAmountSum ] = useState(0)
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const but = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  useEffect(() => {}, [divScroll, leftArrow, but]);

  const updateWidth = () => {
    setWidth(() => {
      // console.log("width:", window.innerWidth);
      return window.innerWidth;
    });
  };

  const handlePlayVideo = (query)=>{
    dispatch(GetData({query,page:""}));
    navigate("/Video")
}

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
      <Heading id={style.headShows} as="h2" m="2.7rem 0rem 0.2rem 0rem">
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
                 <Flex flexDir="column" gap="0rem" justifyContent="center" alignItems="flex-start" ref={but} className={style.butShows}
                >
                 <ul style={{color:"black",paddingLeft:"18.5%"}}>
                    <li style={{fontSize:"0.9rem"}} >{title[i].title}</li>
                  </ul>
                 <Flex m="auto" justifyContent="space-between" width="75%">
                 <Button
                    className={style.watch}
                    leftIcon={<MdPlayArrow/>}
                    onClick={()=>handlePlayVideo(title[i].title)}
                  >
                    Watch
                  </Button>
                  <Button
                    className={style.share}
                    leftIcon={<FaShare />}
                    cursor="no-drop"
                    border="0px solid"
                    backgroundColor="white"
                    variant="ghost"
                    color="grey"
                    disabled
                  >
                    Share
                  </Button>
                 </Flex>
                </Flex>
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
