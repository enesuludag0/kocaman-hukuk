import Meta from "@/components/Meta";
import RelatedLinks from "@/components/RelatedLinks";
import WorkAreas from "@/components/WorkAreas";

const CalismaAlanlarimiz = () => {
  return (
    <>
      <Meta
        title="Çalışma Alanlarımız | Kocaman Hukuk & Danışmanlık"
        description="Kocaman Hukuk Bürosu olarak aile hukuku, ceza hukuku, iş hukuku, sigorta hukuku, tazminat hukuku gibi pek çok alanda avukatlık ve danışmanlık hizmeti sunmaktayız."
        keywords="hukuk alanları, aile hukuku, ceza hukuku, iş hukuku, sigorta hukuku, tazminat hukuku, avukatlık hizmetleri, danışmanlık"
      />

      <WorkAreas />
      <RelatedLinks />
    </>
  );
};

export default CalismaAlanlarimiz;
