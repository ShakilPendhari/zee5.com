import axios from "axios";
import { ERROR } from "./action.type";

// export const API_KEY = "AIzaSyBpaFJVt-PmajeyJOJVlHfEn2_IRRhcbtM";
export const API_KEY = "AIzaSyA-VJTIRvKCOhHDZ-H3hDXPFgXvmWrGVzA";
// export const API_KEY = "AIzaSyAHk-W2uBzZadYl-dq2jSEm75FCkoO8xcQ";
// export const API_KEY = "AIzaSyCy8ESsFXmeeUbIsVfHF5TowFGg7vvhYmk";

export const getData = async (dispatch, { query, page }) => {
  if (!query) {
    return;
  }
  query += " official trailer";
  try {
    //   let data = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&pageToken=${page}&q=${query}&$key=${API_KEY}`)

    let data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=10&pageToken=${page}&q=${query}`
    );

    //   console.log("data:::",data);
    return data.data;
  } catch (err) {
    console.log("Error:", err);
    dispatch({ type: ERROR, payload: err.message });
  }
};
