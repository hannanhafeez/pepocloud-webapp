import { useState, useEffect } from "react";
import { throttle } from "lodash";

export interface IOption {
  throttle: number;
}

const getWindowPosition = () => ({
  x: globalThis.pageXOffset,
  y: globalThis.pageYOffset
});

const defaultOption: IOption = {
  throttle: 100
};

export default function useWindowPosition(option = {}) {
  const { throttle: delay } = { ...defaultOption, ...option };
  const [windowPosition, setWindowPosition] = useState(getWindowPosition());

  useEffect(() => {
    const handleScroll = throttle(() => {
      setWindowPosition(getWindowPosition());
    }, delay);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return windowPosition;
}
