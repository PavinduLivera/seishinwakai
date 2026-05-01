import Image from "next/image";
import { FaUserPlus, FaPlayCircle, FaAward, FaUsers, FaTrophy, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      
      {/* Background Decorative Elements - Using Globals.css Colors */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dojo-green/5 skew-x-[-15deg] translate-x-20 hidden lg:block -z-0"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-dojo-green/5 rounded-full blur-3xl opacity-60 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-dojo-red/10 text-dojo-red px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dojo-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dojo-red"></span>
              </span>
              Now Enrolling for 2026
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-dojo-black leading-[0.9] uppercase italic tracking-tighter">
              Master the <br /> 
              <span className="text-dojo-green drop-shadow-md">Art of Power</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 border-l-4 border-dojo-green pl-6 leading-relaxed font-medium">
              Start Your Journey to Mastery. Authentic Karate training in Sri Lanka for all ages. Discipline. Strength. Respect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="/dojos">
              <button className="w-full sm:w-auto bg-dojo-green hover:bg-dojo-black text-white px-10 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
                <FaUserPlus /> BECOME A CHAMPION
              </button>
              </a>
              <a href="https://www.facebook.com/share/1UFY58CwQh/" target="_blank">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-dojo-black font-black hover:text-dojo-green transition-colors py-4 group">
                <FaPlayCircle className="text-3xl text-dojo-red group-hover:scale-110 transition-transform" /> 
                <span className="border-b-2 border-dojo-black/10 group-hover:border-dojo-green uppercase tracking-wide">Watch Training</span>
              </button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-10 grid grid-cols-3 gap-6 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <h3 className="font-black text-3xl text-dojo-black leading-none">15+</h3>
                <p className="text-[10px] text-gray-400 uppercase font-black mt-1 tracking-widest">Years Exp</p>
              </div>
              <div className="text-center lg:text-left border-x border-gray-100 px-4">
                <h3 className="font-black text-3xl text-dojo-black leading-none">500+</h3>
                <p className="text-[10px] text-gray-400 uppercase font-black mt-1 tracking-widest">Students</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-black text-3xl text-dojo-black leading-none">25+</h3>
                <p className="text-[10px] text-gray-400 uppercase font-black mt-1 tracking-widest">Black Belts</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image/Visual */}
          <div className="relative group px-4 md:px-0">
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out">
              <Image
                src="/Hero-Image.jpg"
                alt="Karate Training"
                width={1200}
                height={500}
                priority
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                style={{ height: '500px' }} // This satisfies the Next.js requirement for explicit styling
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dojo-black/80 via-transparent to-transparent"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-8 left-8 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow border-b-4 border-dojo-green">
                <div className="bg-dojo-black p-3 rounded-xl text-amber-400 text-2xl">
                  <FaAward />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Black Belt Grading</p>
                  <p className="font-black text-dojo-black text-lg leading-tight uppercase">Seishinwakai</p>
                </div>
              </div>
            </div>

            {/* Decorative Background for Image */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-dojo-green rounded-[2.5rem] -z-10 -rotate-3 opacity-10 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-dojo-red rounded-full -z-10 opacity-10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}