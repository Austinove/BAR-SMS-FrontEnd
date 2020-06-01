import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import counterSaga from "./counterSaga";
import expencesSaga from "./expencesSaga";
import itemsSaga from "./itemsSaga";
import paidSaga from "./paidSaga";
import profitsSaga from "./profitsSaga"

export default function* rootSaga(getState) {
    yield all([
        authSaga(),
        counterSaga(),
        expencesSaga(),
        itemsSaga(),
        paidSaga(),
        profitsSaga()
    ]);
};