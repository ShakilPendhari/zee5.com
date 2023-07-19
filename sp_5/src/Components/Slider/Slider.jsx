import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../RawMaterial/Home";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Slider.css";

const Slider = () => {
  const [count, setCount] = useState(1);
  let clouser = useRef();

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

  const handleClick = (val) => {
    setCount(val);
  };

  const handleSliderLeft = () => {
    if (count === 1) {
      setCount((value) => (value = data.length));
    } else {
      setCount((value) => value - 1);
    }
    handleHover();
  };
  const handleSliderRight = () => {
    if (count === data.length) {
      setCount((value) => (value = 1));
    } else {
      setCount((value) => value + 1);
    }
    handleHover();
  };

  const handleHover = (e) => {
    e.target.style.cursor = "pointer";
    clearInterval(clouser.current);
  };

  const handleDehover = () => {
    setTimeout(
      () =>
        setCount((count) => {
          if (count >= 8) {
            return (count = 1);
          } else {
            return (count = count + 1);
          }
        }),
      500
    );
  };

  return (
    <Box className="topSection">
      {/* {
      console.log(count)
    } */}
      <Box
        onMouseOver={handleHover}
        onMouseLeave={handleDehover}
        className="clousor"
        // height={{ base: "25rem", sm: "32rem", md: "32rem" }}
      >
        <Box
          className="clouserDiv "
          disabled={count <= 1}
          zIndex="1000"
          onClick={handleSliderLeft}
        >
          <SlArrowLeft className="logoClouser" />
        </Box>
        {/* <Box className="sliding">
          <Image
            style={{
              width: "100%",
              transition: "all 2s ease-in",
              height: "100%",
            }}
            src={`Sliding/zee5_${count}.png`}
            className="slidingImg"
            alt="movie"
          />
        </Box> */}
        {/* <Flex className="sliding" justifyContent="flex-start" animation="crouser 30s cubic-bezier(0.1,0,0.5,0) infinite" alignItems="center">
         {
           Array(9).fill(1).map((el,i)=>(
            <Image
            display="block"
            style={{
              width: "70%",
              transition: "all 2s ease-in",
              height: "80%",
            }}
            src={`Sliding/zee5_${i+1}.png`}
            className="slidingImg"
            alt="movie"
          />
           ))
         }
        </Flex> */}
        <Grid
          gridTemplateColumns="repeat(3,1fr)"
          // gridTemplateRows="100%"
          className="sliding"
          justifyContent="center"
          alignItems="center"
          padding="3rem 0rem"
          gap="1rem"
          animation="sliding 3s linear 1s infinite"
        >
          {Array(3)
            .fill(1)
            .map((el, i) => {
              return (
                <Box border="4px solid rgb(69, 24, 69)" borderRadius="10px" height={i===1?"110%":"80%"} width={i===1?"55vw":"45vw"} position={i===1?"relative":"static"}>
                <Box
                  key={i}
                  borderRadius="10px"
                  overflow="hidden"
                  // flex={i === 1 ? 3 : 1}
                  // border="1px solid red"
                  height="100%"
                  // width="45vw"
                  zIndex={i===1?1000:100}
                  // transform={i===1?"scale(1.2)":"scale(1)"}
                >
                
                  <Image
                    display="block"
                    style={{
                      width: "100%",
                      transition: "all 2s ease-in",
                      height: "100%",
                    }}
                    src={`Sliding/zee5_${(count+i+1)%8+1}.png`}
                    className="slidingImg"
                    alt="movie"
                  />
                </Box>
              {
               i===1 && <Box position="absolute" bottom="1rem" left="3rem">hello</Box>
              }
                </Box>
              );
            })}
        </Grid>
        <Box
          className="clouserDiv"
          disabled={count <= data.length - 1}
          onClick={handleSliderRight}
        >
          <SlArrowRight className="logoClouser" />
        </Box>
      </Box>
      <Box className="flickClouser">
        {data &&
          data.map((el, i) => (
            <Box
              onClick={() => handleClick(i + 1)}
              key={i}
              className={count === i + 1 ? "dot change" : "dot show"}
            ></Box>
          ))}
      </Box>
    </Box>
  );
};

export default Slider;
