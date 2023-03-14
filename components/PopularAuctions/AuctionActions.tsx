import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface AuctionActionsProps {
  currentAuction: number;
  navigateAuctions: Dispatch<SetStateAction<number>>;
  totalAuctions: number;
}

const AuctionActions = ({
  currentAuction,
  navigateAuctions,
  totalAuctions,
}: AuctionActionsProps) => {
  const [nextEnabled, setNextEnabled] = useState<boolean>(true);
  const [prevEnabled, setPrevEnabled] = useState<boolean>(false);

  useEffect(() => {
    setPrevEnabled(currentAuction !== 0);
    if (currentAuction < totalAuctions - 1) {
      setNextEnabled(true);
    } else if (currentAuction === totalAuctions - 1) {
      setNextEnabled(false);
    }
  }, [currentAuction, totalAuctions]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <button className="rounded-full bg-blue px-6 py-4 text-base font-bold text-white">
          Place a bid
        </button>
        <button className="rounded-full border-2 border-gray bg-black px-6 py-4 text-base font-bold text-white">
          View item
        </button>
      </div>
      <div className="flex gap-2 justify-center lg:justify-start">
        <div
          className={`flex h-10 w-10 justify-center rounded-full border-2 text-light-gray ${
            prevEnabled
              ? "cursor-pointer border-gray"
              : "pointer-events-none border-black"
          }`}
          onClick={() => navigateAuctions((prevState) => prevState - 1)}
        >
          <ArrowLeftIcon width={24} />
        </div>
        <div
          className={`flex h-10 w-10 justify-center rounded-full border-2 text-light-gray ${
            nextEnabled
              ? "cursor-pointer border-gray"
              : "pointer-events-none border-black"
          }`}
          onClick={() => navigateAuctions((prevState) => prevState + 1)}
        >
          <ArrowRightIcon width={24} />
        </div>
      </div>
    </>
  );
};

export default AuctionActions;
