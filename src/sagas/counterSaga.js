import { counterConstants } from "../constants";
import {all, fork, put, takeEvery } from "redux-saga/effects";
import { 
    counterItemsSuccess,  
    saleSuccess,
    fetchSalesSuccess
} from "../actions/counterActions";
const items = [
    {
        name: "Nile Special",
        quantity: 340,
        id: 1
    },
    {
        name: "Nile Special",
        quantity: 34,
        id: 2
    },
    {
        name: "Nile Special",
        quantity: 39,
        id: 3
    },
    {
        name: "Nile Special",
        quantity: 40,
        id: 4
    },
    {
        name: "Nile Special",
        quantity: 100,
        id: 5
    },
    {
        name: "Nile Special",
        quantity: 90,
        id: 6
    }
];
const Sales = [
    {
        name: "Nile Special",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Nile Special",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Nile Special",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Nile Special",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Nile Special",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
];
function* fetchSales(){
    yield put(fetchSalesSuccess(Sales));
}
function* fetchItems(){
    yield put(counterItemsSuccess(items));
}
function* makeSale(itemData){
    yield put(saleSuccess(items));
}
export function* itemsRequest(){
    yield takeEvery(counterConstants.fetch_counterItems, fetchItems);
}
export function* makeSaleRequest(){
    yield takeEvery(counterConstants.make_sale, makeSale);
}
export function* fetchSalesRequet(){
    yield takeEvery(counterConstants.fetch_sales, fetchSales);
}

export default function* rootSaga(){
    yield all([
        fork(itemsRequest),
        fork(makeSaleRequest),
        fork(fetchSalesRequet)
    ])
}