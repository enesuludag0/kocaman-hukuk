import { links } from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const activeLink = links.find((link) => {
    if (pathname.startsWith("/calisma-alanlarimiz") && link.label === "Çalışma Alanlarımız") {
      return true;
    }
    return false;
  });

  const dropdownItems = activeLink.dropdown;

  return (
    <aside className="w-64 pr-10">
      <ul className="flex flex-col gap-5">
        {dropdownItems.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={i}
              className={`group shadow-main rounded hover:bg-red-950 hover:text-white transition-all duration-300 ${
                isActive ? "bg-red-950 text-white" : "bg-white"
              }`}
            >
              <Link href={link.href} className="block px-4 py-3">
                <div className="flex items-center">
                  <span
                    className={`transition-all duration-700 transform ${
                      isActive
                        ? "opacity-100 mr-2"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 -ml-2 group-hover:ml-0"
                    }`}
                  >
                    <FaLongArrowAltRight className="text-white" />
                  </span>

                  {link.label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
