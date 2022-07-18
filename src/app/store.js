import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    version: 1,
    debug: true
}

const persistedReducer = persistReducer(persistConfig, counterReducer)

export default () => {
    let store = configureStore({
        reducer: {
            counter: persistedReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER] } })
    })
    let persistor = persistStore(store)
    return { store, persistor }
}