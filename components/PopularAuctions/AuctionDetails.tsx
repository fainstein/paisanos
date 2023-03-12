import parseEthPrice from "@/helpers/ethPrice";
import { poppins } from "@/styles/fonts";
import { Auction, EthPriceApiResponse } from "@/types/api";
import { useCallback, useEffect, useState } from "react";

interface AuctionDetailsProps {
  auction: Auction;
  ethPrice: EthPriceApiResponse;
}

interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (endTime: Date) => {
  const getTimeRemaining = useCallback(() => {
    const total = new Date(endTime).getTime() - Date.now();
    // Values between 0 and 99
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    // const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    // const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.min(
      Math.max(Math.floor(total / (1000 * 60 * 60)), 0),
      99
    );
    return {
      hours,
      minutes,
      seconds,
    };
  }, [endTime]);

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [getTimeRemaining]);

  return { ...timeRemaining };
};

const AuctionDetails = ({ auction, ethPrice }: AuctionDetailsProps) => {
  const { hours, minutes, seconds } = useCountdown(auction.endsAt);

  const itemPriceUsd = () => {
    const itemPriceEth = parseEthPrice(auction.highestBid.slice(0, -4)) * 2000;
    const ethPriceUsd = parseEthPrice(ethPrice.usd);
    const itemPriceUsd = (itemPriceEth * ethPriceUsd).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return itemPriceUsd;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-dark-gray p-8">
      <div className="flex flex-col items-center text-white">
        <p className={`${poppins.className} text-base font-medium`}>
          Current Bid
        </p>
        <p className={`text-5xl font-bold leading-[56px]`}>
          {auction.highestBid}
        </p>
        <p
          className={`${poppins.className} text-2xl font-medium text-light-gray`}
        >
          {itemPriceUsd()}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className={`${poppins.className} text-base font-medium text-white`}>
          Auction ending in
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <p className="text-[32px] font-bold leading-10 text-white">
              {hours}
            </p>
            <p
              className={`${poppins.className} text-base font-medium text-light-gray`}
            >
              Hrs
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[32px] font-bold leading-10 text-white">
              {minutes}
            </p>
            <p
              className={`${poppins.className} text-base font-medium text-light-gray`}
            >
              mins
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[32px] font-bold leading-10 text-white">
              {seconds}
            </p>
            <p
              className={`${poppins.className} text-base font-medium text-light-gray`}
            >
              secs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
