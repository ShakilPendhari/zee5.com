import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../RawMaterial/Home";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Slider.css";

let clouser;
const Slider = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    Interfun();
    return () => clearInterval(clouser);
  }, [count]);

  const Interfun = () => {
    // console.log(count)
    clouser = setInterval(() => {
      setCount((value) => value + 1);
      // console.log(count);
    }, 2500);
    if (count >= 9) {
      setCount((value) => (value = 1));
    }
  };

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
    setCount(count);
    clearInterval(clouser);
  };

  const handleDehover = () => {
    Interfun();
  };

  return (
    <Box className="topSection">
      <Box
        onMouseOver={handleHover}
        onMouseLeave={handleDehover}
        className="clousor"
        height={{ base: "50vh", sm: "55vh", md: "50vh" }}
      >
        <Box
          className="clouserDiv"
          disabled={count <= 1}
          onClick={handleSliderLeft}
        >
          <SlArrowLeft className="logoClouser" />
        </Box>
        <Box className="sliding">
          <Image
            style={{
              width: "100%",
              transition: "all 2s ease-in",
              height: "100%",
            }}
            src={`/Sliding/zee5_${count}.png`}
            className="slidingImg"
            alt="movie"
          />
        </Box>
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
