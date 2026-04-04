import Logo from '../assets/Uztelecom.svg'

export default function Footer() {
  return (
    <footer className='bg-[#E9ECEF]'>
      <div className="container px-30!">

        <div className='flex items-center gap-30 mt-20'>
          <div>
            <img src={Logo} alt="logo" />
            <p className='text-[16px] font-medium text-[#65696F]'> +998 55 500 09 90</p>
            <a href="https://www.youtube.com/watch?v=oYVgmoJl8zQ&list=RDoYVgmoJl8zQ&start_radio=1" className='text-[16px] font-medium text-[#65696F]'>1c@uztelecom.uz</a>
          </div>
          <div className='flex gap-30'>
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] font-bold text-[#26282A]'>Xizmat haqida</p>
            <p className='text-[16px] font-medium text-[#65696F] hover:text-black'>1C UZTELECOM nima va qanday ishlaydi?</p>
            <p className='text-[16px] font-medium text-[#65696F] hover:text-black' >Foydali funksiyalar</p>
            <p className='text-[16px] font-medium text-[#65696F] hover:text-black'>Foydalanish afzalliklari</p>
            <p className='text-[16px] font-medium text-[#65696F] hover:text-black'>Ishni qanday boshlash kerak</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] font-bold text-[#26282A]'>Resurslar</p>
            <p className='text-[16px] font-bold text-[#65696F] hover:text-black'>Tariflar</p>
            <p className='text-[16px] font-bold text-[#65696F] hover:text-black'>FAQ</p>
          </div>
          </div>
        </div>

        <div className='flex items-center justify-between py-6 border-t mt-26.5'> 
          <div>
            <p className='text-[#65696F]'>
              ©2025 AJ “O‘zbektelekom” · Barcha huquqlar himoyalangan.
            </p>
          </div>
          <div className='flex items-center gap-6'>
            <p className='text-[#65696F] hover:text-black'>Foydalanish shartlari</p>
            <p className='text-[#65696F] hover:text-black'>Maxfiylik siyosati</p>
            <p className='text-[#65696F] hover:text-black'>Xavfsizlik</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
