import { poppins } from "@/styles/fonts";
import vector from "../../public/Vector.png";
import vector1 from "../../public/Vector-1.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const BrandLogo = () => (
  <div className="flex gap-2">
    <div className="relative h-8 w-8">
      <Image
        src={vector}
        alt=""
        className="absolute left-0 right-1/3 top-0 bottom-0"
      />
      <Image
        src={vector1}
        alt=""
        className="absolute left-1/3 right-0 top-[16.67%] bottom-[16.67%]"
      />
    </div>
    <p
      className={`text-white ${poppins.className} text-2xl font-semibold tracking-tight`}
    >
      NFPaisanos
    </p>
  </div>
);

const NavigationMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const desktopLinks = (
    <>
      <Link href={"#"} className="text-light-gray">
        Discover
      </Link>
      <Link href={"#"} className="text-light-gray">
        What we do
      </Link>
    </>
  );

  const mobileLinks = (
    <>
      <Link
        href={"#"}
        className={`px-8 text-xl text-light-gray transition-all duration-500 ease-in-out ${
          openMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        Discover
      </Link>
      <Link
        href={"#"}
        className={`px-8 text-xl text-light-gray transition-all delay-200 duration-500 ease-in-out ${
          openMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        What we do
      </Link>
    </>
  );
  return (
    <>
      <nav className="z-20 bg-black">
        {/* Desktop Menu */}
        <div className="hidden h-20 items-center justify-between lg:flex">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <BrandLogo />
            <div className="h-10 w-0.5 rounded-sm bg-gray" />
            {desktopLinks}
          </div>
          <button className="flex gap-3 rounded-full border-2 border-solid border-light-gray bg-gradient-to-l from-black to-black bg-right px-4 py-3 text-white transition-all duration-300 ease-in hover:border-white hover:bg-gradient-to-l hover:via-white hover:to-white hover:bg-[length:400%] hover:bg-left hover:text-black">
            Connect Wallet
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="z-40 flex h-[104px] flex-col pt-12 lg:hidden">
          <div className="flex w-full items-center justify-between">
            <BrandLogo />
            <div className="absolute right-8 h-8 w-8">
              <Bars2Icon
                className={`absolute text-light-gray transition-opacity duration-300 ease-in ${
                  openMenu ? "opacity-0" : "opacity-100"
                }`}
                onClick={toggleMenu}
              />
              <XMarkIcon
                className={`absolute text-light-gray transition-opacity duration-300 ease-in ${
                  openMenu ? "opacity-100" : "opacity-0"
                }`}
                onClick={toggleMenu}
              />
            </div>
          </div>
          <div
            className={`absolute left-0 top-[104px] z-20 w-screen bg-black transition-opacity duration-300 ease-in-out ${
              openMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-end gap-4 overflow-hidden transition">
              {mobileLinks}
              <div
                className={`px-8 pb-8 text-xl transition-all delay-500 duration-500 ease-in-out ${
                  openMenu
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <button className="flex gap-3 rounded-full border-2 border-solid border-light-gray px-3 py-2 text-white">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setOpenMenu(false)}
        className={`pointer-events-none fixed z-10 h-screen w-screen bg-dark-gray transition-opacity duration-500 ${
          openMenu ? "opacity-30" : "opacity-0"
        }`}
      ></div>
    </>
  );
};

export default NavigationMenu;
