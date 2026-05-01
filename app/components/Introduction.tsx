import { FaScroll, FaTrophy, FaPlus } from "react-icons/fa";

export default function Introduction() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dojo-black uppercase italic tracking-tighter">
            The Perfect <span className="text-dojo-green">Balance</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
            We bridge the gap between ancient martial arts wisdom and modern competitive excellence.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Middle "Plus" Badge - Only visible on LG screens */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-dojo-black text-dojo-red rounded-full items-center justify-center text-2xl shadow-[0_0_30px_rgba(0,0,0,0.2)] border-4 border-white">
            <FaPlus />
          </div>

          {/* 1. Traditional Karate Side */}
          <div className="relative group p-12 md:p-16 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 hover:bg-gray-50 transition-colors duration-500">
             <div className="bg-dojo-black/5 p-5 rounded-3xl text-dojo-black text-4xl group-hover:bg-dojo-black group-hover:text-white transition-all duration-500">
                <FaScroll />
             </div>
             <h3 className="text-3xl font-black text-dojo-black uppercase italic">Traditional <br/><span className="text-dojo-red">Karate</span></h3>
             <ul className="space-y-3 text-gray-500 font-bold uppercase text-xs tracking-widest">
                <li className="flex flex-row-reverse items-center gap-3">Self-Defense (Budo) <div className="w-1.5 h-1.5 bg-dojo-red rounded-full"></div></li>
                <li className="flex flex-row-reverse items-center gap-3">Character Development <div className="w-1.5 h-1.5 bg-dojo-red rounded-full"></div></li>
                <li className="flex flex-row-reverse items-center gap-3">Kata & Kihon Mastery <div className="w-1.5 h-1.5 bg-dojo-red rounded-full"></div></li>
                <li className="flex flex-row-reverse items-center gap-3">Discipline & Respect <div className="w-1.5 h-1.5 bg-dojo-red rounded-full"></div></li>
             </ul>
             <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Focused on the roots of karate, emphasizing mental strength and life-saving techniques.
             </p>
          </div>

          {/* 2. Sport Karate Side */}
          <div className="relative group p-12 md:p-16 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 hover:bg-gray-50 transition-colors duration-500 border-t lg:border-t-0 lg:border-l border-gray-100">
             <div className="bg-dojo-green/5 p-5 rounded-3xl text-dojo-green text-4xl group-hover:bg-dojo-green group-hover:text-white transition-all duration-500">
                <FaTrophy />
             </div>
             <h3 className="text-3xl font-black text-dojo-black uppercase italic">Sport <br/><span className="text-dojo-green">Karate</span></h3>
             <ul className="space-y-3 text-gray-500 font-bold uppercase text-xs tracking-widest">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-dojo-green rounded-full"></div> WKF Competition Rules</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-dojo-green rounded-full"></div> Speed & Agility Training</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-dojo-green rounded-full"></div> Kumite Tactics</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-dojo-green rounded-full"></div> National & World Medals</li>
             </ul>
             <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Training for victory in the modern arena with world-class sports science and tactics.
             </p>
          </div>

        </div>

        {/* Bottom Banner - The Unified Path */}
        <div className="mt-12 bg-dojo-black rounded-3xl p-8 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-dojo-red opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
           <p className="relative z-10 text-white font-black uppercase italic tracking-widest text-lg md:text-xl">
             "Tradition is our <span className="text-dojo-red">Root</span>, Competition is our <span className="text-dojo-green">Fruit</span>"
           </p>
        </div>

      </div>
    </section>
  );
}