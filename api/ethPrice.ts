import { EthPriceApiResponse } from "@/types/api";
import sendRequest from "./sendRequest";
import { ETH_PRICE_URL } from "./urls";

const getEthPrice = async () => {
  const ethPrice = await sendRequest<EthPriceApiResponse>(ETH_PRICE_URL);
  return ethPrice;
};

export default getEthPrice;
