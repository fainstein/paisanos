import { getTimeRemaining } from "@/helpers/auctions";
import { useEffect, useState } from "react";

export interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (endTime: Date) => {
  const countdownInitialValue = getTimeRemaining(endTime);

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    countdownInitialValue
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(endTime));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  return { ...timeRemaining };
};

export default useCountdown;
