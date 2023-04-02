import { Web3Button } from "@thirdweb-dev/react";
import { useRouter } from "next/router";

export default function ClaimButton({ onError }) {
  const myNftDropContractAddress = "0xFe78c6e639EA6d22a0a645099870d5c24b17b7e3";
  //refresh page on success
  const router = useRouter();

  const handleSuccess = () => {
    router.reload();
  };

 

  return (
    <Web3Button
      accentColor="#8348FF"
      colorMode="light"
      contractAddress={myNftDropContractAddress}
      action={(contract) => contract.erc721.claim(1)}
      onSuccess={handleSuccess}
      onError={onError}
    >
      Claim NFT
    </Web3Button>
  );
}
