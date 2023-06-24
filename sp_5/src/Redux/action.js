import { ERROR, GETDATA, LOADING } from "./action.type";
import { getData } from "./api"

export const GetData = (query) => async(dispatch)=>{
     dispatch({type:LOADING})
       try{
          if(query)
          {
               let data = await getData(query);
               //   console.log("data:",data)
                 dispatch({type:GETDATA,payload:data})
          }
            
       }
       catch(err)
       {
          dispatch({type:ERROR})
        console.log("Error:",err)
       }
}