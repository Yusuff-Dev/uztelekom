

export default function Tarif({ status, price, title }) {
    const prompts = [
        { id: 1, definition: "Elektron hujjat aylanishi tizimi 1" },
        { id: 2, definition: "Elektron hujjat aylanishi tizimi 2" },
        { id: 3, definition: "Elektron hujjat aylanishi tizimi 3" },
        { id: 4, definition: "Elektron hujjat aylanishi tizimi 4" }
    ];

    return (
        <section className="max-w-95 border border-[#BFC2C6] rounded-2xl hover:shadow-xl cursor-pointer dark:hover:shadow-xl shadow-[#174880] transition-shadow duration-300">
            <div className="px-8 py-6">
                <div className="font-bold text-[#18191B] text-[25px] dark:text-white">
                    {status}
                </div>

                <div className="flex flex-col items-start mt-6">
                    <div className="text-[#18191B] text-5xl font-bold gap-1 dark:text-white">
                        {price.toLocaleString('fr-FR')}
                    </div>
                    <p className="text-[#7D8288] text-[16px] font-sans dark:text-[#A1A5AA]">{title}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ">
                    {prompts.map((item) => (
                        <div key={item.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-[#0E131E] ">
                            <p className="text-[16px] text-gray-600 mt-2 cursor-pointer dark:text-white">
                                {item.definition}
                            </p>
                        </div>
                    ))}
                </div>
                <button type="submit" className="w-full py-4 bg-[#174880] text-sm font-bold cursor-pointer text-white mt-8 rounded-md hover:bg-[#2d629e ] dark:bg-[#206CE8]">
                    Sotib olish
                </button>
            </div>
        </section>
    )
}
