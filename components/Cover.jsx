import { usePathname } from "next/navigation";
import { links } from "@/data/links";

const Cover = () => {
  const pathname = usePathname();
  const allLinks = links.flatMap((link) => (link.dropdown ? [link, ...link.dropdown] : [link]));
  const currentLink = allLinks.find((link) => link.href === pathname);

  return (
    <section className="relative w-full h-[480px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-fixed brightness-50"
        style={{
          backgroundImage: "url('/images/cover.jpg')"
        }}
      ></div>

      <h1 className="text-7xl text-white font-semibold uppercase z-10">{currentLink.label}</h1>
    </section>
  );
};

export default Cover;
