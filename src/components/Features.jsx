import building from "../assets/BuildingUz.svg";
import { animate, motion, stagger } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Features() {
  const { animateText, animateWhileInView } = useContext(ThemeContext);
  const data = [
    {
      title: "Infratuzilma xarajatlaridan tejash",
      desc: "Serverlar xarid qilish yoki IT-mutaxassislarni yollash shart emas.",
    },
    {
      title: "Avtomatik yangilanishlar",
      desc: "Murakkab yangilanishlar, versiyalar mosligi yoki vaqtincha to‘xtab qolishlar haqida unuting.",
    },
    {
      title: "24/7 foydalanish imkoniyati",
      desc: "1C tizimingizdan istalgan vaqt va istalgan joyda foydalanishingiz mumkin.",
    },
    {
      title: "Foydalanuvchilarni o‘qitish",
      desc: "Avval 1C bilan ishlamagan bo‘lsangiz ham, UZTELECOM bilan boshlash oson.",
    },
  ];

  return (
    <section
      className="dark:bg-[#0E131E] pb-4 pt-5">
      <div className="container mt-5! mb-30 md:mt-24 lg:mt-31 px-4 ">
        <motion.h2
          {...animateWhileInView(20, 0, 0.2, 0.5, 1)}
          className="text-[36px] md:text-[42px] lg:text-[48px] font-bold w-full text-center dark:text-white ">
          UZTELECOMdan 1C xizmatining <br />afzalliklari
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center mt-12 lg:mt-20 gap-10 lg:gap-5">
          <div 
          className="flex flex-col  gap-6  lg:w-1/2  ">
            {data.map((item, index) => (
              <motion.div
                key={index}
                {...animateWhileInView(0, -100, stagger(0.3), 0, 1)}
                // transition={{}}
                className="p-5 rounded-xl  max-w-140   dark:hover:shadow-[#206CE8]  transition duration-300 hover:shadow-xl dark:hover:border-[#206CE8] hover:border border-[#174880] hover:-translate-y-2"
              >
                <h3 className="font-bold text-gray-800 text-xl md:text-2xl dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-500 dark:text-[#9EA2A8] mt-2 text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
          {...animateText(0, 50, 0, 0.8, 1)}
          className="w-full lg:w-1/2 flex justify-center">
            <img src={building} alt="building image" className="w-full max-w-md md:max-w-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}