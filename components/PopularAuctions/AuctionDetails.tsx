import parseEthPrice from "@/helpers/ethPrice";
import useCountdown from "@/hooks/useCountdown";
import { poppins } from "@/styles/fonts";
import { Auction, EthPriceApiResponse } from "@/types/api";

interface AuctionDetailsProps {
  auction: Auction;
  ethPrice: EthPriceApiResponse;
}

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
    <div className="flex grow flex-col items-center justify-center gap-6 rounded-3xl bg-dark-gray py-8 lg:px-8">
      <div className="flex flex-col items-center text-white">
        <p className={`${poppins.className} text-base font-medium`}>
          Current Bid
        </p>
        <p className={`lgtext-5xl text-4xl font-bold leading-[56px]`}>
          {auction.highestBid}
        </p>
        <p
          className={`${poppins.className} text-2xl font-medium text-light-gray`}
        >
          {itemPriceUsd()}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p
          className={`${poppins.className} text-center text-base font-medium text-white`}
        >
          Auction ending in
        </p>
        <div className="flex w-[231px] items-center justify-between">
          <div className="flex w-16 flex-col items-center">
            <p className="text-[32px] font-bold leading-10 text-white">
              {hours}
            </p>
            <p
              className={`${poppins.className} text-base font-medium text-light-gray`}
            >
              Hrs
            </p>
          </div>
          <div className="flex w-16 flex-col items-center">
            <p className="text-[32px] font-bold leading-10 text-white">
              {minutes}
            </p>
            <p
              className={`${poppins.className} text-base font-medium text-light-gray`}
            >
              mins
            </p>
          </div>
          <div className="flex w-16 flex-col items-center">
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
