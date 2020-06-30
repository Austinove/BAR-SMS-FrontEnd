import { userConstants } from "../constants"
import { create } from "../api";
import { apiUrl } from "../constants";
import axios from "axios";
//Login User
export const loginUserRequest = userData => dispatch => {
  const body = {
    username: userData.loginName,
    password: userData.loginPassword
  }
  // console.log(userData);
  axios.post(`${apiUrl}/api/auth`, body).then((res) =>
    dispatch({
      type: "ADD_ITEM",
      payload: res.data,
    })
  );
  // var real;
  // const reqHeaders = {
  //   "Content-type": "application/json"
  // }
  // fetch(`${apiUrl}/api/auth`, {
  //   method: "post",
  //   headers: reqHeaders,
  //   body: JSON.stringify(body),
  // }).then(response => response.json())
  // .then(data => real = data)
  //   .catch(error => {
  //     return (error)
  //   })
  //   console.log(real);
  return {
    type: userConstants.login_user,
    userData,
  };
};
export const loginUserSuccess = User => {
  return {
    type: userConstants.login_user_success,
    User,
  };
};
//Fetching
export const fetchUsersRequest = () => {
    return {
        type: userConstants.fetch_users
    };
};
export const fetchUsersSuccess = Users => {
  return {
    type: userConstants.fetch_users_success,
    Users
  };
};
export const fetchUsersFail = () => {
  return {
    type: userConstants.fetch_users_fail
  };
};
//Registering
export const registerUserRequest = User => {
  return {
    type: userConstants.register_user,
    User,
  };
};
export const registerUserSuccess = Users => {
  return {
    type: userConstants.register_user_success,
    Users,
  };
};
export const registerUserFail = () => {
  return {
    type: userConstants.register_user_fail
  };
};
//Editing
export const editUserRequest = userData => {
  return {
    type: userConstants.edit_user,
    userData,
  };
};
export const editUserSuccess = () => {
  return {
    type: userConstants.edit_user_success
  }
};
export const editUserFail = () => {
  return {
    type: userConstants.edit_user_fail
  };
};
//Removing
export const removeUserRequest = id => {
  return {
    type: userConstants.remove_user,
    id,
  };
};
export const removeUserSuccess = Users => {
  return {
    type: userConstants.remove_user_success,
    Users,
  };
};
export const removeUserFail = () => {
  return {
    type: userConstants.remove_user_fail
  };
};
