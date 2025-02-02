import React from "react";
import TestimonialCard from "./testimonialCard";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [1, 2, 3, 4, 5]; // Placeholder for dynamic data

const Testimonial = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Users are in Love with Skills Challenges Program
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients say about working with us. Their success speaks
            for our dedication and expertise.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <div className="relative ml-0 lg:ml-32">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((_, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-8" />
        </Swiper>
      </div>

      {/* Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 2rem;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d9d9d9;
          opacity: 1;
          margin: 0 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #2b71f0;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;