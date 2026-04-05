

export default function Tarif({ name, monthly }) {
    const prompts = [
        { id: 1, definition: "Elektron hujjat aylanishi tizimi 1" },
        { id: 2, definition: "Elektron hujjat aylanishi tizimi 2" },
        { id: 3, definition: "Elektron hujjat aylanishi tizimi 3" },
        { id: 4, definition: "Elektron hujjat aylanishi tizimi 4" }
    ];

    return (
        <div className="max-w-95 border border-[#BFC2C6] rounded-2xl hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="px-8 py-6">
                <div className="font-bold text-[#18191B] text-[25px]">
                    {name}
                </div>

                <div className="flex flex-col items-start mt-6">
                    <div className="text-[#18191B] text-5xl font-bold gap-1">
                        {monthly}
                    </div>
                    <p className="text-[#7D8288] text-[16px] font-sans">so'm/oyiga *</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {prompts.map((item) => (
                        <div key={item.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <p className="text-[16px] text-gray-600 mt-2 hover:text-black cursor-pointer">
                                {item.definition}
                            </p>
                        </div>
                    ))}
                </div>
                <button type="submit" className="w-full py-4 bg-[#174880] text-sm font-bold cursor-pointer text-white mt-8 rounded-md hover:bg-[#2d629e]">
                        Sotib olish
                </button>
            </div>
        </div>
    )
}
