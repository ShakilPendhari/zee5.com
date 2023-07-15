import axios from "axios";

export const API_KEY = "AIzaSyBpaFJVt-PmajeyJOJVlHfEn2_IRRhcbtM";


export const getData = async({query,page})=>{
   if(!query)
   {
      return
   }
     query += " official trailer"
     try{
      //   let data = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&pageToken=${page}&q=${query}&$key=${API_KEY}`)

      let data = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=20&pageToken=${page}&q=${query}`)
      
      //   console.log("data:::",data);
        return data.data;
     }
     catch(err){
        console.log("Error:",err);
     }
}