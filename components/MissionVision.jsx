import React from "react";
import { GiBullseye } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa6";
import { LiaEye } from "react-icons/lia";

const MissionVision = () => {
  return (
    <section className="relative bg-neutral-950 py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('/images/image1.jpg')" }}
      ></div>
      <div className="container relative text-white max-lg:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16">Misyonumuz - Vizyonumuz</h1>

        {/* Misyon */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center gap-6 md:col-span-1">
            <GiBullseye className="text-5xl text-amber-500" />
            <h3 className="text-2xl sm:text-3xl font-medium">Misyonumuz</h3>
          </div>
          <p className="md:col-span-2 max-md:border-t md:border-l border-gray-500 max-md:pt-6 md:pl-6 lg:pl-12">
            Karşılıklı güven ilişkisini esas alarak, müvekkillerimizin sorunlarını pratik bir şekilde çözmeyi hedefliyoruz.
            Hukukun her alanında, vekillik sıfatının gereklerini en iyi şekilde yerine getirmeyi, hak ve hukuktan asla taviz
            vermemeyi meslek onurumuzun gereği sayarak müvekkillerimize hizmet vermekteyiz.
          </p>
        </div>

        {/* Vizyon */}
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div className="flex items-center gap-6 md:col-span-1">
            <LiaEye className="text-5xl text-amber-500" />
            <h3 className="text-2xl sm:text-3xl font-medium">Vizyonumuz</h3>
          </div>
          <p className="md:col-span-2 max-md:border-t md:border-l border-gray-500 max-md:pt-6 md:pl-6 lg:pl-12">
            Karşılıklı güven ilişkisini esas alarak, müvekkillerimizin sorunlarını pratik bir şekilde çözmeyi hedefliyoruz.
            Hukukun her alanında, vekillik sıfatının gereklerini en iyi şekilde yerine getirmeyi, hak ve hukuktan asla taviz
            vermemeyi meslek onurumuzun gereği sayarak müvekkillerimize hizmet vermekteyiz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
