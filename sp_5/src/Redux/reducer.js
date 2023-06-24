import { ERROR, GETDATA, LOADING } from "./action.type"

const initState = {
    loading:false,
    error:false,
    data:[],
}

export const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case LOADING :return {
            ...state,
            loading:true,
            error:false,
            data:[]
        }
        case ERROR :return {
            ...state,
            loading:false,
            error:true,
            data:[]
        }
        case GETDATA : return {
            ...state,
            loading:false,
            error:false,
            data:payload
        }
        default : 
            return state
    }
}