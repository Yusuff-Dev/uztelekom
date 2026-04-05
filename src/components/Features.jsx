import  building  from "../assets/BuildingUz.svg";
export default function Features() {
  const data = [
  {
    title: "Infratuzilma xarajatlaridan tejash",
    desc: "Serverlar xarid qilish yoki IT-mutaxassislarni yollash shart emas."
  },
  {
    title: "Avtomatik yangilanishlar",
    desc: "Murakkab yangilanishlar, versiyalar mosligi yoki vaqtincha to‘xtab qolishlar haqida unuting."
  },
  {
    title: "24/7 foydalanish imkoniyati",
    desc: "1C tizimingizdan istalgan vaqt va istalgan joyda foydalanishingiz mumkin."
  },
  {
    title: "Foydalanuvchilarni o‘qitish",
    desc: "Avval 1C bilan ishlamagan bo‘lsangiz ham, UZTELECOM bilan boshlash oson."
  }
];

  return (
    <div className="container mt-31 ">
      <h2 className="text-[48px] font-bold w-full text-center">UZTELECOMdan 1C xizmatining <br />afzalliklari</h2>

      <div className="flex justify-evenly items-center mt-20">

          <div className="flex flex-col gap-6">
  {data.map((item, index) => (
    <div
      key={index}
      className="p-5 rounded-xl border border-blue-400/60 max-w-140 
                 shadow-md transition duration-300
                 hover:shadow-xl hover:-translate-y-2"
    >
      <h3 className="font-bold text-gray-800 text-2xl">
        {item.title}
      </h3>

      <p className="text-gray-500 mt-2 ">
        {item.desc}
      </p>
    </div>
  ))}
</div>


        {/* <div className="flex flex-col gap-5">
          <div className=" max-w-140 p-6 rounded-xl border border-blue-400/40 
                    bg-white/80 backdrop-blur 
                    shadow-md transition-all duration-300
                    hover:shadow-xl hover:-translate-y-2 hover:border-blue-500">
            <h2 className="text-2xl font-bold">Infratuzilma xarajatlaridan tejash</h2>
          <p className="text-[#4D5055] text-xl">Serverlar xarid qilish yoki IT-mutaxassislarni yollash shart emas.</p>
          </div>
          <div className="max-w-140 p-6 rounded-xl border border-blue-400/40 
                    bg-white/80 backdrop-blur 
                    shadow-md transition-all duration-300
                    hover:shadow-xl hover:-translate-y-2 hover:border-blue-500">
            <h2 className="text-2xl font-bold">Avtomatik yangilanishlar</h2>
          <p className="text-[#4D5055] text-xl">Murakkab yangilanishlar, versiyalar mosligi yoki vaqtincha to‘xtab qolishlar haqida unuting.</p>
          </div>
          <div className="max-w-140 p-6 rounded-xl border border-blue-400/40 
                    bg-white/80 backdrop-blur 
                    shadow-md transition-all duration-300
                    hover:shadow-xl hover:-translate-y-2 hover:border-blue-500">
            <h2 className="text-2xl font-bold">24/7 foydalanish imkoniyati</h2>
          <p className="text-[#4D5055] text-xl">1C tizimingizdan istalgan vaqt va istalgan joyda foydalanishingiz mumkin.</p>
          </div>
          <div className="max-w-140 p-6 rounded-xl border border-blue-400/40 
                    bg-white/80 backdrop-blur 
                    shadow-md transition-all duration-300
                    hover:shadow-xl hover:-translate-y-2 hover:border-blue-500">
            <h2 className="text-2xl font-bold">Foydalanuvchilarni o‘qitish</h2>
          <p className="text-[#4D5055] text-xl">Avval 1C bilan ishlamagan bo‘lsangiz ham, UZTELECOM bilan boshlash oson.</p>
          </div>
      </div> */}

      <div>
        <img src={building} alt="" />
      </div>
      </div>

    </div>
  )
}
