import { FaHistory, FaBullseye, FaHandsHelping, FaAward, FaSchool, FaCheckCircle, FaGlobe, FaCertificate, FaShieldAlt, FaCheck, FaDiceD6, FaFingerprint, FaChevronRight, FaDotCircle } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
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

      {/* 2. Identity & Association Intro */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-[10px] mb-3">Our Identity</h4>
            <h2 className="text-4xl md:text-6xl font-black text-dojo-black uppercase italic leading-none tracking-tight">
              The Spirit of <br /> 
              <span className="text-dojo-green">Seishinwakai</span>
            </h2>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg font-medium">
            <p>
              <strong className="text-dojo-black italic">Seishinwakai (精神和会)</strong> stands for "The Association of Pure Spirit and Harmony." Founded on a vision to cultivate the true, traditional spirit of Shotokan Karate alongside modern competitive excellence, we shape both minds and bodies.
            </p>
            <p>
              We are proudly affiliated with the <strong className="text-dojo-black">Sri Lanka Karate-Do Federation (SLKF)</strong>, ensuring our students receive official, government-recognized certifications and clear pathways to national and international glory.
            </p>
          </div>
        </div>
      </section>

    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-20 bg-white">
      
      {/* ================= 01. CHIEF INSTRUCTOR ================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
        
        {/* Image Container */}
        <div className="md:col-span-5 w-full">
          {/* Mobile වලදී h-[420px] දාලා තියෙන නිසා රූපය ලස්සනට පේනවා */}
          <div className="relative h-[420px] sm:h-[480px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-50">
            <Image 
              src="/coaches/shihan-herath.jpg" 
              alt="Shihan S C Herath" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top" // object-top මඟින් හිස කොටස කැපීම වළක්වයි
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Founder & Chief Instructor</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Shihan S C Herath</h2>
            <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest mt-1">5th Dan Black Belt</p>
          </div>
          
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            <p>
              The journey began in 1999 with the prestigious Japan Karate Association (JKA). Displaying early promise and dedication, our founder achieved his Black Belt 1st Dan in 2005, followed by his 2nd Dan in 2007. Between 1999 and 2012, he served as a dedicated player, instructor, and branch member under the JKA banner, laying a rock-solid foundation in traditional Shotokan techniques.
            </p>
            <p>
              His competitive career is marked by extraordinary success on both national and international stages. Selected for the Junior National Karate Team in 2004, he dominated the arena as the Junior National Champion consecutively from 2005 to 2008. In 2007, he brought glory to Sri Lanka by winning the Silver Medal in the Kumite event at the Junior South Asian Open Karate Championship in India. 
            </p>
            <p>
              Parallel to his civilian achievements, he served in the Sri Lanka Air Force from 2008 to 2019, where he proudly captained the Air Force Karate Team. During his service, his vast technical expertise was called upon to design a highly specialized "Hand-to-Hand Combat" course for the Elite Special Airborne Force.
            </p>
            <p>
              After serving as the Chief Instructor of the Japan Karate Do Shotokan Ryu Toryukai Association from 2012 to 2025, he reached a new milestone by achieving his Black Belt 5th Dan/6th Dan. Driven by a vision to cultivate the true spirit of Shotokan Karate, he founded the Japan Karate Do Shotokan Ryu Seishinwakai Association in 2025.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 02. ASSISTANT CHIEF INSTRUCTOR ================= */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
        
        {/* Image Container - Mobile වලදී උඩටම එන්න order-1 දාලා තියෙනවා (Desktop එකේදී දකුණට යයි) */}
        <div className="md:col-span-5 md:order-2 w-full order-1">
          <div className="relative h-[420px] sm:h-[480px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-50">
            <Image 
              src="/coaches/sensei-thilini.jpg" 
              alt="Sensei P. Thilini Priyangani Kulathunga" 
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top" // Mobile view එකේදී පින්තූරය හරියටම center/top වෙන්න
            />
          </div>
        </div>

        {/* Content Container - Mobile වලදී යටට එන්න order-2 දාලා තියෙනවා (Desktop එකේදී වමට යයි) */}
        <div className="md:col-span-7 md:order-1 space-y-4 order-2">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Assistant Chief Instructor</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">P. Thilini Priyangani Kulathunga</h2>
            <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest mt-1">4th Dan Black Belt</p>
          </div>
          
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            <p>
              P. Thilini Priyangani Kulathunga serves as the Assistant Chief Instructor of the Japan Karate Do Shotokan Ryu Seishinwakai Association, bringing with her years of dedication, competitive experience, and professional expertise in both Karate and fitness training.
            </p>
            <p>
              Her journey in Karate began in the year 2000 under the Japan Karate Association (JKA), where she developed a strong foundation in traditional Shotokan Karate through discipline, commitment, and continuous training. From an early stage, she actively participated in national-level Karate championships and established herself as a talented and accomplished athlete.
            </p>
            <p>
              Through years of dedication and technical excellence, she achieved the prestigious rank of 4th Dan (Yondan) under the Japan Karate Toryukai Association, reflecting her advanced knowledge, leadership, and contribution to the martial art.
            </p>
            <p>
              In addition to her martial arts achievements, she is also a registered and qualified Fitness Trainer certified by the Lanka Institute of Fitness. Her expertise in physical fitness and athlete conditioning further strengthens her ability to guide students toward both physical excellence and personal development.
            </p>
          </div>
        </div>
      </section>

    </div>
      {/* 5. Official School Programs */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <FaSchool className="text-dojo-green text-3xl" />
            <div>
              <h3 className="font-black text-2xl uppercase italic tracking-tight">Official School Programs</h3>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Nurturing discipline and excellence across leading schools</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {coachedSchools.map((school, index) => (
              <div key={index} className="flex items-center gap-3 text-sm font-bold text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-dojo-green/30 transition-all duration-300">
                <FaCheckCircle className="text-dojo-green text-xs shrink-0" />
                <span>{school}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Association Quote */}
        <div className="flex items-center gap-4 p-6 mt-12 bg-gray-50 border border-gray-100 text-dojo-black rounded-2xl italic shadow-sm">
          <FaCheck className="text-3xl text-dojo-red shrink-0" />
          <p className="text-sm md:text-base font-bold leading-tight text-gray-700">
            "Our mission is to develop disciplined, confident, and resilient individuals through the true path of Shotokan Karate who contribute positively to society."
          </p>
        </div>
      </section>

      {/* 6. Core Values */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="text-dojo-red font-black uppercase tracking-widest text-xs mb-3">The Dojo Way</h4>
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tight">Our Core <span className="text-dojo-green">Values</span></h2>
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

      {/* 7. Affiliations Section */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-dojo-green mb-4">Official Affiliations & Recognition</h3>
            <div className="w-12 h-1 bg-dojo-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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