import { poppins } from "@/styles/fonts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SelectInputProps<T> {
  options: Option[];
  label?: string;
  value: T;
  onChange: (value: T) => void;
}
export interface Option {
  text: string;
  value: string;
}

function SelectInput<T extends string>({
  options,
  label,
  value,
  onChange,
}: SelectInputProps<T>) {
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
          className={`${poppins.className} w-full cursor-pointer appearance-none rounded-xl border-2 border-gray bg-black p-2 pl-4 text-sm font-medium leading-6 text-white lg:w-[256px]`}
          value={value}
          onChange={(event) => onChange(event.target.value as T)}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute right-10 md:right-24 lg:relative lg:right-10">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-gray p-1">
            <ChevronDownIcon height={9} className="text-light-gray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectInput;
