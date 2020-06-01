import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "./authReducer";
import { counterReducer } from "./counterReducer";
import { expencesReducer } from "./expencesReducer";
import { itemsReducer } from "./itemsReducer";
import { payingReducer } from "./paidReducer";
import { profitsReducer } from "./profitsReducer";

export default history => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    counter: counterReducer,
    expences: expencesReducer,
    storeData: itemsReducer,
    paying: payingReducer,
    profits: profitsReducer
});
