import { capitalizeWord } from "@/helpers/strings";
import { allAuctionsActions, RootState } from "@/store";
import { ColorType } from "@/types/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ColorOptions = () => {
  const colorSelected = useSelector(
    (state: RootState) => state.filtersApplied.colors
  );
  const dispatch = useDispatch();

  const colorOptions = Object.values(ColorType);
  return (
    <>
      {colorOptions.map((color) => {
        return (
          <div
            key={color}
            className={`flex cursor-pointer gap-2 rounded-lg p-2 ${
              color === colorSelected ? "bg-black" : "bg-dark-gray"
            }`}
            onClick={() => dispatch(allAuctionsActions.color(color))}
          >
            <div
              className={`h-6 w-6 rounded-full border-2 border-solid`}
              style={{
                borderColor:
                  color === ColorType.All
                    ? "var(--color-blue)"
                    : `var(--color-${color})`,
                backgroundColor: `var(--color-${color})`,
              }}
            />
            <p
              className={`text-sm leading-6 ${
                color === ColorType.All ? "text-blue" : "text-white"
              } ${color === colorSelected ? "font-medium" : " font-normal"}
            `}
            >
              {capitalizeWord(color) +
                (color === ColorType.All ? " colors" : "")}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ColorOptions;
