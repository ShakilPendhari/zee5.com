import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import style from "./searchElement.module.css"

const SearchingElements = () => {
  let arr = Array(20).fill(1);
  return <>
    {
      <Grid p="0.5rem" gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(5,1fr)"}} gap="2rem">
      {
         arr && arr.length!==0 && arr.map((el,i)=>(<Box className={style.pulse} key={i} width="100%" height="11rem" boxShadow="0px 0px 10px 2px white" borderRadius="6px" overflow="hidden">
    
         </Box>))
      }
   </Grid>
    }
  </>
  
}

export default SearchingElements