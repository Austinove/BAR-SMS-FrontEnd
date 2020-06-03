import { counterConstants } from "../constants";
import {all, fork, put, takeEvery } from "redux-saga/effects";
import { 
    counterItemsSuccess,  
    saleSuccess
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
]

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

export default function* rootSaga(){
    yield all([
        fork(itemsRequest),
        fork(makeSaleRequest)
    ])
}