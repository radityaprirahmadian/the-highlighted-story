import React from "react";
import Navbar from "./(component)/navbar";
import generateSelectedPortfolioType from "@/lib/selected-items";
import NotFound from "./(component)/not-found";

const Index = ({
  params,
  searchParams,
}: {
  params: { portfolio: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { selectedPortfolioType, portfolioItem } = generateSelectedPortfolioType({ params, searchParams });

  return (
    <>
      <Navbar
        type={selectedPortfolioType?.name || undefined}
        title={selectedPortfolioType?.availableItems[portfolioItem]?.name || undefined}
      ></Navbar>
      <div className="pt-5 w-8/12 m-auto">
        {selectedPortfolioType?.availableItems[portfolioItem]?.component || <NotFound />}
      </div>
    </>
  );
};

export default Index;
