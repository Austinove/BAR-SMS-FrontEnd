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
export const CDCounterItemRequest = itemData => {
    return {
        type: counterConstants.CD_to_counter,
        itemData
    }
}
export const CDCounterItemSuccess = itemsData => {
    return {
        type: counterConstants.CD_to_counter_success,
        itemsData
    }
}
export const DCCounterItemFail = () => {
    return {
        type: counterConstants.CD_to_counter_fail
    }
}
//Saling
export const saleRequest = itemData => {
    return {
        type: counterConstants.make_sale,
        itemData
    }
}
export const saleSuccess = itemsData => {
    return {
        type: counterConstants.make_sale_success,
        itemsData
    }
}
export const saleFail = () => {
    return {
        type: counterConstants.make_sale_fail
    }
}