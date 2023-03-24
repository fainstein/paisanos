import useResponsive from "@/hooks/useResponsive";
import { allAuctionsActions } from "@/store";
import { poppins } from "@/styles/fonts";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const searchInputRef = useRef<null | HTMLInputElement>(null);
  const { isDesktop } = useResponsive();
  const dispatch = useDispatch();

  if (searchInputRef.current) {
    searchInputRef.current.placeholder = isDesktop
      ? "Type to find something nice..."
      : "Type your keywords";
  }

  const handleKeyDown = () => {
    searchInputRef.current && searchInputRef.current.focus();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const inputChangeHanlder = () => {
    dispatch(allAuctionsActions.search(searchInputRef.current?.value || ""));
  };

  return (
    <div className={`lg:w-[calc(100vw-10rem)] xl:w-[calc(100vw-20rem)]`}>
      <div className="flex w-full items-center justify-between">
        <input
          className={`${poppins.className} w-full cursor-pointer rounded-xl border-2 border-gray bg-black py-2 pl-4 pr-12 text-sm font-medium leading-6 text-white placeholder:text-white focus:cursor-text focus:placeholder:text-black lg:border-none lg:pl-0 lg:pr-12 lg:text-3xl lg:focus:outline-none`}
          ref={searchInputRef}
          type="text"
          onChange={inputChangeHanlder}
        />
        0
        <div
          className="absolute right-9 flex h-10 w-10 items-center justify-center rounded-full md:right-[5.75rem] lg:right-20 lg:bg-blue xl:right-[10rem]"
          onClick={() => searchInputRef.current?.focus()}
        >
          <MagnifyingGlassIcon
            width={20}
            height={20}
            className={`${isDesktop ? "text-white" : "text-light-gray"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
