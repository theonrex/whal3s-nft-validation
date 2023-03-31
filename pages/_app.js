import "@rainbow-me/rainbowkit/styles.css";
import "../styles/styles.css";
import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  const activeChain = ChainId.Mumbai;
  return (
    <ThirdwebProvider desiredChainId={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
