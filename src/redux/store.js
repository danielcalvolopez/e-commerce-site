import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import storage from "redux-persist/lib/storage";
import orderReducer from "./features/orderSlice";

const persistConfig = {
  key: "root",
  varsion: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartReducer,
  counter: counterReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
