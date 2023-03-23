import { poppins } from "@/styles/fonts";
import vector from "../../public/Vector.png";
import vector1 from "../../public/Vector-1.png";
import Image from "next/image";

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

export default BrandLogo;
