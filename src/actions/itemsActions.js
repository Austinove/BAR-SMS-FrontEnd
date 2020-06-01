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
//Adding to store
export const addStoreItemRequest = itemData => {
  return {
    type: itemsConstants.add_storeItem,
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
//Createing
export const createStoreItemRequest = itemData => {
  return {
    type: itemsConstants.create_storeItem,
    itemData
  };
};
export const createStoreItemSuccess = Items => {
  return {
    type: itemsConstants.create_storeItem_success,
    Items
  };
};
export const createStoreItemFail = () => {
  return {
    type: itemsConstants.create_storeItem_fail
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
//Adding to counter
export const CDCounterItemRequest = itemData => {
  return {
    type: itemsConstants.CD_to_counter,
    itemData
  }
}
export const CDCounterItemSuccess = itemsData => {
  return {
    type: itemsConstants.CD_to_counter_success,
    itemsData
  }
}
export const DCCounterItemFail = () => {
  return {
    type: itemsConstants.CD_to_counter_fail
  }
}