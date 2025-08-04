import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { links } from "@/data/links";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

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

  return (
    <>
      {/* Masaüstü navbar */}
      <nav className="hidden md:block">
        <ul className="flex gap-2 lg:gap-4 font-bold text-lg lg:text-xl uppercase">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <Link
                href={link.href}
                className={`block p-1 lg:py-2 lg:px-4 transition-all duration-500 ${
                  pathname === link.href ? "text-white border-b-[3px] border-white" : "group-hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full border-b-[3px] border-white scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500" />
              </Link>

              {link.dropdown && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg text-base opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                  {link.dropdown.map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 transition-colors duration-200 ${
                          pathname === item.href ? "text-black" : "text-[#777] hover:text-black"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {index !== link.dropdown.length - 1 && <hr className="border-gray-300" />}
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
        className={`fixed inset-0 bg-black/30 backdrop-brightness-50 z-40 transition-opacity duration-500 cursor-pointer ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Hamburger menü */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[83%] xs:w-[300px] bg-white shadow-lg z-50 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col text-[#777]">
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <li className="flex items-stretch group">
                <Link
                  href={link.href}
                  className={`flex-1 font-bold uppercase px-5 py-4
                      ${pathname === link.href && "text-black"}
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
                      openDropdown === i && "bg-black text-white"
                    }`}
                  >
                    <FaChevronRight
                      className={`text-sm transition-transform duration-200 ${openDropdown === i ? "rotate-90" : ""}`}
                    />
                  </button>
                )}
              </li>

              <hr className="border-neutral-300" />

              {link.dropdown &&
                openDropdown === i &&
                link.dropdown.map((item) => (
                  <React.Fragment key={item.href}>
                    <li>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-5 py-3 text-[#777] hover:text-black text-sm font-semibold transition-colors ${
                          pathname === item.href && "text-black"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                    <hr className="border-gray-300" />
                  </React.Fragment>
                ))}
            </React.Fragment>
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
