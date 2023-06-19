import { getData } from "./api"

const GetData = (val) => async(dispatch)=>{
       try{
            let data = await getData();
       }
       catch(err)
       {
        console.log("Error:",err)
       }
}