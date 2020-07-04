/* eslint-disable no-console */
import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { counterConstants } from "../constants"
import {
    counterItemsSuccess,
    counterItemsFailure
} from "../actions/counterActions";
import { push } from "connected-react-router";
import { API, counterAPI } from "../api";

function* fetchItems() {
    console.log("reached saga");
    try {
        const Items = yield call(API.request, counterAPI.fetchCounterItemsApi());
        if(!Items) {
            throw new Error("No list fetched");
        }
        yield put(counterItemsSuccess(Items));
    } catch (error) {
        console.log(error);
    }
}

function* makeSale() {}

function* fetchSales() {}

export function* getCounterItems() {
    yield takeEvery(counterConstants.fetch_counterItems, fetchItems);
}
export function* saleItem() {
    yield takeEvery(counterConstants.make_sale, makeSale);
}
export function* fetchItemSales() {
    yield takeEvery(counterConstants.fetch_sales, fetchSales);
}

export default function* rootSaga() {
    yield all([
        fork(getCounterItems),
        fork(saleItem),
        fork(fetchItemSales)
    ]);
}
