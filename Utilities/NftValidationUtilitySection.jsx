import React, { useEffect, useState } from "react";
import Whal3s, { NftValidationUtility } from "@whal3s/whal3s.js";
import NftValidationUtilityProgressBar from "../components/ProgressBars/NftValidationUtilityProgressBar";
import Uninitialized from "./NftValidationUtility/0_Uninitialized";
import ConnectWallet from "./NftValidationUtility/1_ConnectWallet";
import LoadingNfts from "./NftValidationUtility/2_LoadingNfts";
import ClaimNft from "./NftValidationUtility/4_ClaimNft";
import ClaimedNft from "./NftValidationUtility/5_ClaimedNft";
import SelectNft from "./NftValidationUtility/3_SelectNft";
import { ImSpinner2 } from "react-icons/im";

const NftValidationUtilitySection = () => {
  const whal3s = new Whal3s();
  const [utilityId, setUtilityId] = useState(
    JSON.parse(localStorage.getItem("365e457c-a900-47ab-be41-cd58775b212b")) ||
      newUtilityId
  );
  const [newUtilityId, setNewUtilityId] = useState(
    "365e457c-a900-47ab-be41-cd58775b212b"
  );
  const [utility, setUtility] = useState();
  const [step, setStep] = useState(0);
  if (typeof self === "undefined") {
    self = this;
  }

  const myUtilityId = newUtilityId;
  useEffect(() => {
    myUtilityId;
  }, []);

  const updateUtilityId = () => {
    localStorage.setItem(
      "nft-validation-utility-id",
      JSON.stringify(myUtilityId)
    );
    setUtilityId(myUtilityId);
  };

  useEffect(() => {
    updateUtilityId();
  }, []);

  useEffect(() => {
    init();
  }, [utilityId]);

  async function init() {
    console.log("init");
    if (!utilityId) return;
    setStep(0);
    if (utility) {
      console.log("destroying old utility");
      utility.destroy();
    }
    try {
      const tmpUtility = await whal3s.createValidationUtility(utilityId);
      tmpUtility.addEventListener("stepChanged", (step) => {
        console.log("setting step to ", step.detail.step);
        setUtility(tmpUtility);
        setStep(step.detail.step);
      });
      setUtility(tmpUtility);
      setStep(tmpUtility.step);
    } catch (e) {
      setUtility(undefined);
    }
  }

  return (
    <div className="border rounded-lg border-zinc-300 p-5 md:p-10 ">
      <div>
        <div className="flex space-x-2.5"></div>
      </div>
      {utility ? (
        <div className="grid gap-5 grid grid-cols-1 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col align-center">
            <h4 className="font-bold text-2xl">{utility.details.name}</h4>
            <p>{utility.details.description}</p>
            <img
              src="https://ipfs.thirdwebcdn.com/ipfs/Qmf1eey2fAHZU5pnmymVyhyX89bUx4jqQgAGwxdTYHPG2Q/QmdyQByUtuPEMa6n8PwtgLgedcFHWBYSbriQyNduAnA66t.png"
              alt=""
            />
          </div>
          <div className="border rounded-lg border-zinc-300 p-5 flex flex-col">
            <div className="flex justify-between text-sm font-medium text-white-900 mb-2.5">
              <span className="flex justify-between">
                {step === NftValidationUtility.STEP_CLAIMED ? (
                  "Claimed "
                ) : (
                  <div className="flex justify-between">
                    Claiming utility...
                    <ImSpinner2
                      className="ml-4 mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </span>
              <span>
                Claims: {utility?.details?.engagements_count ?? 0}/
                {utility?.details?.max_engagements ?? "--"}
              </span>
            </div>
            <NftValidationUtilityProgressBar
              currentStep={step ?? 1}
            ></NftValidationUtilityProgressBar>

            <hr className="my-2.5" />

            <div className="flex-grow rounded-lg">
              {step === NftValidationUtility.STEP_UNINITIALIZED && (
                <Uninitialized />
              )}
              {step === NftValidationUtility.STEP_INITIALIZED && (
                <ConnectWallet utility={utility} />
              )}
              {step === NftValidationUtility.STEP_WALLET_CONNECTED && (
                <LoadingNfts />
              )}
              {(step === NftValidationUtility.STEP_NFTS_FETCHED ||
                step === NftValidationUtility.STEP_TOKEN_SELECTED) && (
                <SelectNft utility={utility} />
              )}
              {step === NftValidationUtility.STEP_RESERVED && (
                <ClaimNft utility={utility} />
              )}
              {step === NftValidationUtility.STEP_CLAIMED && (
                <ClaimedNft utility={utility} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Loading</h2>
        </div>
      )}
    </div>
  );
};

export default NftValidationUtilitySection;
