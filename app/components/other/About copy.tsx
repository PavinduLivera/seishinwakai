import { FaHistory, FaBullseye, FaHandsHelping, FaAward, FaSchool, FaCheckCircle, FaGlobe, FaCertificate, FaShieldAlt, FaCheck } from "react-icons/fa";
import PageHeader from "../PageHeader";
import Image from "next/image";

export default function AboutPage() {

const coachedSchools = [
  "St. John's College - Nugegoda",
  "Dharmaraja Maha Vidyalaya - Piliyandala",
  "Sir John Kothalawala Maha Vidyalaya - Piliyandala",
  "Moratu Maha Vidyalaya - Moratuwa",
  "Hejaaz International School - Mount Lavinia",
  "Hejaaz International School - Dehiwala",
  "Harcourts International School - Mount Lavinia",
  "Jade International School - Bambalapitiya",
  "Vidyaloka College - Monaragala",
];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section (Our Legacy) */}
      <PageHeader 
        title="Our" 
        highlight="Legacy" 
        subtitle="Tradition • Discipline • Strength"
        bgImage="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb"
      />

      {/* 2. Our Story Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Shihan Profile Card */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-dojo-green/5 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
          
          <div className="relative z-10 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <Image 
              src="/coaches/shihan-herath.jpg" 
              alt="Shihan S.C. Herath" 
              width={1200}
              height={500}
              priority
              className="w-full h-auto object-cover transition-all duration-700"
              style={{ height: '500px' }} // This satisfies the Next.js requirement for explicit styling
            />                
            
            <div className="p-8 bg-zinc-900 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase italic leading-none">Shihan S.C. Herath</h3>
                  <p className="text-dojo-green font-bold text-xs uppercase tracking-[0.2em] mt-2">Chief Instructor</p>
                </div>
                <div className="bg-dojo-green px-3 py-1 rounded text-[10px] font-black uppercase italic">6th Dan Black Belt</div>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-300">
                  <FaAward className="text-dojo-green" /> National Team Coach (Former)
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-300">
                  <FaAward className="text-dojo-green" /> WKF Certified Instructor & Referee
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-300">
                  <FaAward className="text-dojo-green" /> 35+ Years of Martial Arts Experience
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -top-6 -left-6 bg-white border-4 border-dojo-green p-5 rounded-2xl z-20 shadow-xl hidden md:block animate-bounce-slow">
             <p className="text-4xl font-black italic text-dojo-black leading-none">20+</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Years of Legacy</p>
          </div>
        </div>
        
        {/* Right Side: Content & Schools */}
        <div className="space-y-8">
          <div>
            <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-[10px] mb-3">Our Identity</h4>
            <h2 className="text-4xl md:text-5xl font-black text-dojo-black uppercase italic leading-none">
              The Spirit of <br /> 
              <span className="text-dojo-green">Seishinwakai</span>
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-md font-medium">
            <p>
              <strong className="text-dojo-black italic">Seishinwakai (精神和会)</strong> stands for "The Association of Pure Spirit and Harmony." Under the leadership of Shihan S.C. Herath, we have forged a path of excellence in both traditional Shotokan and modern Sport Karate.
            </p>
            <p>
              We are proud to be affiliated with the <strong>Sri Lanka Karate-Do Federation (SLKF)</strong>, ensuring our students receive government-recognized certification and pathways to national representation.
            </p>
          </div>

          {/* Coached Schools List */}
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaSchool className="text-dojo-green text-2xl" />
              <h3 className="font-black text-dojo-black uppercase italic tracking-tight">Official School Programs</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {coachedSchools.map((school, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-bold text-gray-500 group cursor-default">
                  <FaCheckCircle className="text-dojo-red text-[10px] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-dojo-black transition-colors">{school}</span>
                </div>
              ))}
            </div>
          </div>
    
        </div>

      </div>

      {/* Quote */}
          <div className="flex items-center gap-4 p-6 mt-10  bg-zinc-900 text-white rounded-2xl italic shadow-lg">
            <FaCheck className="text-3xl text-dojo-green" />
            <p className="text-sm font-bold leading-tight">
              "Our mission is to develop disciplined, confident, and resilient individuals who contribute positively to society."
            </p>
          </div>

    </section>

      {/* 3. Core Values (Grid Cards) */}
      <section className="bg-dojo-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="text-dojo-red font-black uppercase tracking-widest text-xs mb-3">The Dojo Way</h4>
            <h2 className="text-4xl font-black text-white uppercase italic">Our Core <span className="text-dojo-green">Values</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-10 rounded-[2rem] border-b-8 border-dojo-green hover:-translate-y-2 transition-all duration-300">
              <FaBullseye className="text-5xl text-dojo-green mb-6" />
              <h3 className="font-black text-xl text-white mb-4 uppercase">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">To provide world-class Karate training that enhances mental focus and physical fitness for all generations.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-[2rem] border-b-8 border-dojo-red hover:-translate-y-2 transition-all duration-300">
              <FaHistory className="text-5xl text-dojo-red mb-6" />
              <h3 className="font-black text-xl text-white mb-4 uppercase">Our Heritage</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Strictly following the traditional Shotokan style while adapting to modern sports karate standards.</p>
            </div>
            <div className="bg-zinc-900 p-10 rounded-[2rem] border-b-8 border-white hover:-translate-y-2 transition-all duration-300">
              <FaHandsHelping className="text-5xl text-white mb-6" />
              <h3 className="font-black text-xl text-white mb-4 uppercase">Our Community</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Creating a family-friendly environment where every student supports each other's progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Affiliations Section */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-dojo-green mb-4">Official Affiliations & Recognition</h3>
          <div className="w-12 h-1 bg-dojo-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. SLKF - National Body */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <FaShieldAlt className="text-4xl text-dojo-black opacity-80" />
            </div>
            <h4 className="font-black text-xs uppercase mb-2 tracking-tighter">SLKF National Body</h4>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed px-4">
              Sri Lanka Karate-do Federation <br/> 
              <span className="text-dojo-green uppercase">Reg No: SLKF/AFF/J/244</span> <br/>
              (Under Ministry of Sports)
            </p>
          </div>

          {/* 2. SLSKA - School's Association */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <FaAward className="text-4xl text-dojo-black opacity-80" />
            </div>
            <h4 className="font-black text-xs uppercase mb-2 tracking-tighter">School's Association</h4>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed px-4">
              Sri Lanka School’s Karate-do Association <br/>
              (Approved by Ministry of Education)
            </p>
          </div>

          {/* 3. NOC - National Olympic Committee */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <FaCertificate className="text-4xl text-dojo-black opacity-80" />
            </div>
            <h4 className="font-black text-xs uppercase mb-2 tracking-tighter">NOC Recognized</h4>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed px-4">
              Recognized by the <br/>
              National Olympic Committee [NOC] Sri Lanka
            </p>
          </div>

          {/* 4. Shotokan Federation */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <FaGlobe className="text-4xl text-dojo-black opacity-80" />
            </div>
            <h4 className="font-black text-xs uppercase mb-2 tracking-tighter">Shotokan Federation</h4>
            <p className="text-[10px] text-gray-500 font-bold leading-relaxed px-4">
              Sri Lanka Shotokan <br/>
              Karate-Do Federation Member
            </p>
          </div>

        </div>

        {/* Verification Note */}
        <div className="mt-16 text-center">
           <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest border border-dashed border-gray-200 inline-block px-6 py-2 rounded-full">
             All certifications are government recognized and globally valid
           </p>
        </div>

      </div>
    </section>
    </main>
  );
}