import { AuctionsApiResponse, EthPriceApiResponse } from "@/types/api";
import Image from "next/image";
import { useState } from "react";
import AuctionActions from "./AuctionActions";
import AuctionDetails from "./AuctionDetails";
import AuctionMainData from "./AuctionMainData";

import { motion } from "framer-motion";

interface PopularAuctionsProps {
  ethPrice: EthPriceApiResponse;
  auctions: AuctionsApiResponse;
}

const PopularAuctions = ({ ethPrice, auctions }: PopularAuctionsProps) => {
  const [currentAuctionIndex, setCurrentAuctionIndex] = useState<number>(0);

  return (
    <div
      className={`flex flex-col items-center gap-16 py-8 lg:flex-row lg:items-stretch lg:justify-between xl:gap-32`}
      key={currentAuctionIndex}
    >
      <motion.div
        className="flex shrink items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <Image
          src={auctions[currentAuctionIndex].media.image2x}
          alt={"made-by-" + auctions[currentAuctionIndex].author}
          width={580}
          height={800}
          priority
          className="rounded-2xl"
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-10 lg:max-w-[33.33]"
        animate={{
          opacity: 1,
          x: [100, -50, 20, -5, 0],
        }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.8 }}
      >
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
      </motion.div>
    </div>
  );
};

export default PopularAuctions;
