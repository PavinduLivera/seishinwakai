"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { reviews } from '@/constants/reviews';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-dojo-red font-black uppercase tracking-[0.4em] text-[10px] mb-3">Success Stories</h4>
          <h2 className="text-4xl md:text-6xl font-black text-dojo-black uppercase italic tracking-tighter">
            What They <span className="text-dojo-green">Say</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full relative group">
                
                {/* Quote Icon Decoration */}
                <div className="absolute top-6 right-8 text-gray-100 text-6xl -z-0 group-hover:text-dojo-red/10 transition-colors">
                  <FaQuoteLeft />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 text-sm" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-gray-600 font-medium leading-relaxed italic mb-8">
                    "{review.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-dojo-green/20"
                    />
                    <div>
                      <h4 className="font-black text-dojo-black uppercase text-xs tracking-wider">{review.name}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.role}</p>
                    </div>
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