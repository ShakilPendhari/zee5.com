import { legacy_createStore as CreateStore,combineReducers,compose,applyMiddleware} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data:reducer
});

const composeEnhancer = compose;

export const store = CreateStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

