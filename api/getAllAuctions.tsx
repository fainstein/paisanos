import { AuctionsApiResponse } from "@/types/api";
import sendRequest from "./sendRequest";
import { ALL_AUCTIONS_URL } from "./urls";

const getAllAuctions = async () => {
  const allAuctions = await sendRequest<AuctionsApiResponse>(ALL_AUCTIONS_URL);
  return allAuctions;
};

export default getAllAuctions;
