import React from "react";
import Image from "next/image";
import { relatedLinks } from "@/data/relatedLinks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.png", "/images/icon.png"];

export default function RelatedLinks() {
  return (
    <section className="max-w-[1000px] mx-auto py-24">
      <h1 className="text-5xl text-center font-semibold uppercase pb-16">İlgili Bağlantılar</h1>
      <div className="relative w-full px-4">
        <Swiper
          slidesPerView={5}
          spaceBetween={-50}
          loop={true}
          loopAdditionalSlides={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
    </section>
  );
}
