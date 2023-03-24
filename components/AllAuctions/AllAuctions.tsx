import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";
import Filters from "./Filters/Filters";
import { RootState } from "@/store";
import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const AllAuctions = () => {
  const auctions = useSelector((state: RootState) => state.displayAuctions);
  const { isDesktop } = useResponsive();
  const [auctionsDisplayed, setAuctionsDisplayed] = useState<number>(0);

  useEffect(() => {
    setAuctionsDisplayed(isDesktop ? 6 : 4);
  }, [isDesktop]);

  const handleLoadMore = () => {
    // increase the number of displayed auctions by 4 on mobile or 6 on desktop
    setAuctionsDisplayed((prev) => prev + (isDesktop ? 6 : 4));
  };

  return (
    <>
      <div className="flex flex-col gap-8 py-16 lg:flex-row">
        <Filters />
        <div className="flex w-full flex-col flex-wrap gap-8 md:flex-row md:items-start lg:mt-36 lg:gap-4">
          {auctions.slice(0, auctionsDisplayed).map((auction, i) => {
            return <AuctionItem auction={auction} key={i} />;
          })}
        </div>
      </div>
      {auctionsDisplayed < auctions.length && (
        <button
          onClick={handleLoadMore}
          className="mx-auto flex items-center gap-3 rounded-full w-full relative bottom-7 lg:w-auto justify-center border-2 border-light-gray py-3 px-4"
        >
          <ArrowPathIcon className="h-4 w-4 text-white" />
          <p className="text-sm font-bold leading-5 text-white">Load More</p>
        </button>
      )}
    </>
  );
};

export default AllAuctions;
