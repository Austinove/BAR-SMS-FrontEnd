import { itemsConstants } from "../constants"
//Fetching
export const fetchStoreItemsRequest = () => {
    return {
        type: itemsConstants.fetch_storeItems
    }
}
export const fetchStoreItemsSuccess = Items => {
  return {
    type: itemsConstants.fetch_storeItems_success,
    Items
  };
};
export const fetchStoreItemsFail = () => {
  return {
    type: itemsConstants.fetch_storeItems_fail,
  };
};
//Creating
export const addStoreItemRequest = itemData => {
  return {
    type: itemsConstants.addStoreItem,
    itemData
  };
};
export const addStoreItemSuccess = Items => {
  return {
    type: itemsConstants.add_storeItem_success,
    Items
  };
};
export const addStoreItemFail = () => {
  return {
    type: itemsConstants.add_storeItem_fail
  };
};
//Editing
export const editStoreItemRequest = id => {
  return {
    type: itemsConstants.edit_storeItem,
    id,
  };
};
export const editStoreItemSuccess = Items => {
  return {
    type: itemsConstants.edit_storeItem_success,
    Items,
  };
};
export const editStoreItemFail = () => {
  return {
    type: itemsConstants.edit_storeItem_fail
  };
};
//Removing
export const removeStoreItemRequest = id => {
  return {
    type: itemsConstants.delete_storeItem,
    id,
  };
};
export const removeStoreItemSuccess = Items => {
  return {
    type: itemsConstants.delete_storeItem_success,
    Items,
  };
};
export const removeStoreItemFail = () => {
  return {
    type: itemsConstants.delete_storeItem_fail
  };
};
//Fetching Logs
export const fetchStoreLogsRequest = () => {
  return {
    type: itemsConstants.fetch_storeLogs
  };
};
export const fetchStoreLogsSuccess = Logs => {
  return {
    type: itemsConstants.fetch_storeLogs_success,
    Logs
  };
};
export const fetchStoreLogsFail = () => {
  return {
    type: itemsConstants.fetch_storeLogs_fail,
  };
};