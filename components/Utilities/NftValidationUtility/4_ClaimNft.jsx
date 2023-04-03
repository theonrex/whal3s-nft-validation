import React, { useState } from "react";
import Button from "../../WebButton";
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
        <p>Provide your email to continue.</p>
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="bg-black-500 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
            placeholder="email@example.com"
          />
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
