"use client";
import { useEffect, useRef } from "react";

interface useIntervalInterface {
  setState: (state: any) => void;
  intervalPer: number;
  valueAdded: number;
  stopWhen: boolean;
}

const useInterval = ({ setState, intervalPer, valueAdded, stopWhen }: useIntervalInterface) => {
  let interval: any = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setState((prevState: any) => prevState + valueAdded);
    }, intervalPer);

    return () => clearInterval(interval.current);
  }, [intervalPer, valueAdded, setState]);

  useEffect(() => {
    if (stopWhen) {
      clearInterval(interval.current);
    }
  }, [stopWhen]);
};

export default useInterval;
