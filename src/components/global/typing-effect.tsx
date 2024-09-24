import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const TypingEffect = ({ children, bg, height }: { children: string | string[]; bg: string; height?: string }) => {
  const [isAppear, setIsAppear] = useState(false);
  const [displayedTextLimit, setDisplayedTextLimit] = useState(0);
  const [direction, setDirection] = useState("plus");
  const [activeChildren, setActiveChildren] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAppear((prev) => !prev);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isAppear]);

  useEffect(() => {
    let childrenLength = typeof children === "string" ? children.length : children[activeChildren].length;
    const interval = setTimeout(
      () => {
        setDisplayedTextLimit((prev) => (direction === "plus" ? prev + 1 : prev - 1));
        setDirection((prev) =>
          displayedTextLimit === childrenLength ? "minus" : displayedTextLimit === 0 ? "plus" : prev
        );

        if (typeof children !== "string" && displayedTextLimit <= 0) {
          setActiveChildren((prev) => (activeChildren === children.length - 1 ? 0 : prev + 1));
        }
      },
      displayedTextLimit === childrenLength || displayedTextLimit === 0 ? 500 : 100
    );

    return () => {
      clearTimeout(interval);
    };
  }, [direction, displayedTextLimit, children.length, children, activeChildren]);

  return (
    <>
      {typeof children === "string"
        ? children.substring(0, displayedTextLimit)
        : children[activeChildren].substring(0, displayedTextLimit)}
      <span
        className={cn(
          "w-1  -mb-2 inline-block",
          height ? height : "h-3 md:h-6 lg:h-8",
          isAppear ? "opacity-0" : "opacity-100",
          bg
        )}
      ></span>
    </>
  );
};

export default TypingEffect;
