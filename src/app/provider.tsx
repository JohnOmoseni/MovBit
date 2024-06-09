"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID;

// const config = getDefaultConfig({
//   appName: "MovBit App",
//   projectId: projectId as string,
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true,
// });
// const queryClient = new QueryClient();

// We are calling the persistStore method to persist the store before we pass it to the Provider.
// i.e persistStore(store)
const persistor = persistStore(store);

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}

// <WagmiProvider config={config}>
// 	<QueryClientProvider client={queryClient}>
// 		<RainbowKitProvider>
// {/* Your App */}

// 		</RainbowKitProvider>
// 	</QueryClientProvider>
// </WagmiProvider>
