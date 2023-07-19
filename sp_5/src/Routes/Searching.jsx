import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetData, InfiniteScrolling } from '../Redux/action';
import { Box, Grid, Image } from '@chakra-ui/react';
import SearchingElements from '../Components/Skeleton/SearchElement/SearchingElements';


const Searching = () => {
   const {data,page,query,loading,error} = useSelector((store)=>store.data);
   const dispatch = useDispatch();
   const id = useRef(null);
   const newQuery = useRef(null);

//   useEffect(()=>{
//    dispatch(GetData({page}))
//   },[]);

  useEffect(()=>{
   window.addEventListener("scroll",handleScroll);

   return ()=>{
      window.removeEventListener("scroll",handleScroll);
      clearTimeout(id.current);
   }
  },[dispatch,page]);

  function handleScroll(){
 
      let {clientHeight,scrollTop, scrollHeight} = document.documentElement;
      // console.log(clientHeight,scrollHeight,scrollTop)
  
      if(Math.ceil(scrollTop+clientHeight)>=scrollHeight)
      {

         if(id.current)
         {
            clearTimeout(id.current);
         }
         id.current = setTimeout(()=>{
            if(data.length)
            {
               dispatch(InfiniteScrolling({page,query}));
            }
         },[300]);
      }
  }


  if(loading)
  {
    return <>
      {
        <SearchingElements/>
      }
    </>
  }
  
  if(error){
       return <h1>{error}</h1>
  }

  return (
   <Grid p="0.5rem" gridTemplateColumns={{base:"repeat(2,1fr)",sm:"repeat(3,1fr)",md:"repeat(5,1fr)"}} gap="2rem">
      {
         data && data.length!==0 && data.map((el,i)=>(<Box key={i} width="100%" height="100%" boxShadow="0px 0px 10px 2px white" borderRadius="6px" overflow="hidden">
             <Image  loading="lazy" width="100%" height="100%" src={el.snippet.thumbnails.medium.url} alt={el.snippet.title}/>
         </Box>))
      }
   </Grid>
  )
}

export default Searching