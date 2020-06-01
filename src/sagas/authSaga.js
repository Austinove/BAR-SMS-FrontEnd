import {all, fork, put, takeEvery } from "redux-saga/effects";
import { userConstants } from "../constants";
import { loginUserSuccess, fetchUsersSuccess, registerUserSuccess } from "../actions/authActions";
import { create, fetchData } from "../api";

function* loginUser(payload){
    const {username, password} = payload;
    // create("api/url", null, JSON.stringify(payload));
    // yield put(loginUserSuccess({username, password}));
}
function* fetchUsers(){
    // const Users = fetchData("url", token)
    // yield put(fetchUsersSuccess())
}
function* registerUser(User){
    // yield put(registerUserSuccess(users));
}
export function* loginRequest(){
    yield takeEvery(userConstants.login_user, loginUser);
}
export function* fetchRequest(){
    yield takeEvery(userConstants.fetch_users, fetchUsers);
}
export function* registerRequest(){
    yield takeEvery(userConstants.register_user, registerUser)
}
export default function* rootSaga() {
    yield all([
        fork(loginRequest),
        fork(fetchRequest),
        fork(registerRequest)
    ])
}