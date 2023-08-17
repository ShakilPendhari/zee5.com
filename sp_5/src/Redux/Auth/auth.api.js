import axios from "axios";

// cyclic url
// let URL = process.env.REACT_APP_BACKEND_URL

// local URL
let URL = "http://localhost:5000"


export const register = async (Credential,route,Alert)=>{
    console.log("cred:",Credential)
      try{

          let val = await axios.post(`${URL}/auth/register`,Credential);
          console.log(val)

          Alert({
            title: `${val.data}`,
            status: "success",
            isClosable: true,
            duration:4000,
            position:"top"
          })
            route("/login")
      }
      catch(err){
        Alert({
          title: `${err.response.data.msg}`,
          status: "error",
          isClosable: true,
          duration:2000,
          position:"top"
        })
        console.log("Error:",err.response.data);
      }
}

export const login = async (Credential,route,Alert)=>{
    try{

        let val = await axios.post(`${URL}/auth/login`,Credential);
        console.log("Val:",val.data.msg);
        Alert({
          title: `${val.data.msg}`,
          status: "success",
          isClosable: true,
          duration:4000,
          position:"top"
        });

        if(route && val.data.method === "mobile")
        {
           route("/verify-mobileNo");
        }
        if(route && val.data.method === "email"){
          route("/verify-email");
        }
    }
    catch(err){
      Alert({
        title: `${err.response.data.msg}`,
        status: "warning",
        isClosable: true,
        duration:2000,
        position:"top"
      })
      console.log("Error:",err.response.data);
    }
}

export const CheckEmailorMob = async (obj,route,Alert)=>{
  console.log("Obj:",obj)
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
