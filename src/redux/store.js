import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import cartReducer from "./features/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  varsion: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});
