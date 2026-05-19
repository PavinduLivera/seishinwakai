import { FaUserNinja, FaWhatsapp, FaChevronRight, FaAward } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../PageHeader";
import { senseiDetails } from "@/constants/instructors";

export default function AllInstructors() {
  const currentYear = new Date().getFullYear();

  // 1. Array එකක් බවට පත් කරගෙන Founder සහ අනෙක් අය වෙන් කරගන්නවා
  const allSenseis = Object.entries(senseiDetails).map(([id, data]) => ({
    id,
    ...data,
  }));

  // Role එක "Founder & Chief Instructor" හෝ "Chief Instructor" තියෙන කෙනාව මුලින්ම ගන්නවා
  const founder = allSenseis.find(s => s.role.toLowerCase().includes("founder"));
  // අනෙක් සියලුම Instructors ලව වෙනම ගන්නවා
  const otherInstructors = allSenseis.filter(s => !s.role.toLowerCase().includes("founder"));

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Certified" 
        highlight="Instructors" 
        subtitle="Expert Leadership"
        bgImage="https://images.unsplash.com/photo-1555597673-b21d5c935865"
        opacity="opacity-10"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-20 space-y-16">        
        
        {/* ================= FOUNDER SECTION (FEATURED) ================= */}
        {founder && (
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-md border border-gray-100 group">
            <div className="flex flex-col lg:flex-row min-h-[450px]">
              
              {/* Founder Image */}
              <div className="lg:w-5/12 h-80 lg:h-auto relative overflow-hidden bg-zinc-900">
                <Image 
                  src={founder.image} 
                  alt={founder.name} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-5 right-5 bg-black/80 text-white p-3 rounded-2xl backdrop-blur-md">
                  <FaUserNinja className="text-xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest text-dojo-green mb-1">Legacy</p>
                  <p className="text-2xl font-black italic">{founder.experience}</p>
                </div>
              </div>

              {/* Founder Content */}
              <div className="lg:w-7/12 p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-6 bg-gradient-to-br from-white to-gray-50/50">
                <div>
                  <div className="bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-4 shadow-sm animate-pulse">
                    {founder.role}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-black uppercase italic tracking-tight">{founder.name}</h2>
                  <p className="text-gray-400 font-bold text-[11px] uppercase tracking-widest mt-1">{founder.rank}</p>
                </div>

                {/* Bio (කෙටි විස්තරය මෙතනට ලස්සනට ගැලපෙනවා) */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                  {founder.bio}
                </p>

                {/* Actions */}
                <div className="flex gap-2 md:gap-3 pt-6 border-t border-gray-100 max-w-md">
                  <Link 
                    href={`/sensei/${founder.id}`} 
                    className="flex-1 bg-black text-white py-4 rounded-xl md:rounded-2xl font-black text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-dojo-green transition-all shadow-md active:scale-95"
                  >
                    READ FULL STORY <FaChevronRight className="text-[8px]" />
                  </Link>
                  <a 
                    href={`https://wa.me/${founder.whatsapp}`}
                    target="_blank"
                    className="bg-green-500 text-white px-5 py-4 rounded-xl md:rounded-2xl hover:bg-green-600 transition-all shadow-md flex items-center justify-center active:scale-95"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}


        {/* ================= OTHER INSTRUCTORS GRID ================= */}
        {otherInstructors.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl md:text-2xl font-black text-black uppercase italic tracking-tight">
                Senior & Junior <span className="text-red-600">Instructors</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {otherInstructors.map((sensei) => (
                <div key={sensei.id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <Image 
                      src={sensei.image} 
                      alt={sensei.name} 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-black/80 text-white p-2.5 rounded-xl backdrop-blur-md">
                      <FaUserNinja className="text-lg" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-[9px] font-black uppercase tracking-widest text-dojo-green mb-1">Experience</p>
                      <p className="text-lg font-black italic">{sensei.experience}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-4 flex flex-col flex-grow">
                    <div>
                      <div className="bg-red-50 text-red-600 px-3 py-1 rounded-md text-[9px] md:text-[10px] font-black uppercase tracking-wider w-fit mb-2">
                        {sensei.rank}
                      </div>
                      <h4 className="text-xl font-black text-black uppercase italic leading-tight">{sensei.name}</h4>
                      <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest mt-1">{sensei.role}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-gray-50 mt-auto">
                      <Link 
                        href={`/sensei/${sensei.id}`} 
                        className="flex-1 bg-black text-white py-3.5 rounded-xl font-black text-[9px] tracking-widest flex items-center justify-center gap-2 hover:bg-dojo-green transition-all shadow-md active:scale-95"
                      >
                        VIEW PROFILE <FaChevronRight className="text-[7px]" />
                      </Link>
                      <a 
                        href={`https://wa.me/${sensei.whatsapp}`}
                        target="_blank"
                        className="bg-green-500 text-white px-4 py-3.5 rounded-xl hover:bg-green-600 transition-all shadow-md flex items-center justify-center active:scale-95"
                      >
                        <FaWhatsapp className="text-lg" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer Branding */}
      <div className="pb-10 text-center opacity-20">
         <p className="text-[10px] font-black uppercase tracking-[0.3em]">Seishinwakai Sri Lanka • {currentYear}</p>
      </div>
    </div>
  );
}