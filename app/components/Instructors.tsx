"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaAward, FaUserCheck, FaFacebook, FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Instructors() {
  const senseis = [
    {
      id: 1,
      name: "Sensei Rohan de Silva",
      rank: "5th Dan Black Belt",
      role: "Chief Instructor",
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1974&auto=format&fit=crop",
      bio: "Over 25 years of experience in Shotokan Karate. National team coach and WKF certified referee.",
      achievements: ["National Gold Medalist", "WKF Certified Coach"]
    },
    {
      id: 2,
      name: "Sensei Amal Perera",
      rank: "3rd Dan Black Belt",
      role: "Senior Instructor",
      image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?q=80&w=1974&auto=format&fit=crop",
      bio: "Specializes in Kumite tactics and youth development programs with 10+ years of coaching.",
      achievements: ["South Asian Bronze Medalist", "Fitness Specialist"]
    },
    {
        id: 3,
        name: "Sensei Nuwan Perera",
        rank: "2nd Dan Black Belt",
        role: "Junior Instructor",
        image: "https://images.unsplash.com/photo-1509564324749-47088719ecda?q=80&w=2070&auto=format&fit=crop",
        bio: "Expert in Kids karate and foundation movements. Dedicated to building the next generation.",
        achievements: ["District Champion", "Kata Specialist"]
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="instructors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-[10px] mb-3">Expert Leadership</h4>
            <h2 className="text-4xl md:text-6xl font-black text-dojo-black uppercase italic tracking-tighter leading-none">
              Meet Our <span className="text-dojo-green">Senseis</span>
            </h2>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="inst-prev bg-white border-2 border-gray-100 p-4 rounded-full text-dojo-black hover:bg-dojo-black hover:text-white transition-all shadow-lg active:scale-90">
              <FaChevronLeft />
            </button>
            <button className="inst-next bg-white border-2 border-gray-100 p-4 rounded-full text-dojo-black hover:bg-dojo-black hover:text-white transition-all shadow-lg active:scale-90">
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
            1024: { slidesPerView: 2 }, // Desktop එකේදී 2ක් පේනවා
          }}
          className="pb-16"
        >
          {senseis.map((sensei) => (
            <SwiperSlide key={sensei.id}>
              <div className="group relative bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col md:flex-row h-full min-h-[400px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                
                {/* Image Side */}
                <div className="md:w-5/12 h-[300px] md:h-auto relative overflow-hidden">
                  <img 
                    src={sensei.image} 
                    alt={sensei.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dojo-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white md:bg-transparent">
                  <div className="inline-block bg-dojo-red/10 text-dojo-red px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 w-fit">
                    {sensei.rank}
                  </div>
                  <h3 className="text-2xl font-black text-dojo-black uppercase italic mb-1 tracking-tight">
                    {sensei.name}
                  </h3>
                  <p className="text-dojo-green font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                    {sensei.role}
                  </p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {sensei.bio}
                  </p>

                  <div className="space-y-2">
                    {sensei.achievements.map((ach, i) => (
                      <div key={i} className="flex items-center gap-3 text-dojo-black font-black text-[9px] uppercase tracking-wider">
                        <FaAward className="text-dojo-red text-sm" />
                        <span>{ach}</span>
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