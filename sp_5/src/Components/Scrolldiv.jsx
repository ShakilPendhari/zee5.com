import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import "../Css/Home.css"
import { useRef } from 'react';
import { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { RiVipCrownFill } from 'react-icons/ri';

const Scrolldiv = ({url,head}) => {
    const divScroll = useRef(null);
    useEffect(()=>{
     
    },[divScroll])

    const handleScroll= (scrollAmount)=>{
        console.log("scrollAmount:", scrollAmount,divScroll.current.scrollLeft)
        if(divScroll.current)
        {
          divScroll.current.scrollLeft += scrollAmount;
        }
      }
  return (
    <div  className="trendBoxDiv">
    <Heading as="h2" m="1rem 0rem 3rem 0rem">{head}</Heading>
   
    <div id="mainTopDiv">
     {
        divScroll.current && divScroll.current.scrollLeft>0 && <IoIosArrowBack onClick={()=>handleScroll(-1400)} size="3rem" className="arrowIcons back"/>
     }
    <div className="trendDiv" ref={divScroll}>
   
    {Array(10).fill(1).map((item,i) => (
    <Box  width="16rem"> <RiVipCrownFill className="KingCrown" />
          <img className="trendImg" src={`${url}${i+1}.png`} alt={`${url}${i+1}.png`} /></Box>
      ))}
      
    </div>
   
    <IoIosArrowForward onClick={()=>handleScroll(1400)} size="3rem" className="arrowIcons forward"/>
    </div>
  </div>
  )
}

export default Scrolldiv