import { links } from "@/data/links";
import { workAreasContent } from "@/data/workAreasContent";

const workAreasLinks = links.find((link) => link.label === "Çalışma Alanlarımız").dropdown;

const WorkAreasItem = ({ content }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
      {content.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
          {section.content.map((item, i) => {
            if (item.type === "paragraph") {
              return (
                <p key={i} className="text-gray-700 mb-3">
                  {item.text}
                </p>
              );
            }

            if (item.type === "list") {
              return (
                <ul key={i} className="list-disc list-inside mb-3 text-gray-600">
                  {item.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default WorkAreasItem;

export const getStaticPaths = () => {
  const paths = workAreasLinks.map((link) => ({
    params: { slug: link.href.split("/").pop() }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = ({ params }) => {
  //const currentLink = workAreasLinks.find((link) => link.href.endsWith(`/${params.slug}`));
  const content = workAreasContent[params.slug];

  if (!content) {
    return { notFound: true };
  }

  return {
    props: {
      //label: currentLink.label,
      content
    }
  };
};
