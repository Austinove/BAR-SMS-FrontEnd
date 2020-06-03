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