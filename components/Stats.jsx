import CountUp from "@/components/ui/CountUp";

const Stats = () => {
  return (
    <section className="relative bg-blue-950 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-contain bg-center opacity-3 pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/geo12.jpg')" }}
      ></div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-y-16 text-white text-center sm:px-24 lg:px-4">
        <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
          <div className="text-4xl sm:text-5xl md:text-6xl">
            <CountUp from={0} to={500} separator="," duration={1} />
            <span>+</span>
          </div>
          <span className="text-base sm:text-lg md:text-xl">Başarılı Davalar</span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
          <div className="text-4xl sm:text-5xl md:text-6xl">
            <CountUp from={0} to={8} duration={1} />
            <span>+</span>
          </div>
          <span className="text-base sm:text-lg md:text-xl">Yıllık Tecrübe</span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
          <div className="text-4xl sm:text-5xl md:text-6xl">
            <CountUp from={0} to={300} separator="," duration={1} />
            <span>+</span>
          </div>
          <span className="text-base sm:text-lg md:text-xl">Danışmanlık Verilen Müvekkil</span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
          <div className="text-4xl sm:text-5xl md:text-6xl">
            <CountUp from={0} to={95} duration={1} />
            <span className="font-medium text-2xl sm:text-3xl md:text-4xl">%</span>
          </div>
          <span className="text-base sm:text-lg md:text-xl">Müvekkil Memnuniyet Oranı</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
