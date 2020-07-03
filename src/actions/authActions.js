import { userConstants } from "../constants"
//Login User
export const loginUserRequest = userData => {
  console.log('Actions', userData);
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
