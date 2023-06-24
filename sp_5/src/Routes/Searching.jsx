import React from 'react'
import {  useEffect,useState } from 'react';
// import { AuthContext } from '../Context/CreateAuthContext';
import axios from 'axios' 
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { RiVipCrownFill } from 'react-icons/ri';

const API_KEY = "AIzaSyBpaFJVt-PmajeyJOJVlHfEn2_IRRhcbtM";

const Searching = () => {
   //  const {url, setUrl,dataurl, setDataurl, change, setChange,obj} = useContext(AuthContext);
    const navigate = useNavigate();


    const [data, setData] = useState([]);
    const [resp, setResp] = useState(false);

    const redirectToVideo = (e)=>{
        console.log(e);
         //  setUrl(e.target.currentSrc)
          navigate("/video")
      }
    

    //api key1:-  73a7c3b5
    //api key2:-  a75473cf

    // function getData(para){
    //     return 

    
  useEffect(()=>{

    let setTi = setTimeout(()=>{
        // axios.get(`https://www.omdbapi.com/?apikey=73a7c3b5&s=${change}`).then((res)=>{
        //     setData(res.data.Search); 
        //     console.log("search:",res.data.Search); setResp(res.data.Response) }).catch((error)=>
        //     console.log(error)
        //     );
         axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${'taj'}&$key=${API_KEY}`).then((res)=>{
            setData(res); 
            console.log("search:",res); setResp(res.data.Response) }).catch((error)=>
            console.log(error)
            );
            
    },500)

    return ()=> clearTimeout(setTi)
 },[])


 console.log("res:", resp)

 if(data){

    return (
        <div className='mainCont'>

           { resp &&
            data.map((item)=>(
                <div 
                   className='BoxHover' 
                   onClick={redirectToVideo} 
                   key={item.imdbID}>

                    <img 
                       name={[item.Title, item.year, item.Type]} 
                       className='imgRedirect' 
                       src={item.Poster} 
                       alt={item.imdbID}/>

                    <RiVipCrownFill 
                       className='KingCrown'/>

                    <p>Title : {item.Title.slice(0,15)} {item.Title.length>=15?"...":null}</p>

                    <p>YOR : {item.Year}</p>

                    <p>Type : {item.Type}</p>

                </div>
            ))
           }
        </div>
      )
 }
}

export default Searching