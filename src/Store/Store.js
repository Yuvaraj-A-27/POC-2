import { createStore } from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import Reducer from "./Reducer"
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key:'root',
    storage,
}

const persistorReducer = persistReducer(persistConfig, Reducer)

export const Store = createStore(persistorReducer)
export const Persistor = persistStore(Store)