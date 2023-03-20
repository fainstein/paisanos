import { poppins } from "@/styles/fonts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SelectInputProps {
  options: Option[];
  label?: string;
}
export interface Option {
  text: string;
  value: string;
}

const SelectInput = ({ options, label }: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <p
          className={`${poppins.className} text-xs font-bold uppercase leading-3 text-cardet-blue`}
        >
          {label}
        </p>
      )}
      <div className="flex w-full items-center">
        <select
          className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gray bg-black p-2 pl-4 text-sm font-medium leading-6 text-white lg:w-[256px]"
          defaultValue={options[0].value}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        <div className="absolute right-10 md:right-24 lg:relative lg:right-10">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-gray p-1">
            <ChevronDownIcon height={9} className="text-light-gray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
