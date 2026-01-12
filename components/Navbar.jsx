import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { links } from "@/data/links";
import { FaChevronRight, FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";
import GlareHover from "./ui/GlareHover";

const Navbar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      setOpenDropdown(null);
    }
  }, [isOpen]);

  return (
    <>
      {/* Masaüstü navbar */}
      <nav className="hidden lg:block">
        <ul className="flex gap-1 text-lg font-semibold uppercase">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-2.5 py-1 transition-all duration-500 ${
                  pathname === link.href ? "text-white border-b-[3px] border-white" : "group-hover:text-white"
                }`}
              >
                {link.label}
                {link.label === "Çalışma Alanlarımız" && <FaAngleDown />}
                <span className="absolute bottom-0 left-0 w-full border-b-[3px] border-white scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500" />
              </Link>

              {link.dropdown && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg text-sm opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                  {link.dropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block text-[#7a7a7a] font-medium px-4 py-2 transition-colors duration-200 ${
                          pathname === item.href ? "bg-black text-white" : "hover:bg-black hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {/* {index !== link.dropdown.length - 1 && <hr className="border-gray-300" />} */}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay - Arka plan karartması */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-brightness-50 z-10 transition-opacity duration-500 cursor-pointer ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Hamburger menü */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full max-[357px]:w-[90%] w-[80%] xs:w-[300px] sm:w-[350px] md:w-[400px] bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" className="flex justify-center py-4">
          <Image
            src="/images/resim8.png"
            alt="Kocaman Hukuk Logo"
            width={200}
            height={50}
            draggable="false"
            className="pointer-events-none select-none"
          />
        </Link>

        <ul className="flex flex-col text-[#777]">
          <hr className="border-neutral-300" />
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <li className="flex items-stretch group">
                <Link
                  href={link.href}
                  className={`flex-1 font-bold uppercase px-5 py-4
                      ${pathname === link.href && "text-navy"}
                      ${openDropdown === i ? "bg-neutral-100" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>

                {link.dropdown && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === i ? null : i);
                    }}
                    className={`flex items-center justify-center border-l px-5 cursor-pointer transition-all duration-200 ${
                      openDropdown === i && "bg-navy text-white"
                    }`}
                  >
                    <FaChevronRight
                      className={`text-sm transition-transform duration-200 ${openDropdown === i ? "rotate-90" : ""}`}
                    />
                  </button>
                )}
              </li>

              <hr className="border-neutral-300" />

              {link.dropdown && (
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openDropdown === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <React.Fragment key={item.href}>
                      <li>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-5 py-3 text-[#777] hover:text-[#003070] text-sm font-medium transition-all duration-200 ${
                            pathname === item.href && "text-navy font-semibold"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                      <hr className="border-gray-300" />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>

        <ul className="flex items-center justify-center gap-2 py-8">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <GlareHover
                width="100%"
                height="100%"
                borderRadius="0px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="border-0"
                style={{ position: "relative" }}
              >
                <Link href={link.href} target="_blank" className={`block text-white rounded-full text-lg p-2.5 ${link.bgColor}`}>
                  {link.icon}
                </Link>
              </GlareHover>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <nav className="relative">
      <ul className="flex font-bold text-xl">
        {links.map((link) =>
          link.dropdown ? (
            <li key={link.label} className="relative group">
              <Link href={link.href} className="p-4 block group-hover:text-gray-300 transition-colors">
                {link.label}
              </Link>

              <ul className="absolute left-4 top-full bg-gray-800 shadow-md z-50 min-w-[200px] text-base opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                {link.dropdown.map((item, index) => (
                  <>
                    <li key={item.href}>
                      <Link href={item.href} className="block text-white px-4 py-2 hover:bg-white hover:text-gray-800">
                        {item.label}
                      </Link>
                    </li>
                    {index !== link.dropdown.length - 1 && <hr className="border-white" />}
                  </>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.label}>
              <Link href={link.href} className="p-4 block hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>

    <nav className="">
      <ul className="flex space-x-8 font-bold text-xl">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-gray-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav> */
}
