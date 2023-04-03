import "@rainbow-me/rainbowkit/styles.css";
import "../styles/styles.css";
import "../styles/globals.css";
import "../styles/main.css"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  configureChains,
  createClient,
  WagmiConfig,
  defaultChains,
} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
const activeChain = "mumbai";

import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const mumbaiChain = {
  id: 80001,
  name: "  Mumbai ",
  network: "Mumbai",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://rpc-mumbai.maticvigil.com",
  },
  blockExplorers: {
    default: {
      name: "MATIC",
      url: "https://mumbai.polygonscan.com/",
    },
  },
  testnet: true,
};
const { chains, provider, webSocketProvider } = configureChains(
  [mumbaiChain],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== mumbaiChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: " NFT Marketplace",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  webSocketProvider,

  provider,
});



function MyApp({ Component, pageProps }) {
  // const activeChain = ChainId.Mumbai;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThirdwebProvider activeChain={activeChain}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
