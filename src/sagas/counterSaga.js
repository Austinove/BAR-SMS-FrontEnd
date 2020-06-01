import { counterConstants } from "../constants";
import {all, fork, put, takeEvery } from "redux-saga/effects";
import { 
    counterItemsSuccess,  
    saleSuccess
} from "../actions/counterActions";

function* fetchItems(){
    // yield put(counterItemsSuccess(Items));
}
function* makeSale(itemData){
    // yield put(saleSuccess(itemData));
}
export function* itemsRequest(){
    yield takeEvery(counterConstants.fetch_counterItems, fetchItems);
}
export function* makeSaleRequest(){
    yield takeEvery(counterConstants.make_sale, makeSale);
}

export default function* rootSaga(){
    yield all([
        fork(itemsRequest),
        fork(makeSaleRequest)
    ])
}