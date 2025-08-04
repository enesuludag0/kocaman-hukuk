import Sidebar from "@/components/Sidebar";
import React from "react";

const NavTabsLayout = ({ children }) => {
  return (
    <section className="container flex flex-col sm:flex-row gap-14 sm:gap-12 md:gap-16 lg:gap-24 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8">
      <Sidebar />
      {children}
    </section>
  );
};

export default NavTabsLayout;
