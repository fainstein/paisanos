import { useSelector } from "react-redux";
import AuctionItem from "./AuctionItem";
import Filters from "./Filters/Filters";
import { RootState } from "@/store";

const AllAuctions = () => {
  const auctions = useSelector((state: RootState) => state.displayAuctions);

  return (
    <div className="flex flex-col gap-8 py-16 lg:flex-row">
      <Filters />
      <div className="flex w-full md:items-start flex-col flex-wrap gap-8 md:flex-row lg:mt-36 lg:gap-4">
        {auctions.map((auction, i) => {
          // Add Redux Pagination
          return <AuctionItem auction={auction} key={i} />;
        })}
      </div>
    </div>
  );
};

export default AllAuctions;
