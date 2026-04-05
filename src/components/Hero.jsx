import Button from "../UI/Button";
import heroImg from "../assets/HeroBanner.png";
import heroImg1 from "../assets/Statistic.png";
import heroImg2 from "../assets/FrameSt.png";

export default function Hero() {
  return (
    <div className="container flex mt-12 mb-28! justify-evenly">
      <div className="">
        <h1 className="text-5xl max-w-100 font-bold">UZTELECOMdan 1C bulutli xizmati</h1>
        <p className="text-[#383A3D] text-[24px] max-w-110 mt-8 mb-12">Buxgalteriya hisobini yuriting, savdo va xizmatlaringizni dunyoning istalgan nuqtasidan boshqaring.</p>
        <div className="flex gap-3">
          <Button>30-kun bepul</Button>
        <button className="border border-[#BFC2C6] py-4 px-8 font-bold rounded-xl cursor-pointer ">Batafsil</button>
        </div>
      </div>
      <div className="relative">
        <img src={heroImg} alt="img" />
        <button className="absolute z-10  py-3 px-11 text-2xl font-bold text-white rounded-xl bg-[#174880] -top-5 left-89">1C UZTELECOM</button>
        <img src={heroImg1} alt="statistic"  className="absolute z-10 -bottom-4 -left-3"/>
        <img src={heroImg2} alt="frame" className="absolute z-10 -bottom-15  -right-4"/>
      </div>
    </div>
  )
}
