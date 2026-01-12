import Meta from "@/components/Meta";
import GlareHover from "@/components/ui/GlareHover";
import { links } from "@/data/links";
import { workAreasContent } from "@/data/workAreasContent";
import Image from "next/image";

const WorkAreasItem = ({ content, slug }) => {
  return (
    <>
      <Meta
        title={`${content.title} | Kocaman Hukuk & Danışmanlık`}
        href={`/calisma-alanlarimiz/${slug}`}
        description={content.metaDescription}
        keywords={content.keywords}
      />

      <section className="flex flex-col gap-8">
        <div className="relative w-full h-[400px] rounded lg:rounded-md cursor-pointer overflow-hidden">
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
            <Image src="/images/image11.jpg" fill priority className="object-cover pointer-events-none select-none" />
          </GlareHover>
        </div>

        <div className="w-full sm:flex-1 flex flex-col gap-8 text-[#333333]">
          {/* <h1 className="text-4xl font-bold max-sm:text-center">{content.title}</h1> */}
          {content.sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-lg sm:text-xl font-semibold">{section.heading}</h2>
              <div className="flex flex-col gap-3">
                {section.content.map((item, i) => {
                  if (item.type === "paragraph") {
                    return (
                      <p key={i} className="text-sm sm:text-base leading-8">
                        {item.text}
                      </p>
                    );
                  }

                  if (item.type === "list") {
                    return (
                      <ul key={i} className="list-disc list-inside text-sm sm:text-base leading-8 pl-6">
                        {item.items.map((li, j) => (
                          <li key={j}>{li}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkAreasItem;

export const getStaticPaths = () => {
  const workAreasLinks = links.find((link) => link.label === "Çalışma Alanlarımız").dropdown;

  const paths = workAreasLinks.map((link) => ({
    params: { slug: link.href.split("/").pop() }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = ({ params }) => {
  const content = workAreasContent[params.slug];

  console.log(params.slug);

  if (!content) {
    return { notFound: true };
  }

  return {
    props: {
      content,
      slug: params.slug
    }
  };
};

// max-sm:mt-14 sm:ml-12 md:ml-16 lg:ml-28
