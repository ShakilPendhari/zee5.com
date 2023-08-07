import {
  GETDATA,
  GETDATAINFINITESCROLLING,
  GETQUERY,
  LOADING,
} from "./action.type";
import { getData } from "./api";

export const GetData = (obj) => async (dispatch) => {
  // console.log("query:",obj)
  dispatch({ type: LOADING });

  try {
    if (obj.query) {
      let data = await getData(dispatch, obj);
      console.log("data:", data);
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
