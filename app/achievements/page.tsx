import Image from "next/image";
import { FaTrophy, FaMedal, FaStar, FaUserNinja, FaFlagCheckered } from "react-icons/fa";

import PageHeader from "../components/PageHeader";

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "Karate Championship 2025",
      result: "Overall Champions",
      stats: "15 Gold | 10 Silver | 05 Bronze",
      description: "Our dojo secured the overall championship trophy at the SLKF National level tournament held at Sugathadasa Indoor Stadium.",
      icon: <FaTrophy className="text-amber-500" />,
      color: "border-amber-500"
    },
    {
      id: 2,
      title: "National Sports Festival",
      result: "Gold Medalist -60 Kumite",
      stats: "Sensei Olan Fernando",
      description: "Winning the gold medal representing in the senior men's under 60kg category.",
      icon: <FaMedal className="text-dojo-red" />,
      color: "border-dojo-red"
    },
    {
      id: 3,
      title: "Black Belt Grading Excellence",
      result: "100% Pass Rate",
      stats: "25 New Black Belts",
      description: "A record-breaking performance where all our students successfully promoted to their next Dan ranks.",
      icon: <FaStar className="text-dojo-green" />,
      color: "border-dojo-green"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <PageHeader 
  title="Our" 
  highlight="Achievements" 
  subtitle="Milestones • Victory • Excellence"
  bgImage="https://images.unsplash.com/photo-1555597673-b21d5c935865"
/>

      {/* 2. Main Stats Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-dojo-black">150+</p>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Total Medals</p>
          </div>
          <div className="border-l border-gray-200">
            <p className="text-3xl font-black text-dojo-red">45</p>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Gold Medals</p>
          </div>
          <div className="border-l border-gray-200">
            <p className="text-3xl font-black text-dojo-green">10+</p>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Championships</p>
          </div>
          <div className="border-l border-gray-200">
            <p className="text-3xl font-black text-dojo-black">100%</p>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Grading Success</p>
          </div>
        </div>
      </section>

      {/* 3. Achievements Timeline/Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((item) => (
            <div key={item.id} className={`bg-white rounded-[2rem] p-8 border-t-8 ${item.color} shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col`}>
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-black text-dojo-black uppercase leading-tight mb-2 tracking-tight">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <FaFlagCheckered className="text-dojo-red text-xs" />
                <span className="text-xs font-black text-dojo-red uppercase tracking-widest">{item.result}</span>
              </div>

              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <div className="pt-6 border-t border-gray-50">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Achievement Stats</p>
                 <p className="font-black text-dojo-black text-sm">{item.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Photo Highlight Section */}
      <section className="py-24 bg-dojo-black text-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">The Spirit of <span className="text-dojo-green">Victory</span></h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              Every medal and trophy in our dojo represents thousands of hours of sweat, discipline, and unwavering focus. We don't just win tournaments; we conquer our own limits.
            </p>
            <div className="flex gap-4">
               <div className="bg-dojo-green/20 p-4 rounded-xl border border-dojo-green/30">
                  <FaUserNinja className="text-dojo-green text-3xl" />
               </div>
               <div>
                  <p className="font-black text-white text-lg">Join the Elite</p>
                  <p className="text-xs text-gray-500 font-bold uppercase">Be part of our next big win</p>
               </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-dojo-green/20 rounded-[2.5rem] -rotate-3"></div>
            <Image 
              src="/winners.jpg" 
              width={800}
              height={300}
              priority
              className="relative z-10 rounded-[2rem] object-cover shadow-2xl transition-all duration-700" 
              style={{ height: '500px' }} // This satisfies the Next.js requirement for explicit styling
              alt="Tournament victory"
            />                          
            {/* className="w-full h-auto object-cover transition-all duration-700" */}         
            
          </div>
        </div>
      </section>
    </main>
  );
}