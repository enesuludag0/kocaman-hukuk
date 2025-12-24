import Image from "next/image";
import React from "react";

const Separator = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="w-15 border-t border-navy mt-0.5"></span>
      <Image
        src="/images/courthouse.png"
        alt="Adalet Sarayı Icon"
        width={25}
        height={25}
        className="object-cover pointer-events-none select-none"
      />
      <span className="w-15 border-t border-navy mt-0.5"></span>
    </div>
  );
};

export default Separator;
