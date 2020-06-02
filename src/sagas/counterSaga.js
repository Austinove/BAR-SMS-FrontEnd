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
    },
    {
        name: "Nile Special",
        quantity: 34,
    },
    {
        name: "Nile Special",
        quantity: 39,
    },
    {
        name: "Nile Special",
        quantity: 40,
    },
    {
        name: "Nile Special",
        quantity: 100,
    },
    {
        name: "Nile Special",
        quantity: 90,
    }
]

function* fetchItems(){
    yield put(counterItemsSuccess(items));
}
function* makeSale(itemData){
    // yield put(saleSuccess(itemData));
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