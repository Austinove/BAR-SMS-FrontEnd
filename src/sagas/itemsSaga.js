import { all, fork, put, takeEvery } from "redux-saga/effects";
import { itemsConstants } from "../constants";
import { 
    createStoreItemRequest, 
    fetchStoreLogsSuccess, 
    fetchStoreItemsSuccess, 
    addStoreItemSuccess, 
    editStoreItemSuccess, 
    removeStoreItemSuccess
} from "../actions/itemsActions";

function storeItems() {
    // yield put(fetchStoreItemsSuccess(Items));
}
function addItem() {
    // yield put(addStoreItemSuccess(Items));
}
function createItem() {
    // yield put(createStoreItemRequest(itemData));
}
function editItem() {
    // yield put(editStoreItemSuccess(Items));
}
function removeItem(){
    // yield put(removeStoreItemSuccess(Items));
}
function storeLogs(){
    // yield put(fetchStoreLogsSuccess(Logs));
}
export function* storeItemsRequest() {
    yield takeEvery(itemsConstants.fetch_storeItems, storeItems)
}
export function* addItemRequest() {
    yield takeEvery(itemsConstants.add_storeItem, addItem)
}
export function* createItemRequest() {
    yield takeEvery(itemsConstants.create_storeItem, createItem)
}
export function* editItemRequest() {
    yield takeEvery(itemsConstants.edit_storeItem, editItem)
}
export function* removeItemRequest() {
    yield takeEvery(itemsConstants.delete_storeItem, removeItem)
}
export function* storeLogsRequest() {
    yield takeEvery(itemsConstants.fetch_storeLogs, storeLogs)
}
export default function* rootSaga() {
    yield all([
        fork(storeItemsRequest),
        fork(addItemRequest),
        fork(createItemRequest),
        fork(editItemRequest),
        fork(removeItemRequest),
        fork(storeLogsRequest)
    ])
}