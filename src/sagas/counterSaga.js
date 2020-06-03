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
        name: "Sminof",
        quantity: 34,
        id: 2
    },
    {
        name: "Pepsi",
        quantity: 39,
        id: 3
    },
    {
        name: "Rock Boom",
        quantity: 40,
        id: 4
    },
    {
        name: "Sting",
        quantity: 100,
        id: 5
    },
    {
        name: "Pilsna",
        quantity: 90,
        id: 6
    },
    {
        name: "Coca Cola",
        quantity: 340,
        id: 1
    },
    {
        name: "Milinda",
        quantity: 34,
        id: 2
    },
    {
        name: "Minute Mid",
        quantity: 39,
        id: 3
    },
    {
        name: "Fanta",
        quantity: 40,
        id: 4
    },
    {
        name: "Novida",
        quantity: 100,
        id: 5
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
        name: "Pilsnar",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Bell",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Sminof",
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
        name: "Pilsnar",
        counter: 35,
        present: 10,
        sold: 15,
        price: 2000,
        amount: 30000,
    },
    {
        name: "Bell",
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