import { allAuctionsActions, RootState } from "@/store";
import { ChronologicalType } from "@/types/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SelectInput, { Option } from "./SelectInput";

const timeOptions: Option[] = [
  { text: "Newest", value: ChronologicalType.Newest },
  { text: "Oldest", value: ChronologicalType.Oldest },
];

const ChronologicalSorter = () => {
  const value = useSelector(
    (state: RootState) => state.filtersApplied.chronological
  );
  const dispatch = useDispatch();

  const changeHandler = (newValue: ChronologicalType) => {
    dispatch(allAuctionsActions.chronologicSort(newValue));
  };

  return (
    <SelectInput<ChronologicalType>
      value={value}
      onChange={changeHandler}
      options={timeOptions}
    />
  );
};

export default ChronologicalSorter;
