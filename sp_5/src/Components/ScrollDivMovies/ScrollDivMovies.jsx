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
  const divScroll = useRef(null);
  const [val, setVal] = useState(true);
  // const arrow = useRef(null);
  const but = useRef();

  useEffect(() => {}, [divScroll, val, but]);

  if (!imgCount) {
    imgCount = 10;
  } else {
    imgCount = Number(imgCount);
  }

  const handleScroll = (scrollAmount,imgCount) => {
    if (divScroll.current) {
      divScroll.current.scrollLeft += scrollAmount;
    }
    console.log("sc:", scrollAmount === 1400);
    if (scrollAmount === 1400) {
      setVal(false);
    } else {
      setVal(true);
    }
  };


  return (
    <div className="trendBoxDiv">
      <Heading id="head" as="h2" m="2.7rem 0rem 0.2rem 0rem">
        {head}
      </Heading>

      <div id="mainTopDiv">
        {!val && (
          <IoIosArrowBack
            onClick={() => handleScroll(-1400,imgCount)}
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

        {val && (
          <IoIosArrowForward
            onClick={() => handleScroll(1400,imgCount)}
            size="2rem"
            className="arrowIcons forward"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollDivMovies;
