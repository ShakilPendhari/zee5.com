import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios' 
import {background, Box, Heading, HStack, Image} from '@chakra-ui/react'
import '../Css/Home.css'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { RiVipCrownFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

// Raw material
import data,{Trending, Top10_movies, Latest_Hindi_ep, Top10_webseries, Blockbuster_films, premiun_Tv_ep, PopularMovies, World_hits} from "../RawMaterial/Home.js"
import { AuthContext } from '../Context/CreateAuthContext';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';




const Home = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();


  const {url, setUrl, loading, setLoading} = useContext(AuthContext)


  

  const redirectToVideo = (e)=>{
    console.log(e.target.currentSrc);
      setUrl(e.target.currentSrc)
      navigate("/video")
  }

  

 
  useEffect(()=>{
     let clousers = setInterval(()=>{

      setCount((value)=> value+1);
      console.log(count)
  
     },3000)

     return (()=>clearInterval(clousers))
  },[])

  if(count===data.length-1)
  {
    setCount((value)=>value=1);
  }

  if(loading){
    return  <>
         <button onClick = {()=>{loading? setLoading(false): setLoading(true)}}>change</button>
         <Loading/>
      </>
    
  }
 

  return (
    <div>
     {/* <button onClick = {()=>{loading? setLoading(false): setLoading(true)}}>change</button> */}
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
       {/* <Box >
            <ul style={{ display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
              <li visibility="hidden" style={{height:"10px", width:"10px", backgroundColor:count===1?"red":null, visibility:"hidden"}}></li>
              <li visibility="hidden" style={{height:"10px", width:"10px", backgroundColor:count===2?"red":null, visibility:"hidden"}}></li>
              <li style={{height:"10px", width:"10px", padding:"10px", backgroundColor:count===3?"red":null}}>1</li>
              <li style={{height:"10px", width:"10px", padding:"10px", backgroundColor:count===4?"red":null}}>2</li>
              <li style={{height:"10px", width:"10px", padding:"10px", backgroundColor:count===5?"red":null}}>3</li>
              <li style={{height:"10px", width:"10px", padding:"10px", backgroundColor:count===6?"red":null}}>4</li>
              {
                console.log("count:",count)
              }
            </ul>
          </Box> */}
       


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

       <Footer/>
    
    </div>
    
  )
}

export default Home