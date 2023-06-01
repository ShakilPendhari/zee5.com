import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import "../Css/scrolldiv.css"
import { useRef } from 'react';
import { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { RiVipCrownFill } from 'react-icons/ri';

const Scrolldiv = ({url,head,imgCount}) => {
    const divScroll = useRef(null);
    const [ val, setVal ] = useState(true);
    const arrow = useRef(null);

    useEffect(()=>{
     
    },[divScroll,val]);

    if(!imgCount)
    {
        imgCount = 10;
    }
    else{ 
        imgCount = Number(imgCount)
    }

    const handleScroll= (scrollAmount)=>{
        
        if(divScroll.current)
        {
          divScroll.current.scrollLeft += scrollAmount;
        }
        console.log("sc:",scrollAmount===1400)
        if(scrollAmount===1400)
        {
            setVal(false)
        }
        else{
            setVal(true)
        }
      }

      const handleHover = ()=>{
           divScroll.current.style.overflow = "visible"
      }
      const handlehoverLeave = ()=>{
        console.log("Hii")
      }

  return (
    <div  className="trendBoxDiv">
    <Heading as="h2" m="1rem 0rem 3rem 0rem">{head}</Heading>
   
    <div id="mainTopDiv">
     {
       !val && <IoIosArrowBack ref={arrow} onClick={()=>handleScroll(-1400)} size="2rem" className="arrowIcons back"/>
     }
    <div className="trendDiv" onMouseLeave={handlehoverLeave} onMouseOver={handleHover} ref={divScroll}>
   
    {Array(imgCount).fill(1).map((item,i) => (
    <Box className='box BoxHover'  width="16rem"> <RiVipCrownFill className="KingCrown" />
          <img className="trendImg" src={`${url}${i+1}.png`} alt={`${url}${i+1}.png`} /></Box>
      ))}
      
    </div>

     {
        val && <IoIosArrowForward ref={arrow} onClick={()=>handleScroll(1400)} size="2rem" className="arrowIcons forward"/>
     }

    </div>
  </div>
  )
}

export default Scrolldiv