import Meta from "@/components/Meta";
import RelatedLinks from "@/components/RelatedLinks";
import TeamMember from "@/components/TeamMember";
import React from "react";

const Ekibimiz = () => {
  return (
    <>
      <Meta
        title="Ekibimiz | Kocaman Hukuk & Danışmanlık"
        href="/ekibimiz"
        description="Kocaman Hukuk Bürosu olarak deneyimli ve dinamik kadromuzla, hukukun her alanında şeffaf ve etik değerlerle hizmet sunuyoruz."
        keywords="Kocaman Hukuk, avukatlık ofisi, hukuk kadrosu, tecrübeli avukatlar, hukuk prensipleri, etik değerler"
      />

      <TeamMember />
      <RelatedLinks />
    </>
  );
};

export default Ekibimiz;
