import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Moon from '../assets/Moon.png';
import Sun from '../assets/sun.svg';
export default function ToggleTheme() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        toggleTheme();
    };

    return (
        <>
            <div
                onClick={handleThemeToggle}
                className='w-7 flex items-center justify-center'>
                {
                    theme === "dark" ? <img src={Moon} alt="Moon" /> : <img src={Sun} alt="Sun" />
                }
            </div>
        </>
    )
}
