import { poppins } from "@/styles/fonts";
import BrandLogo from "./Header/BrandLogo";

const Footer = () => {
  return (
    <>
      <div className="h-px w-screen bg-gray" />
      <footer className="flex flex-col bg-dark-gray pt-16 pb-6 md:bg-black">
        <div className="flex w-full flex-col gap-12">
          <div className="flex flex-col items-start gap-8 px-8 md:items-center md:px-20 xl:px-40">
            <BrandLogo />
            <p
              className={`${poppins.className} text-base font-normal text-white`}
            >
              The new Creative Economy.
            </p>
          </div>
          <div className="h-px w-screen bg-gray md:mx-auto md:max-w-[80%]" />
          <p
            className={`${poppins.className} text-center text-xs font-normal leading-5 text-light-gray`}
          >
            Created with ❤️ by Nico Fainstein
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
