import CountUp from "@/components/ui/CountUp";

const Stats = () => {
  return (
    <section className="relative bg-red-950 py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('/images/cover.jpg')" }}
      ></div>
      <div className="container flex justify-center gap-32">
        <div className="flex flex-col items-center gap-4 text-white">
          <div className="text-6xl">
            <CountUp from={0} to={500} separator="," direction="up" duration={1} className="" />
            <span>+</span>
          </div>
          <span className="text-xl">Başarılı Davalar</span>
        </div>
        <div className="flex flex-col items-center gap-4 text-white">
          <div className="text-6xl">
            <CountUp from={0} to={8} separator="," direction="up" duration={1} className="" />
            <span>+</span>
          </div>
          <span className="text-xl">Yıllık Tecrübe</span>
        </div>
        <div className="flex flex-col items-center gap-4 text-white">
          <div className="text-6xl">
            <CountUp from={0} to={300} separator="," direction="up" duration={1} className="" />
            <span>+</span>
          </div>
          <span className="text-xl">Danışmanlık Verilen Müvekkil</span>
        </div>
        <div className="flex flex-col items-center gap-4 text-white">
          <div className="text-6xl">
            <CountUp from={0} to={95} separator="," direction="up" duration={1} className="" />
            <span className="font-medium text-4xl">%</span>
          </div>
          <span className="text-xl">Müvekkil Memnuniyet Oranı</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
