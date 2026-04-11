import building from "../assets/BuildingUz.svg";

export default function Features() {
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
   <div className="dark:bg-[#0E131E] pb-4 pt-5">
     <div className="container mt-5! mb-30 md:mt-24 lg:mt-31 px-4 ">
      <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold w-full text-center dark:text-white ">
        UZTELECOMdan 1C xizmatining <br />afzalliklari
      </h2>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center mt-12 lg:mt-20 gap-10 lg:gap-5">
        <div className="flex flex-col  gap-6  lg:w-1/2  ">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl  max-w-140   dark:hover:shadow-[#206CE8]  transition duration-300 hover:shadow-xl dark:hover:border-[#206CE8] hover:border border-[#174880] hover:-translate-y-2"
            >
              <h3 className="font-bold text-gray-800 text-xl md:text-2xl dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-500 dark:text-[#9EA2A8] mt-2 text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={building} alt="" className="w-full max-w-md md:max-w-lg" />
        </div>
      </div>
    </div>
   </div>
  );
}