import Sidebar from "@/components/Sidebar";
import React from "react";

const NavTabsLayout = ({ children }) => {
  return (
    <section className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10 lg:gap-12 px-4 sm:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default NavTabsLayout;
