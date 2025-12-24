import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`absolute w-full z-50 py-4 transition-all duration-400 ${
        scrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-4 sm:px-8">
        <Link href="/">
          <Image
            src="/images/resim6.png"
            alt="Kocaman Hukuk Logo"
            width={150}
            height={50}
            draggable="false"
            className="max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] w-full h-auto pointer-events-none select-none"
          />
        </Link>

        {/* Hamburger butonu sadece md altı görünür */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-gray-700 bg-gradient-to-tr from-slate-500 via-white to-slate-500 p-2 z-10 cursor-pointer transition-all duration-300"
        >
          <FaBars />
        </button>

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
