"use client";
import { useState, useEffect } from "react"; // 1. useState සහ useEffect එකතු කළා
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaAward, FaChevronLeft, FaChevronRight, FaArrowRight, FaUsers } from "react-icons/fa";
import { senseiDetails } from "@/constants/instructors"; 

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

export default function Instructors() {
  const [mounted, setMounted] = useState(false);

  // Next.js Hydration Error එක වළක්වා ගැනීමට Client එකට mount වන තෙක් සිටීම
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Object එක Array එකක් බවට පත් කරගන්නවා loop කරන්න
  const senseisList = Object.entries(senseiDetails).map(([id, data]) => ({
    id,
    ...data,
  }));

  // තවම mount වෙලා නැත්නම් හිස්ව තබයි (Hydration Error Fix)
  if (!mounted) return null;

  return (
    <section className="py-24 bg-white overflow-hidden" id="instructors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Expert Leadership</h4>
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic tracking-tighter leading-none">
              Meet Our <span className="text-green-600">Senseis</span>
            </h2>
          </div>
          
          {/* Link & Navigation Buttons Wrapper */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            
            {/* View All Instructors Button */}
            <Link 
              href="/sensei" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-red-600 text-white text-xs font-black uppercase tracking-widest px-5 py-4 rounded-full transition-all shadow-md active:scale-95 group/all"
            >
              <FaUsers className="text-sm" />
              <span>View All Instructors</span>
              <FaArrowRight className="text-[10px] group-hover/all:translate-x-1 transition-transform" />
            </Link>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button className="inst-prev bg-white border-2 border-gray-100 p-4 rounded-full text-black hover:bg-black hover:text-white transition-all shadow-md active:scale-90 z-10">
                <FaChevronLeft />
              </button>
              <button className="inst-next bg-white border-2 border-gray-100 p-4 rounded-full text-black hover:bg-black hover:text-white transition-all shadow-md active:scale-90 z-10">
                <FaChevronRight />
              </button>
            </div>

          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.inst-prev',
            nextEl: '.inst-next',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {senseisList.map((sensei) => (
            <SwiperSlide key={sensei.id}>
              <div className="group relative bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col md:flex-row h-full min-h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                
                {/* Image Side */}
                <Link href={`/sensei/${sensei.id}`} className="md:w-5/12 h-[300px] md:h-auto relative overflow-hidden block">
                  <Image 
                    src={sensei.image} 
                    alt={sensei.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </Link>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-white md:bg-transparent">
                  <div>
                    <div className="inline-block bg-red-600/10 text-red-600 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 w-fit">
                      {sensei.rank}
                    </div>
                    
                    <Link href={`/sensei/${sensei.id}`}>
                      <h3 className="text-2xl font-black text-black uppercase italic mb-1 tracking-tight hover:text-green-600 transition-colors">
                        {sensei.name}
                      </h3>
                    </Link>
                    
                    <p className="text-green-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                      {sensei.role}
                    </p>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                      {sensei.bio}
                    </p>

                    {/* Qualifications */}
                    <div className="space-y-2 mb-6">
                      {sensei.qualifications?.slice(0, 2).map((q, i) => (
                        <div key={i} className="flex items-center gap-3 text-black font-black text-[9px] uppercase tracking-wider">
                          <FaAward className="text-red-600 text-sm" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button/Link to Full Profile */}
                  <div className="pt-2 border-t border-gray-100 md:border-transparent">
                    <Link 
                      href={`/sensei/${sensei.id}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black hover:text-red-600 transition-all group/btn"
                    >
                      View Full Profile 
                      <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}