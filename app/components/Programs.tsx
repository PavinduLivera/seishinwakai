import { FaChild, FaUserAlt, FaKhanda, FaChevronRight } from "react-icons/fa";

export default function Programs() {
  const classes = [
    {
      title: "Kids Karate",
      age: "Ages 4 - 10",
      desc: "Focusing on discipline, focus, and basic motor skills through fun yet structured training.",
      icon: <FaChild />,
      theme: "border-dojo-green",
      bg: "bg-dojo-green/5",
      iconColor: "text-dojo-green"
    },
    {
      title: "Adults & Self-Defense",
      age: "Ages 10 - 55+",
      desc: "High-intensity training focused on practical self-defense, fitness, and stress relief.",
      icon: <FaUserAlt />,
      theme: "border-dojo-green",
      bg: "bg-dojo-green/5",
      iconColor: "text-dojo-green"
    },
    {
      title: "Elite Squad Training",
      age: "Selected Players • Invitation Only",
      desc: "Advanced Kumite and Kata training for athletes competing at National and International levels.",
      icon: <FaKhanda />,
      theme: "border-dojo-black",
      bg: "bg-dojo-black/5",
      iconColor: "text-dojo-black"
    }
  ];

  return (
    <section className="py-24 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-[10px] mb-3">Training Programs</h4>
            <h2 className="text-4xl md:text-6xl font-black text-dojo-black uppercase italic tracking-tighter leading-none">
              Choose Your <span className="text-dojo-green">Path</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm border-l-4 border-dojo-green pl-4">
            From beginners to world-class athletes, we have a specialized program for everyone.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div 
              key={index} 
              className={`group relative p-10 rounded-[2.5rem] border-2 ${item.theme} ${item.bg} hover:bg-white transition-all duration-500 hover:shadow-2xl flex flex-col`}
            >
              {/* Icon & Age Badge */}
              <div className="flex justify-between items-start mb-8">
                <div className={`text-4xl ${item.iconColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  {item.age}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-dojo-black uppercase italic mb-4 group-hover:text-dojo-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Action Button */}
              <a href="/contact">
              <button className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                item.theme === 'border-dojo-black' ? 'bg-dojo-black text-white hover:bg-dojo-green' : 'bg-white text-dojo-black border border-gray-200 hover:bg-dojo-black hover:text-white shadow-sm'
              }`}>
                Learn More <FaChevronRight className="text-[10px]" />
              </button>
              </a>
            </div>
          ))}
        </div>

        {/* Private Training Banner */}
        <div className="mt-16 p-8 md:p-12 bg-dojo-black rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-dojo-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic">Need <span className="text-dojo-green">Private</span> Coaching?</h3>
              <p className="text-gray-400 mt-2 font-medium">One-on-one sessions for accelerated learning and grading prep.</p>
            </div>
            <button className="bg-white text-dojo-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-dojo-green hover:text-white transition-all shadow-xl active:scale-95">
              Book a Session
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}