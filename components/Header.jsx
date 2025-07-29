import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`absolute w-full z-50 py-4 transition-all duration-400 ${
        scrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Kocaman Hukuk Logo"
            width={150}
            height={50}
            draggable="false"
            className="pointer-events-none select-none"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
