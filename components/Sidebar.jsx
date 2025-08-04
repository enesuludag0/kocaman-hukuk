import { links } from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");

  const activeLink = links.find((link) => {
    if (pathname.startsWith("/calisma-alanlarimiz") && link.label === "Çalışma Alanlarımız") {
      return true;
    }
    return false;
  });

  const dropdownItems = activeLink.dropdown;
  console.log(router.push);

  useEffect(() => {
    const current = dropdownItems.find((item) => item.href === pathname);
    if (current) {
      setSelectedValue(current.href);
    }
  }, [pathname]);

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue);
    router.push(newValue);
  };

  return (
    <aside className="w-full sm:w-44 md:w-48 lg:w-56">
      {/* Sidebar */}
      <ul className="hidden sm:flex flex-col gap-5">
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
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 -ml-3 group-hover:ml-0"
                    }`}
                  >
                    <HiOutlineArrowNarrowRight className="text-white mt-0.5" />
                  </span>
                  {link.label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Select */}
      <div className="flex justify-center sm:hidden">
        <Select value={selectedValue} onValueChange={handleValueChange}>
          <SelectTrigger className="w-64 bg-red-950 text-white text-base rounded !ring-0 px-4 py-6">
            <SelectValue placeholder="Seçiniz" />
          </SelectTrigger>
          <SelectContent className="bg-red-950 text-white">
            {dropdownItems.map((item) => (
              <SelectItem key={item.href} value={item.href} className="group hover:!text-red-950 aria-selected:!text-red-950">
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
};

export default Sidebar;
