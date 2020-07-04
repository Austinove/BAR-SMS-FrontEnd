import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import counterSaga from "./counter";

export default function* rooSaga(getState) {
    yield all([
        authSagas(),
        counterSaga(),
    ]);
}