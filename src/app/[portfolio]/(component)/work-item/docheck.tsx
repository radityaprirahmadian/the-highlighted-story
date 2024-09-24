"use client";
import Image from "next/image";
import React from "react";

const Docheck = () => {
  return (
    <section>
      <div>
        <Image
          src="/works/docheck/docheckadmin.png"
          width="1200"
          height="200"
          alt="avana"
          className="border-black border-2"
        ></Image>
        <h2 className="mt-4 font-bold mb-2 text-2xl">DOCHECK ADMIN DASHBOARD</h2>
        <div className="text-md">
          <p>
            This is website for managing all users, questionnaires, and another datas. He created{" "}
            <span className="py-1 px-2 bg-carribean-10 text-white">this website from scratch</span>. This website is
            used by Administrator only.
          </p>
          <div className="mt-4">
            <h4 className="font-bold">Tech Stacks</h4>
            <p>NextJS, Redux, Typescript, Styled Component, SaSS</p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Image
          src="/works/avana/avanaportal.png"
          width="1200"
          height="200"
          alt="avana"
          className="border-black border-2"
        ></Image>
        <h2 className="mt-4 font-bold mb-2 text-2xl">AVANA PORTAL</h2>
        <div className="text-md">
          <p>
            Company Landing Page. He develop this landing page from scratch. Have{" "}
            <span className="py-1 px-2 bg-carribean-10 text-white">more than 10 pages</span>, and lot of contents that
            represents the company. Also setting this website to be{" "}
            <span className="py-1 px-2 bg-carribean-10 text-white">SEO freindly</span>. He also do{" "}
            <span className="py-1 px-2 bg-carribean-10 text-white">customize the selected theme</span> so the landing
            page design is more powerfull.
          </p>
          <div className="mt-4">
            <h4 className="font-bold">Tech Stacks</h4>
            <p>Figma, Wordpress, YoastSEO, lot of wordpress library</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docheck;
