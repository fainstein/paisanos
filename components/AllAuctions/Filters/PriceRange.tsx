import { allAuctionsActions, RootState } from "@/store";
import { poppins } from "@/styles/fonts";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PriceRange = () => {
  const [showPriceTooltip, setShowPriceTooltip] = useState<boolean>(false);
  const dispatch = useDispatch();

  const value = useSelector(
    (state: RootState) => state.filtersApplied.priceRange
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(allAuctionsActions.priceRange(parseFloat(e.target.value)));
  };

  const tooltipPosition = Math.round(value * 10);

  return (
    <div>
      <p
        className={`${
          poppins.className
        } text-xs font-bold leading-3 text-cardet-blue ${
          !showPriceTooltip ? "mb-7" : ""
        }`}
      >
        PRICE RANGE
      </p>
      <div className="mx-auto max-w-[311px] lg:max-w-[256px]">
        {showPriceTooltip && (
          <div className="flex w-full flex-col items-start">
            <div
              className={`relative rounded-lg bg-white py-1 px-2`}
              style={{
                left: `calc(${tooltipPosition}% - ${
                  1.5 + tooltipPosition / 100
                }rem)`,
              }}
            >
              <div className="flex flex-col items-center">
                <p className="text-xs leading-5 text-dark-gray">
                  {parseFloat(value.toFixed(2))} ETH
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center py-5">
          <div className="absolute overflow-hidden rounded-full">
            <div className="h-6 border-t-[10px] border-b-[10px] border-r-[311px] border-t-black border-b-black border-r-gray lg:border-r-[256px]" />
          </div>
          <input
            type="range"
            step={0.01}
            min={0.01}
            max={12}
            value={value}
            onMouseDown={() => setShowPriceTooltip(true)}
            onMouseUp={() => setShowPriceTooltip(false)}
            onTouchStart={() => setShowPriceTooltip(true)}
            onTouchEnd={() => setShowPriceTooltip(false)}
            onChange={handleChange}
            className="left-0 z-10 h-0 w-full cursor-pointer"
            id="price-range"
          />
          <label className="hidden" htmlFor="price-range">
            Price Range
          </label>
        </div>
        <div
          className={`${poppins.className} flex justify-between text-sm font-medium leading-6 text-white`}
        >
          <p>0.01 ETH</p>
          <p>12 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
