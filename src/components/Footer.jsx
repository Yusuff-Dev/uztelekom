import Logo from '../assets/Uztelecom.svg'

export default function Footer() {
  return (
    <footer className='bg-[#E9ECEF] dark:bg-[#1a1a1a] transition-colors'>
      <div className="container px-30 lg:px-10">

        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-30 mt-20'>

          {/* Left */}
          <div>
            <img src={Logo} alt="logo" />
            <p className='text-[16px] font-medium text-[#65696F] dark:text-gray-400'>
              +998 55 500 09 90
            </p>
            <a
              href="#"
              className='text-[16px] font-medium text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'
            >
              1c@uztelecom.uz
            </a>
          </div>

          {/* Links */}
          <div className='flex gap-30'>

            <div className='flex flex-col gap-3'>
              <a className='text-[16px] font-bold text-[#26282A] dark:text-white'>
                Xizmat xaqida
              </a>
              <a className='text-[16px] text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
                1C UZTELECOM nima?
              </a>
              <a className='text-[16px] text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
                Foydali funksiyalar
              </a>
              <a className='text-[16px] text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
                Afzalliklar
              </a>
              <a className='text-[16px] text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
                Qanday boshlash
              </a>
            </div>

            <div className='flex flex-col gap-3'>
              <a className='text-[16px] font-bold text-[#26282A] dark:text-white'>
                Resurslar
              </a>
              <a className='text-[16px] text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
                Tariflar
              </a>
              <a className='text-[16px] text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
                FAQ
              </a>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className='flex flex-col lg:flex-row items-center justify-between py-6 border-t border-gray-300 dark:border-gray-700 mt-20'>

          <a className='text-[#65696F] dark:text-gray-400 text-sm'>
            ©2025 AJ “O‘zbektelekom”
          </a>

          <div className='flex gap-6 mt-4 lg:mt-0'>
            <a className='text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
              Foydalanish shartlari
            </a>
            <a className='text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
              Maxfiylik
            </a>
            <a className='text-[#65696F] dark:text-gray-400 hover:text-black dark:hover:text-white'>
              Xavfsizlik
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}