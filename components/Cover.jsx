import { usePathname } from "next/navigation";
import { links } from "@/data/links";

const Cover = () => {
  const pathname = usePathname();
  const allLinks = links.flatMap((link) => (link.dropdown ? [link, ...link.dropdown] : [link]));
  const currentLink = allLinks.find((link) => link.href === pathname);
  // const coverImage = links.find((link) => pathname === link.href || pathname.startsWith(link.href + "/")).image;

  return (
    <section className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top brightness-50 pointer-events-none select-none"
        style={{
          backgroundImage: `url('/images/cover1.jpg')`
        }}
      ></div>

      <h1 className="container text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold uppercase z-10 text-center px-4 sm:px-8 translate-y-6 sm:translate-y-8">
        {currentLink?.label}
      </h1>
    </section>
  );
};

export default Cover;
