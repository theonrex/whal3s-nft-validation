import React, { useEffect, useState } from "react";
import WelcomePage from "../components/WelcomePage";
import { Toaster } from "react-hot-toast";
import DynamicNftValidationUtilitySection from "../Utilities/DynamicNftValidationUtilitySection";



export default function Home() {
  

  return (
    <>
      <WelcomePage />
      <div
        id="claim"
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-24 font-sans"
      >
        <DynamicNftValidationUtilitySection />
      </div>
      <Toaster />
    </>
  );
}
