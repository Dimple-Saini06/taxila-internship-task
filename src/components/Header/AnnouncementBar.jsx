export default function AnnouncementBar() {
    return (
        <div className="w-full h-16 md:h-18 bg-white/95 border-b border-amber-300/80 shadow-sm transition-all duration-200 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-25 overflow-hidden">

                <div className=" flex items-center gap-5 whitespace-nowrap animate-marquee">
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">💎</span>
                        <span className="text-xs font-bold">Lucky Gemstones</span>
                    </div>
                   
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">🪐</span>
                        <span className="text-xs font-bold">Sade Sati Check</span>
                    </div>

                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">🕉️</span>
                        <span className="text-xs font-bold">Vedic Panchang</span>
                    </div>
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">📜</span>
                        <span className="text-xs font-bold">Free Kundli Chart</span>
                    </div>
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">❤️</span>
                        <span className="text-xs font-bold">FLAME Love Match</span>
                    </div>
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">👤</span>
                        <span className="text-xs font-bold">AI Face Reading</span>
                    </div>
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">✋</span>
                        <span className="text-xs font-bold">AI Palm Reading</span>
                    </div>
                    <div className="flex gap-1 items-center border border-amber-600 rounded-3xl px-2 py-2">
                        <span className="text-xs">🃏</span>
                        <span className="text-xs font-bold">Tarot Pull</span>
                    </div>
                </div>

            </div>
        </div>
    );
}