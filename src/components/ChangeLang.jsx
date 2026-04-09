import { useState } from 'react';

export default function ChangeLang() {
    const [isOpen, setIsOpen] = useState(false);
    const [languages, setLanguages] = useState([
      { id: 'uz', name: "O'zbek" },
      { id: 'ru', name: "Русский" },
      { id: 'en', name: "English" }
    ]);

    const selectLanguage = (selectedId) => {
        const selected = languages.find(l => l.id === selectedId);
        const others = languages.filter(l => l.id !== selectedId);

        // Tanlanganni boshiga qo'yib, massivni yangilaymiz
        setLanguages([selected, ...others]);
        setIsOpen(false); // Tanlangandan keyin yopish
    };
    
    return (
        <>
            <div className="relative font-bold">
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
            </div>
        </>
    )
}
