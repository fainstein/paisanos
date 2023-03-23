import { allAuctionsActions, RootState } from "@/store";
import { LikesType } from "@/types/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SelectInput, { Option } from "./SelectInput";

const likeOptions: Option[] = [
  { text: "Most liked", value: LikesType.MostLiked },
  { text: "Less liked", value: LikesType.LessLiked },
];

const LikesSorter = () => {
  const value = useSelector((state: RootState) => state.filtersApplied.likes);
  const dispatch = useDispatch();

  const changeHandler = (newValue: LikesType) => {
    dispatch(allAuctionsActions.likesSort(newValue));
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <SelectInput<LikesType>
        value={value}
        onChange={changeHandler}
        options={likeOptions}
        label="likes"
      />
    </div>
  );
};

export default LikesSorter;
