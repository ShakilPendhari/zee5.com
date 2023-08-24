import {
  GETDATA,
  GETDATAINFINITESCROLLING,
  GETQUERY,
  IsPREMIUM,
  LOADING,
  PLAYVIDEO,
  TAKEVIDEOID,
} from "./action.type";
import { getData } from "./api";

export const GetData = (obj) => async (dispatch) => {
  let { title } = obj;
  // console.log("OBJ::",obj);

  dispatch({ type: LOADING });

  try {
    if (title) {
      let data = await getData(dispatch, obj);
      dispatch(PlayVideoByUsingID(data.items[0].id.videoId))
      // console.log("data:", data);
      dispatch({ type: GETDATA, payload: data.items });
      return data;
    }
  } catch (err) {
    // dispatch({type:ERROR,payload:data})
    console.log("Error:", err);
  }
};

export const UpdateData = (obj) => async (dispatch) => {
  dispatch({ type: GETQUERY, payload: obj.query });
  // console.log("This is obj:",obj)
  dispatch(GetData(obj));
};

export const InfiniteScrolling = (obj) => async (dispatch) => {
  dispatch({ type: GETDATAINFINITESCROLLING, payload: obj.page });
  dispatch(GetData(obj));
};


export const PlayVideo = (index)=> async (dispatch)=>{
  console.log("hello:",index)
  // dispatch({type:PLAYVIDEO,payload:index});
}

export const PlayVideoByUsingID = (id)=>(dispatch)=>{
  // console.log("isPremuim::::::::",isPremium)
   dispatch({type:TAKEVIDEOID,payload:id})
}

export const IsPremium = (flag)=>(dispatch)=>{
  dispatch({type:IsPREMIUM,payload:flag});
}