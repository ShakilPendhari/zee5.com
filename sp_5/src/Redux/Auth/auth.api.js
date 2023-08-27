import axios from "axios";
import { AUTHREGISTER_INIT, LOGOUTUSER } from "./auth.action.type";

// cyclic url
let URL = process.env.REACT_APP_BACKEND_URL;

// local URL
// let URL = "http://localhost:5000"



export const register_api = async (Credential,Alert,dispatch,route) => {
  // console.log("cred:", Credential);
  try {
    let val = await axios.post(`${URL}/auth/register`, Credential);
    return val;
  } catch (err) {
    console.log(err.response.data.msg === "Email already exists")
    if(err.response.data.msg === "Email already exists")
    {
      console.log("hello")
      Alert({
        title: `${err.response.data.msg}`,
        status: "info",
        isClosable: true,
        duration: 2000,
        position: "top",
      });
      route("/login");
      dispatch({type:AUTHREGISTER_INIT})
    }
    else{
      Alert({
        title: `${err.response.data.msg}`,
        status: "error",
        isClosable: true,
        duration: 2000,
        position: "top",
      });
      console.log("Error:", err.response.data);
      dispatch({type:AUTHREGISTER_INIT});
    }
  }
};



export const login_api = async (Credential) => {
  try {
    let val = await axios.post(`${URL}/auth/login`, Credential);
    console.log("Val.data.msg:", val.data.msg,"val:::",val);
    return val;
  } catch (err) {
    console.log("Error:", err.response.data);
  }
};



export const CheckEmailorMob_api = async (cred) => {
  // console.log("cred:", cred);
  try {
    let val = await axios.post(`${URL}/auth/verify/otp`, cred);
    // console.log("val:", val);
    return val
  } catch (err) {
    console.log("Error:", err);
  }
};

export const Logout = ()=>(dispatch)=>{
   dispatch({type:LOGOUTUSER})
}
