import dynamic from "next/dynamic";

const DynamicNftValidationUtilitySection = dynamic(
    () => import("./NftValidationUtilitySection"),
    { ssr: false }
);

export default DynamicNftValidationUtilitySection