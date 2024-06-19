// pages/_app.tsx
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store.js"; // Adjust path as necessary
import "../app/globals.css"; // Your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
