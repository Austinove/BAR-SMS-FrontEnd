import { userConstants } from "../constants";

const initialState = {
    Users:[],
    Loading: false,
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.login_user:
            return {
                ...state,
                Loading: true
            };
        case userConstants.login_user_success:
            return {
                ...state,
                Loading: false
            };
        case userConstants.login_user_fail:
            return {
                ...state,
                Loading: false
            };
        case userConstants.fetch_users:
            return {
                ...state,
                Loading: true
            };
        case userConstants.fetch_users_success:
            return {
                ...state,
                Users: action.Users,
                Loading: false
            };
        case userConstants.fetch_users_fail:
            return {
                ...state,
                Loading: false
            };
        case userConstants.register_user:
            return {
                ...state,
                Loading: true
            };
        case userConstants.register_user_success:
            return {
                ...state,
                Users: action.Users,
                Loading: false
            };
        case userConstants.register_user_fail:
            return {
                ...state,
                Loading: false
            };
        case userConstants.edit_user:
            return {
                ...state,
                Loading: true
            };
        case userConstants.edit_user_success:
            return {
                ...state,
                Loading: false
            };
        case userConstants.edit_user_fail:
            return {
                ...state,
                Loading: false
            };
        case userConstants.remove_user:
            return {
                ...state,
                Loading: true
            };
        case userConstants.remove_user_success:
            return {
                ...state,
                Users: action.Users,
                Loading: false
            };
        case userConstants.remove_user_fail:
            return {
                ...state,
                Loading: false
            };
            
    
        default:
            return state;
    }
}