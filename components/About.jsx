import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = ({ isPreview = false }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10 my-12"
        style={{ backgroundImage: "url('/images/icon.png')" }}
      ></div> */}
      <div className="container relative flex items-center justify-center gap-x-10 lg:gap-x-20 px-4 lg:px-8">
        <div className="w-[800px] flex flex-col gap-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-start font-semibold uppercase mb-6">
            Kocaman Hukuk & Danışmanlık
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus similique sit nesciunt qui veniam suscipit porro vero
            dignissimos corporis quae repudiandae recusandae nemo cumque nihil, sapiente reprehenderit vitae laudantium quod quam
            quasi excepturi dolore numquam? Necessitatibus praesentium labore repellendus placeat suscipit, reiciendis delectus
            blanditiis et doloribus? Facilis similique aut architecto facere illo quis cupiditate? Consequuntur consectetur
            deleniti quod alias quo doloremque sunt explicabo iste laboriosam incidunt atque iure maxime minima, non quae illum,
            amet necessitatibus recusandae, vero esse tempore! Hic!
          </p>
          {!isPreview && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique, doloremque magni quas incidunt nam
              culpa accusantium nisi praesentium obcaecati excepturi ea ipsa! Deleniti odit cupiditate rem impedit illo laborum
              alias ratione nesciunt architecto? Distinctio quisquam, animi dolorem quam cupiditate praesentium deleniti, nisi
              totam quas atque facilis, tempore illo! Velit.
            </p>
          )}
          {isPreview && (
            <Link
              href="/hakkimizda"
              className="bg-red-950 text-white w-fit text-sm md:text-base md:font-medium mt-4 md:mt-6 px-3 md:px-4 py-2 md:py-2.5"
            >
              Devamını Görüntüle
            </Link>
          )}
        </div>
        <div className="hidden md:flex">
          <Image
            src="/images/image4.png"
            alt="Avukat Resim"
            width={500}
            height={100}
            draggable={false}
            className="pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
