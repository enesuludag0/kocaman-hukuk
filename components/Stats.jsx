import CountUp from "@/components/ui/CountUp";
import { FaThumbsUp } from "react-icons/fa";
import { FaAward, FaScaleBalanced, FaUsers } from "react-icons/fa6";

const Stats = () => {
  return (
    <section className="relative bg-blue-950 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-contain bg-center opacity-3 z-0 pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/geo12.jpg')" }}
      ></div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-y-16 text-white px-4 sm:px-6 lg:px-8">
        {/* 1 — Başarılı Davalar */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-fit mx-auto z-10">
          <div className="size-12 flex items-center justify-center bg-yellow-600 rounded-full shrink-0 mt-2">
            <span className="text-2xl text-black">
              <FaAward />
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-4xl sm:text-5xl md:text-6xl">
              <CountUp from={0} to={500} separator="," duration={1} />
              <span>+</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl">Başarılı Davalar</span>
          </div>
        </div>

        {/* 2 — Yıllık Tecrübe */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-fit mx-auto z-10">
          <div className="size-12 flex items-center justify-center bg-yellow-600 rounded-full shrink-0 mt-2">
            <span className="text-2xl text-black">
              <FaScaleBalanced />
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-4xl sm:text-5xl md:text-6xl">
              <CountUp from={0} to={8} duration={1} />
              <span>+</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl">Yıllık Tecrübe</span>
          </div>
        </div>

        {/* 3 — Müvekkil */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-fit mx-auto z-10">
          <div className="size-12 flex items-center justify-center bg-yellow-600 rounded-full shrink-0 mt-2">
            <span className="text-2xl text-black">
              <FaUsers />
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-4xl sm:text-5xl md:text-6xl">
              <CountUp from={0} to={300} separator="," duration={1} />
              <span>+</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl">Danışmanlık Verilen Müvekkil</span>
          </div>
        </div>

        {/* 4 — Memnuniyet */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-fit mx-auto z-10">
          <div className="size-12 flex items-center justify-center bg-yellow-600 rounded-full shrink-0 mt-2">
            <span className="text-2xl text-black">
              <FaThumbsUp />
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-4xl sm:text-5xl md:text-6xl">
              <CountUp from={0} to={95} duration={1} />
              <span className="font-medium text-2xl sm:text-3xl md:text-4xl">%</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl">Müvekkil Memnuniyet Oranı</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
