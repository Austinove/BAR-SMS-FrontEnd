import { all, fork, put, takeEvery } from "redux-saga/effects";
import { profitsConstants } from "../constants";
import { fetchProfitsDataSuccess } from "../actions/profitsActions";
const profitsData = [100000, 150000, 60000, 70000];
function* fetchData(){
    yield put(fetchProfitsDataSuccess(profitsData));
}
export function* fetchDataRequest(){
    yield takeEvery(profitsConstants.fetch_profits_data, fetchData);
}
export default function* rootSaga(){
    yield all([
        fork(fetchDataRequest)
    ])
}