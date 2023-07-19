import { ERROR, GETDATA, GETDATAINFINITESCROLLING, GETQUERY, LOADING } from "./action.type"

const initState = {
    loading:false,
    error:false,
    prevData:[],
    data:[],
    page:"",
    query:""
}

export const reducer = (state=initState,{type,payload})=>{
    const {data,prevData} = state;
    // console.log("type:",type,"payload:",payload,"state::",state)
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
            error:payload,
            data:[]
        }
        case GETDATA : return {
            ...state,
            loading:false,
            error:false,
            prevData:[...data],
            data:[...prevData,...payload]
        }
        case GETDATAINFINITESCROLLING : return {
            ...state,
            loading:false,
            error:false,
            page:payload
        }
        case GETQUERY : return {
            ...state,
            loading:false,
            error:false,
            query:payload
        }
        default : 
            return state
    }
}