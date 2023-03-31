import { Web3Button } from "@thirdweb-dev/react";

export default function ClaimButton({ onError, onSuccess }) {
  return (
    <Web3Button
      accentColor="#8348FF"
      colorMode="light"
      contractAddress="0x7C47447DE417f63f300be0EB6d0a9C45E5d64bDe"
      action={(contract) => contract.erc721.claim(1)}
      onSuccess={onSuccess}
      onError={onError}
    >
      Claim NFT
    </Web3Button>
  );
}
