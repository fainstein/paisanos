import { useState } from "react";
import SelectInput, { Option } from "../SelectInput";
import ColorOptions from "./ColorOptions";
import TypeOptions from "./TypeOptions";

enum OpenType {
  Colors = "colors",
  Types = "types",
}

const openOptions: Option[] = [
  { text: "Colors", value: OpenType.Colors },
  { text: "Types", value: OpenType.Types },
];

const OpenFilter = () => {
  const [openFilter, setOpenFilter] = useState<OpenType>(OpenType.Colors);

  const filterSelected =
    openFilter === OpenType.Colors ? <ColorOptions /> : <TypeOptions />;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row">
        <SelectInput
          value={openFilter}
          onChange={(newValue) => setOpenFilter(newValue)}
          options={openOptions}
          label="open"
        />
      </div>
      <div className="flex h-64 flex-col gap-2.5 rounded-xl border border-solid border-gray bg-dark-gray p-2">
        {filterSelected}
      </div>
    </div>
  );
};

export default OpenFilter;
