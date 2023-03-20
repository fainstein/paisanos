import SelectInput, { Option } from "./SelectInput";

const openOptions: Option[] = [
  { text: "1", value: "1" },
  { text: "2", value: "2" },
];

const OpenFilter = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <SelectInput options={openOptions} label="open" />
      </div>
    </>
  );
};

export default OpenFilter;
