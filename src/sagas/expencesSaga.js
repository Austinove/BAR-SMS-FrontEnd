import { all, fork, put, takeEvery } from "redux-saga/effects";
import { expencesConstants } from "../constants";
import { fetchExpencesSuccess } from "../actions/expencesActions";
const expenceData = [
    {
        desc: "This was spent on food",
        amount: 5000
    },
    {
        desc: "Taken home by a family member called Austin",
        amount: 10000
    }
]
function* fetchExpences(){
    yield put(fetchExpencesSuccess(expenceData));
}
export function* expencesRequest(){
    yield takeEvery(expencesConstants.fetch_expences, fetchExpences);
}

export default function* rootSaga(){
    yield all([
        fork(expencesRequest)
    ])
}
