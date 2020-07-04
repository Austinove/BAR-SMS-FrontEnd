/* eslint-disable no-console */
import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { userConstants } from "../constants"
import {
    loginUserSuccess,
    registerUserSuccess,
    registerUserFail,
    editUserSuccess,
    editUserFail,
    removeUserSuccess,
    removeUserFail
} from "../actions/authActions";
import { push } from "connected-react-router";
import { API, userAPI } from "../api";
function* signInUser({ userData }) {
  const username = userData.loginName;
  const password = userData.loginPassword;
  try {
    const authData = yield call(API.request, userAPI.login(username, password));
    if (!authData) {
        console.log("Authentication Failed!");
      throw new Error("Authentication Failed!");
    }

    // //fetch user info
    // let userData = yield call(API.request, userAPI.getUser(authData.token));

    // userData.token = authData.token;

      yield put(loginUserSuccess(authData));

    localStorage.setItem("sys_user", JSON.stringify(authData));
    // yield put(push("/"));

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export function* signInUserRequest() {
    yield takeEvery(userConstants.login_user, signInUser);
}

export default function* rootSaga() {
  yield all([
    fork(signInUserRequest)
  ]);
}
