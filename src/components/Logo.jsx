import {NavLink} from 'react-router';
import darkLogoIcon from '../assets/Uztelecom.svg';
import lightLogoIcon from '../assets/light-logo.svg';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Logo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <NavLink to="/">
        {
          theme === "dark" ? <img src={darkLogoIcon} alt="Uztelecom" /> : <img src={lightLogoIcon} alt="Uztelecom" />
        }
      </NavLink>
    </div>
  )
}
