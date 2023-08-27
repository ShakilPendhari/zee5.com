import { ADDEMAIL, AUTHERROR_LOGIN, AUTHERROR_OTP, AUTHERROR_REGISTER, AUTHLOADING_LOGIN, AUTHLOADING_OTP, AUTHLOADING_REGISTER, AUTHLOGIN_INIT, AUTHREGISTER_INIT, AUTHTAKETOKEN, LOGOUTUSER } from "./auth.action.type";

const initState = {
    loading_register : false,
    error_register: false,
    loading_login : false,
    error_login : false,
    loading_otp : false,
    error_otp : false,
    token : "",
    email:"",
}

export const authReducer = (state=initState,action)=>{
    const { type, payload } = action;
    switch(type){
        // Register
        case AUTHLOADING_REGISTER : return {
            ...state,
            loading_register : true,
            error_register : false
        }
        case AUTHERROR_REGISTER : return {
            ...state,
            loading_register : false,
            error_register : true
        }
        case AUTHREGISTER_INIT : return {
            ...state,
            loading_register : false,
            error_register : false
        }

        // Login
        case AUTHLOADING_LOGIN : return {
            ...state,
            loading_login : true,
            error_login : false
        }
        case AUTHERROR_LOGIN : return {
            ...state,
            loading_login : false,
            error_login : true
        }
        case AUTHLOGIN_INIT : return {
            ...state,
            loading_login: false,
            error_login : false,
            loading_otp : false
        }

        // Otp
        case AUTHLOADING_OTP : return {
            ...state,
            loading_otp : true,
            error_otp : false,
        }
        case AUTHERROR_OTP : return {
            ...state,
            loading_otp : false,
            error_otp : true
        }
        case AUTHTAKETOKEN : return {
            ...state,
            loading_otp : false,
            error_otp : false,
            token : payload
        }
        // Add email
        case ADDEMAIL : return {
            ...state,
            email : payload,
        }
        // Logout
        case LOGOUTUSER : return (function(){
            localStorage.removeItem("sp5Token");
           return initState
        })()
        
        default : return state
    }
} 