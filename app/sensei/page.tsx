import { FaUserNinja, FaWhatsapp, FaChevronRight, FaStar, FaAward } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { senseiDetails } from "@/constants/instructors";

export default function AllInstructors() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Certified" 
        highlight="Instructors" 
        subtitle="Expert Leadership"
        bgImage="https://images.unsplash.com/photo-1555597673-b21d5c935865"
        opacity="opacity-10"
      />

      {/* Padding වෙනස් කළා: mobile වලදී px-4 සහ py-10 */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-20">        

        {/* Grid: Mobile එකේදී 1ක්, Tablet වලදී 2ක්, Desktop වලදී 3ක් */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {Object.entries(senseiDetails).map(([id, sensei]) => (
            <div key={id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group flex flex-col">
              
              {/* Image Container: Mobile වලදී උස පොඩ්ඩක් අඩු කළා (h-72) */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image 
                  src={sensei.image} 
                  alt={sensei.name} 
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 md:top-5 md:right-5 bg-black/80 text-white p-2.5 md:p-3 rounded-xl md:rounded-2xl backdrop-blur-md">
                  <FaUserNinja className="text-lg md:text-xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-dojo-green mb-1">Experience</p>
                  <p className="text-lg md:text-xl font-black italic">{sensei.experience}</p>
                </div>
              </div>

              {/* Content: p-6 (Mobile) vs p-8 (Desktop) */}
              <div className="p-6 md:p-8 space-y-4 md:space-y-6 flex flex-col flex-grow">
                <div>
                  <div className="bg-red-50 text-red-600 px-3 py-1 rounded-md text-[9px] md:text-[10px] font-black uppercase tracking-wider w-fit mb-2 md:mb-3">
                    {sensei.rank}
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-black uppercase italic leading-tight">{sensei.name}</h2>
                  <p className="text-gray-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-1 md:mt-2">{sensei.role}</p>
                </div>

                {/* Actions: Mobile වලදී button එක ඇතුළත text size එක සහ padding ප්‍රශස්ත කළා */}
                <div className="flex gap-2 md:gap-3 pt-4 border-t border-gray-50 mt-auto">
                  <Link 
                    href={`/sensei/${id}`} 
                    className="flex-1 bg-black text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-dojo-green transition-all shadow-md active:scale-95"
                  >
                    VIEW PROFILE <FaChevronRight className="text-[7px] md:text-[8px]" />
                  </Link>
                  <a 
                    href={`https://wa.me/${sensei.whatsapp}`}
                    target="_blank"
                    className="bg-green-500 text-white px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl hover:bg-green-600 transition-all shadow-md flex items-center justify-center active:scale-95"
                  >
                    <FaWhatsapp className="text-lg md:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Branding (Optional Simple Note) */}
      <div className="pb-10 text-center opacity-20">
         <p className="text-[10px] font-black uppercase tracking-[0.3em]">Seishinwakai Sri Lanka • {currentYear}</p>
      </div>
    </div>
  );
}