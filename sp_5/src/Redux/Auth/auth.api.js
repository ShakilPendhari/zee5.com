import axios from "axios";

// cyclic url
let URL = "https://blue-elated-hare.cyclic.app"

// local URL
// let URL = http://localhost:4505


export const register = async (Credential)=>{
    console.log("cred:",Credential)
      try{

          let val = await axios.post(`${URL}/auth/register`,Credential);

          console.log(val);
      }
      catch(err){
        console.log("Error:",err.response.data);
      }
}

export const login = async (Credential)=>{
    try{

        let val = await axios.post(`${URL}/auth/login`,Credential);
        
        console.log(val);
    }
    catch(err){
      console.log("Error:",err.response.data);
    }
}

export const CheckEmail = async (obj,route,Alert)=>{
  try{
     let val = await axios.post(`${URL}/auth/verify/otp`,obj);
     console.log("val:",val);
     if(val.data.token)
     {
      Alert({
        title: "Verification Succssful, You are being redirected to Home Page",
        status: "success",
        isClosable: true,
        duration:4000,
        position:"top"
      })
        route("/")
     }
  }
  catch(err){
    Alert({
      title: "OTP doesn't match, Please Provide valide OTP",
      status: "error",
      isClosable: true,
      duration:4000,
      position:"top"
    })
    console.log("Error:",err)
  }
}