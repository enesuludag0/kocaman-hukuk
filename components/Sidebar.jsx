import { links } from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const activeLink = links.find((link) => {
    if (pathname.startsWith("/calisma-alanlarimiz") && link.label === "Çalışma Alanlarımız") {
      return true;
    }
    return false;
  });

  if (!activeLink) return null;

  const dropdownItems = activeLink.dropdown;
  const activeItem = dropdownItems.find((item) => item.href === pathname);

  return (
    <aside className="w-full md:w-[250px]">
      {/* Sidebar */}
      <div className="sticky top-6">
        <div className="max-md:hidden text-sm lg:text-base">
          <h3 className="text-lg lg:text-xl font-bold uppercase mb-6">{activeLink.label}</h3>
          <ul className="hidden md:flex flex-col gap-3 lg:gap-4">
            {dropdownItems.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <>
                  <li
                    key={i}
                    className={`group hover:text-yellow-600 border-l-3 hover:border-yellow-600 transition-all duration-500 ${
                      isActive ? "text-yellow-600 border-yellow-600" : ""
                    }`}
                  >
                    <Link href={link.href} className="block pl-3">
                      <div className="flex items-center">
                        <span
                          className={`transition-all duration-500 transform ${
                            isActive
                              ? "opacity-100 mr-3"
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 -ml-3 group-hover:ml-0"
                          }`}
                        >
                          <FaLongArrowAltRight className="text-yellow-600" />
                        </span>
                        <span className="font-medium">{link.label}</span>
                      </div>
                    </Link>
                  </li>
                  {i < dropdownItems.length - 1 && <hr />}
                </>
              );
            })}
          </ul>
        </div>
      </div>

      {/* MOBİL ACCORDION */}
      <div className="md:hidden">
        <div
          className="relative flex items-center bg-navy text-white px-5 py-4 cursor-pointer min-h-[56px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="absolute inset-0 flex items-center justify-center text-center font-medium text-lg leading-5 px-10">
            {activeItem.label}
          </span>

          <span className="ml-auto text-xl font-bold z-10">{isOpen ? "−" : "+"}</span>
        </div>

        {/* AÇILAN LİSTE */}
        <div
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px"
          }}
          className="overflow-hidden transition-all duration-500"
        >
          <ul className="bg-navy text-gray text-center border-t border-gray-500 flex flex-col gap-4 py-4">
            {dropdownItems
              .filter((item) => item.href !== pathname)
              .map((item) => (
                <li
                  key={item.href}
                  onClick={() => {
                    router.push(item.href);
                    setIsOpen(false);
                  }}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

// className={`group shadow-main rounded hover:bg-red-950 hover:text-white transition-all duration-300 ${
//                   isActive ? "bg-red-950 text-white" : "bg-white"
//                 }`}

// SELECT
// <div className="flex justify-center sm:hidden">
//   <Select value={selectedValue} onValueChange={handleValueChange}>
//     <SelectTrigger className="w-64 bg-red-950 text-white text-base rounded !ring-0 px-4 py-6">
//       <SelectValue placeholder="Seçiniz" />
//     </SelectTrigger>
//     <SelectContent className="bg-red-950 text-white">
//       {dropdownItems.map((item) => (
//         <SelectItem key={item.href} value={item.href} className="group hover:!text-red-950 aria-selected:!text-red-950">
//           {item.label}
//         </SelectItem>
//       ))}
//     </SelectContent>
//   </Select>
// </div>
