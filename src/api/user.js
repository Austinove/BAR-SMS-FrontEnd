/* eslint-disable no-console */
// import { authHeader } from "../helpers";
import { apiUrl } from "../constants";
import API from "./api";

const login = (username, password) => {
    const data = {
        username,
        password
    };

    return {
        url: `${apiUrl}/api/auth`,
        opt: API.requestOptions(
            "POST",
            null,
            {},

            { body: JSON.stringify(data) }
        )
    };
};

// const logout = token => {
//     return {
//         url: `${apiUrl}/api/auth/logout`,
//         opt: API.requestOptions("POST", token)
//     };
// };

// const getUser = token => {
//     return {
//         url: `${apiUrl}/api/auth/me`,
//         opt: API.requestOptions("GET", token)
//     };
// };

// const refeshToken = token => {
//     return {
//         url: `${apiUrl}/api/auth/refresh`,
//         opt: API.requestOptions("POST", token)
//     };
// };
// const register = user => {
//     return {
//         url: `${apiUrl}/api/auth/signup`,
//         opt: API.requestOptions(
//             "POST",
//             null,
//             { ...authHeader(), "Content-Type": "application/json" },
//             { body: JSON.stringify(user) }
//         )
//     };
// };

// const update = (email, password) => {
//     const data = {
//         username: email,
//         password: password
//     };

//     return {
//         url: `${apiUrl}/api/updateUser`,
//         opt: API.requestOptions(
//             "PUT",
//             null,
//             { ...authHeader(), "Content-Type": "application/json" },
//             { body: JSON.stringify(data) }
//         )
//     };
// };

export const userService = {
    login,
    // logout,
    // register,
    // update,
    // getUser,
    // refeshToken
};

export default {
    login,
    // logout,
    // register,
    // update,
    // getUser,
    // refeshToken
};
