"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NOTASDAD = () => {
  const router = useRouter();
  return (
    <div className="text-center bg-light-orange-50 h-full font-bold relative z-10 text-3xl  border-3 border-black overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <div>
        PAGE NOT FOUND
        <div className="text-lg font-normal cursor-pointer underline" onClick={() => router.push("/")}>
          Back to homepage
        </div>
      </div>
    </div>
  );
};

export default NOTASDAD;
