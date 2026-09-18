export default function Navbar(){
    return(
        <nav className="w-full h-16 md:h-20 bg-white/95 border-b border-amber-300/80 shadow-sm transition-all duration-200 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-25 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer">
                    {/* logo */}
                    <div className="relative w-11 h-11 rounded-2xl bg-linear-to-tr from-amber-600 via-purple-500 to-pink-500 p-0.5 transition-transform duration-200 hover:scale-105">
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                            <span className="font-serif font-black text-amber-800 text-2xl relative z-10">A</span>
                        </div>
                    </div>

                    {/* webname */}
                    <div>
                        <div className="flex items-center gap-1">
                            <h1 className="font-serif font-black text-xl">
                                <span className="text-amber-600">ASTRO</span>
                                <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    MEE
                                </span>
                            </h1>
                            <span className="font-serif font-black text-[9px] bg-amber-600 rounded-full px-1.5 py-0.95 text-white text-center">PRO</span>
                        </div>
                        <div className="text-[11px] text-gray-400 font-bold uppercase flex items-center gap-5">
                            <div className="flex flex-col gap-0 sm:flex-row">
                                <span>Vedic&nbsp;</span>
                                <span>Astrology</span>
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex items-center gap-1">
                                    <span className="text-amber-500">&#10022;</span>
                                    <span>Cosmic</span>
                                </div>
                                <span className="ml-3 sm:ml-1">AI</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                

                {/* mid-section */}
                <div className="hidden xl:flex items-center gap-5">
                    <div className="flex items-center gap-1 group relative cursor-pointer">
                        <i className="fa-solid fa-house text-amber-700 text-xs"></i>
                        <span className="text-sm font-bold text-gray-600 hover:text-amber-700">Home</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-amber-600 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                    
                    <div className="flex items-center gap-1 group relative cursor-pointer">
                        <i className="fa-solid fa-headset text-amber-700 text-xs"></i>
                        <span className="text-sm font-bold text-gray-600 hover:text-amber-700">Astrologers</span>
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5"></span>
                        <i className="fa-solid fa-chevron-down text-gray-500 text-[9px]"></i>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-amber-600 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="flex items-center gap-1 group relative cursor-pointer">
                        <i className="fa-solid fa-microchip text-purple-500 text-xs"></i>
                        <span className="text-sm font-bold text-gray-600 hover:text-amber-700">Palm reader</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-amber-600 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="flex items-center gap-1 group relative cursor-pointer">
                        <i className="fa-solid fa-sun text-amber-700 text-xs"></i>
                        <span className="text-sm font-bold text-gray-600 hover:text-amber-700">Horoscope</span>
                        <i className="fa-solid fa-chevron-down text-gray-500 text-[9px]"></i>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-amber-600 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                </div>


                <div className="hidden sm:flex gap-2">
                    {/* BALANCE SECTION */}
                    <div className="border border-amber-600 rounded-2xl px-3 py-1.5 flex items-center gap-2 bg-linear-to-r from-amber-50 via-amber-100 to-amber-50
    hover:from-amber-100 hover:to-amber-200">
                        <span className="inline-block hover:rotate-12 transition-transform">🪙</span>
                        <div className="flex flex-col items-start">
                            <div className="text-[8px] text-amber-700 font-black">BALANCE</div>
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-amber-700 font-black">120</span>
                                <span className="text-[10px] text-gray-500 font-black">Coins</span>
                            </div>
                        </div>
                        <span className="font-serif font-black text-[9px] bg-amber-600 rounded-2xl px-2 py-1 text-white text-center">+ Topup</span>

                    </div>

                    {/* SPIN SECTION */}
                    <div className="relative spin-section text-amber-600 border border-0.1 border-amber-600 px-2 py-3 rounded-2xl flex gap-1">
                        <i class="fa-solid fa-dharmachakra animate-spin [animation-duration:8s]"></i>
                        <span className="text-[11px] font-bold">Spin</span>
                    </div>

                    {/* LOGIN SECTION */}
                    <div className="login-section">
                        <div className="relative w-11 h-11 rounded-2xl bg-linear-to-tr from-amber-600 via-purple-500 to-pink-500 p-0.5 transition-transform duration-200 hover:scale-105">
                            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                                <i class="fa-solid fa-user text-amber-800"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile / Tablet Hamburger */}
                <div className="xl:hidden">
                    <i className="fa-solid fa-bars text-gray-700 text-xl cursor-pointer"></i>
                </div>
            </div>
        </nav>
    )
}