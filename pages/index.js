import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const NftValidationUtilitySection = dynamic(
  () => import("../components/Utilities/NftValidationUtilitySection"),
  { ssr: false }
);
import WelcomePage from "../components/WelcomePage";
import Footer from "../components/Layout/Footer"
import { Toaster } from "react-hot-toast";

export default function Home() {
  

  return (
    <>
      <WelcomePage />
      <div
        id="claim"
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-24 font-sans"
      >
        <NftValidationUtilitySection />
      </div>
      <Footer />
      <Toaster />
    </>
  );
}
