import { LikesType, TimeTypes } from "@/types/store";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Categories from "./Categories";
import OpenFilter from "./OpenFilter";
import PriceRange from "./PriceRange";
import SearchInput from "./SearchInput";
import SelectInput, { Option } from "./SelectInput";

const timeOptions: Option[] = [
  { text: "Newest", value: TimeTypes.Newest },
  { text: "Oldest", value: TimeTypes.Oldest },
];

const likeOptions: Option[] = [
  { text: "Most liked", value: LikesType.MostLiked },
  { text: "Less liked", value: LikesType.LessLiked },
];

const Filters = () => {
  const horizontalRule = <div className="h-[1px] w-full bg-gray" />;

  return (
    <div className="flex flex-col gap-6 lg:w-[256px]">
      <SearchInput />
      <div className="flex flex-col gap-6 lg:w-[calc(100vw-10rem)] lg:flex-row lg:items-center lg:justify-between xl:w-[calc(100vw-20rem)]">
        <SelectInput options={timeOptions} />
        <Categories />
      </div>
      <PriceRange />
      {horizontalRule}
      <div className="flex flex-col lg:flex-row">
        <SelectInput options={likeOptions} label="likes" />
      </div>
      <OpenFilter />
      {horizontalRule}
      <div className="flex cursor-pointer items-center gap-2">
        <XCircleIcon width={24} height={24} fill={"white"} />
        <p className="text-sm font-bold leading-4 text-white">Reset filter</p>
      </div>
    </div>
  );
};

export default Filters;
