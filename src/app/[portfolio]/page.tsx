"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./(component)/navbar";
import generateSelectedPortfolioType from "@/lib/selected-items";

import Wrapper from "./(component)/wrapper";

const Index = ({
  params,
  searchParams,
}: {
  params: { portfolio: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [sex, setSex] = useState<any>();
  const [sex2, setSex2] = useState<any>();

  useEffect(() => {
    const { selectedPortfolioType, portfolioItem } = generateSelectedPortfolioType({ params, searchParams });
    setSex(selectedPortfolioType);
    setSex2(portfolioItem);
  }, []);

  return (
    <>
      <Navbar type={sex?.name || undefined} title={sex?.availableItems[sex2]?.name || undefined}></Navbar>
      <Wrapper>{sex?.availableItems[sex2]?.component}</Wrapper>
    </>
  );
};

export default Index;
