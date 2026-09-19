export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5">
            <section className="relative overflow-hidden grid gap-6 rounded-3xl border-2 border-amber-100 p-5 bg-linear-to-tr from-amber-100 via-white to-purple-100 md:grid-cols-[1.35fr_1fr] md:gap-7 md:p-7 " >
                
                {/*LEFT CONTENT */}
                <div className="min-w-0">
                    
                    {/* Badge */}
                    <div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700 sm:text-xs " >
                        <span className="font-serif inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse "></span> 
                        <span className="text-amber-900">100% Confidential • Verified Vedic Astrologers</span>
                    </div>
                    
                    {/* Heading */}
                    <h1 className="uppercase mb-4 font-serif font-extrabold text-[25px] leading-[1.12] text-slate-900 sm:text-[30px] md:text-[35px] lg:text-[40px] " > Unlock Your Destiny <br /> with India's Top <br /> Astrologers at{" "}
                        <span className=" font-serif bg-linear-to-r from-amber-600 via-[#c96fae] to-[#8b5fbf] bg-clip-text text-transparent"> ₹1 / Min </span>
                    </h1>
                    
                    
                    {/* Description */}
                    <p className="font-serif mb-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-md"> Get authentic clarity on{" "} <b className="font-semibold text-slate-600"> Love, Career, Marriage, Finances & Kundli Doshas </b> . Connect instantly via Live Chat & Call with 500+ verified Vedic masters. </p>
                    
                    
                    {/* Buttons */}
                    <div className=" mb-6 flex flex-col gap-2.5 sm:flex-row " >
                        <button className=" flex items-center jlgtify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold text-white shadow-md shadow-orange-200 bg-linear-to-r from-orange-400 to-orange-500 hover:to-orange-400 ">
                            <span className="text-lg"><i class="fa-solid fa-comments text-white"></i></span>
                            <span className="font-serif">Start First Chat @ ₹1 →</span>
                        </button>
                        <button className=" flex items-center justify-center gap-2 rounded-xl border-2 border-amber-400 bg-white px-5 py-3 text-xs font-semibold text-gray-700 transition-colors hover:bg-amber-50 active:scale-95 " >
                            <span className="text-lg"><i class="fa-solid fa-hand-sparkles text-amber-700"></i></span>
                            <span className="text-md font-bold font-serif text-amber-800">Try Free AI Palm Scanner</span>
                        </button>
                    </div>
                    
                    
                    
                    {/* Statistics */}
                    <div className=" grid max-w-xl grid-cols-3 border-t border-amber-200 pt-4 " >
                        
                        <div>
                            <b className="block font-serif text-xl text-slate-900"> 500+ </b>
                            <span className="font-serif text-[10px] text-gray-600 font-bold sm:text-[11px]"> Verified Masters </span>
                        </div>
                        
                        <div className="border-l border-amber-200 pl-3">
                            <b className="block font-serif text-xl  text-amber-700"> 4.9<span><i class="fa-solid fa-star text-amber-700 text-xs ml-1"></i><i class="fa-solid fa-star text-xs ml-1"></i></span> </b>
                            <span className="font-serif text-[10px] text-gray-600 font-bold sm:text-[11px]"> 2M+ Consults </span>
                        </div>


                        <div className="border-l border-amber-200 pl-3">
                            <b className="block font-serif text-xl text-emerald-600"> 100% </b>
                            <span className="font-serif text-[10px] text-gray-600 font-bold sm:text-[11px]"> Private & Secure </span>
                        </div>
                    </div>
                </div>


                {/*RIGHT CARD*/}
                <div className="relative flex items-center justify-center">
                    {/* Dashed decoration */}

                    <div className="pointer-events-none absolute -inset-2 rounded-3xl border-2 border-dashed border-amber-200 hidden md:block  animate-spin [animation-duration:12s]"></div>

                    {/* Astrologer Card */}
                    <div className="relative w-full rounded-3xl border-2 border-amber-400 bg-white px-4 py-3 shadow-xl shadow-amber-900/10 sm:px-5 sm:py-5">
                        
                        
                        {/* Card Header */}
                        <div className=" mb-3 flex items-center gap-3" >
                            <span className="font-serif inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse "></span>
                            <div className=" flex flex-1 items-center justify-between">
                                <span className=" font-serif text-[10px] font-bold tracking-wide text-emerald-700 sm:text-[10px] " >ASTROLOGER OF THE MOMENT </span>
                                <span className=" font-serif rounded-lg bg-amber-100 px-2 py-1 text-[9px] font-bold text-amber-800 " > TOP RATED </span>
                            </div>                        
                        </div>
                        
                        
                        {/* Profile */}
                        <div className="mb-4 flex items-center gap-3">
                            <div className="relative h-14 w-14 shrink-0">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Acharya Ananya" className=" h-14 w-14 rounded-2xl object-cover " />
                                <span className=" absolute -bottom-1 -right-1 whitespace-nowrap rounded-md bg-amber-600 px-1.5 py-0.5 text-[9px] font-bold text-white " > 4.9★ </span>
                            </div>
                            <div className="min-w-0">
                                <div className="truncate font-serif text-base font-bold uppercase text-gray-900"> Acharya Ananya </div>
                                <div className="truncate text-[11px] font-serif font-bold text-amber-800"> Vedic, Tarot & Relationship Expert </div>
                                <div className="font-serif text-xs text-gray-600"> 12+ Years Exp • 14,800+ Consults </div>
                            </div>
                        </div>
                        
                        
                        {/* Rate Box */}
                        <div className="mb-3 w-full rounded-2xl border border-amber-600 px-3 py-2" >
                            <div className="flex w-full items-center justify-between">
                                <div className="font-serif mb-1 text-[10px] font-bold text-gray-600"> First Chat Rate: </div>
                                <div className="">
                                    <span className="mr-2 text-xs text-gray-500 line-through"> ₹25/min </span>
                                    <span className="text-emerald-700 font-bold"> ₹1/min </span> </div> <div className="mt-1.5 flex items-center gap-1 text-[10px] text-emerald-700">
                                </div>
                            </div>
                            <span className="text-[10px]">✅</span>{" "}
                            <span className="font-serif text-[10px] font-bold text-emerald-700">Available right now • Instant Response</span>
                        </div>
                        
                        
                        {/* Connect Button */}
                        <button className=" flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold text-white bg-linear-to-r from-orange-400 to-orange-500 hover:to-orange-400">
                            <span>💬</span>
                            <span className="font-serif">Connect with Acharya Ananya Now</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}