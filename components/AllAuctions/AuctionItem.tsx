import { poppins } from "@/styles/fonts";
import { Auction } from "@/types/api";
import Image from "next/image";
import CandlestickChart from "../Icons/CandlestickChart";

const AuctionItem = ({ auction }: { auction: Auction }) => {
  return (
    <div className="flex flex-col items-center rounded-[20px] bg-dark-gray p-3 md:w-[calc((100%-32px)/2)] xl:w-[calc((100%-32px)/3)]">
      <Image
        src={auction.media.image}
        alt={"made-by-" + auction.author}
        width={287}
        height={303}
        className="h-[303px] w-full rounded-2xl object-cover"
      />
      <div className="flex w-full flex-col gap-3 py-5">
        <div className="flex items-center justify-between">
          <p
            className={`${poppins.className} text-[16px] font-medium leading-6 text-white`}
          >
            Amazing digital art
          </p>
          <div className="rounded-[4px] border-2 border-green p-2">
            <p className=" text-xs font-bold uppercase leading-3 text-green">
              {auction.instantPrice}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {auction.bidUsers.slice(0, 3).map((user, i) => {
              const right = i * 10 + "px";
              return (
                <Image
                  src={user.avatar}
                  key={i}
                  alt={"user-avatar"}
                  width={24}
                  height={24}
                  style={{ right }}
                  className={`relative inline-block rounded-2xl border-4 border-dark-gray`}
                />
              );
            })}
          </div>
          <p className={`${poppins.className} leading-6 text-white`}>
            {auction.stock + " in stock"}
          </p>
        </div>
        <div className="h-[1px] w-full bg-gray" />
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center ${poppins.className} gap-1 text-xs leading-5 text-light-gray`}
          >
            <CandlestickChart />
            <p className="font-normal">Highest bid</p>
            <p className="font-semibold uppercase text-white">
              {parseFloat(auction.highestBid).toFixed(4)} ETH
            </p>
          </div>
          <p
            className={`flex text-sm leading-5 ${poppins.className} text-light-gray`}
          >
            New bid🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;
