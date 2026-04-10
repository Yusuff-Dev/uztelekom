import { useState } from "react"

export default function Apply() {
  const [selected, setSelected] = useState('1');

  return (
    <section>
      <form className="container">
        <div className="flex flex-col items-center px-5">
          <h1 className="text-3xl font-bold text-[#18191B]">
            Ariza yuborish
          </h1>
          <div className="flex gap-9 py-7.5">
            <label>
              <input type="radio"
                name="option"
                value='1'
                checked={selected === '1'}
                onChange={(e) => setSelected(e.target.value)}
              /> Yuridik shaxs
            </label>
            <label>
              <input type="radio"
                name="option"
                value='2'
                checked={selected === '2'}
                onChange={(e) => setSelected(e.target.value)}
              /> Jismoniy shaxs
            </label>
          </div>

          <div className="w-full max-w-217.5 flex flex-col gap-6">
            <div className="flex items-center gap-5 flex-wrap ">
              <div className="gap-2 grow shrink-0 basis-50">
                <label>Tashkilot nomi</label>
                <input
                  type="text"
                  placeholder="MCHJ 'Namuna'"
                  className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-md outline-none focus:border-blue-500"
                />
              </div>
              <div className="gap-2 grow shrink-0 basis-50">
                <label>STIR</label>
                <input
                  type="text"
                  placeholder="123456789"
                  className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-md outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label>F.I.Sh *</label>
              <input
                required
                type="text"
                placeholder="Zuxriddin Akbarov Xusanovich"
                className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-lg outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email *</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full py-3.5 px-1 border border-[#A1A5AA] rounded-lg outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Telefon *</label>
              <input
                type="text"
                placeholder="+998 (33) 123 45 67"
                className="w-full py-3.5 px-1 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <div className="max-w-211.5 mt-8">
            <div className="flex items-start gap-2">
              <label>
                <input type="checkbox" className="cursor-pointer" />
              </label>
              <p className="font-medium text-sm">“Qabul qilaman” tugmasini bosish orqali Men <a href="/" className="text-[#174880] hover:underline">Ommaviy oferta</a> shartlariga va <a href="/" className="text-[#174880] hover:underline">Shaxsiy ma’lumotlarni qayta ishlash siyosatiga</a> rozilik bildiraman.</p>
            </div>
            <button type="submit" className="w-full py-4 bg-[#174880] text-sm font-bold cursor-pointer text-white mt-8 rounded-md hover:bg-[#2d629e]">
              Ariza yuborish
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}


