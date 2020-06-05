import { all, fork, put, takeEvery } from "redux-saga/effects";
import { itemsConstants } from "../constants";
import { 
    createStoreItemSuccess, 
    fetchStoreLogsSuccess, 
    fetchStoreItemsSuccess, 
    addStoreItemSuccess, 
    editStoreItemSuccess, 
    removeStoreItemSuccess,
    CDCounterItemSuccess
} from "../actions/itemsActions";
const Items = [
  {
    name: "Bell",
    quantity: 100,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25
  },
  {
    name: "Pepsi",
    quantity: 500,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25
  },
  {
    name: "CocaCola",
    quantity: 300,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25
  },
  {
    name: "Nile Special",
    quantity: 450,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25
  },
  {
    name: "CocaCola",
    quantity: 300,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25
  },
  {
    name: "Nile Special",
    quantity: 450,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25
  },
  {
    name: "Nile Special",
    quantity: 500,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25,
  },
  {
    name: "Pilsnar",
    quantity: 500,
    manufacturer: "Nile Manufactures LTD",
    price: 3000,
    crateSize: 20,
  },
  {
    name: "Tusker",
    quantity: 500,
    manufacturer: "Nile Manufactures LTD",
    price: 3200,
    crateSize: 25,
  },
  {
    name: "Nile",
    quantity: 500,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 20,
  },
  {
    name: "Nile Special",
    quantity: 500,
    manufacturer: "Nile Manufactures LTD",
    price: 3500,
    crateSize: 25,
  },
];
const Logs = [
  {
    log_date: "26/4/2020",
    item_action: "Added to Store",
    itemName: "Nile Special",
    quantity: 30
  },
  {
    log_date: "26/4/2020",
    item_action: "Added to Store",
    itemName: "Nile Special",
    quantity: 30
  },
  {
    log_date: "26/4/2020",
    item_action: "Added to Store",
    itemName: "Nile Special",
    quantity: 30
  },
  {
    log_date: "26/4/2020",
    item_action: "Added to Store",
    itemName: "Nile Special",
    quantity: 30
  },
]

function* storeItems() {
    yield put(fetchStoreItemsSuccess(Items));
}
function* addItem() {
    // yield put(addStoreItemSuccess(Items));
}
function* createItem(itemData) {
    yield put(createStoreItemSuccess(Items));
}
function* editItem(itemData) {
    yield put(editStoreItemSuccess(Items));
}
function* removeItem(){
    // yield put(removeStoreItemSuccess(Items));
}
function* storeLogs(){
    yield put(fetchStoreLogsSuccess(Logs));
}
function* CDItem(itemData){
    // yield put(CDCounterItemSuccess(itemsData))
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
export function* CDItemRequest() {
    yield takeEvery(itemsConstants.CD_to_counter, CDItem);
}
export default function* rootSaga() {
    yield all([
        fork(storeItemsRequest),
        fork(addItemRequest),
        fork(createItemRequest),
        fork(editItemRequest),
        fork(removeItemRequest),
        fork(storeLogsRequest),
        fork(CDItemRequest)
    ])
}