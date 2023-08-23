import { legacy_createStore as CreateStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { VideoReducer } from "./Video/VideoReducer";
import { authReducer } from "./Auth/auth.reducer";

const rootReducer = combineReducers({
    data:VideoReducer,
    auth:authReducer
});

// const composeEnhancer = compose;
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = CreateStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const logger = (state)=> (next)=> (action)=>{
//    // before dispatching action
//    //1
//    console.log(action);
//    // axios.post("user is watching lots of earphones");

//    //2
//    if(action.type === "theme/toggle" || "counter/inc"||"counter/dec"){
//       let updateData = next(action);
//       console.log(updateData)
//       return updateData;
//    }
// };

export const store = CreateStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))


