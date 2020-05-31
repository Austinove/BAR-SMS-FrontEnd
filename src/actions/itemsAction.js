import { itemsConstants } from "../constants"
//Fetching
export const fetchStoreItemsRequest = () => {
    return {
        type: itemsConstants.fetch_storeItems
    }
}
export const fetchStoreItemsSuccess = items => {
  return {
    type: itemsConstants.fetch_storeItems_success,
    items
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
export const addStoreItemSuccess = items => {
  return {
    type: itemsConstants.add_storeItem_success,
    items
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
export const editStoreItemSuccess = items => {
  return {
    type: itemsConstants.edit_storeItem_success,
    items,
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
export const removeStoreItemSuccess = items => {
  return {
    type: itemsConstants.delete_storeItem_success,
    items,
  };
};
export const removeStoreItemFail = () => {
  return {
    type: itemsConstants.delete_storeItem_fail
  };
};