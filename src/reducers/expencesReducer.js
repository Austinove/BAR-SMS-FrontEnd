import { expencesConstants } from "../constants";
const initialState = {
    Loading: false,
    Expences: ""
};
export function expencesReducer(state = initialState, action) {
    switch (action.type) {
        case expencesConstants.fetch_expences:
            return {
                ...state,
                Loading: true,
            }
        case expencesConstants.fetch_expences_success:
            return {
                ...state,
                Expences: action.Expences,
                Loading: false,
            }
        case expencesConstants.fetch_expences_fail:
            return {
                ...state,
                Loading: false,
            }

        default:
            return state;
    }
}