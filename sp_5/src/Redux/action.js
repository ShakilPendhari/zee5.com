import { ERROR, GETDATA, GETDATAINFINITESCROLLING, GETQUERY, LOADING } from "./action.type";
import { getData } from "./api"

export const GetData = (obj) => async(dispatch)=>{
    console.log("query:",obj)
     dispatch({type:LOADING})
       try{
          if(obj.query)
          {
               let data = await getData(obj);
               console.log("data::::$%^:",data.items);
               dispatch({type:GETDATAINFINITESCROLLING,payload:data.nextPageToken})
               dispatch({type:GETDATA,payload:data.items});
          }
       }
       catch(err)
       {
          dispatch({type:ERROR})
        console.log("Error:",err)
       }
}

export const UpdateData = (obj)=> async (dispatch)=>{
    dispatch({type:GETQUERY,payload:obj.query});
    console.log("This is obj:",obj)
    dispatch(GetData(obj))
}

export const InfiniteScrolling = (obj)=> async (dispatch)=>{
    dispatch({type:GETDATAINFINITESCROLLING,payload:obj.page});
    dispatch(GetData(obj))
}