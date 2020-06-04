import {all, fork, put, takeEvery } from "redux-saga/effects";
import { userConstants } from "../constants";
import { 
    loginUserSuccess, 
    fetchUsersSuccess, 
    registerUserSuccess, 
    editUserSuccess 
} from "../actions/authActions";
import { create, fetchData } from "../api";
const Users = [
    {
        name: "Bryan Austin",
        contact: "0783003300",
    },
    {
        name: "K De Austin",
        contact: "0783003300",
    },
    {
        name: "Bryan De French",
        contact: "0783003300",
    }
];

function* loginUser(payload){
    const {username, password} = payload;
    // create("api/url", null, JSON.stringify(payload));
    // yield put(loginUserSuccess({username, password}));
}
function* fetchUsers(){
    // const Users = fetchData("url", token)
    yield put(fetchUsersSuccess(Users));
}
function* registerUser(userData){
    yield put(registerUserSuccess(Users));
}
function* editUser(userData){
    yield put(editUserSuccess(Users));
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
export function* editRequest(){
    yield takeEvery(userConstants.edit_user, editUser)
}
export default function* rootSaga() {
    yield all([
        fork(loginRequest),
        fork(fetchRequest),
        fork(registerRequest),
        fork(editRequest)
    ])
}