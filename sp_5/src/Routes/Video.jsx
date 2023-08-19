import React, { useState } from "react";
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

  const handleClick = (el) => {
    // dispatch(PLAYVIDEO(index));
    dispatch(PlayVideoByUsingID(el.id.videoId));
    navigate("/Video");
  };

  return (
    <div>
      <Box className={style.box}>
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
        <Flex flexDir="column" gap="1rem" className={style.recommendationBox}>
          {data &&
            data.length > 0 &&
            data.map((el, i) => (
              <Box
                position="relative"
                key={i}
                onClick={() => {
                  if (i > 0 && i < data.length - 1) {
                    console.log("i:::", i);
                    setVideoIndex(i);
                  }
                }}
              >
                <Tooltip position="absolute"  label="Play Video" placement="left" openDelay={300}>
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
        </Flex>
      </Box>
    </div>
  );
};

export default Video;
