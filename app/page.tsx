"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Script from "next/script";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">
        RainbowKit Demo With Widget
      </h1>

      {/* RainbowKit wallet */}
      <ConnectButton />

      {isConnected && <p>Connected: {address}</p>}

      {/* Widget container */}
      <div id="pad-widget"></div>

      {/* External widget script */}
      <Script
        src="https://pad-widget.chaingpt.dev/cgpt-widgets.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).Saleium) {
            (window as any).Saleium.mount({
              container: "#pad-widget",
              saleId: "U0BiNT",
              theme: "dark",
              accentColor: "#7C3AED",
              fontFamily: "sans-serif",
              projectInfoExpanded: false,
              watermarkEnabled: true,
              showTierBoost: true,
              textColor: "#000000",
            });
          }
        }}
      />
    </main>
  );
}
