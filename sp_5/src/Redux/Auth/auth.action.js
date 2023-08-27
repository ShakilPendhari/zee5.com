
import jwtDecode from "jwt-decode";
import { ADDEMAIL, AUTHERROR_LOGIN, AUTHERROR_OTP, AUTHERROR_REGISTER, AUTHLOADING_LOGIN, AUTHLOADING_OTP, AUTHLOADING_REGISTER, AUTHLOGIN_INIT, AUTHREGISTER_INIT, AUTHTAKETOKEN } from "./auth.action.type";
import { CheckEmailorMob_api, login_api, register_api } from "./auth.api";

export const Register =  (Credential, route, Alert) => async (dispatch) => {
  // console.log("cred:", Credential);
  dispatch({ type: AUTHLOADING_REGISTER });
  try {
    let val = await register_api(Credential,Alert,dispatch,route);
    // console.log(val);
    Alert({
      title: `${val.data}`,
      status: "success",
      isClosable: true,
      duration: 4000,
      position: "top",
    });
    dispatch({type:AUTHREGISTER_INIT})
    route("/login");

  } catch (err) {
    Alert({
      title: `${err.response.data}`,
      status: "error",
      isClosable: true,
      duration: 2000,
      position: "top",
    });
    console.log("Error:", err.response.data);
    dispatch({ type: AUTHERROR_REGISTER });
  }
};

export const Loginn = (Credential, route, Alert) => async (dispatch) => {
  dispatch({type:AUTHLOADING_LOGIN})
  try {
    let val = await login_api(Credential);
    console.log("Val:", val.data);
    if(val.data === 'You are not registed!')
    {
      Alert({
        title: `${val.data}`,
        status: "warning",
        isClosable: true,
        duration: 2000,
        position: "top",
      });
      dispatch({type:AUTHLOGIN_INIT});
     
      return
    }
    Alert({
      title: `${val.data.msg}`,
      status: "success",
      isClosable: true,
      duration: 2000,
      position: "top",
    });

    if (route && val.data.method === "mobile") {
      route("/verify-mobileNo");
    }
    if (route && val.data.method === "email") {
      route("/verify-email");
    }

    dispatch({type:AUTHLOGIN_INIT});
  } catch (err) {
    dispatch({ type: AUTHERROR_LOGIN });
    Alert({
      title: `${err.response.data.msg}`,
      status: "warning",
      isClosable: true,
      duration: 2000,
      position: "top",
    });
    console.log("Error:", err.response.data);
  }
};

export const CheckEmailorMob = (obj, route, Alert) => async (dispatch) => {
  // console.log("Obj:",obj)
  dispatch({ type: AUTHLOADING_OTP });
  try {
    let val = await CheckEmailorMob_api(obj);
    console.log("Valll:::",val.data,"Value::",jwtDecode(val.data.token))
    // console.log("val:", val,"obj::",jwtDecode(val.data.token),"Date.now()::",Date.now());
     localStorage.setItem("sp5Token",JSON.stringify(val.data.token))
     dispatch(AddEmail(jwtDecode(val.data.token).email))
     dispatch(AddToken(val.data.token))
    if (val.data.token) {
      Alert({
        title: "Verification Succssful, You are being redirected to Home Page",
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "top",
      });
      route("/");
    }
  } catch (err) {
    dispatch({ type: AUTHERROR_OTP });
    Alert({
      title: "OTP doesn't match, Please Provide valide OTP",
      status: "error",
      isClosable: true,
      duration: 4000,
      position: "top",
    });
    console.log("Error:", err);
  }
};


export const AddToken = (token)=>(dispatch)=>{
  dispatch({ type: AUTHTAKETOKEN, payload: token });
}

export const AddEmail = (email)=> (dispatch) =>{
  dispatch({type:ADDEMAIL,payload:email})
}