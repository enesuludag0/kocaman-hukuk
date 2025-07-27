import About from "@/components/About";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import RelatedLinks from "@/components/RelatedLinks";
import Stats from "@/components/Stats";
import WiseWords from "@/components/WiseWords";
import WorkAreas from "@/components/WorkAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WiseWords />
      <WorkAreas />
      <Stats />
      {/* <Card /> */}
      <RelatedLinks />
    </>
  );
}
