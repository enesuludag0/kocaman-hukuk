import Meta from "@/components/Meta";
import { links } from "@/data/links";
import { workAreasContent } from "@/data/workAreasContent";

const WorkAreasItem = ({ content }) => {
  return (
    <>
      <Meta title={`${content.title} | Kocaman Hukuk Bürosu`} description={content.metaDescription} keywords={content.keywords} />

      <div className="flex-1 flex flex-col gap-9">
        <h1 className="text-4xl font-bold max-sm:text-center">{content.title}</h1>
        {content.sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold max-sm:text-center">{section.heading}</h2>
            <div className="flex flex-col gap-3">
              {section.content.map((item, i) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={i} className="text-gray-700">
                      {item.text}
                    </p>
                  );
                }

                if (item.type === "list") {
                  return (
                    <ul key={i} className="list-disc list-inside text-gray-600">
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

  if (!content) {
    return { notFound: true };
  }

  return {
    props: {
      content
    }
  };
};
