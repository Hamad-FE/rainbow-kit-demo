"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Script from "next/script";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
          RainbowKit Demo With Widget
        </h1>

        {/* RainbowKit wallet - centered */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <ConnectButton />
        </div>

        {/* Connected address - responsive text */}
        {isConnected && (
          <p className="text-sm sm:text-base text-center mb-4 sm:mb-6 break-all px-4">
            Connected: {address}
          </p>
        )}

        <div id="pad-widget"></div>

        {/* External widget script */}
        <Script
          src="https://saleium.chaingpt.dev/cgpt-widgets.umd.js"
          strategy="afterInteractive"
          onLoad={() => {
            if ((window as any).Saleium) {
              (window as any).Saleium.mount({
                container: "#pad-widget",
                saleId: "e0k8oa",
                theme: "dark",
                accentColor: "#7C3AED",
                fontFamily: "sans-serif",
                projectInfoExpanded: true,
                watermarkEnabled: true,
                showTierBoost: true,
                textColor: "#000000",
              });
            }
          }}
        />
      </div>
    </main>
  );
}