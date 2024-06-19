// pages/_app.tsx
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store.js"; // Adjust path as necessary
import "../app/globals.css";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
