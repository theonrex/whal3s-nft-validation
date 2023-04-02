import React from "react";
import Link from "next/link";
import ClaimButton from "./ClaimButton";
export default function WelcomePage() {
  return (
    <div className="rowx container mx-auto">
      <section className="col50">
        <header className="Magical_header">Magical experience</header>
        <h1 className="utility_h1">
          A way to launch utility with
          <br />
          <span> improved efficiency</span>
        </h1>
        <p className="utility_p">
          Experience the user-friendly token gating and rewards claim process by
          securing the Theon NFT
        </p>
      </section>
      <section className="col50">
        <header className="ml-1">Follow the following steps</header>

        <div className="steps_section">
          <h1 className="col8 h1_circle">
            {" "}
            <span>1</span>
            <span className="vl"></span>
          </h1>

          <span className="col92">
            <h1 >Get testnet tokens</h1>
            <p>
              {" "}
              Get testnet tokens Get some testnet tokens first to cover the gas
              fees
            </p>

            <Link href="https://faucet.polygon.technology/" target="blank">
              <button>Get Testnet Coin</button>
            </Link>
          </span>
        </div>
        <div className="steps_section">
          <h1 className="col8 h1_circle">
            {" "}
            <span>2</span>
            <span className="vl"></span>
          </h1>{" "}
          <span className="col92">
            <h1>Claim NFT</h1>
            <p>
              {" "}
              After you acquired some testnet tokens, you can claim your free
              Whal3s Demo NFT. To do so, you have to connect your wallet first
              and mint the nft afterwards.
            </p>
            <ClaimButton />

            <a href="https://txnft.vercel.app/"></a>
          </span>
        </div>
        <div className="steps_section">
          <h1 className="col8 h1_circle">
            {" "}
            <span>3</span>
            <span className="vl"></span>
          </h1>{" "}
          <span className="col92">
            <h1> Use Utility</h1>
            <p>
              {" "}
              Now that you match all prerequisites, you are ready to use the
              utility. Click here
            </p>
            <button href="claim">CLick here</button>
          </span>
        </div>
      </section>
    </div>
  );
}
