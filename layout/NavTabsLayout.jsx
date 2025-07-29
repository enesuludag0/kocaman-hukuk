import Sidebar from "@/components/Sidebar";
import React from "react";

const NavTabsLayout = ({ children }) => {
  return (
    <section className="container flex gap-20 pt-24 pb-18">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default NavTabsLayout;
