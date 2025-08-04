import CountUp from "@/components/ui/CountUp";

const Stats = () => {
  return (
    <section className="relative bg-blue-950 py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('/images/cover.jpg')" }}
      ></div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-y-16 text-white text-center sm:px-24 lg:px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl">
            <CountUp from={0} to={500} separator="," duration={1} />
            <span>+</span>
          </div>
          <span className="text-xl">Başarılı Davalar</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl">
            <CountUp from={0} to={8} duration={1} />
            <span>+</span>
          </div>
          <span className="text-xl">Yıllık Tecrübe</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl">
            <CountUp from={0} to={300} separator="," duration={1} />
            <span>+</span>
          </div>
          <span className="text-xl">Danışmanlık Verilen Müvekkil</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl">
            <CountUp from={0} to={95} duration={1} />
            <span className="font-medium text-4xl">%</span>
          </div>
          <span className="text-xl">Müvekkil Memnuniyet Oranı</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
