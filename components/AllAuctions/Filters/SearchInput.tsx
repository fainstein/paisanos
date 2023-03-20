import { poppins } from "@/styles/fonts";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <div className="flex w-full items-center">
        <input
          placeholder={`Type your keywords`}
          className="w-full cursor-pointer rounded-xl border-2 border-gray bg-black py-2 pl-4 pr-12 text-sm font-medium leading-6 text-white placeholder:text-white focus:cursor-text"
          value={searchQuery}
        />
        <MagnifyingGlassIcon
          width={20}
          height={20}
          className="absolute right-12 text-light-gray md:right-[6.5rem]"
        />
      </div>
      <div className=" hidden lg:flex lg:w-[calc(100vw-10rem)] lg:items-center lg:justify-between xl:w-[calc(100vw-20rem)]">
        <p className={`${poppins.className} text-2xl font-normal text-white`}>
          Type to find something nice...
        </p>
        <button className="rounded-full bg-blue p-3">
          <MagnifyingGlassIcon
            width={20}
            height={20}
            className="bg-blue"
            color="white"
          />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
