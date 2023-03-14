import { Auction } from "@/types/api";
import { StopIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface AuctionMainDataProps {
  auction: Auction;
}

const AuctionMainData = ({ auction }: AuctionMainDataProps) => {
  return (
    <div className="flex flex-col gap-5 items-start">
      <p className="text-5xl xl:text-6xl font-bold leading-[64px] text-white">
        the creator network®
      </p>
      <div className="flex h-11 items-start gap-8 md:gap-0 lg:gap-8">
        <div className="flex items-center gap-2">
          <Image
            src={auction.authorAvatar}
            width={40}
            height={40}
            alt={"author-profile" + auction.author}
          />
          <div className="flex flex-col">
            <p className="text-xs font-normal leading-5 text-light-gray">
              Creator
            </p>
            <p className="text-sm font-medium leading-6 text-white">
              {auction.author}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green">
            <StopIcon width={24} height={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-normal leading-5 text-light-gray whitespace-nowrap">
              Instant price
            </p>
            <p className="text-sm font-medium leading-6 text-white">
              {auction.instantPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionMainData;
