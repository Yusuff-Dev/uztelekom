import { useState } from "react";
import Tarif from "./Tarif";

export default function Prices() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false); ``

  function toggleBilling() {
    setIsMonthly(!isMonthly);
    setIsOpen(!isOpen);
  }

  return (
    <section className="py-30 dark:bg-[#0E131E]">
      <div className="container">
        <div className="px-5">
          <div className="flex items-center gap-3">
            <p className={`text-sm  font-medium ${isOn ? 'text-[#7D8288]' : 'dark:text-white'}`}>Oylik</p>
            <div className={`toggle-container ${isOn ? 'active' : ''}`} onClick={() => setIsOn(!isOn)} onClickCapture={toggleBilling}>
              <div className={`toggle-circle`}></div>
            </div>
            <p className={`text-sm  font-medium ${isOn ? 'dark:text-white' : 'text-[#7D8288]'}`}>Yillik</p>
            <div className="px-3 bg-[#B8CEEA] rounded-xl text-sm font-medium text-[#1B3658] dark:bg-[#A4BFE2] dark:text-[#0E131E] cursor-pointer hover:underline">
              20% tejab qolasiz
            </div>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5" style={{ display: isMonthly ? 'grid' : 'none' }}>
            <Tarif name={'Bazaviy'} monthly={'200 000'} summa={"so'm/oyiga"} />
            <Tarif name={'Standart'} monthly={'360 000'} summa={"so'm/oyiga"} />
            <Tarif name={'PROFI'} monthly={'460 000'} summa={"so'm/oyiga"} />
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5" style={{ display: isOpen ? 'grid' : 'none' }}>
            <Tarif name={'Bazaviy'} monthly={'2 400 000'} summa={"so'm/yiliga"} />
            <Tarif name={'Standart'} monthly={'3 600 000'} summa={"so'm/yiliga"} />
            <Tarif name={'PROFI'} monthly={'4 600 000'} summa={"so'm/yiliga"} />
          </div>
        </div>
      </div>
    </section>
  )
}
