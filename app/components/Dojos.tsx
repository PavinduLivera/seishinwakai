"use client"

import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaExternalLinkAlt, FaWalking, FaUserNinja, FaChevronRight, FaUserShield } from "react-icons/fa";
import Link from "next/link";
import PageHeader from "./PageHeader";
import { section } from "framer-motion/client";
import Image from "next/image";

export default function DojosSection() {
  const dojos = [
    {
      id: 1,
      name: "Hombo Dojo - Piliyandala",
      senseiName: "Shihan S C Herath",
      senseiId: "s-c-herath",
      address: "123 Galle Road, Piliyandala",
      phone: "+94 76 605 9600",
      schedule: "Mon, Wed, Fri (4:30 PM - 6:30 PM)",
      features: ["Kids & Adults", "Tournament Training", "Black Belt Coaching"],
      image: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "City Branch - Moratuwa",
      senseiName: "Sensei Amal Perera",
      senseiId: "amal-perera",
      address: "45/A Station Road, Moratuwa",
      phone: "+94 77 987 6543",
      schedule: "Tue, Thu (5:00 PM - 7:00 PM)",
      features: ["Kids Specialized", "Self Defense", "Physical Fitness"],
      image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Wadduwa Training Center",
      senseiName: "Sensei Nuwan Silva",
      senseiId: "nuwan-silva",
      address: "Galle Road, Wadduwa",
      phone: "+94 38 456 7890",
      schedule: "Sat, Sun (8:00 AM - 10:00 AM)",
      features: ["Morning Classes", "Kata Excellence", "Grading Focus"],
      image: "https://images.unsplash.com/photo-1544260237-37a2ea59dbdf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Wadduwa Training Center",
      senseiName: "Sensei Nuwan Silva",
      senseiId: "nuwan-silva",
      address: "Galle Road, Wadduwa",
      phone: "+94 38 456 7890",
      schedule: "Sat, Sun (8:00 AM - 10:00 AM)",
      features: ["Morning Classes", "Kata Excellence", "Grading Focus"],
      image: "https://images.unsplash.com/photo-1544260237-37a2ea59dbdf?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    
    <section className="bg-white" id="dojos">

      {/* Section Header */}
      <PageHeader 
              title="Find Your" 
              highlight="Training Ground" 
              subtitle="Our Locations"
              bgImage="https://images.unsplash.com/photo-1555597673-b21d5c935865"
              opacity="opacity-10"
            />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
        {/* Dojo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dojos.map((dojo) => (
            <div key={dojo.id} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={dojo.image} 
                  alt={dojo.name} 
                  fill
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 right-5 bg-dojo-red text-white p-3 rounded-2xl shadow-lg">
                  <FaUserNinja className="text-xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dojo-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-dojo-black mb-4 uppercase italic tracking-tight">{dojo.name}</h3>
                
                {/* Sensei Quick Link Card */}
                <div className="mt-4 p-3 bg-gray-50 rounded-xl flex items-center justify-between group/sensei hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FaUserShield className="text-green-700 text-xl" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">Instructor</p>
                      <p className="font-bold text-black group-hover/sensei:text-green-700">{dojo.senseiName}</p>
                    </div>
                  </div>

                  {/* Sensei Profile Link */}
                  <Link href={`/sensei/${dojo.senseiId}`}>
                    <button className="text-[10px] font-black bg-black text-white px-3 py-1 rounded hover:bg-red-600 transition-all uppercase">
                      View Profile
                    </button>
                  </Link>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3 text-gray-500 text-sm">
                    <FaMapMarkerAlt className="text-dojo-red mt-1 shrink-0" />
                    <span className="font-medium leading-tight">{dojo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <FaClock className="text-dojo-green shrink-0" />
                    <span className="font-medium">{dojo.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-dojo-black text-sm">
                    <FaPhoneAlt className="text-dojo-green shrink-0" />
                    <span className="font-black tracking-wide">{dojo.phone}</span>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {dojo.features.map((feature, index) => (
                    <span key={index} className="bg-gray-50 text-gray-400 text-[9px] font-black uppercase px-3 py-1.5 rounded-lg border border-gray-100 tracking-wider">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-dojo-black text-white py-4 rounded-xl font-black text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-dojo-red transition-all shadow-lg active:scale-95">
                    <FaWalking /> VISIT US
                  </button>
                  <button className="bg-dojo-green/10 text-dojo-green px-5 py-4 rounded-xl hover:bg-dojo-green hover:text-white transition-all shadow-sm">
                    <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}