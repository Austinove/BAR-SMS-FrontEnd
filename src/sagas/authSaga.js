import {all, fork, put, takeEvery } from "redux-saga/effects";
import { userConstants } from "../constants";
import { loginUserSuccess } from "../actions/authActions";

function* loginUser({username, password}){
    yield put(loginUserSuccess({username, password}))
}
export function* loginRequest(){
    yield takeEvery(userConstants.login_user, loginUser)
}