import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaChevronUp, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className={`bg-cream relative flex flex-col min-h-screen overflow-hidden ${barlow.className}`}>
      <Header />
      {children}

      {/* CONTACT */}
      <div
        className="fixed -right-12 top-1/2 group z-50"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        {/* Ana Buton */}
        <div
          className={`bg-red-950 text-white text-center text-xl font-bold uppercase tracking-widest -rotate-90 rounded-t-md shadow-main cursor-pointer px-6 py-2 transition-all duration-500 ${
            showOptions ? "translate-x-12 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          İletişim
        </div>

        {/* Açılan Butonlar */}
        <div
          className={`absolute right-14 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-transparent rounded-l-md p-3 transition-all duration-500 origin-right ${
            showOptions ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="https://wa.me/905053679077?text=Merhaba,%20web%20sitenizden%20ulaşıyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 bg-white text-red-950 rounded-md shadow-main cursor-pointer px-2 py-3 hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
          <a
            href="tel:+905053679077"
            className="flex flex-col items-center gap-1 bg-white text-red-950 rounded-md shadow-main cursor-pointer px-2 py-3 hover:bg-yellow-500 hover:text-white transition-all duration-300"
          >
            <FaPhone className="text-xl" />
            <span className="text-xs font-semibold">Telefon</span>
          </a>
          <a
            href="/iletisim"
            className="flex flex-col items-center gap-1 bg-white text-red-950 rounded-md shadow-main cursor-pointer px-2 py-3 hover:bg-cyan-600 hover:text-white transition-all duration-300"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-xs font-semibold whitespace-nowrap">E-posta</span>
          </a>
        </div>
      </div>

      {/* SCROLL UP */}
      <div
        className={`
        fixed bottom-4 right-4 z-50 
        transition-all duration-500 ease-in-out 
        transform 
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
      >
        <div onClick={scrollToTop} className="bg-red-950 text-white rounded-md shadow-main cursor-pointer p-4">
          <FaChevronUp />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
