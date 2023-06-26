import axios from "axios";

export const API_KEY = "AIzaSyBpaFJVt-PmajeyJOJVlHfEn2_IRRhcbtM";


export const getData = async(query)=>{
     query += "official trailor"
     try{
        let data = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&$key=${API_KEY}`)
      //   console.log(data);
        return data.data.items;
     }
     catch(err){
        console.log("Error:",err);
     }
}