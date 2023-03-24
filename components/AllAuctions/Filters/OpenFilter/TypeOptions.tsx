import TypeIcon from "@/components/AllAuctions/Filters/OpenFilter/TypeIcon";
import { capitalizeWord } from "@/helpers/strings";
import { allAuctionsActions, RootState } from "@/store";
import { TypeType } from "@/types/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TypeOptions = () => {
  const typeSelected = useSelector(
    (state: RootState) => state.filtersApplied.types
  );
  const dispatch = useDispatch();

  const typeOptions = Object.entries(TypeType).map(([_key, value]) => ({
    type: value,
    icon: (
      <TypeIcon
        type={value}
        className={`h-6 w-6  ${
          value === typeSelected ? "text-gray" : "text-white"
        }`}
        fill={value === typeSelected ? "white" : "dark-gray"}
      />
    ),
  }));

  return (
    <>
      {typeOptions.map((typeOption) => {
        return (
          <div
            key={typeOption.type}
            className={`flex cursor-pointer gap-2 rounded-lg p-2 ${
              typeOption.type === typeSelected ? "bg-black" : "bg-dark-gray"
            }`}
            onClick={() => dispatch(allAuctionsActions.type(typeOption.type))}
          >
            {typeOption.icon}
            <p className={`text-sm leading-6 text-white`}>
              {capitalizeWord(typeOption.type)}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TypeOptions;
