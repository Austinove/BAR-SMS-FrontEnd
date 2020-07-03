import { all } from "redux-saga/effects";
import authSagas from "./Auth";

export default function* rooSaga(getState) {
    yield all([
        authSagas(),
    ]);
}