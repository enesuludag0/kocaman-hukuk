import About from "@/components/About";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Meta from "@/components/Meta";
import RelatedLinks from "@/components/RelatedLinks";
import Stats from "@/components/Stats";
import WiseWords from "@/components/WiseWords";
import WorkAreas from "@/components/WorkAreas";

export default function Home() {
  return (
    <>
      <Meta
        title="Kocaman Hukuk Bürosu | Ankara Avukatlık ve Danışmanlık"
        description="Kocaman Hukuk Bürosu olarak Ankara’da aile, ceza, iş, sigorta, tazminat hukuku gibi alanlarda uzman avukatlık hizmeti sunuyoruz. Müvekkil odaklı, güvenilir ve etkili çözümlerimizle hukuki süreçlerinizi en iyi şekilde yönetiyor, hakkınızı koruyoruz. Profesyonel ekibimizle her aşamada yanınızda olarak, kişiye özel danışmanlık ve stratejik yaklaşımlar sunuyoruz."
        keywords="Ankara avukat, Ankara hukuk bürosu, hukuk danışmanlığı, avukatlık hizmetleri, danışmanlık, arabuluculuk, aile hukuku, ceza hukuku, iş hukuku, sigorta hukuku, tazminat hukuku"
      />

      <Hero />
      <About isPreview={true} />
      <WiseWords />
      <WorkAreas />
      <Stats />
      {/* <Card /> */}
      <RelatedLinks />
    </>
  );
}
