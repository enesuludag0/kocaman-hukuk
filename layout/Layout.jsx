import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaChevronUp, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Barlow } from "next/font/google";
import { usePathname } from "next/navigation";
import Cover from "@/components/Cover";
import NavTabsLayout from "./NavTabsLayout";
import Link from "next/link";
import { TiLocation } from "react-icons/ti";
import { links } from "@/data/links";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

const Layout = ({ children }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     setCursorPos({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", moveCursor);
  //   return () => window.removeEventListener("mousemove", moveCursor);
  // }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
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

  const showNavTabs = pathname.startsWith("/calisma-alanlarimiz/");

  return (
    <main className={`bg-white relative flex flex-col min-h-screen overflow-hidden ${barlow.className}`}>
      <Header />
      {pathname !== "/" && <Cover />}
      {showNavTabs ? <NavTabsLayout>{children}</NavTabsLayout> : children}

      {/* CONTACT (WP, PHONE, EMAIL) */}
      <div
        className="max-md:hidden fixed -right-[49px] top-1/2 -translate-y-1/2 z-40"
        onMouseEnter={() => setTimeout(() => setShowOptions(true), 200)}
        onMouseLeave={() => setTimeout(() => setShowOptions(false), 200)}
      >
        {/* Ana Buton */}
        <div
          className={`bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-500 text-black text-center text-xl font-bold uppercase tracking-widest -rotate-90 rounded-t-md shadow-main cursor-pointer px-6 py-2 transition-all duration-500 ${
            showOptions ? "translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100 pointer-events-auto"
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
          <Link
            href="https://wa.me/905053679077?text=Merhaba,%20web%20sitenizden%20ulaşıyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 tracking-wide bg-white text-green-500 rounded-md shadow-main cursor-pointer px-2 py-3 hover:bg-green-500 hover:!text-white transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </Link>
          <Link
            href="tel:+905053679077"
            className="flex flex-col items-center gap-1 tracking-wide bg-white text-red-600 rounded-md shadow-main cursor-pointer px-2 py-3 hover:bg-red-600 hover:!text-white transition-all duration-300"
          >
            <FaPhone className="text-xl" />
            <span className="text-xs font-semibold">Telefon</span>
          </Link>
          <Link
            href="/iletisim"
            className="flex flex-col items-center gap-1 tracking-wide bg-white text-cyan-600 rounded-md shadow-main cursor-pointer px-2 py-3 hover:bg-cyan-600 hover:!text-white transition-all duration-300"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-xs font-semibold">E-posta</span>
          </Link>
        </div>
      </div>

      {/* DOCK */}
      <div className="md:hidden fixed inset-x-3 bottom-2 z-40 rounded-2xl shadow-main bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700">
        <ul className="h-14 flex items-center justify-between max-w-screen-xl mx-auto uppercase font-medium">
          <li className="h-full basis-1/4 border-r border-zinc-500">
            <Link
              href="https://wa.me/905053679077?text=Merhaba,%20web%20sitenizden%20ulaşıyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full flex flex-col items-center justify-center gap-0.5 text-green-500 pt-1"
            >
              <FaWhatsapp className="text-2xl -mt-0.5" />
              <span className="text-xs">WhatsApp</span>
            </Link>
          </li>

          <li className="h-full basis-1/4 border-r border-zinc-500">
            <Link
              href="tel:+905053679077"
              className="h-full w-full flex flex-col items-center justify-center gap-1 text-amber-500 pt-1"
            >
              <FaPhone className="text-xl" />
              <span className="text-xs">Telefon</span>
            </Link>
          </li>

          <li className="h-full basis-1/4 border-r border-zinc-500">
            <Link
              href="https://maps.app.goo.gl/HB9CEXCiYq65uLBUA"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full flex flex-col items-center justify-center gap-1 text-red-600 pt-1"
            >
              <TiLocation className="text-2xl -mt-1" />
              <span className="text-xs">Yol Tarifi</span>
            </Link>
          </li>

          <li className="h-full basis-1/4">
            <Link href="/iletisim" className="h-full w-full flex flex-col items-center justify-center gap-1 text-cyan-600 pt-1">
              <FaEnvelope className="text-xl" />
              <span className="text-xs whitespace-nowrap">E-posta</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* SCROLL UP */}
      <div
        className={`fixed bottom-4 right-4 max-md:bottom-18 max-md:right-3 z-50 transition-all duration-500 ease-in-out transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }
        `}
      >
        <div onClick={scrollToTop} className="bg-gray text-black rounded-md shadow-main cursor-pointer p-3 sm:p-4">
          <FaChevronUp />
        </div>
      </div>

      {/* CONTACT CONTAINER */}
      <section className="relative w-full bg-blue-700 text-white overflow-hidden px-4 sm:px-8 lg:px-16 py-12 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ backgroundImage: "url('/images/geo4.jpg')" }}
        ></div>
        <div className="relative max-w-[1000px] mx-auto h-full grid grid-cols-1 md:grid-cols-5 items-center text-center md:text-left gap-y-10 md:gap-x-10">
          <h1 className="col-span-2 text-4xl font-semibold md:w-72 lg:w-full">Size nasıl yardımcı olabiliriz?</h1>
          <p className="col-span-2 md:w-72 md:pl-6 lg:pl-0 lg:pr-8 lg:w-full">
            Aklınıza takılan sorular için bizimle iletişime geçebilir, hizmetlerimiz hakkında detaylı bilgi alabilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="w-fit mx-auto bg-white text-black uppercase font-medium tracking-wide px-6 py-3 hover:brightness-90 transition-all duration-400"
          >
            İletişim
          </Link>
        </div>
      </section>

      {/* Özel Cursor */}
      {/* <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-100 ease-linear"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`
        }}
      >
        <div className="w-5 h-5 border border-gray rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray rounded-full"></div>
        </div>
      </div> */}

      <Footer />

      <hr className="border-zinc-800" />

      {/* COPYRIGHT */}
      <section className="w-full bg-black text-[#cdcdcd] py-5 max-md:pb-21">
        <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-3 text-center text-xs md:text-sm pl-8 lg:pl-18 pr-8">
          <span>Telif Hakkı &copy; 2025 Kocaman Hukuk &nbsp;|&nbsp; Tüm Hakları Saklıdır.</span>
          <span>Enes Uludağ tarafından yapılmıştır.</span>
          {/* <div className="flex gap-8">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Layout;
