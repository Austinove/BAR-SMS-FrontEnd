import { all, fork, put, takeEvery } from "redux-saga/effects";
import { expencesConstants } from "../constants";
import { fetchExpencesSuccess } from "../actions/expencesActions";

function* fetchExpences(){
    // yield put(fetchExpencesSuccess(Expences));
}
export function* expencesRequest(){
    yield takeEvery(expencesConstants.fetch_expences, fetchExpences);
}

export default function* rootSaga(){
    yield all([
        fork(expencesRequest)
    ])
}
