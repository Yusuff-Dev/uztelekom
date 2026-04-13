import Button from "../UI/Button";
import heroImg from "../assets/HeroBanner.png";
import heroImg1 from "../assets/Statistic.png";
import heroImg2 from "../assets/FrameSt.png";
import { motion} from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Hero() {
  const {animateText} = useContext(ThemeContext);

  return (
    <section id="hero" className="py-8 dark:bg-linear-to-l from-[#07295F] to-[#08387D] pt-15 pb-35" >
      <div className="container flex flex-col-reverse md:flex-row items-center gap-24 md:gap-2 justify-between">
        <div>
          <motion.h1 
          {...animateText(50, 0, 0, 0.8, 1)}
          className="text-3xl sm:text-[64px] max-w-100 font-bold dark:text-white">UZTELECOMdan 1C bulutli xizmati</motion.h1>
          <motion.p 
          {...animateText(50, 0, 0.5, 0.8, 1)}
          className="text-[#383A3D] dark:text-[#9EA2A8] text-xl sm:text-2xl max-w-110 mt-8 mb-12">Buxgalteriya hisobini yuriting, savdo va xizmatlaringizni dunyoning istalgan nuqtasidan boshqaring.</motion.p>
          <div className="flex lex-col md:flex-row gap-3">
            <Button variant="primary">30-kun bepul</Button>
            <Button variant="outline">Batafsil</Button>
          </div>
        </div>
        <motion.div 
        {...animateText(0, 50, 0, 0.8, 1)}
        className="relative">
          <img src={heroImg} alt="hero image" className="w-full h-full object-cover"/>
          <motion.div 
          {...animateText(0, 0, 0.3, 0.8, 1)}
          className="absolute z-10  py-3 px-11 text-2xl font-bold text-white rounded-xl bg-[#174880] dark:bg-[#206CE8] top-0 right-0 -translate-y-1.5">1C UZTELECOM</motion.div>
          <motion.img 
          {...animateText(0, 0, 0.5, 0.8, 1)}
          src={heroImg1} alt="statistic" className="absolute z-10 left-0 bottom-0 translate-y-1/2 max-w-45.5" />
          <motion.img 
          {...animateText(0, 0, 0.8, 0.8, 1)}
          src={heroImg2} alt="frame" className="absolute z-10 right-0 bottom-0 translate-y-1/2 max-w-32.5" />
        </motion.div>
      </div>
    </section>
  )
}
