import React, { useState } from 'react'
// import { AuthContext } from '../Context/CreateAuthContext'
import { useSelector } from 'react-redux';
import style from "./../style/MainPages/Video.module.css"
import { Box } from '@chakra-ui/react';


const Video = () => {
  const { data } = useSelector((store)=>store.data);
  const [videoIndex, setVideoIndex] = useState(0);
  // const {videoId} = data[0].id
  // const {title} = data[0].snippet

  return <div>
    <Box className={style.box}>
    <Box className={style.mainVideoBox}>
    { data && data.length>0 && <iframe className={style.mainVideo} title={data[videoIndex].snippet.title} src={`https://www.youtube.com/embed/${data[0].id.videoId}?autoplay=1&mute=0`} allowFullScreen></iframe> }
    </Box>
    <Box className={style.recommendationBox}>
    {
      data && data.length>0 && data.map((el,i)=>(
        <Box key={i} onClick={()=>{
          if(i>0&&i<data.length-1)
          {
            console.log("i:::",i)
             setVideoIndex(i)
          }
        }}>
        {
          i<data.length-1 && i>=1 &&  <iframe className={style.recommenedideo}  title={el.snippet.title} src={`https://www.youtube.com/embed/${el.id.videoId}?autoplay=0&mute=1`} width="100%" height="100%" allowFullScreen></iframe>
        }
       
        </Box>
      ))
     }
    </Box>
    </Box>
    </div>
}

export default Video;