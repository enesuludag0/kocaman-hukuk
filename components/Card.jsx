import Image from "next/image";
import { links } from "@/data/links";
import Link from "next/link";

const Card = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center gap-16 py-24">
      <div className="container grid grid-cols-3 gap-8">
        {links
          .filter((link) => link.dropdown)
          .flatMap((link) => link.dropdown)
          .slice(0, 6)
          .map((item) => (
            <div
              key={item.href}
              className="group shadow-xl shadow-red-950 hover:bg-red-950 transition-all duration-300 cursor-pointer"
            >
              <Link href={item.href}>
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    width={150}
                    height={50}
                    className="w-full h-56 object-cover group-hover:brightness-50 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="w-full h-20 flex items-center p-6 group-hover:text-white">
                  <h1 className="text-xl">{item.label}</h1>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="relative group overflow-hidden">
        <button className="relative text-xl text-red-950 z-10 uppercase border-2 border-red-950 px-8 py-4 group-hover:text-white transition-colors duration-500">
          Çalışma Alanlarımız
        </button>
        <span className="absolute inset-0 z-0 bg-red-950 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500"></span>
      </div>
    </section>
  );
};

export default Card;
