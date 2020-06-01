import { counterConstants } from "../constants/index";

//Fetching
export const counterItemsRequest = () => {
    return {
        type: counterConstants.fetch_counterItems,
    };
};
export const counterItemsSuccess = Items => {
    return {
        type: counterConstants.fetch_counterItems_success,
        Items
    };
};
export const counterItemsFailure = () => {
    return {
        type: counterConstants.fetch_counterItems_fail,
    };
};
//Adding
export const addCounterItemRequest = itemData => {
    return {
        type: counterConstants.add_to_counter,
        itemData
    }
}
export const addCounterItemSuccess = itemData => {
    return {
        type: counterConstants.add_to_counter_success,
        itemData
    }
}
export const addCounterItemFail = () => {
    return {
        type: counterConstants.add_to_counter_fail
    }
}
//Removing
export const removeCounterItemRequest = itemData => {
    return {
        type: counterConstants.remove_from_counter,
        itemData
    }
}
export const removeCounterItemSuccess = itemData => {
    return {
        type: counterConstants.remove_from_counter_success,
        itemData
    }
}
export const removeCounterItemFail = () => {
    return {
        type: counterConstants.remove_from_counter_fail
    }
}
//Saling
export const saleRequest = itemData => {
    return {
        type: counterConstants.make_sale,
        itemData
    }
}
export const saleSuccess = itemData => {
    return {
        type: counterConstants.make_sale_success,
        itemData
    }
}
export const saleFail = () => {
    return {
        type: counterConstants.make_sale_fail
    }
}