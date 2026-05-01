import { FaBrain, FaDumbbell, FaShieldAlt, FaHandshake, FaBalanceScale, FaHeartbeat } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      title: "Mental Discipline",
      desc: "Develop laser-like focus and self-control that translates into better performance at school or work.",
      icon: <FaBrain />,
      color: "text-dojo-red",
      bg: "bg-dojo-red/10"
    },
    {
      title: "Physical Fitness",
      desc: "A full-body workout that improves strength, flexibility, and cardiovascular endurance.",
      icon: <FaDumbbell />,
      color: "text-dojo-green",
      bg: "bg-dojo-green/10"
    },
    {
      title: "Self-Defense",
      desc: "Learn practical techniques to protect yourself and your loved ones in real-world situations.",
      icon: <FaShieldAlt />,
      color: "text-dojo-black",
      bg: "bg-dojo-black/5"
    },
    {
      title: "Confidence & Respect",
      desc: "Building inner strength and learning to respect yourself and others through the 'Budo' spirit.",
      icon: <FaHandshake />,
      color: "text-dojo-red",
      bg: "bg-dojo-red/10"
    },
    {
      title: "Stress Relief",
      desc: "Release daily tension and improve mental well-being through focused physical activity.",
      icon: <FaHeartbeat />,
      color: "text-dojo-green",
      bg: "bg-dojo-green/10"
    },
    {
      title: "Balance & Reflexes",
      desc: "Enhance your coordination and react faster with specialized drills and movement training.",
      icon: <FaBalanceScale />,
      color: "text-dojo-black",
      bg: "bg-dojo-black/5"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-[10px]">The Path of Mastery</h4>
          <h2 className="text-4xl md:text-6xl font-black text-dojo-black uppercase italic tracking-tighter leading-none">
            Why Choose <span className="text-dojo-green">Karate?</span>
          </h2>
          <div className="w-24 h-2 bg-dojo-black mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                {benefit.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-dojo-black uppercase italic mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-white rounded-2xl shadow-xl">
             <div className="bg-dojo-black text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-4">
                <span>Master your body. Control your mind.</span>
                <div className="w-1.5 h-1.5 bg-dojo-red rounded-full animate-ping"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}