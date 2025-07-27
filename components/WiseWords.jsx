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
    <section className="relative bg-red-950 min-h-[430px] py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('/images/image1.jpg')" }}
      ></div>
      <div className="max-w-[700px] mx-auto ">
        <div
          className={`flex flex-col items-center justify-center gap-12 text-center text-white transform transition-all duration-500 ease-in-out ${
            isAnimating ? "translate-x-20 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <p className="text-3xl leading-relaxed">{currentQuote.text}</p>
          <span className="text-xl text-yellow-500 font-semibold italic">{currentQuote.author}</span>
        </div>
      </div>
    </section>
  );
};

export default WiseWords;
