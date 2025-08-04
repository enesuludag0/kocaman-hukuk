import Sidebar from "@/components/Sidebar";
import React from "react";

const NavTabsLayout = ({ children }) => {
  return (
    <section className="container flex flex-col sm:flex-row px-4 sm:px-8 py-16 sm:py-20 md:py-24 lg:py-28 ">
      <Sidebar />
      {children}
    </section>
  );
};

export default NavTabsLayout;
