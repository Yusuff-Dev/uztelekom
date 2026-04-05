import { NavLink } from 'react-router';
import Logo from '../assets/Uztelecom.svg';
import Button from '../UI/Button';
import { useState } from 'react';
import Moon from '../assets/Moon.png';

export default function Navbar() {
  const LanguageDropdown = () => {
    // Tillarni massivda saqlaymiz
    const [languages, setLanguages] = useState([
      { id: 'uz', name: "O'zbek" },
      { id: 'ru', name: "Русский" },
      { id: 'en', name: "English" }
    ]);

    const [isOpen, setIsOpen] = useState(false);

    // Til tanlanganda uni birinchi o'ringa o'tkazish funksiyasi
    const selectLanguage = (selectedId) => {
      const selected = languages.find(l => l.id === selectedId);
      const others = languages.filter(l => l.id !== selectedId);

      // Tanlanganni boshiga qo'yib, massivni yangilaymiz
      setLanguages([selected, ...others]);
      setIsOpen(false); // Tanlangandan keyin yopish
    };

    const links = [
      { id: 1, name: "Hizmat haqida", path: "/hizmat haqida" },
      { id: 2, name: "Ariza yuborish", path: "/ariza yuborish" },
      { id: 3, name: "Imkoniyatlar", path: "/imkoniyatlar" },
      { id: 4, name: "Afzalliklar", path: "/afzalliklar" },
      { id: 5, name: "Qanday boshlash kerak", path: "/qanday boshlash kerak" },
      { id: 6, name: "Tariflar", path: "/tariflar" }
    ]

    return (
      <nav>
        <div className="container">
          <div className="flex items-center justify-between py-10 border-b border-b-[#E5E5E5] px-5">
            <div>
              <NavLink to="/">
                <img src={Logo} alt="logo" />
              </NavLink>
            </div>

            <div className='md:flex hidden'>
              <ul className='flex items-center gap-10'>
                {links.map(link => (
                  <li key={link.id}>
                    <NavLink to={link.path} className={({ isActive }) =>
                      `text-[16px] text-[#26282A] font-medium ${isActive ? "text-[#174880]" : ""}`}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}

              </ul>
            </div>

            <div className='flex items-center gap-3.5'>
              <Button variant='primary' className={'font-bold'}>
                Kirish
              </Button>
              <button className="relative font-bold">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 border hover:bg-[#174880] hover:text-white border-[#174880] text-[#174880] rounded-lg bg-white font-bold cursor-pointer"
                >
                  {languages[0].name}
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 border border-gray-200 rounded-lg bg-white shadow-lg overflow-hidden z-10">
                    {languages.slice(1).map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => selectLanguage(lang.id)}
                        className="w-full text-left px-4 py-2 text-[#174880] hover:bg-blue-50 transition-colors border-b last:border-none"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </button>

              <div>
                <img src={Moon} alt="Moon" className='w-7' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  };

  return (
    <LanguageDropdown />
  )
}
