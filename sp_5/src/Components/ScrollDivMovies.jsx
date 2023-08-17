import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import style from "./../style/ComponentElement/scrolldivmovies.module.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { RiVipCrownFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ScrollDivMovies = (prop) => {
  let { url, head, imgCount,title } = prop
  const [scrollAmountSum, setScrollAmountSum] = useState(0);
  const divScroll = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const but = useRef();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);
  useEffect(() => {}, [divScroll, leftArrow, but, rightArrow]);

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

  const handleScroll = (scrollAmount = 0) => {
    //  media query
    if (width >= 100 && width <= 480) {
      scrollAmount = 280 * scrollAmount;
    } else if (width >= 481 && width <= 768) {
      scrollAmount = 550 * scrollAmount;
    } else {
      scrollAmount = 750 * scrollAmount;
    }
    console.log("scrollAmount:",  scrollAmount, width);
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
      console.log("sv:", scrollAmountValue, scrollAmount);

      divScroll.current.scrollLeft = scrollAmountValue + scrollAmount;

      return scrollAmountValue + scrollAmount;
    });
  };
  function responsiveness(b, s, m) {
    return { base: b + "rem", sm: s + "rem", md: m + "rem" };
  }

  return (
    <div className={style.trendBoxDivMovies}>
      <Heading id={style.headMovies} as="h2" m="2.7rem 0rem 0.2rem 0rem">
        {head}
      </Heading>

      <div id={style.mainTopDivMovies}>
        {leftArrow && (
          <IoIosArrowBack
            onClick={() => handleScroll(-1, imgCount)}
            size="2rem"
            className={`${style.arrowIconsMovies} ${style.backMovies}`}
          />
        )}
        <div className={style.trendDivMovies} ref={divScroll}>
          {Array(imgCount)
            .fill(1)
            .map((item, i, arr) => (
              <Box
                key={i + 1}
                className={`${style.boxMovies} ${style.BoxHoverMovies}`}
                 width={{ base: "30vw", sm: "30vw", md: "16rem" }}
                minWidth={{ base: "28vw", sm: "25vw", md: "16rem" }}
               
                height={{ base: "9rem", sm: "16rem", md: "25rem" }}
              >
                <RiVipCrownFill className={style.KingCrownMovies} />
                {/* <SkeletonImage src={`${url}${i + 1}.png`}/> */}
                <img
                  // onLoad={()=>{
                  //   console.log("Image is loading")
                  // }}
                  loading="lazy"
                  className={style.trendImgMovies}
                  src={`${url}${i + 1}.png`}
                  alt={`${url}${i + 1}.png`}
                />
                {/* <LazyLoadImage
                    effect="blur"
                    // background="red"
                    alt={`${url}${i + 1}.png`}
                    className={style.trendImgMovies}
                    src={`${url}${i + 1}.png`}
                    // style={{
                    //   width: "100%",
                    //   // transition: "all 2s ease-in",
                    //   height: "100%",
                    // }}
                  /> */}
                <Flex flexDir="column" gap="0.5rem" justifyContent="center" alignItems="flex-start" ref={but} className={style.butMovies}>
                {
                  console.log("Prop:",prop.title[0])
                }
                  <ul style={{color:"black",paddingLeft:"1.6rem"}}>
                    <li >{prop.title[i].title}</li>
                  </ul>
                  <Flex m="auto" justifyContent="space-between" width="95%">
                  <Button
                    className={style.watch}
                    leftIcon={<MdPlayArrow className={style.playbut} />}
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
                    className={style.share}
                    leftIcon={<FaShare className={style.sharebut} />}
                    cursor="no-drop"
                    border="0px solid"
                    backgroundColor="white"
                    variant="ghost"
                    color="grey"
                  >
                    {" "}
                    Share
                  </Button>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </div>

        {rightArrow && (
          <IoIosArrowForward
            onClick={() => handleScroll(1, imgCount)}
            className={`${style.arrowIconsMovies} ${style.forwardMovies}`}
          />
        )}
      </div>
    </div>
  );
};

export default ScrollDivMovies;
