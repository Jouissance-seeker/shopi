'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HERO_SLIDER } from '@/constants/routes/home/hero-slider';

export default function HeroSlider() {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="hero_slider"
      dir="ltr"
      className="group/hero-slider relative col-span-full lg:col-span-3"
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          el: '.pagination',
        }}
        modules={[Autoplay, Pagination]}
        className="overflow-hidden rounded-3xl"
      >
        {HERO_SLIDER.map((item) => {
          return (
            <SwiperSlide key={item.image}>
              <Link href={item.path}>
                <div className="aspect-h-1 aspect-w-2 bg-gray-100">
                  <Image
                    fill
                    src={item.image}
                    className="block size-full object-cover object-center"
                    alt="تصویر اسلایدر"
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* custom pagination and custom navigation for hero slider */}
      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center">
        <div className="flex w-fit gap-2">
          <button
            className="group/hero-slider_navigation flex size-6 items-center justify-center rounded-md bg-white opacity-0 transition-all duration-300 group-hover/hero-slider:opacity-100"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <HiChevronLeft className="fill-gray-600 group-hover/hero-slider_navigation:fill-gray-800" />
          </button>
          <div className="pagination" />
          <button
            className="group/hero-slider_navigation flex size-6 items-center justify-center rounded-md bg-white opacity-0 transition-all duration-300 group-hover/hero-slider:opacity-100"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <HiChevronRight className="fill-gray-600 group-hover/hero-slider_navigation:fill-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
