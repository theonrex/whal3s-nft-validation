import React from "react";
import Link from "next/link";
import ClaimButton from "./ClaimButton";
export default function WelcomePage() {
  return (
    <div className="rowx container mx-auto">
      <section className="col50">
        <header className="Magical_header">Magical experience</header>
        <h1 className="utility_h1">
          A better way to <br />
          <span>ship utility</span>
        </h1>
        <p className="utility_p">
          Claim the Whal3s NFT and test the most intuitive token gating &
          rewards claim user flow.
        </p>

        <div className="steps_section">
          <header>Follow the following steps</header>

          <h1 className="col8 h1_circle">
            {" "}
            <span>1</span>
            <span className="vl"></span>
          </h1>

          <span className="col92">
            <h1>Get testnet tokens</h1>
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
            <button>Get Testnet Coin</button>
          </span>
        </div>
      </section>
      <section className="col50">
        <video src="https://whal3s-assets.s3.eu-central-1.amazonaws.com/videos/whal3s-nft-video-480.mp4"></video>
      </section>
    </div>
  );
}
