import { counterConstants } from "../constants";
import {all, fork, put, takeEvery } from "redux-saga/effects";
import { counterItemsSuccess, addCounterItemSuccess, removeCounterItemSuccess, saleSuccess } from "../actions/counterActions";

function* fetchItems(){
    // yield put(counterItemsSuccess(Items));
}
function* addItem(Item){
    // yield put(addCounterItemSuccess(itemData))
}
function* removeItem(id){
    // yield put(removeCounterItemSuccess(itemData))
}
function* makeSale(itemData){
    // yield put(saleSuccess(itemData));
}
export function* itemsRequest(){
    yield takeEvery(counterConstants.fetch_counterItems, fetchItems);
}
export function* addItemRequest(){
    yield takeEvery(counterConstants.add_to_counter, addItem);
}
export function* removeItemRequest(){
    yield takeEvery(counterConstants.remove_from_counter, removeItem);
}
export function* makeSaleRequest(){
    yield takeEvery(counterConstants.make_sale, makeSale);
}

export default function* rootSaga(){
    yield all([
        fork(itemsRequest),
        fork(addItemRequest),
        fork(removeItemRequest),
        fork(makeSaleRequest)
    ])
}