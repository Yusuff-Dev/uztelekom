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
    <div className="container mt-20 md:mt-24 lg:mt-31 px-4">
      <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold w-full text-center">
        UZTELECOMdan 1C xizmatining <br />afzalliklari
      </h2>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center mt-12 lg:mt-20 gap-10 lg:gap-0">
        <div className="flex flex-col  gap-6 w-full lg:w-1/2">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl max-w-140  border border-blue-400/60 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <h3 className="font-bold text-gray-800 text-xl md:text-2xl">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
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
  );
}