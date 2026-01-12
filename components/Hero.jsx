import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";
import TextType from "./ui/TextType";
import Link from "next/link";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

const images = ["/images/footer.jpg", "/images/image6.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setZoom(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-screen overflow-hidden">
      {/* SLIDER BACKGROUND */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center brightness-100 pointer-events-none select-none transition-transform duration-[10000ms] ease-out ${
              index === currentIndex && zoom ? "scale-110" : "scale-100"
            }`}
            style={{
              backgroundImage: `url('${src}')`
            }}
          ></div>
        </div>
      ))}

      {/* CONTENT */}
      <div className="container relative z-10 size-full text-white flex flex-col justify-end items-center gap-4 sm:gap-6 text-center px-4 sm:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        {/* LOGO */}
        {/* <Image
          src="/images/resim7.png"
          alt="Logo"
          width={240}
          height={120}
          className="w-44 sm:w-54 md:w-64 lg:w-74 h-auto mx-auto md:mx-0 pointer-events-none select-none"
        /> */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[91%] lg:w-[82%]">
          <TextType
            text={[
              "Hukukta Doğru Adres",
              "Hukukta Profesyonel Yaklaşım",
              "Hukukta Güven Çözümde Netlik",
              "Doğru Strateji Güçlü Sonuçlar",
              "Güvenilir Hukuk Desteği"
            ]}
            typingSpeed={75}
            deletingSpeed={10}
            pauseDuration={5000}
            showCursor={true}
            cursorCharacter=""
            className={`text-3xl sm:text-[42px] md:text-[54px] lg:text-7xl font-bold tracking-wide uppercase leading-tight ${playFairDisplay.className}`}
          />
        </div>

        <p className="text-xs sm:text-sm md:text-base max-w-2xl md:font-medium">
          Ankara’da faaliyet gösteren <span className="text-navy font-semibold">Kocaman Hukuk & Danışmanlık Bürosu</span> olarak,
          adalete bağlılığımız ve yıllara dayanan deneyimimizle güvenilir ve sonuç odaklı hukuki çözümler sunuyoruz.
        </p>

        <div className="flex justify-center items-center gap-4 tracking-wide">
          <Link
            href="/hakkimizda"
            className="text-xs sm:text-sm md:text-base bg-navy border-2 border-navy outline-none rounded-sm hover:!bg-white hover:text-black hover:!border-white px-3 md:px-4 py-1.5 md:py-2.5 transition-all duration-300"
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className="text-xs sm:text-sm md:text-base bg-[#777] border-2 border-[#777] outline-none rounded-sm hover:bg-white hover:text-black hover:border-white px-3 md:px-4 py-1.5 md:py-2.5 transition-all duration-300"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
