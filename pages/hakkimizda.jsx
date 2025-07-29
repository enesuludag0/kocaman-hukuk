import About from "@/components/About";
import Cover from "@/components/Cover";
import RelatedLinks from "@/components/RelatedLinks";
import Stats from "@/components/Stats";
import React from "react";

const Hakkimizda = () => {
  return (
    <>
      <About />
      <Stats />
      <div className="bg-gray-50">
        <RelatedLinks />
      </div>
    </>
  );
};

export default Hakkimizda;
