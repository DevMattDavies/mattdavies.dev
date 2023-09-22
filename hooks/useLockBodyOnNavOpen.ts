import { useState } from "react";

export const useLockBodyOnNavOpen = () => {
  const [scrollPosition, setScrollPosition] = useState<number | null>(null);

  const lockBody = () => {
    if (typeof document !== "undefined") {
      const body = document.body;
      if (!scrollPosition) {
        const currentScrollPosition = window.scrollY;
        setScrollPosition(currentScrollPosition);
        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.touchAction = "none";
        body.style.top = `-${currentScrollPosition}px`;
      }
    }
  };

  const unlockBody = () => {
    if (typeof document !== "undefined" && scrollPosition !== null) {
      const body = document.body;
      body.style.overflow = "unset";
      body.style.position = "unset";
      body.style.touchAction = "unset";
      window.scrollTo(0, scrollPosition);
      setScrollPosition(null);
    }
  };

  return { lockBody, unlockBody };
};
