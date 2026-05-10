"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaAward, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { senseiDetails } from "@/constants/instructors"; // දත්ත මෙතැනින් එනවා

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Instructors() {
  
  // 1. Object එක Array එකක් බවට පත් කරගන්නවා loop කරන්න පහසු වෙන්න
  const senseisList = Object.entries(senseiDetails).map(([id, data]) => ({
    id,
    ...data,
  }));

  return (
    <section className="py-24 bg-white overflow-hidden" id="instructors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3">Expert Leadership</h4>
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic tracking-tighter leading-none">
              Meet Our <span className="text-green-600">Senseis</span>
            </h2>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="inst-prev bg-white border-2 border-gray-100 p-4 rounded-full text-black hover:bg-black hover:text-white transition-all shadow-lg active:scale-90 z-10">
              <FaChevronLeft />
            </button>
            <button className="inst-next bg-white border-2 border-gray-100 p-4 rounded-full text-black hover:bg-black hover:text-white transition-all shadow-lg active:scale-90 z-10">
              <FaChevronRight />
            </button>
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
          {/* 2. මෙතැනදී අලුත් array එක (senseisList) පාවිච්චි කරනවා */}
          {senseisList.map((sensei) => (
            <SwiperSlide key={sensei.id}>
              <div className="group relative bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col md:flex-row h-full min-h-[400px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                
                {/* Image Side */}
                <div className="md:w-5/12 h-[300px] md:h-auto relative overflow-hidden">
                  <Image 
                    src={sensei.image} 
                    alt={sensei.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white md:bg-transparent">
                  <div className="inline-block bg-red-600/10 text-red-600 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 w-fit">
                    {sensei.rank}
                  </div>
                  <h3 className="text-2xl font-black text-black uppercase italic mb-1 tracking-tight">
                    {sensei.name}
                  </h3>
                  <p className="text-green-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                    {sensei.role}
                  </p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                    {sensei.bio}
                  </p>

                  {/* 3. Qualifications පෙන්වීම (මෙහිදී sensei.qualifications පාවිච්චි කරනවා) */}
                  <div className="space-y-2">
                    {sensei.qualifications?.slice(0, 2).map((q, i) => (
                      <div key={i} className="flex items-center gap-3 text-black font-black text-[9px] uppercase tracking-wider">
                        <FaAward className="text-red-600 text-sm" />
                        <span>{q}</span>
                      </div>
                    ))}
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