import React, { useEffect, useState } from "react";
import { quotes } from "@/data/quotes";
import Image from "next/image";

const WiseWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setIsAnimating(false);
      }, 1000); // Animasyon süresi
    }, 10000); // 10 saniyede bir değişim

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section className="relative bg-green-950 flex items-center justify-center py-16 md:py-22 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-contain bg-center opacity-5 pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/geo10.jpg')" }}
      ></div>
      <div
        className={`w-full px-8 max-w-3xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 text-center text-white transition-all duration-500 ease-in-out ${
          isAnimating ? "translate-x-20 opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">{currentQuote.text}</p>
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          <Image
            src={currentQuote.image}
            alt={`${currentQuote.author} Resim`}
            width={50}
            height={50}
            draggable={false}
            className="size-9 sm:size-10 md:size-12 object-cover rounded-full pointer-events-none select-none"
          />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-500 font-semibold italic">
            {currentQuote.author}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WiseWords;
