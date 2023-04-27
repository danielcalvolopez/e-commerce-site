import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import LoadingContextProvider from "@/context/LoadingContext";

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <LoadingContextProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </LoadingContextProvider>
  );
}
