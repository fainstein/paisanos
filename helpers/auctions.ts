import parseEthPrice from "./ethPrice";

/**
 * Receives a date and returns the remaining time to present
 * @param endTime
 * @returns
 */
export const getTimeRemaining = (endTime: Date) => {
  const total = new Date(endTime).getTime() - Date.now();
  // Values between 0 and 99
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.min(Math.max(Math.floor(total / (1000 * 60 * 60)), 0), 99);
  return {
    hours,
    minutes,
    seconds,
  };
};

/**
 *
 * @param auction
 * @param ethPriceRaw
 * @returns
 */
export const itemPriceUsd = (
  auctionHighestBid: string,
  ethPriceRaw: string
) => {
  const itemPriceEth = parseEthPrice(auctionHighestBid.slice(0, -4)) * 2000;
  const ethPriceUsd = parseEthPrice(ethPriceRaw);
  const itemPriceUsd = (itemPriceEth * ethPriceUsd).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return itemPriceUsd;
};
