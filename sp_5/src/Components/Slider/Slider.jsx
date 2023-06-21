import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../RawMaterial/Home";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Slider.css";

const Slider = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    let clousers = setInterval(() => {
      setCount((value) => value + 1);
      // console.log(count);
    }, 3000);
    if (count === 9) {
      setCount((value) => (value = 1));
    }

    return () => clearInterval(clousers);
  }, [count]);

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

  return (
    <Box className="topSection">
      <div className="clousor">
        <Box disabled={count <= 1} onClick={handleSlider}>
          <SlArrowLeft className="logoClouser" />
        </Box>
        <Box display="flex" className="sliding">
          <img
            style={{ width: "100%", flex: "3" }}
            height={{ base: "50vh", sm: "55vh", md: "65vh" }}
            src={`/Sliding/zee5_${count}.png`}
            className="slidingImg"
            alt="movie"
          />
        </Box>
        <Box
          disabled={count <= data.length - 1}
          onClick={() => {
            setCount((value) => value + 1);
          }}
        >
          <SlArrowRight className="logoClouser" />
        </Box>
      </div>
      <Box className="filckClouser">
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
