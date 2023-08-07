import axios from "axios";


export const register = async (Credential)=>{
    console.log("cred:",Credential)
      try{

          let val = await axios.post("http://localhost:4505/auth/register",Credential);

          console.log(val);
      }
      catch(err){
        console.log("Error:",err.response.data);
      }
}

export const login = async (Credential)=>{
    try{

        let val = await axios.post("http://localhost:4505/auth/login",Credential);
        
        console.log(val);
    }
    catch(err){
      console.log("Error:",err.response.data);
    }
}

export const CheckEmail = async (obj)=>{
  try{
     let val = await axios.post(`http://localhost:4505/auth/verify/otp`,obj);
     console.log("val:",val);
  }
  catch(err){
    console.log("Error:",err)
  }
}