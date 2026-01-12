import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import GlareHover from "./ui/GlareHover";

const About = () => {
  const pathname = usePathname();

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28">
      {/* <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10 my-12"
        style={{ backgroundImage: "url('/images/resim7.png')" }}
      ></div> */}
      <div className="container grid grid-cols-1 lg:grid-cols-7 items-stretch justify-center gap-12 sm:gap-14 md:gap-16 px-4 sm:px-8">
        {/* WRITE */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-y-4">
          <div className="flex items-center gap-2 md:gap-3 ml-1">
            <Image
              src="/images/courthouse.png"
              alt="Adalet Sarayı Icon"
              width={25}
              height={25}
              className="size-5 md:size-[25px] object-cover pointer-events-none select-none"
            />
            <h6 className="text-navy text-sm sm:text-base md:text-lg uppercase mt-0.5 sm:mt-1">Hakkımızda</h6>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl font-semibold uppercase mb-2 sm:mb-4 md:mb-6">
            Kocaman Hukuk & Danışmanlık
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-sm sm:text-base text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus similique sit nesciunt qui veniam suscipit porro
              vero dignissimos corporis quae repudiandae recusandae nemo cumque nihil, sapiente reprehenderit vitae laudantium
              quod quam quasi excepturi dolore numquam? Necessitatibus praesentium labore repellendus placeat suscipit, reiciendis
              delectus blanditiis et doloribus? Facilis similique aut architecto facere illo quis cupiditate? Consequuntur
              consectetur deleniti quod alias quo doloremque sunt explicabo iste laboriosam incidunt atque iure maxime minima, non
              quae illum, amet necessitatibus recusandae, vero esse tempore! Hic!
            </p>
            {pathname === "/hakkimizda" && (
              <p className="text-sm sm:text-base text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique, doloremque magni quas incidunt nam
                culpa accusantium nisi praesentium obcaecati excepturi ea ipsa! Deleniti odit cupiditate rem impedit illo laborum
                alias ratione nesciunt architecto? Distinctio quisquam, animi dolorem quam cupiditate praesentium deleniti, nisi
                totam quas atque facilis, tempore illo! Velit.
              </p>
            )}
          </div>
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
        <div
          className={`col-span-1 lg:col-span-3 relative flex flex-col items-center justify-center ${
            pathname === "/hakkimizda" ? "lg:pt-36" : "lg:pt-6"
          }`}
        >
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
          >
            <Image
              src="/images/image18.png"
              alt="Hukuk Bürosu Resim"
              width={800}
              height={600}
              className="w-screen max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-none object-cover aspect-[5/4] pointer-events-none select-none"
            />
          </GlareHover>
          {/* <GlareHover
              width="auto"
              height="auto"
              borderRadius="0px"
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={1000}
              playOnce={false}
              className="absolute top-0 left-1/2 -translate-1/2 lg:left-auto lg:right-0 lg:translate-x-2/5 z-10 border-0"
            >
              <Image
                src="/images/image12.jpg"
                alt="Avukat Resim"
                width={300}
                height={100}
                className="object-cover aspect-[5/3] border-10 border-white pointer-events-none select-none"
              />
            </GlareHover> */}
        </div>
      </div>
    </section>
  );
};

export default About;
