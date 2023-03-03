import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import type { AppProps } from "next/app";

import { ModalProvider } from "@/components/Modal";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ModalProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </ModalProvider>
  );
}
