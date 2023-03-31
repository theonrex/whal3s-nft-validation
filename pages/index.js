import React, { useEffect, useState } from "react";
import { createClient } from "urql";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useAccount } from "wagmi";
import dynamic from "next/dynamic";

const NftValidationUtilitySection = dynamic(
  () => import("../Components/Utilities/NftValidationUtilitySection"),
  { ssr: false }
);
import WelcomePage from "../components/WelcomePage";
import Footer from "../Components/Layout/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // State variables to contain active listings and signify a loading state
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(false);
  // if (typeof self === "undefined") {
  //   self = this;
  // }

  return (
    <>
      <WelcomePage />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-24 font-sans">
        <NftValidationUtilitySection />

        {/* {*< /NftValidationUtilitySection> */}
      </div>
      <Footer></Footer>
      <Toaster />
    </>
  );
}
