import React from "react";
import Image from "next/image";
import { relatedLinks } from "@/data/relatedLinks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Separator from "./Separator";

export default function RelatedLinks() {
  return (
    <section className="w-full max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="px-4 sm:px-8">
        <div className="flex flex-col gap-7">
          <Separator />
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold uppercase pb-16">İlgili Bağlantılar</h1>
        </div>
        <div className="relative w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={-50}
            loop={true}
            loopAdditionalSlides={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation
            breakpoints={{
              375: {
                slidesPerView: 2
              },
              640: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 5
              }
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {relatedLinks.map((link, index) => (
              <SwiperSlide key={link.href}>
                <div className="w-full h-36 relative flex items-start justify-center cursor-grab active:cursor-grabbing">
                  <Link href={link.href} target="_blank" className="active:cursor-grabbing">
                    <div className="relative size-24">
                      <Image src={link.logo} alt={link.alt} fill />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            {/* {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-64 relative">
              <Image src={src} alt={`Image ${index + 1}`} fill className="object-cover rounded-lg" />
            </div>
          </SwiperSlide>
        ))} */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
