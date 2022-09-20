import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const middleware = [process.env.NODE_ENV !=='production' && logger].filter(Boolean);  //popular middleware

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [loggerMiddleware],
  middleware,
})

export const persistor = persistStore(store);