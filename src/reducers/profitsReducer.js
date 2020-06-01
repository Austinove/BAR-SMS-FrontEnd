import { profitsConstants } from "../constants";
const initialState = {
    Loading: false,
    profitsData: ""
}
export function profitsReducer(state = initialState, action) {
    switch (action.type) {
        case profitsConstants.fetch_profits_data:
            return {
                ...state,
                Loading: true
            };
        case profitsConstants.fetch_profits_data_success:
            return {
                ...state,
                profitsData: action.profitsData,
                Loading: false
            };
        case profitsConstants.fetch_profits_data_fail:
            return {
                ...state,
                Loading: false
            };

        default:
            return state;
    }
}