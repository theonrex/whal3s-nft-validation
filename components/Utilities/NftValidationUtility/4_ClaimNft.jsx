import React, { useState } from "react";
import Button from "../../Button";
import notify from "../../../utils/notify";

const ClaimNft = ({ utility }) => {
  // Add additional data to the engagement before saving finally

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const claim = () => {
    setLoading(true);
    utility
      .storeEngagement({ email: email })
      .catch((e) => {
        notify("Error", e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-full flex flex-col">
      <div>
        <p>Provide your email to continue.
        </p>
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-whal3s-500 focus:ring-whal3s-500 sm:text-sm"
            placeholder="you@example.com"
          ></input>
        </div>
      </div>
      <div className="mt-5 flex flex-grow items-end justify-end">
        <Button
          isLoading={loading}
          disabled={!email}
          onClick={() => {
            claim();
          }}
        >
          Claim
        </Button>
      </div>
    </div>
  );
};

export default ClaimNft;
