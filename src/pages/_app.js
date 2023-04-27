import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/UI/loading/LoadingPage";

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);
  return (
    <>
      {!loading ? (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
