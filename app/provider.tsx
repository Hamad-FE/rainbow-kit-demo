"use client";

import "@rainbow-me/rainbowkit/styles.css";

import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";

import { WagmiProvider } from "wagmi";
import {sepolia, baseSepolia, bscTestnet, avalancheFuji} from "wagmi/chains";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Rainbow Demo",
  projectId: "df55a54a29fb7c20e7579edecbcdcd40", // replace this
  chains: [sepolia, baseSepolia, bscTestnet, avalancheFuji],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
