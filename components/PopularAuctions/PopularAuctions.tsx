import { AuctionsApiResponse, EthPriceApiResponse } from "@/types/api";
import Image from "next/image";
import { useState } from "react";
import AuctionActions from "./AuctionActions";
import AuctionDetails from "./AuctionDetails";
import AuctionMainData from "./AuctionMainData";

interface PopularAuctionsProps {
  ethPrice: EthPriceApiResponse;
  auctions: AuctionsApiResponse;
}

const PopularAuctions = ({ ethPrice, auctions }: PopularAuctionsProps) => {
  const [currentAuctionIndex, setCurrentAuctionIndex] = useState<number>(0);

  return (
    <div
      className={`flex flex-col items-center gap-16 py-8 lg:flex-row lg:items-stretch lg:justify-between xl:gap-32`}
    >
      <div className="flex shrink items-start">
        <Image
          src={auctions[currentAuctionIndex].media.image2x}
          alt={"made-by-" + auctions[currentAuctionIndex].author}
          width={580}
          height={800}
          priority
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-10 lg:max-w-[33.33]">
        <AuctionMainData auction={auctions[currentAuctionIndex]} />
        <AuctionDetails
          auction={auctions[currentAuctionIndex]}
          ethPrice={ethPrice}
        />
        <AuctionActions
          currentAuction={currentAuctionIndex}
          navigateAuctions={setCurrentAuctionIndex}
          totalAuctions={auctions.length}
        />
      </div>
    </div>
  );
};

export default PopularAuctions;
