export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-12 mt-10 border-t border-amber-200">

      {/* Main footer content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 lg:gap-12">

        {/* Left section */}
        <div className="flex flex-col gap-3 max-w-xs">
          <div className="flex items-center gap-5">

            {/* logo */}
            <div className="relative w-8 h-8 rounded-xl bg-linear-to-tr from-amber-600 via-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="font-serif font-black text-amber-800 text-lg relative z-10">
                  A
                </span>
              </div>
            </div>

            {/* webname */}
            <h1 className="font-serif font-black text-xl">
              <span className="text-amber-600">ASTRO</span>
              <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                MEE
              </span>
            </h1>

          </div>

          <p className="font-sans text-slate-600/90 text-[11px] font-bold leading-5">
            Astromee India's premier trusted Vedic astrology and spiritual
            consultation platform, bringing accurate calculations, AI biometric
            reading, and live verified consultations.
          </p>


          <div className="flex gap-3">
            <span className=" border border-amber-600 rounded-full p-1.5 flex items-center justify-center text-amber-700 text-xs hover:text-white hover:bg-amber-600 cursor-pointer bg-amber-50">
              <i class="fa-brands fa-facebook-f"></i>
            </span>
            <span className=" border border-amber-600 rounded-full p-1.5 flex items-center justify-center text-amber-700 text-xs hover:text-white hover:bg-amber-600 cursor-pointer bg-amber-50">
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span className=" border border-amber-600 rounded-full p-1.5 flex items-center justify-center text-amber-700 text-xs hover:text-white hover:bg-amber-600 cursor-pointer bg-amber-50">
              <i class="fa-brands fa-x-twitter"></i>
            </span>
            <span className=" border border-amber-600 rounded-full p-1.5 flex items-center justify-center text-amber-700 text-xs hover:text-white hover:bg-amber-600 cursor-pointer bg-amber-50">
              <i class="fa-brands fa-youtube"></i>
            </span>
          </div>
        </div>


        {/* Right sections */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-20 text-sm font-sans">

          <div>
            <h5 className="font-semibold mb-3">Astrology Tools</h5>
            <ul className="text-[11px] font-semibold space-y-1.5 text-slate-700/90 cursor-pointer">
              <li className="hover:text-amber-800">
                <a href="#horoscopeSection">Daily Horoscope</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#kundliSection">Free Kundli Birth Chart</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#flameSection">FLAME Match Calculator</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#aiScannerSection">AI Palm Scanner</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#panchang">Today's Panchang & Muhurat</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Consultations</h5>
            <ul className="text-[11px] font-semibold space-y-1.5 text-slate-700/90 cursor-pointer">
              <li className="hover:text-amber-800">
                <a href="#astrologersSection">Chat with Astrologer</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#astrologersSection">Talk to Astrologer</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#astrologersSection">Love & Marriage Astrologers</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#astrologersSection">Career Guidance Masters</a>
              </li>
              <li className="hover:text-amber-800">
                <a href="#astrologersSection">Tarot Card Readers</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Trust & Support</h5>
            <ul className="text-[11px] font-semibold space-y-1.5 text-slate-700/90 cursor-pointer">
              <li className="hover:text-amber-800">100% Privacy Guarantee</li>
              <li className="hover:text-amber-800">Terms & Conditions</li>
              <li className="hover:text-amber-800">Refund Policy</li>
              <li className="hover:text-amber-800">24/7 Customer Support</li>
            </ul>
          </div>

        </div>
      </div>


      {/* Bottom */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-amber-800/20 text-center text-[11px] text-slate-600/70 font-semibold flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © 2026 Astromee.com. All rights reserved. Empowering cosmic discovery.
        </div>
        <div>
          🔒 256-Bit SSL Encrypted   
          <span className="mx-3">•</span>   
          ⚡ UPI & Card Secured
        </div>
      </div>

    </footer>
  );
}