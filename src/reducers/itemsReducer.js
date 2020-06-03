import { itemsConstants } from "../constants";

const initialState = {
    Loading: false,
    storeItems: [],
    Logs: []
}
export function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case itemsConstants.fetch_storeItems:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.fetch_storeItems_success:
            return {
                ...state,
                storeItems: action.Items,
                Loading: false
            };
        case itemsConstants.fetch_storeItems_fail:
            return {
                ...state,
                Loading: false
            };
        case itemsConstants.add_storeItem:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.add_storeItem_success:
            return {
                ...state,
                storeItems: action.Items,
                Loading: false
            };
        case itemsConstants.add_storeItem_fail:
            return {
                ...state,
                Loading: false
            };
        case itemsConstants.create_storeItem:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.create_storeItem_success:
            return {
                ...state,
                storeItems: action.Items,
                Loading: false,
            };
        case itemsConstants.create_storeItem_fail:
            return {
                ...state,
                Loading: false
            };
        case itemsConstants.edit_storeItem:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.edit_storeItem_success:
            return {
                ...state,
                storeItems: action.Items,
                Loading: false,
            };
        case itemsConstants.edit_storeItem_fail:
            return {
                ...state,
                Loading: false
            };
        case itemsConstants.delete_storeItem:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.delete_storeItem_success:
            return {
                ...state,
                storeItems: action.Items,
                Loading: false
            };
        case itemsConstants.delete_storeItem_fail:
            return {
                ...state,
                Loading: false
            };
        case itemsConstants.fetch_storeLogs:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.fetch_storeLogs_success:
            return {
                ...state,
                Logs: action.Logs,
                Loading: false
            };
        case itemsConstants.fetch_storeLogs_fail:
            return {
                ...state,
                Loading: false
            };
        case itemsConstants.CD_to_counter:
            return {
                ...state,
                Loading: true
            };
        case itemsConstants.CD_to_counter_success:
            return {
                ...state,
                storeItems: action.itemsData,
                Loading: false
            };
        case itemsConstants.CD_to_counter_fail:
            return {
                ...state,
                Loading: false
            };
    
        default:
            return state;
    }
}