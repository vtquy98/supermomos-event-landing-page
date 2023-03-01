import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-datetime/css/react-datetime.css";

import React from "react";
import type { AppProps } from "next/app";

import { ModalProvider } from "@/components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
