import Tarif from "./Tarif";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Prices() {
  const { animateWhileInView } = useContext(ThemeContext);
  const data = [
    { id: 1, name: "Bazaviy", monthly: "200 000" },
    { id: 2, name: "Standart", monthly: "360 000" },
    { id: 3, name: "PROFI", monthly: "460 000" }
  ]
  return (
    <section className="py-25">
        <div className="container">
          <div className="px-5">
            <div className="flex items-center gap-3"> 
              <p className="text-sm font-medium">Oylik</p>
              <div className="w-10 h-5 bg-[#A1A5AA] rounded-2xl flex items-center ">
                <div className="w-3 h-3 rounded-full m-1 bg-white"></div>
              </div>
              <p className="text-sm text-[#7D8288] font-medium">Yillik</p>
              <div className="px-3 bg-[#B8CEEA] rounded-xl text-sm font-medium text-[#1B3658]">
                20% tejab qolasiz
              </div>
            </div>

            <div 
              className="grid md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5"
            >
              {data.map((item) => (
                <motion.div key={item.id} className="w-full" {...animateWhileInView(30, 0, item.id * 0.2, 0.5, 1)}>
                  <Tarif name={item.name} monthly={item.monthly} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
