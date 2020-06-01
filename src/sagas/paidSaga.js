import { all, fork, put, takeEvery } from "redux-saga/effects";
import { paidConstants } from "../constants";
import { paidSuccess } from "../actions/paidActions";

function* paying(){
    // yield put(paidSuccess());
}
export function* payingRequest(){
    yield takeEvery(paidConstants.paid_request, paying)
}
export default function* rootSaga(){
    yield all([
        fork(payingRequest)
    ])
}