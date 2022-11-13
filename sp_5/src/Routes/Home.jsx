import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios' 
import {Box, Heading, HStack, Stack, VStack, Container, Image} from '@chakra-ui/react'
import '../Css/Home.css'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { RiVipCrownFill } from 'react-icons/ri';
import Video from "./Video";
import { useNavigate } from 'react-router-dom';

// Raw material
import data,{Trending, Top10_movies, Latest_Hindi_ep, Top10_webseries, Blockbuster_films, premiun_Tv_ep, PopularMovies, World_hits} from "../RawMaterial/Home.js"
import { AuthContext } from '../Context/CreateAuthContext';

function getData(){
  return axios.get(`https://www.omdbapi.com/?apikey=a75473cf&s=love`).then((res)=>res).catch((error)=>console.log(error))
}

const Home = () => {
  const [ closu, setClosu] = useState(data[0].url);
  const [info, setInfo] = useState("hgf");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const {url, setUrl} = useContext(AuthContext)

  const redirectToVideo = (e)=>{
    console.log(e.target.currentSrc);
      setUrl(e.target.currentSrc)
      navigate("/video")
  }

  useEffect(()=>{
    //  getData().then((res)=>{setInfo(res.data); console.log(res)}).catch((error)=>console.log(error))
  },[])

  // let i = 0;
  // i++;

  useEffect(()=>{
     let clousers = setInterval(()=>{

      // setClosu(data[count].url);
      setCount((value)=> value+1);
      console.log(count)
     
        
        //  setClosu(data[i].url);
        //  console.log(i)
        //  i++;
        //  if(i===4)
        //  {
        //   i=0;
        //  }
     },3000)

     return (()=>clearInterval(clousers))
  },[])

  if(count===data.length-1)
  {
    setCount((value)=>value=1);
  }
 



  return (
    <div>
    {console.log(count)}
       <div className='clousor'>
          <Box disabled={count<=1} onClick={()=>{if(count>=1){setCount((value)=> value-1)}else{ setCount((value)=> value=data.length-2) }}}>
             <SlArrowLeft className='logoClouser' />
          </Box>
          <Box display="flex">
             {/* <img style={{flex:"1"}} src={data[count-1].url} alt="prev"/> */}
             <img style={{width:"100%", height:"65vh", flex:"3"}} src={data[count].url} alt="movie"/>
             {/* <img style={{flex:"1"}} src={data[count+1].url} alt="prev"/> */}
          </Box>
          <Box  disabled={count<=data.length-1} onClick={()=>{setCount((value)=> value+1)}}>
              <SlArrowRight className='logoClouser' />
          </Box>
       </div>
       


       {/* Trending Near You */}

       <div>
        <Heading as='h2'>Trending Near You</Heading>
        <HStack >

        {
          
          Trending.map((item)=>(
            <div className='BoxHover' onClick={redirectToVideo}  position="relative" key={item.url+1} >
            <RiVipCrownFill className='KingCrown'/>
              <Image  src={item.url} alt={item.url} />
            </div>
           ))
        }

        </HStack>
        
       </div>


       <div>
        <Heading as='h2'>Top 10 Movies in India</Heading>
        <HStack>

        {
          Top10_movies.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>



       <div>
        <Heading as='h2'>Latest Hindi Episodes Free</Heading>
        <HStack>

        {
          Latest_Hindi_ep.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>



       <div>
        <Heading as='h2'>Top 10 Web Series in India</Heading>
        <HStack>

        {
          Top10_webseries.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>



       <div>
        <Heading as='h2'>Blockbuster Films</Heading>
        <HStack>

        {
          Blockbuster_films.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>



       <div>
        <Heading as='h2'>Premium Before TV Ep | ZEE TV</Heading>
        <HStack>

        {
          premiun_Tv_ep.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>



       <div>
        <Heading as='h2'>Popular Movies</Heading>
        <HStack>

        {
          PopularMovies.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>

       <div>
        <Heading as='h2'>World Hits | Free Dubbed Movies</Heading>
        <HStack>

        {
          World_hits.map((item)=>(
            <Box className='BoxHover'  position="relative" key={item.url+1} >
              <Image src={item.url} alt={item.url} />
               <RiVipCrownFill className='KingCrown'/>
            </Box>
           ))
        }

        </HStack>
        
       </div>
    
    </div>
    
  )
}

export default Home