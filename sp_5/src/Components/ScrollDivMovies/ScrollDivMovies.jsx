import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./scrolldivmovies.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import SkeletonImage from "../Skeleton/Skeleton_image";

const ScrollDivMovies = ({ url, head, imgCount }) => {
  const [scrollAmountSum, setScrollAmountSum] = useState(0);
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const but = useRef();

  useEffect(() => {}, [divScroll, leftArrow, but, rightArrow]);

  if (!imgCount) {
    imgCount = 10;
  } else {
    imgCount = Number(imgCount);
  }

  const handleScroll = (scrollAmount = 0) => {
    // scrolling using arrows hide/visible
    setScrollAmountSum((scrollAmountValue) => {
      // get column-gap and margin-left to add into occupiedWidth
      let styles = window.getComputedStyle(divScroll.current);
      let columnGap = parseInt(styles.columnGap, 10);
      let marginLeft = parseInt(styles.marginLeft, 10);

      // total width of childrens
      const occupiedElements = divScroll.current.childNodes;
      let occupiedWidth = 0;

      for (let i = 0; i < occupiedElements.length; i++) {
        occupiedWidth += occupiedElements[i].offsetWidth;
      }

      // now check if occupeidWidth + columnGap + marginLeft is less than or equal to scrolling width;
      console.log(
        "s1:",
        divScroll.current.offsetWidth,
        "scrollAmountValue:",
        scrollAmountValue,
        "scrollAmount:",
        scrollAmount,
        "columnGap:",
        columnGap
      );
      let visbile =
        scrollAmountValue + divScroll.current.offsetWidth + scrollAmount >=
        occupiedWidth +
          (columnGap * (imgCount - 1) + marginLeft * (imgCount - 1));
      if (visbile) {
        setRightArrow(false);
      } else {
        setRightArrow(true);
      }

      if (scrollAmountValue + scrollAmount >= Math.abs(scrollAmount)) {
        setLeftArrow(true);
      } else {
        setLeftArrow(false);
      }
      console.log("sv:",scrollAmountValue,scrollAmount)

      divScroll.current.scrollLeft = scrollAmountValue + scrollAmount;

      return scrollAmountValue + scrollAmount;
    });
  };

  return (
    <div className="trendBoxDivMovies">
      <Heading id="headMovies" as="h2" m="2.7rem 0rem 0.2rem 0rem">
        {head}
      </Heading>

      <div id="mainTopDivMovies">
        {leftArrow && (
          <IoIosArrowBack
            onClick={() => handleScroll(-750, imgCount)}
            size="2rem"
            className="arrowIconsMovies backMovies"
          />
        )}
        <div className="trendDivMovies" ref={divScroll}>
          {Array(imgCount)
            .fill(1)
            .map((item, i, arr) => (
              <Box key={i + 1} className="boxMovies BoxHoverMovies" width="16rem">
                {" "}
                <RiVipCrownFill className="KingCrownMovies" />
                {/* <SkeletonImage src={`${url}${i + 1}.png`}/> */}
                <img
                  // onLoad={()=>{
                  //   console.log("Image is loading")
                  // }}
                  loading="lazy"
                  className="trendImgMovies"
                  src={`${url}${i + 1}.png`}
                  alt={`${url}${i + 1}.png`}
                />
                <Box ref={but} className="butMovies">
                  <Button
                    leftIcon={<MdPlayArrow size="1.2rem" />}
                    border="2px solid"
                    padding="0px 9px 0px 0px"
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
                    {" "}
                    Share
                  </Button>
                </Box>
              </Box>
            ))}
        </div>

        {rightArrow && (
          <IoIosArrowForward
            onClick={() => handleScroll(750, imgCount)}
            size="2rem"
            className="arrowIconsMovies forwardMovies"
          />
        )}
      </div>
    </div>
  );
};

export default ScrollDivMovies;
