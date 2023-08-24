import axios from "axios";
import { ERROR } from "./action.type";


export const getData = async (dispatch, {title,page}) => {
  // console.log("Title:",title);
  if (!title) {
    return;
  }
  title += " official trailer";
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=20&pageToken=${page}&q=${title}`
    );

      // console.log("data:::",data);
    return data.data;
  } catch (err) {
    console.log("Error:", err);
    dispatch({ type: ERROR, payload: err.message });
  }
};
