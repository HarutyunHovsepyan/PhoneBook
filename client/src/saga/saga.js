import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects'
import { allPhone, delTasks } from "../store/action";

const Axios = axios.create({
    withCredentials: true
})

function* AddPhone(data) {
    let result = yield Axios.post("http://localhost:5000/addPhone", data)
}

function* AllPhone(navigate, data) {
    let phones = yield Axios.post("http://localhost:5000/allPhone")
    if ('phone' in phones.data) {
        yield put(allPhone(phones.data.phone))
    }
}
function* getPhone({ id }) {
    let phones = yield Axios.post(`http://localhost:5000/getPhone/${id}`)
    if ('phone' in phones.data) {
        yield put(allPhone(phones.data.phone))
    }
}
function* delPhone({ id, phones }) {
    yield Axios.post(`http://localhost:5000/delPhones/${id}`)
    const filteredTask = phones.filter(phones => phones.id !== +id)
    yield put(delTasks(filteredTask))
}
function* editPhone({ data, id }) {
    const edit = yield Axios.post(`http://localhost:5000/editPhone/${id}`, data, id)
}

function* findPhone({ text }) {
    const find = yield Axios.post(`http://localhost:5000/findPhone`, { text })
    if ('phone' in find.data) {
        yield put(allPhone(find.data.phone))
    }
}

export function* rootSaga() {
    yield takeEvery("ADD_PHONE", AddPhone)
    yield takeEvery("ALL_PHONE", AllPhone)
    yield takeEvery("GET_PHONE", getPhone)
    yield takeEvery("DELETE_PHONE", delPhone)
    yield takeEvery("EDIT_PHONE", editPhone)
    yield takeEvery("FIND_PHONE", findPhone)
}