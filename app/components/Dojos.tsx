"use client";

import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaWalking, 
  FaUserShield, 
  FaWhatsapp // WhatsApp icon එක එකතු කළා
} from "react-icons/fa"; 
import { GiKimono } from "react-icons/gi"; 
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";
import PageHeader from "./PageHeader";
import Image from "next/image";
import { dojos } from "@/constants/instructors";

export default function DojosSection() {

const handleMapRedirect = (link: string) => {
  window.open(link, "_blank");
};

  return (
    <section className="bg-white pb-20" id="dojos">
      <PageHeader 
        title="Find Your" 
        highlight="Training Ground" 
        subtitle="Our Locations"
        bgImage="https://images.unsplash.com/photo-1555597673-b21d5c935865"
        opacity="opacity-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dojos.map((dojo) => (
            <div key={dojo.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_45px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={dojo.image} 
                  alt={dojo.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 right-5 bg-dojo-red text-white p-3 rounded-2xl shadow-lg z-10">
                  <GiKimono className="text-xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dojo-black/70 to-transparent z-0"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-dojo-black mb-4 uppercase italic tracking-tight leading-none">{dojo.name}</h3>
                
                {/* Sensei Card */}
                <div className="mb-6 p-3 bg-gray-50 rounded-2xl flex items-center justify-between group/sensei hover:bg-green-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaUserShield className="text-green-700 text-xl" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">Instructor</p>
                      <p className="font-bold text-black group-hover/sensei:text-green-700">{dojo.senseiName}</p>
                    </div>
                  </div>
                  <Link href={`/sensei/${dojo.senseiId}`}>
                    <button className="text-[10px] font-black bg-black text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-all uppercase">
                      Profile
                    </button>
                  </Link>
                </div>

                {/* Training Schedule */}
                <div className="mb-6 space-y-2">
                  <p className="text-[10px] font-black text-dojo-green uppercase tracking-[0.2em] mb-3">Training Schedule</p>
                  {dojo.sessions.map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-zinc-50 p-3 rounded-xl border border-zinc-100 hover:border-dojo-green/30 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-dojo-black leading-none">{session.day}</span>
                        <span className="text-[11px] text-gray-500 font-medium mt-1">{session.time}</span>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-lg border border-zinc-200 shadow-sm">
                         <span className="text-[10px] font-black text-dojo-green uppercase">{session.focus}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8 flex-grow border-t border-dashed border-gray-200 pt-6">
                  <div className="flex items-start gap-3 text-gray-500 text-sm">
                    <FaMapMarkerAlt className="text-dojo-red mt-1 shrink-0" />
                    <span className="font-medium leading-tight">{dojo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-dojo-black text-sm">
                    <FaPhoneAlt className="text-dojo-green shrink-0" />
                    <span className="font-black tracking-wide">{dojo.displayPhone}</span>
                  </div>
                </div>

                {/* CTA Buttons - WhatsApp එකත් එක්ක */}
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleMapRedirect(dojo.mapLink)}
                    className="flex-1 min-w-[120px] bg-dojo-black text-white py-4 rounded-2xl font-black text-[15px] tracking-widest flex items-center justify-center gap-2 hover:bg-dojo-red transition-all shadow-lg active:scale-95"
                  >
                    <FaWalking /> VISIT US
                  </button>
                  
                  <div className="flex gap-2">
                    <a 
                      href={`https://wa.me/${dojo.phone}?text=Hi, I would like to know more about ${dojo.name} classes.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-5 py-4 rounded-2xl hover:bg-[#128C7E] transition-all shadow-sm flex items-center justify-center"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                    
                    <a 
                      href={`tel:${dojo.phone}`}
                      className="bg-dojo-green/10 text-dojo-green px-5 py-4 rounded-2xl hover:bg-dojo-green hover:text-white transition-all shadow-sm flex items-center justify-center"
                    >
                      <BiSolidPhoneCall className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}