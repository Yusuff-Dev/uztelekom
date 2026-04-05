
export default function Partnership() {

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      
      <div className="bg-[#123E72] text-white rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            1C UZTELECOM bilan qanday ishlashni boshlash mumkin
          </h1>
          
          <ul className="space-y-4 text-lg md:text-xl">
            <li className="flex items-center gap-3">
              <span>⭐️</span> Tizimda ro'yxatdan o'tish
            </li>
            <li className="flex items-center gap-3">
              <span>⭐️</span> Profil va integratsiyani sozlash
            </li>
            <li className="flex items-center gap-3">
              <span>⭐️</span> Xizmatdan foydalanishni boshlash
            </li>
          </ul>

          
          <button className="bg-white text-[#123E72] font-bold py-4 px-10 rounded-2xl text-lg hover:bg-gray-100 transition-colors">
            30 kun bepul
          </button>
        </div>

        <div className="flex-1 w-full">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
            alt="Office meeting" 
            className="rounded-[30px] w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
