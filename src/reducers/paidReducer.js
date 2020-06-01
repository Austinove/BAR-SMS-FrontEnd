import { paidConstants } from "../constants";

const initialState = {
    Loading: false,
    paidData: ""
}
export function payingReducer(state = initialState, action) {
    switch (action.type) {
        case paidConstants.paid_request:
            return {
                ...state,
                Loading: true
            }
        case paidConstants.paid_success:
            return {
                ...state,
                paidData: action.paidData,
                Loading: false
            }
        case paidConstants.paid_fail:
            return {
                ...state,
                Loading: false
            }
    
        default:
            return state;
    }
}