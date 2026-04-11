import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Partnership() {
  const {animateText, animateWhileInView} = useContext(ThemeContext);

  return (
    <motion.section 
      {...animateWhileInView(50, 0, 0, 0.8, 1)}
      className="flex items-center justify-center min-h-screen p-4"
    >
      
      <div className="bg-[#123E72] text-white rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        
        <div className="flex-1 space-y-8">
          <motion.h2 
          {...animateWhileInView(0, -30, 0, 0.8, 1)}
          className="text-3xl md:text-5xl font-bold leading-tight">
            1C UZTELECOM bilan qanday ishlashni boshlash mumkin
          </motion.h2>
          
          <ul className="space-y-4 text-lg md:text-xl">
            <motion.li 
            {...animateWhileInView(0, -30, 0.1, 0.8, 1)}
            className="flex items-center gap-3">
              <span>⭐️</span> Tizimda ro'yxatdan o'tish
            </motion.li>
            <motion.li 
            {...animateWhileInView(0, -30, 0.2, 0.8, 1)}
            className="flex items-center gap-3">
              <span>⭐️</span> Profil va integratsiyani sozlash
            </motion.li>
            <motion.li 
            {...animateWhileInView(0, -30, 0.3, 0.8, 1)}
            className="flex items-center gap-3">
              <span>⭐️</span> Xizmatdan foydalanishni boshlash
            </motion.li>
          </ul>

          
          <motion.button 
          {...animateWhileInView(0, -30, 0.4, 0.8, 1)}
          className="bg-white text-[#123E72] font-bold py-4 px-10 rounded-2xl text-lg hover:bg-gray-100 transition-colors">
            30 kun bepul
          </motion.button>
        </div>

        <motion.div 
        {...animateWhileInView(0, 30, 0.3, 0.8, 1)}
        className="flex-1 w-full">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
            alt="Office meeting" 
            className="rounded-[30px] w-full h-auto object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
