import QuestionBar from "./QuestionBar";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Questions() {
  const { animateWhileInView } = useContext(ThemeContext);

  const questions = [
    { id: 1, question: "Brauzerda ishlash" },
    { id: 2, question: "Internet sekin bo‘lsa ham ishlash mumkinmi?" },
    { id: 3, question: "Uyda yoki ta’tilda ishlash mumkinmi?" },
    { id: 4, question: "Ma’lumotlarim yo‘qolmasligiga ishonchim komil bo‘lishi mumkinmi?" },
    { id: 5, question: "Xizmatdagi ilovalarni kim yangilaydi?" }
  ];

  return (
    <section className="py-31.5">
      <div className="container">
        <div className="flex items-start justify-between gap-10 flex-wrap md:flex-nowrap">
          <motion.div 
          {...animateWhileInView(0, -50, 0, 0.5, 1)}
          className="max-w-118 flex flex-col gap-5">
            <p>FAQ</p>
            <h1 className="text-5xl font-bold">Ko'p so'raladigan savollar</h1>
            <p className="text-[16px] text-[#4D5055]">1C UZTELECOM xizmati sizning buxgalteriya hisobotlaringizni qanday soddalashtirishi va biznesingizni qanday samaraliroq qilishini bilib oling.</p>
          </motion.div>
          <div className="flex flex-col gap-5 items-center">
            {
              questions.map((item) => (
                <QuestionBar key={item.id} id={item.id}>
                  {item.question}
                </QuestionBar>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
