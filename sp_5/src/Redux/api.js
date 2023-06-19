import axios from "axios";


export const getData = async(val)=>{
     try{
        let data = await axios.get('')
        return;
     }
     catch(err){
        console.log("Error:",err);
     }
}