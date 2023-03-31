export default function NftValidationUtilityProgressBar({ currentStep }) {
  const computePercentage = () => {
    let progress = (currentStep / 5) * 100;
    return progress === 0 ? 10 : progress;
  };
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <div className="" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: `${computePercentage()}%` }} />

          <div
            className="mt-2.5 hidden grid-cols-5 text-sm font-medium text-white-600 sm:grid 
                    h-2 rounded-full bg-white-600

          
          "
          >
            <div
              className={`text-left ${
                currentStep >= 1 ? "text-whal3s-600 progress_bar" : ""
              }`}
            />

            <div
              className={`text-center ${
                currentStep >= 2 ? "text-whal3s-600" : ""
              }`}
            />

            <div
              className={`text-center ${
                currentStep >= 3 ? "text-whal3s-600" : ""
              }`}
            />

            <div
              className={`text-center ${
                currentStep >= 4 ? "text-whal3s-600" : ""
              }`}
            />

            <div
              className={`text-right ${
                currentStep >= 5 ? "text-whal3s-600" : ""
              }`}
            />
          </div>
        </div>
        <div className="mt-2.5 hidden grid-cols-5 text-sm font-medium text-white-600 sm:grid">
          <div
            className={`text-left ${
              currentStep >= 1 ? "text-whal3s-600 progress_bar" : ""
            }`}
          >
            Connect wallet
          </div>
          <div
            className={`text-center ${
              currentStep >= 2 ? "text-whal3s-600" : ""
            }`}
          >
            Select NFT
          </div>
          <div
            className={`text-center ${
              currentStep >= 3 ? "text-whal3s-600" : ""
            }`}
          >
            Confirm Claim
          </div>
          <div
            className={`text-center ${
              currentStep >= 4 ? "text-whal3s-600" : ""
            }`}
          >
            Enter data
          </div>
          <div
            className={`text-right ${
              currentStep >= 5 ? "text-whal3s-600" : ""
            }`}
          >
            Claimed
          </div>
        </div>
      </div>
    </div>
  );
}
