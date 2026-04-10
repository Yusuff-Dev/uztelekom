import Button from "../UI/Button";
import heroImg from "../assets/HeroBanner.png";
import heroImg1 from "../assets/Statistic.png";
import heroImg2 from "../assets/FrameSt.png";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 mt-12 mb-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            UZTELECOMdan <br /> 1C bulutli xizmati
          </h1>

          <p className="text-[#6B7280] mt-6 text-base sm:text-lg">
            Buxgalteriya hisobini yuriting, savdo va xizmatlaringizni
            dunyoning istalgan nuqtasidan boshqaring.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button>30 kun bepul</Button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium">
              Batafsil
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-[420px]">
          <img src={heroImg} alt="hero" className="w-full rounded-xl" />

          <div className="absolute top-3 right-3 bg-[#174880] text-white text-xs sm:text-sm px-4 py-1 rounded-md">
            1C UZTELECOM
          </div>

          <img
            src={heroImg1}
            alt="stat"
            className="absolute -bottom-6 left-0 w-28 sm:w-36"
          />

          <img
            src={heroImg2}
            alt="frame"
            className="absolute -bottom-6 right-0 w-28 sm:w-36"
          />
        </div>
      </div>
    </section>
  );
}