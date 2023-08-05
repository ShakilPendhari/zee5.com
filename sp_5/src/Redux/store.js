import { legacy_createStore as CreateStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { VideoReducer } from "./Video/VideoReducer";

const rootReducer = combineReducers({
    data:VideoReducer,
});

const composeEnhancer = compose;

export const store = CreateStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

