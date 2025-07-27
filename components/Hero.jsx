import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];

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
    <section className="flex items-center relative w-full min-h-screen overflow-hidden">
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
            className={`object-cover transition-transform duration-[10000ms] ease-out pointer-events-none select-none ${
              index === currentIndex && zoom ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* CONTENT */}
      <div className="container relative z-10 flex flex-col text-white h-full px-4 mt-48">
        {/* LOGO */}
        <div className="mb-6">
          <Image src="/images/logo.png" alt="Logo" width={300} height={150} />
        </div>

        {/* YAZI */}
        <p className="text-base md:text-lg max-w-lg drop-shadow-md mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam sequi? Repellat commodi ipsam et provident saepe
          vitae iusto dicta!
        </p>
      </div>
    </section>
  );
};

export default Hero;
