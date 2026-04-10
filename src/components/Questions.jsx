import QuestionBar from "./QuestionBar";

export default function Questions() {
  return (
    <section className="mt-31.5">
      <div className="container">
        <div className="flex items-start justify-between gap-10">
          <div className="max-w-118 flex flex-col gap-5">
            <p>FAQ</p>
            <h1 className="text-5xl font-bold">Ko'p so'raladigan savollar</h1>
            <p className="text-[16px] text-[#4D5055]">1C UZTELECOM xizmati sizning buxgalteriya hisobotlaringizni qanday soddalashtirishi va biznesingizni qanday samaraliroq qilishini bilib oling.</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <QuestionBar>
              Brauzerda ishlash
            </QuestionBar>
            <QuestionBar>
              Internet sekin bo‘lsa ham ishlash mumkinmi?
            </QuestionBar>
            <QuestionBar>
              Uyda yoki ta’tilda ishlash mumkinmi?
            </QuestionBar>
            <QuestionBar>
              Ma’lumotlarim yo‘qolmasligiga ishonchim komil bo‘lishi mumkinmi?
            </QuestionBar>
            <QuestionBar>
              Xizmatdagi ilovalarni kim yangilaydi?
            </QuestionBar>
          </div>
        </div>
      </div>
    </section>
  )
}
