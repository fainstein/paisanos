import { AuctionsApiResponse } from "@/types/api";
import sendRequest from "./sendRequest";
import { POPULAR_URL } from "./urls";


const getPopularAuctions = async () => {
  const popularAuctions = await sendRequest<AuctionsApiResponse>(POPULAR_URL);
  return popularAuctions;
};

export default getPopularAuctions;
