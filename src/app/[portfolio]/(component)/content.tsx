"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const Content = ({
  contents,
}: {
  contents: { image: StaticImageData; title: string; techs: string[]; description: string }[];
}) => {
  return (
    <section className="pt-20">
      {contents.map((content, index) => {
        return (
          <div key={content.title} className={cn(index !== 0 ? "mt-16" : "")}>
            <Image
              src={content.image}
              width="1200"
              height="200"
              loading="lazy"
              placeholder="blur"
              alt={content.title}
              className="border-black border-3"
            ></Image>
            <h2 className="mt-4 font-bold mb-2 text-2xl">{content.title}</h2>
            <div className="text-md">
              <p dangerouslySetInnerHTML={{ __html: content.description }}></p>
              <div className="mt-4">
                <h4 className="font-bold">Tech Stacks</h4>
                <p>{content.techs.join(", ")}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Content;
