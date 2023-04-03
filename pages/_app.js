import "../styles/styles.css";
import "../styles/globals.css";
import "../styles/main.css"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


const activeChain = ChainId.Mumbai;

import { Buffer } from "buffer";

if (typeof window !== "undefined") {
  window.Buffer = window.Buffer || Buffer;
}






function MyApp({ Component, pageProps }) {
  return (
        <ThirdwebProvider activeChain={activeChain}>
          <Component {...pageProps} />
        </ThirdwebProvider>
  );
}

export default MyApp;
