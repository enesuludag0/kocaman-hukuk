import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = ["/images/image5.jpg", "/images/image6.jpg"];

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
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen flex items-center overflow-hidden">
      {/* SLIDER BACKGROUND */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            draggable={false}
            className={`object-cover brightness-50 transition-transform duration-[10000ms] ease-out pointer-events-none select-none ${
              index === currentIndex && zoom ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* CONTENT */}
      <div className="container relative z-10 size-full flex flex-col justify-end items-center gap-4 sm:gap-6 text-center px-4 md:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        {/* LOGO */}
        <Image
          src="/images/resim6.png"
          alt="Logo"
          width={240}
          height={120}
          className="w-44 sm:w-54 md:w-64 lg:w-74 h-auto mx-auto md:mx-0 pointer-events-none select-none"
        />

        {/* YAZI */}
        <p className="text-sm sm:text-base max-w-lg text-white font-medium drop-shadow-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam sequi? Repellat commodi ipsam et provident saepe
          vitae iusto dicta!
        </p>
      </div>
    </section>
  );
};

export default Hero;
