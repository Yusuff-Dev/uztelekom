import { useState, useContext } from "react"
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";


export default function Apply() {
  const [selected, setSelected] = useState('1');
  const { animateText, animateWhileInView } = useContext(ThemeContext);

  return (
    <section className="dark:bg-[#0E131E]">
      <form className="container py-30">
        <div className="flex flex-col items-center px-5">
          <h2 className="text-3xl font-bold text-[#18191B] dark:text-white">
            Ariza yuborish
          </h2>
          <div className="flex gap-9 py-7.5 dark:text-white">
            <motion.label>
              <input type="radio"
                name="option"
                value='1'
                checked={selected === '1'}
                onChange={(e) => setSelected(e.target.value)}
              /> Yuridik shaxs
            </motion.label>
            <motion.label
              {...animateText(0, 20, 0, 0.8, 1)}>
              <input type="radio"
                name="option"
                value='2'
                checked={selected === '2'}
                onChange={(e) => setSelected(e.target.value)}
              /> Jismoniy shaxs
            </motion.label>
          </div>

          <div className="w-full max-w-217.5 flex flex-col gap-6 dark:text-white ">
            <div className="flex items-center gap-5 flex-wrap ">
              <motion.div
                {...animateWhileInView(20, 0, 0.2, 0.8, 1)}
                className="gap-2 grow shrink-0 basis-50 ">
                <label>Tashkilot nomi</label>
                <input
                required
                  type="text"
                  placeholder="MCHJ 'Namuna'"
                  className="w-full py-3.5 px-1 border border-[#A1A5AA]  rounded-md outline-none focus:border-blue-500"
                />
              </motion.div>
              <motion.div
                {...animateWhileInView(20, 0, 0.3, 0.8, 1)}
                className="gap-2 grow shrink-0 basis-50">
                <label>STIR</label>
                <input
                  required
                  type="text"
                  placeholder="123456789"
                  className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-md outline-none focus:border-blue-500"
                />
              </motion.div>
            </div>

            <motion.div
              {...animateWhileInView(20, 0, 0, 0.8, 1)}
              className="flex flex-col gap-2">
              <label>F.I.Sh *</label>
              <input
                required
                type="text"
                placeholder="Zuxriddin Akbarov Xusanovich"
                className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-lg outline-none focus:border-blue-500"
              />
            </motion.div>

            <motion.div
              {...animateWhileInView(20, 0, 0, 0.8, 1)}
              className="flex flex-col gap-2">
              <label>Email *</label>
              <input
              required
                type="email"
                placeholder="example@email.com"
                className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-lg outline-none focus:border-blue-500"
              />
            </motion.div>
            <motion.div
              {...animateWhileInView(20, 0, 0, 0.8, 1)}
              className="flex flex-col gap-2">
              <label>Telefon *</label>
              <input
              required
                type="text"
                placeholder="+998 (33) 123 45 67"
                className="w-full py-3.5 px-1 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
              />
            </motion.div>

          </div>

          <div className="max-w-211.5 mt-8">
            <motion.div
              {...animateWhileInView(20, 0, 0, 0.8, 1)}
              className="flex items-start gap-2">
              <label>
                <input type="checkbox" className="cursor-pointer" />
              </label>
              <p className="font-medium text-sm dark:text-white">“Qabul qilaman” tugmasini bosish orqali Men  <a href="/" className="text-[#174880] hover:underline dark:text-[#206CE8]">Ommaviy oferta</a> shartlariga va <a href="/" className="text-[#174880] hover:underline dark:text-[#206CE8]">Shaxsiy ma’lumotlarni qayta ishlash siyosatiga</a> rozilik bildiraman.</p>
            </motion.div>
            <motion.button type="submit" className="w-full py-4 bg-[#174880] text-sm font-bold cursor-pointer text-white mt-8 rounded-md hover:bg-[#2d629e] dark:bg-[#206CE8]">
              Ariza yuborish
            </motion.button>
          </div>
        </div>
      </form>
    </section>
  )
}


