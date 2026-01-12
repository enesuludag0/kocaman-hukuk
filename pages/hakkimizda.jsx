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
        title="Hakkımızda | Kocaman Hukuk & Danışmanlık"
        href="/hakkimizda"
        description="Kocaman Hukuk Bürosu’nun alanında uzman, deneyimli avukat kadrosunu tanıyın. Güvenilir, çözüm odaklı ve profesyonel hukuk ekibimizle yanınızdayız."
        keywords="Kocaman Hukuk, avukatlık ofisi, avukat ekibi, hukuk bürosu ekibi, uzman avukatlar, hukuk kadrosu"
      />

      <About />
      <MissionVision />
      <Stats />
      <RelatedLinks />
    </>
  );
};

export default Hakkimizda;
