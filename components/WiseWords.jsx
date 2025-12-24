import React, { useEffect, useState } from "react";
import { quotes } from "@/data/quotes";

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
        style={{ backgroundImage: "url('/images/geo5.jpg')" }}
      ></div>
      <div
        className={`w-full px-8 max-w-[700px] mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 text-center text-white transition-all duration-500 ease-in-out ${
          isAnimating ? "translate-x-20 opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <p className="text-xl md:text-3xl leading-relaxed">{currentQuote.text}</p>
        <span className="text-base md:text-xl text-yellow-500 font-semibold italic">{currentQuote.author}</span>
      </div>
    </section>
  );
};

export default WiseWords;
