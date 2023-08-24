import {
  ERROR,
  GETDATA,
  GETDATAINFINITESCROLLING,
  GETQUERY,
  IsPREMIUM,
  LOADING,
  PLAYVIDEO,
  TAKEVIDEOID,
} from "./action.type";

const initState = {
  loading: false,
  error: false,
  prevData: [],
  data: [],
  page: "",
  query: "",
  videoId: "",
  isPremium:false
};

export const VideoReducer = (state = initState, { type, payload }) => {
  const { data, prevData } = state;
  // console.log("type:",type,"payload:",payload,"state::",state)
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };
    case GETDATA:
      return {
        ...state,
        loading: false,
        error: false,
        prevData: [...data],
        data: [...prevData, ...payload],
      };
    case GETDATAINFINITESCROLLING:
      return {
        ...state,
        loading: false,
        error: false,
        page: payload,
      };
    case GETQUERY:
      return {
        ...state,
        loading: false,
        error: false,
        query: payload,
      };
    case PLAYVIDEO:
        console.log("data:",data[payload])
      return {
        ...state,
        loading: false,
        error: false,
        videoId: data[payload].id.videoId,
        data: data.filter((el, i) => i !== payload),
      };
    case TAKEVIDEOID :return{
      ...state,
      loading : false,
      error : false,
      videoId : payload
    }
    case IsPREMIUM : return {
      ...state,
      isPremium : payload
    }
    default:
      return state;
  }
};
