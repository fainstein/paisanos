import { useEffect, useState } from "react";

const useResponsive = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, [isDesktop]);

  return { isDesktop };
};

export default useResponsive;
