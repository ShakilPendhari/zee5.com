import { legacy_createStore as CreateStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { VideoReducer } from "./Video/VideoReducer";
import { authReducer } from "./Auth/auth.reducer";

const rootReducer = combineReducers({
    data:VideoReducer,
    auth:authReducer
});

const composeEnhancer = compose;

export const store = CreateStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

