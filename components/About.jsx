import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-24">
      <div className="container flex items-center justify-center gap-x-20">
        <div className="w-[800px] flex flex-col gap-y-4">
          <h1 className="text-5xl font-semibold uppercase pb-6">Kocaman Hukuk & Danışmanlık</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus similique sit nesciunt qui veniam suscipit porro vero
            dignissimos corporis quae repudiandae recusandae nemo cumque nihil, sapiente reprehenderit vitae laudantium quod quam
            quasi excepturi dolore numquam? Necessitatibus praesentium labore repellendus placeat suscipit, reiciendis delectus
            blanditiis et doloribus? Facilis similique aut architecto facere illo quis cupiditate? Consequuntur consectetur
            deleniti quod alias quo doloremque sunt explicabo iste laboriosam incidunt atque iure maxime minima, non quae illum,
            amet necessitatibus recusandae, vero esse tempore! Hic!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique, doloremque magni quas incidunt nam
            culpa accusantium nisi praesentium obcaecati excepturi ea ipsa! Deleniti odit cupiditate rem impedit illo laborum
            alias ratione nesciunt architecto? Distinctio quisquam, animi dolorem quam cupiditate praesentium deleniti, nisi totam
            quas atque facilis, tempore illo! Velit.
          </p>
        </div>
        <div className="">
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
