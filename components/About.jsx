import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  const pathname = usePathname();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10 my-12"
        style={{ backgroundImage: "url('/images/resim7.png')" }}
      ></div> */}
      <div className="container relative flex flex-col lg:flex-row items-center justify-center gap-x-10 lg:gap-x-20 max-[432px]:gap-y-28 gap-y-32 px-4 sm:px-8">
        {/* WRITE */}
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex items-center gap-2 ml-1">
            <Image
              src="/images/courthouse.png"
              alt="Adalet Sarayı Icon"
              width={25}
              height={25}
              className="size-5 sm:size-[25px] object-cover pointer-events-none select-none"
            />
            <h6 className="text-navy text-base sm:text-lg uppercase mt-0.5 sm:mt-1">Hakkımızda</h6>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase mb-6">Kocaman Hukuk Bürosu</h1>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus similique sit nesciunt qui veniam suscipit porro vero
            dignissimos corporis quae repudiandae recusandae nemo cumque nihil, sapiente reprehenderit vitae laudantium quod quam
            quasi excepturi dolore numquam? Necessitatibus praesentium labore repellendus placeat suscipit, reiciendis delectus
            blanditiis et doloribus? Facilis similique aut architecto facere illo quis cupiditate? Consequuntur consectetur
            deleniti quod alias quo doloremque sunt explicabo iste laboriosam incidunt atque iure maxime minima, non quae illum,
            amet necessitatibus recusandae, vero esse tempore! Hic!
          </p>
          {pathname === "/hakkimizda" && (
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique, doloremque magni quas incidunt nam
              culpa accusantium nisi praesentium obcaecati excepturi ea ipsa! Deleniti odit cupiditate rem impedit illo laborum
              alias ratione nesciunt architecto? Distinctio quisquam, animi dolorem quam cupiditate praesentium deleniti, nisi
              totam quas atque facilis, tempore illo! Velit.
            </p>
          )}
          {/* <h6 className={` text-navy text-3xl ${italianno.className}`}>Av. Levent Kocaman</h6> */}
          {pathname === "/" && (
            <Link
              href="/hakkimizda"
              className="w-fit group flex items-center bg-gray text-sm rounded-sm md:font-medium mt-4 md:mt-6 px-3 md:px-4 py-1.5 md:py-2.5"
            >
              <span className="transform opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 -ml-4 group-hover:ml-0 transition-all duration-700">
                <HiOutlineArrowNarrowRight className="stroke-1 md:stroke-2 mt-[1px]" />
              </span>
              Devamını Görüntüle
            </Link>
          )}
        </div>

        {/* IMAGE */}
        <div className="relative">
          <Image
            src="/images/image18.png"
            alt="Avukat Resim"
            width={400}
            height={100}
            className="object-cover aspect-[5/4] pointer-events-none select-none"
          />
          <Image
            src="/images/image12.jpg"
            alt="Avukat Resim"
            width={300}
            height={100}
            className="max-[432px]:w-[250px] w-[300px] absolute top-0 left-1/2 -translate-1/2 lg:left-auto lg:right-0 lg:translate-x-2/5 border-10 border-white object-cover pointer-events-none select-none"
          />
          {/* <div className="absolute top-0 -translate-y-1/3 right-0 translate-x-1/3 backdrop-blur-xl rounded-full">
            <svg
              width="150"
              height="150"
              viewBox="0 0 300 300"
              style={{
                animation: "spin360 18s linear infinite"
              }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150 150
           m-120 0
           a120 120 0 1 1 240 0
           a120 120 0 1 1 -240 0"
                />
              </defs>

              <text fontSize="16" fontWeight="600" fill="#000" textLength="754" lengthAdjust="spacing">
                <textPath href="#circlePath" className="text-2xl">
                  &nbsp;&nbsp;5 YILLIK TECRÜBE • 5 YILLIK TECRÜBE •
                </textPath>
              </text>
            </svg>

            <style jsx>{`
              @keyframes spin360 {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
