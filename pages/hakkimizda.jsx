import About from "@/components/About";
import Cover from "@/components/Cover";
import Meta from "@/components/Meta";
import MissionVision from "@/components/MissionVision";
import RelatedLinks from "@/components/RelatedLinks";
import Stats from "@/components/Stats";
import React from "react";

const Hakkimizda = () => {
  return (
    <>
      <Meta
        title="Hakkımızda | Kocaman Hukuk Bürosu"
        description="Kocaman Hukuk Bürosu olarak deneyimli ve dinamik kadromuzla, hukukun her alanında şeffaf ve etik değerlerle hizmet sunuyoruz."
        keywords="Kocaman Hukuk, avukatlık ofisi, hukuk kadrosu, tecrübeli avukatlar, hukuk prensipleri, etik değerler"
      />

      <About />
      <MissionVision />
      <Stats />
      <RelatedLinks />
    </>
  );
};

export default Hakkimizda;
