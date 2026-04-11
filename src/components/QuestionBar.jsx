import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";


export default function QuestionBar({ children, id }) {
    const { animateWhileInView } = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }     

    return (
        <motion.div 
        {...animateWhileInView(30, 15, id * 0.2, 0.5, 1)}
        className="border border-[#BFC2C6] rounded-lg w-full">
            <div className="flex items-center gap-5 max-w-171 justify-between ">
            <div className="px-4 flex items-center gap-4 text-xl font-bold text-[#18191B] py-6">
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="16" rx="2" fill="#174880" />
                </svg>
                {children}
            </div>

            <div className={`cursor-pointer p-2 m-7 ${isOpen ? "rotate-180" : ""}`} onClick={handleClick} >
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78449 0.236672C1.4437 -0.0788699 0.917436 -0.07887 0.57665 0.236672L0.284979 0.506738C-0.0949829 0.858555 -0.0949818 1.45939 0.284981 1.8112L6.9767 8.0072C7.31749 8.32274 7.84375 8.32274 8.18453 8.0072L14.8762 1.81123C15.2561 1.45942 15.2561 0.858588 14.8762 0.506772L14.5845 0.236711C14.2437 -0.0788348 13.7174 -0.0788352 13.3767 0.23671L7.58062 5.60344L1.78449 0.236672Z" fill="#65696F" />
                </svg>
            </div>
        </div>

        <div className={`overflow-hidden transition-all ease-in-out duration-500 ${isOpen ? "max-h-40 max-w-171" : "max-h-0 max-w-171"}`}>
            <p className="text-[16px] mt-5 p-5">1C UZTELECOM xizmati sizning buxgalteriya hisobotlaringizni qanday soddalashtirishi va biznesingizni qanday samaraliroq qilishini bilib oling.</p>
        </div>
        </motion.div>
    )
}
