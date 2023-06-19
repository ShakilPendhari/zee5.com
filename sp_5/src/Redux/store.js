import { legacy_createStore as CreateStore} from "redux";
import { reducer } from "./reducer";

export const store = CreateStore(reducer)