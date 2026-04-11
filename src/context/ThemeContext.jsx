import { createContext, useState } from "react";

export const ThemeContext = createContext('light');

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }

    document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");

    function animateText(y = 0, x = 0, delay = 0, duration = 0, opacity) {
        return {
            initial: { opacity: 0, y: y, x: x },
            animate: { opacity: opacity, y: 0, x: 0 },
            transition: { duration: duration, delay: delay, ease: "easeOut" }
        }
    }

    function animateWhileInView(y = 0, x = 0, delay = 0, duration = 0, opacity) {
        return {
            initial: { opacity: 0, y: y, x: x },
            whileInView: { opacity: opacity, y: 0, x: 0 },
            transition: { duration: duration, delay: delay, ease: "easeOut", once: false }
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme, animateText, animateWhileInView }}>
            {children}
        </ThemeContext.Provider>
    )
}





