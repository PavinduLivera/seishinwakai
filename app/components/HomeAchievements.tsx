import Image from "next/image";
import { FaTrophy, FaMedal, FaGlobeAmericas, FaUsers } from "react-icons/fa";

export default function HomeAchievements() {
  const stats = [
    { label: "Gold Medals", value: "50+", icon: <FaMedal className="text-dojo-red" /> },
    { label: "Championships", value: "12", icon: <FaTrophy className="text-amber-500" /> },
    { label: "Black Belts", value: "100+", icon: <FaUsers className="text-zinc-500" /> },
    { label: "Years Excellence", value: "20+", icon: <FaGlobeAmericas className="text-dojo-green" /> },
  ];

  return (
    <section className="py-24 bg-dojo-black text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dojo-red/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-dojo-red transition-colors duration-500">
              <div className="text-4xl flex justify-center mb-4 opacity-80">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black italic tracking-tighter mb-1">{stat.value}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Awards Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-xs">Hall of Fame</h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">
              A Legacy of <br /> <span className="text-dojo-green text-shadow-glow">Champions.</span>
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              Our students consistently dominate the national arena, proving that our training methodology is world-class. From local district meets to international platforms, the Dojo spirit shines bright.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 bg-zinc-900 p-5 rounded-2xl border-l-4 border-dojo-green">
                 <FaTrophy className="text-dojo-green text-2xl" />
                 <div>
                    <p className="font-black uppercase text-xs">Gold 10 | Silver 12 | Bronze 5</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Karate Championship 2026</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-zinc-900 p-5 rounded-2xl border-l-4 border-dojo-red">
                 <FaTrophy className="text-dojo-red text-2xl" />
                 <div>
                    <p className="font-black uppercase text-xs">Gold 8 | Silver 6 | Bronze 3</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Karate Championship 2025</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Award Image/Visual */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-dojo-green/20 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-dojo-green shadow-2xl">
              <Image 
                src="/winners.jpg" 
                alt="Medal Ceremony" 
                className="w-auto h-auto aspect-auto object-cover transition-all duration-700"
                width={1200}
                height={500}
                priority
                style={{ height: '500px' }} // This satisfies the Next.js requirement for explicit styling
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dojo-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-black italic uppercase tracking-widest text-xl">Victorious Spirit</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}