import { useEffect, useRef } from "react";

export const useAutoScroll = <T>(deps: T[]) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps.length]);

  return { containerRef, bottomRef };
};
