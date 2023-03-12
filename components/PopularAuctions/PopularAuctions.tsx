import { AuctionsApiResponse, EthPriceApiResponse } from "@/types/api";
import { StopIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import AuctionDetails from "./AuctionDetails";

interface PopularAuctionsProps {
  ethPrice: EthPriceApiResponse;
  auctions: AuctionsApiResponse;
}

const PopularAuctions = ({ ethPrice, auctions }: PopularAuctionsProps) => {
  const [currentAuctionIndex, setCurrentAuctionIndex] = useState<number>(0);

  return (
    <div className="flex flex-col pt-32 pb-[136px] lg:flex-row lg:gap-32">
      <Image
        src={auctions[currentAuctionIndex].media.image}
        alt={"made-by-" + auctions[currentAuctionIndex].author}
        width={640}
        height={800}
      />
      <div className="flex flex-col gap-10">
        <div className="flex h-48 flex-col gap-5">
          <h1 className=" text-[64px] font-bold leading-[64px] text-white">
            the creator network®
          </h1>
          <div className="flex h-11 items-center gap-8">
            <div className="flex items-center gap-2">
              <Image
                src={auctions[currentAuctionIndex].authorAvatar}
                width={40}
                height={40}
                alt={"author-profile" + auctions[currentAuctionIndex].author}
              />
              <div className="flex flex-col">
                <p className="text-xs font-normal leading-5 text-light-gray">
                  Creator
                </p>
                <p className="text-sm font-medium leading-6 text-white">
                  {auctions[currentAuctionIndex].author}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green">
                <StopIcon width={24} height={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-normal leading-5 text-light-gray">
                  Instant price
                </p>
                <p className="text-sm font-medium leading-6 text-white">
                  {auctions[currentAuctionIndex].instantPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
        <AuctionDetails
          auction={auctions[currentAuctionIndex]}
          ethPrice={ethPrice}
        />
      </div>
    </div>
  );
};

export default PopularAuctions;
