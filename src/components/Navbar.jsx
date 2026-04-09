import { NavLink } from 'react-router';
import Button from '../UI/Button';
import ChangeLang from './ChangeLang';
import Logo from "./Logo";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ToggleTheme from './ToggleTheme';

export default function Navbar() {

  const { theme } = useContext(ThemeContext);


  const links = [
    { id: 1, name: "Hizmat haqida", path: "/hizmat haqida" },
    { id: 2, name: "Ariza yuborish", path: "/ariza yuborish" },
    { id: 3, name: "Imkoniyatlar", path: "/imkoniyatlar" },
    { id: 4, name: "Afzalliklar", path: "/afzalliklar" },
    { id: 5, name: "Qanday boshlash kerak", path: "/qanday boshlash kerak" },
    { id: 6, name: "Tariflar", path: "/tariflar" }
  ]

  return (
    <nav className={'dark:bg-blue-950'}>
      <div className="container">
        <div className="flex items-center justify-between gap-5 py-10 border-b border-b-[#E5E5E5] dark:border-b-0 px-5">

          <Logo />

          <div className='md:flex hidden'>
            <ul className='flex items-center gap-10'>
              {links.map(link => (
                <li key={link.id}>
                  <NavLink to={link.path} className={({ isActive }) =>
                    `text-[16px] text-[#26282A] dark:text-white font-medium ${isActive ? "text-[#174880] dark:text-[#206CE8]!" : ""}`}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='md:flex items-center gap-3.5 hidden'>
            <Button variant='primary' className={'font-bold'}>
              Kirish
            </Button>

            <ChangeLang />

            <ToggleTheme/>
          </div>

          <div className='flex items-center gap-5 md:hidden'>
            <ToggleTheme/>
            <div>
              <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5557 16C22.1692 16 22.6668 16.4969 22.667 17.1104C22.667 17.724 22.1693 18.2217 21.5557 18.2217H1.11133C0.497728 18.2216 0 17.724 0 17.1104C0.000234541 16.4969 0.497873 16.0001 1.11133 16H21.5557ZM18.4609 8C19.0744 8 19.572 8.4969 19.5723 9.11035C19.5723 9.724 19.0746 10.2217 18.4609 10.2217H4.21289C3.59924 10.2217 3.10156 9.724 3.10156 9.11035C3.1018 8.4969 3.59939 8 4.21289 8H18.4609ZM21.5557 0C22.1692 0 22.6668 0.496901 22.667 1.11035C22.667 1.724 22.1693 2.22168 21.5557 2.22168H1.11133C0.497728 2.22162 0 1.72397 0 1.11035C0.000234412 0.496937 0.497873 5.85473e-05 1.11133 0H21.5557Z" fill={theme === "light" ? "#FFFFFF" : "#26282A"} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
