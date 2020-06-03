import { counterConstants } from "../constants";
const initialState = {
    Loading: false,
    counterItems: [],
};
export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case counterConstants.fetch_counterItems:
            return {
                ...state,
                Loading: true
            };
        case counterConstants.fetch_counterItems_success:
            return {
                ...state,
                counterItems: action.Items,
                Loading: false
            };
        case counterConstants.fetch_counterItems_fail:
            return {
                ...state,
                Loading: false
            };
        case counterConstants.make_sale:
            return {
                ...state,
                Loading: true
            };
        case counterConstants.make_sale_success:
            return {
                ...state,
                counterItems: action.itemsData,
                Loading: false
            };
        case counterConstants.make_sale_fail:
            return {
                ...state,
                Loading: false
            };
        default:
            return state;
    }
}