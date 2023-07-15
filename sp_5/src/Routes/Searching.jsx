import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetData } from '../Redux/action';
import { Box, Grid, Image } from '@chakra-ui/react';


const Searching = () => {
   const {data,page} = useSelector((store)=>store.data);
   const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(GetData({page}))
  },[page])
   
  return (
   <Grid p="0.5rem" gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(5,1fr)"}} gap="2rem">
      {
         data && data.length!==0 && data.map((el)=>(<Box width="100%" height="100%" boxShadow="0px 0px 10px 2px white" borderRadius="6px" overflow="hidden">
             <Image  loading="lazy" width="100%" height="100%" src={el.snippet.thumbnails.medium.url} alt={el.snippet.title}/>
         </Box>))
      }
   </Grid>
  )
}

export default Searching