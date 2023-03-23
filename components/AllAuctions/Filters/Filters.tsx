import { allAuctionsActions } from "@/store";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import Categories from "./Categories";
import ChronologicalSorter from "./ChronologicalSorter";
import LikesSorter from "./LikesSorter";
import OpenFilter from "./OpenFilter/OpenFilter";
import PriceRange from "./PriceRange";
import SearchInput from "./SearchInput";

const Filters = () => {
  const horizontalRule = <div className="h-[1px] w-full bg-gray" />;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-6 lg:w-[256px]">
      <SearchInput />
      <div className="flex flex-col gap-6 lg:w-[calc(100vw-10rem)] lg:flex-row lg:items-center lg:justify-between xl:w-[calc(100vw-20rem)]">
        <ChronologicalSorter />
        <Categories />
      </div>
      <PriceRange />
      {horizontalRule}
      <LikesSorter />
      <OpenFilter />
      {horizontalRule}
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => dispatch(allAuctionsActions.clearFilters())}
      >
        <XCircleIcon width={24} height={24} fill={"white"} />
        <p className="text-sm font-bold leading-4 text-white">Reset filter</p>
      </div>
    </div>
  );
};

export default Filters;
