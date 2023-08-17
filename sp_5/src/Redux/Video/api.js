import axios from "axios";
import { ERROR } from "./action.type";


export const getData = async (dispatch, { query, page }) => {
  if (!query) {
    return;
  }
  query += " official trailer";
  try {
    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=15&pageToken=${page}&q=${query}`
    );

    //   console.log("data:::",data);
    return data.data;
  } catch (err) {
    console.log("Error:", err);
    dispatch({ type: ERROR, payload: err.message });
  }
};
