import { links } from "@/data/links";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Separator from "./Separator";
import GlareHover from "./ui/GlareHover";

const WorkAreas = () => {
  const pathname = usePathname();

  return (
    <section className="bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container flex flex-col gap-10 md:gap-16 px-4 sm:px-8">
        {pathname === "/" && (
          <div className="flex flex-col gap-6">
            <Separator />
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold uppercase">Çalışma Alanlarımız</h1>
          </div>
        )}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-14 sm:gap-y-16 md:gap-y-18 lg:gap-y-20">
          {links
            .filter((link) => link.dropdown)
            .flatMap((link) => link.dropdown)
            .slice(0, pathname === "/" ? 9 : undefined)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group w-full max-w-lg aspect-[6/5] mx-auto cursor-pointer"
              >
                {/* RESİM */}
                <div className="absolute inset-0 overflow-hidden">
                  <GlareHover
                    width="100%"
                    height="100%"
                    borderRadius="0px"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={1000}
                    playOnce={false}
                    className="border-0"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.label} Logo`}
                      fill
                      draggable="false"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out pointer-events-none select-none"
                    />
                  </GlareHover>
                </div>

                {/* KUTU */}
                <div className="absolute w-10/12 left-1/12 -bottom-7 md:-bottom-8 h-[60px] md:h-[70px] overflow-hidden">
                  <div className="absolute inset-0 bg-navy text-white flex justify-center items-center text-center border-b-4 border-red-800 z-10">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-wide leading-5 md:leading-6 px-4">
                      {item.label}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-red-800 text-white flex justify-center items-center z-20 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                    <p className="text-sm font-bold uppercase underline tracking-wide">Daha Fazlası</p>
                    <FaArrowUpRightFromSquare className="ml-2 text-[10px]" />
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {pathname === "/" && (
          <div className="relative text-center overflow-hidden mt-8 md:mt-4">
            <Link
              href="/calisma-alanlarimiz"
              className="relative group inline-block text-lg sm:text-xl font-bold bg-gray rounded-full z-10 uppercase scale-90 hover:scale-100 outline-none border-2 border-gray px-4 sm:px-8 py-2 sm:py-4 transition-all duration-500"
            >
              Tüm Çalışma Alanlarımız
              {/* <span className="absolute inset-0 z-[-1] bg-red-950 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span> */}
            </Link>
          </div>
        )}
      </div>
    </section>

    // <section className="bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-28">
    //   <div className="container flex flex-col gap-10 md:gap-16 px-8 md:px-16">
    //     {pathname === "/" && (
    //       <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold uppercase">Çalışma Alanlarımız</h1>
    //     )}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {links
    //         .filter((link) => link.dropdown)
    //         .flatMap((link) => link.dropdown)
    //         .slice(0, 9)
    //         .map((item) => (
    //           <div
    //             key={item.href}
    //             className="relative h-[300px] w-full group rounded-sm shadow-md cursor-pointer overflow-hidden"
    //           >
    //             {/* Siyah yazı kutusu */}
    //             <div className="flex h-1/2 flex-col justify-center bg-black p-6 z-0 relative">
    //               <h3 className="mb-2 text-xl font-semibold text-white">{item.label}</h3>
    //               <p className="text-sm font-light text-slate-300">Hukuk alanında uzmanlaşmış...</p>
    //             </div>

    //             {/* Arka plan görseli */}
    //             <div
    //               className="card-image z-10"
    //               style={{
    //                 backgroundImage: `url('${item.image}')`,
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center center"
    //               }}
    //             ></div>

    //             {/* Link */}
    //             <Link
    //               href={item.href}
    //               rel="nofollow"
    //               className="absolute bottom-0 right-0 z-0 grid h-1/2 w-1/2 place-content-center bg-white text-black transition-colors hover:text-indigo-500"
    //             >
    //               <div className="flex items-center">
    //                 <span className="text-xs">DAHA FAZLASI</span>
    //                 <svg
    //                   stroke="currentColor"
    //                   fill="none"
    //                   strokeWidth="2"
    //                   viewBox="0 0 24 24"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   className="text-lg"
    //                   height="1em"
    //                   width="1em"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <line x1="7" y1="17" x2="17" y2="7"></line>
    //                   <polyline points="7 7 17 7 17 17"></polyline>
    //                 </svg>
    //               </div>
    //             </Link>
    //           </div>
    //         ))}
    //     </div>
    //     {pathname === "/" && (
    //       <div className="relative text-center overflow-hidden px-4 sm:px-6 md:px-12">
    //         <Link
    //           href="/calisma-alanlarimiz"
    //           className="relative group inline-block text-lg md:text-xl font-medium text-red-950 z-10 uppercase scale-90 hover:scale-100 hover:text-white outline-none border-2 border-red-950 px-4 md:px-8 py-2 md:py-4 transition-all duration-500"
    //         >
    //           Çalışma Alanlarımız
    //           <span className="absolute inset-0 z-[-1] bg-red-950 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    // </section>
  );
};

export default WorkAreas;

{
  /* <button className="text-xl text-red-950  border-2 border-red-950 uppercase scale-90 hover:scale-100 px-8 py-4 hover:text-white hover:bg-red-950 transition-all duration-400">
            Çalışma Alanlarımız
          </button> */
}
{
  /* </div> */
}

// <div className="text-center scale-90 hover:scale-100 transition-transform duration-400">
//             <Link
//               href="/calisma-alanlarimiz"
//               className="text-xl bg-red-950 text-white border-2 border-red-950 uppercase px-8 py-4 hover:text-red-950 hover:bg-transparent transition-colors duration-400"
//             >
//               Çalışma Alanlarımız
//             </Link>
// </div>
{
  /* <div className="relative group text-center overflow-hidden">
          <button className="relative text-xl text-red-950 z-10 uppercase border-2 border-red-950 px-8 py-4 group-hover:text-white transition-colors duration-500">
            Çalışma Alanlarımız
          </button>
          <span className="absolute inset-0 z-0 bg-red-950 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500"></span>
        </div> */
}

{
  /* <div class="relative border border-neutral-300 bg-neutral-900 p-4 pt-0" style={{ display: "none" }}>
        <div class="-ml-4 -mr-4 mb-4 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 pr-4 text-sm">
          <div class="flex items-center font-medium"></div>
          <div class="relative cursor-pointer text-xs text-neutral-50">
            <select class="w-[120px] cursor-pointer text-ellipsis bg-transparent pr-6 focus:outline-none"></select>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="pointer-events-none absolute right-0 top-[2px] cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </div>
        </div>
        <div class="absolute inset-0 z-40 grid place-content-center bg-neutral-900/50 backdrop-blur">
          <a href="/pricing">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mx-auto mb-2 text-4xl font-semibold text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
            </svg>
            <span class="text-sm font-medium text-white">Go pro to access this content</span>
          </a>
        </div>
        <div class="no-scrollbar relative max-h-[445px] w-full overflow-scroll"></div>
        <button class="absolute right-2 top-[60px] rounded bg-neutral-600 p-3 text-lg text-neutral-50 transition-colors hover:bg-neutral-500">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div> */
}
