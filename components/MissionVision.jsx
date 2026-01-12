import React from "react";
import { GiBullseye } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa6";
import { LiaEye } from "react-icons/lia";

const MissionVision = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* VISION */}
      <div className="relative bg-[#212D45] py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: "url('/images/image7.jpg')" }}
        />

        <div className="relative text-white flex flex-col md:items-center lg:items-start gap-10 px-4 sm:px-8 md:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Vizyonumuz</h1>

          <p className="text-sm sm:text-base leading-relaxed max-w-2xl">
            Hukuk alanında güven, kalite ve başarı ile anılan, saygın ve güçlü bir hukuk bürosu olmayı temel hedefimiz olarak
            benimsiyoruz. Gelişen hukuk sistemini yakından takip ederek, yenilikçi, sürdürülebilir ve profesyonel bir hizmet
            anlayışı ortaya koymayı amaçlıyoruz. Müvekkillerimize uzun vadeli değer sunan, bilgi ve tecrübeyi etkin biçimde
            kullanan bir yapı oluşturmayı hedefliyoruz.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="relative bg-[#3E3418] py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: "url('/images/image11.jpg')" }}
        />

        <div className="relative text-white flex flex-col md:items-center lg:items-start gap-10 px-4 sm:px-8 md:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Misyonumuz</h1>

          <p className="text-sm sm:text-base leading-relaxed max-w-2xl">
            Müvekkillerimize hukukun evrensel ilkeleri ve mesleki etik kurallar doğrultusunda, güvenilir, şeffaf ve nitelikli
            hukuki hizmet sunmayı temel görevimiz olarak benimsiyoruz. Her hukuki süreçte adaletin sağlanmasını esas alarak, hak
            ve menfaatleri titizlikle koruyan, çözüm odaklı bir yaklaşım sergiliyoruz. Sürecin her aşamasında müvekkillerimizi
            doğru ve açık şekilde bilgilendirerek, en etkili sonuca ulaşmayı amaçlıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

// <section className="relative bg-neutral-950 py-24 overflow-hidden">
//   <div
//     className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
//     style={{ backgroundImage: "url('/images/image1.jpg')" }}
//   ></div>
//   <div className="container relative text-white max-lg:px-6">
//     <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16">Misyonumuz - Vizyonumuz</h1>

//     {/* MISSION */}
//     <div className="grid md:grid-cols-3 gap-6 mb-16">
//       <div className="flex items-center gap-6 md:col-span-1">
//         <GiBullseye className="text-5xl text-amber-500" />
//         <h3 className="text-2xl sm:text-3xl font-medium">Misyonumuz</h3>
//       </div>
//       <p className="md:col-span-2 max-md:border-t md:border-l border-gray-500 max-md:pt-6 md:pl-6 lg:pl-12">
//         Karşılıklı güven ilişkisini esas alarak, müvekkillerimizin sorunlarını pratik bir şekilde çözmeyi hedefliyoruz.
//         Hukukun her alanında, vekillik sıfatının gereklerini en iyi şekilde yerine getirmeyi, hak ve hukuktan asla taviz
//         vermemeyi meslek onurumuzun gereği sayarak müvekkillerimize hizmet vermekteyiz.
//       </p>
//     </div>

//     {/* VISION */}
//     <div className="grid md:grid-cols-3 gap-6 mb-4">
//       <div className="flex items-center gap-6 md:col-span-1">
//         <LiaEye className="text-5xl text-amber-500" />
//         <h3 className="text-2xl sm:text-3xl font-medium">Vizyonumuz</h3>
//       </div>
//       <p className="md:col-span-2 max-md:border-t md:border-l border-gray-500 max-md:pt-6 md:pl-6 lg:pl-12">
//         Karşılıklı güven ilişkisini esas alarak, müvekkillerimizin sorunlarını pratik bir şekilde çözmeyi hedefliyoruz.
//         Hukukun her alanında, vekillik sıfatının gereklerini en iyi şekilde yerine getirmeyi, hak ve hukuktan asla taviz
//         vermemeyi meslek onurumuzun gereği sayarak müvekkillerimize hizmet vermekteyiz.
//       </p>
//     </div>
//   </div>
// </section>
