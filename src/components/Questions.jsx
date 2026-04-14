import QuestionBar from "./QuestionBar";
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
    <section className="py-31.5 dark:bg-[#0E131E]">
      <div className="container">
        <div className="flex items-start justify-between gap-10">
          <div className="max-w-118 flex flex-col gap-5">
            <p className="dark:text-[#9EA2A8]">FAQ</p>
            <h2 className="text-5xl font-bold dark:text-white">Ko'p so'raladigan savollar</h2>
            <p className="text-[16px] text-[#4D5055] dark:text-[#9EA2A8]">
              1C UZTELECOM xizmati sizning buxgalteriya hisobotlaringizni qanday soddalashtirishi va biznesingizni qanday samaraliroq qilishini bilib oling.
            </p>
          </div>
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
