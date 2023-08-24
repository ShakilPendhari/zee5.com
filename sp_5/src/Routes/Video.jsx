import React, { useEffect, useState } from "react";
// import { AuthContext } from '../Context/CreateAuthContext'
import { useDispatch, useSelector } from "react-redux";
import style from "./../style/MainPages/Video.module.css";
import { Box, Flex, Image } from "@chakra-ui/react";
import { PlayVideoByUsingID } from "../Redux/Video/action";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

const Video = () => {
  const { data, videoId } = useSelector((store) => store.data);
  const [videoIndex, setVideoIndex] = useState(0);
  // const {videoId} = data[0].id
  // const {title} = data[0].snippet
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=>{
    document.title = "SP5 | Video";
    window.innerHeight = 0;
  },[])

  const handleClick = (el) => {
    // dispatch(PLAYVIDEO(index));
    dispatch(PlayVideoByUsingID(el.id.videoId));
    navigate("/Video");
  };

  return (
    <div>
      <Box display={{base:"block",md:"flex"}} className={style.box} flexDir={{base:"column",md:"row"}}>
        <Box className={style.mainVideoBox}>
          {data && data.length > 0 && (
            <iframe
              className={style.mainVideo}
              title={data[videoIndex].snippet.title}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
              allowFullScreen
            ></iframe>
          )}
        </Box>
        <Box display={{base:"grid",md:"block"}} gridTemplateColumns={`repeat(${data.length},1fr)`} gridTemplateRows="10rem" gap="1rem"  className={style.recommendationBox}>
          {data &&
            data.length > 0 &&
            data.map((el, i) => (
              <Box
                // position="absolute"
                className={style.recommend}
                width={{base:"6rem",sm:"10rem",md:"95%"}}
                margin="0rem auto 0rem"
                height={{base:"6rem",sm:"10rem",md:"100%"}}
                key={i}
                onClick={() => {
                  if (i > 0 && i < data.length - 1) {
                    console.log("i:::", i);
                    setVideoIndex(i);
                  }
                }}
              >
                <Tooltip zIndex="100!important" position="absolute"  label="Play Video" placement="left" openDelay={300}>
                  <Image
                    loading="lazy"
                    onClick={() => handleClick(el)}
                    width="100%"
                    height="100%"
                    src={el.snippet.thumbnails.medium.url}
                    alt={el.snippet.title}
                    border={
                      el.id.videoId === videoId
                        ? "3px solid green"
                        : "2px solid white"
                    }
                    cursor="pointer"
                  />
                </Tooltip>
              </Box>
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default Video;
