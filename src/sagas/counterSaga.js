import { counterConstants } from "../constants";
import {all, fork, put, takeEvery } from "redux-saga/effects";
import { 
    counterItemsSuccess,  
    saleSuccess, 
    CDCounterItemSuccess
} from "../actions/counterActions";

function* fetchItems(){
    // yield put(counterItemsSuccess(Items));
}
function* CDItem(Item){
    // yield put(CDCounterItemSuccess(itemData))
}
function* makeSale(itemData){
    // yield put(saleSuccess(itemData));
}
export function* itemsRequest(){
    yield takeEvery(counterConstants.fetch_counterItems, fetchItems);
}
export function* CDItemRequest(){
    yield takeEvery(counterConstants.CD_to_counter, CDItem);
}
export function* makeSaleRequest(){
    yield takeEvery(counterConstants.make_sale, makeSale);
}

export default function* rootSaga(){
    yield all([
        fork(itemsRequest),
        fork(CDItemRequest),
        fork(makeSaleRequest)
    ])
}