import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../RawMaterial/Home";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Slider.css";


const Slider = () => {
  const [count, setCount] = useState(1);
  let clouser
  useEffect(() => {
    Interfun()
    return () => clearInterval(clouser);
  }, [count]);

  const Interfun = ()=>{
    // console.log(count)
    clouser = setInterval(() => {
      setCount((value) => value + 1);
      // console.log(count);
    }, 3000);
    if (count >= 9) {
      setCount((value) => value = 1);
    }
  }

  const handleClick = (val) => {
    setCount(val);
  };

  const handleSlider = () => {
    if (count >= 1) {
      setCount((value) => value - 1);
    } else {
      setCount((value) => (value = data.length - 2));
    }
  };

  const handleHover = (e)=>{
    e.target.style.cursor = "pointer"
    setCount(count);
    clearInterval(clouser)
  }

  const handleDehover = ()=>{
    Interfun()
  }

  return (
    <Box className="topSection">
      <Box className="clousor" height={{ base: "50vh", sm: "55vh", md: "50vh" }}>
        <Box className="clouserDiv" disabled={count <= 1} onClick={handleSlider}>
          <SlArrowLeft className="logoClouser" />
        </Box>
        <Box className="sliding">
          <Image
          
            onMouseOver={handleHover}
            onMouseLeave={handleDehover}
            style={{ width: "100%",transition:"all 2s ease-in",height:"100%"}}
           
            src={`/Sliding/zee5_${count}.png`}
            className="slidingImg"
            alt="movie"
          />
        </Box>
        <Box
          className="clouserDiv"
          disabled={count <= data.length - 1}
          onClick={() => {
            setCount((value) => value + 1);
          }}
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
      <Box>
        <Button id="but">but1</Button>
      </Box>
    </Box>
  );
};

export default Slider;
