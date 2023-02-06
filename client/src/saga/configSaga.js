import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import PhoneReducer from "../store/reducer";
import { rootSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(PhoneReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)