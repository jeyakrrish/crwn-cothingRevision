import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

import thunk from "redux-thunk";

// const middleware = [process.env.NODE_ENV !=='production' && logger].filter(Boolean);  //popular middleware
const middleware = [process.env.NODE_ENV !=='production' && logger, thunk].filter(Boolean);  //!thunk

const persistConfig = {
  key: 'root',
  storage,
  // blacklist:['user'],
  whitelist:['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [loggerMiddleware],
  middleware,
})

export const persistor = persistStore(store);