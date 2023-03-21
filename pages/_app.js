import "@/styles/globals.css";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
