import getAllAuctions from "@/api/getAllAuctions";
import getEthPrice from "@/api/getEthPrice";
import getPopularAuctions from "@/api/getPopularAuctions";
import AllAuctions from "@/components/AllAuctions/AllAuctions";
import NavigationMenu from "@/components/Header/NavigationMenu";
import PopularAuctions from "@/components/PopularAuctions/PopularAuctions";
import { dm_sans } from "@/styles/fonts";
import { AuctionsApiResponse, EthPriceApiResponse } from "@/types/api";
import Head from "next/head";

interface HomeProps {
  ethPrice: EthPriceApiResponse;
  popularAuctions: AuctionsApiResponse;
  allAuctions: AuctionsApiResponse;
}
export default function Home({
  ethPrice,
  popularAuctions,
  allAuctions,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>NFPaisanos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min-h-screen bg-black text-sm leading-4 lg:px-40 ${dm_sans.className} font-bold`}
      >
        <NavigationMenu />
        <PopularAuctions ethPrice={ethPrice} auctions={popularAuctions} />
        <AllAuctions auctions={allAuctions} />
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const ethPrice = await getEthPrice();
  const popularAuctions = await getPopularAuctions();
  const allAuctions = await getAllAuctions();
  return { ethPrice, popularAuctions, allAuctions };
};
