import { Box, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../RawMaterial/Home";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Slider.css"

const Slider = () => {
  const [count, setCount] = useState(1);
  let clouser = useRef();

  useEffect(() => {
    clouser.current = setInterval(() => {
      setCount((value) => {
        console.log("Value:::",value)
        if(value>=8)
        {
          return value = 1;
        }
        else{
          return value + 1
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
      setCount((value) => value = data.length);
    } else {
      setCount((value) => value - 1);
    }
    handleHover();
  };
  const handleSliderRight = () => {
    if (count === data.length) {
      setCount((value) => value = 1);
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
    setTimeout(()=>
      setCount((count)=>{
        if(count>=8)
        {
          return count = 1;
        }
        else{
          return count = count + 1;
        }
      }),500)
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
        height={{ base: "25rem", sm: "32rem", md: "32rem" }}
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
            src={`Sliding/zee5_${count}.png`}
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
