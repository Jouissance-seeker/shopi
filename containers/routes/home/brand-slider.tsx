'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { brandSliderData } from '@/resources/routes/home/brand-slider';

export default function BrandSlider() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="group/category_section container relative z-10 col-span-full flex flex-col overflow-hidden">
      {/* slider */}
      <div className="bg-white">
        <Swiper
          slidesPerView="auto"
          spaceBetween={13}
          ref={swiperRef}
          modules={[Autoplay]}
          id="category-slider"
          className="container"
        >
          {brandSliderData.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="group !w-[268px] overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300"
              >
                <Link
                  href={item.path}
                  className="flex flex-col items-center justify-between gap-5 p-5"
                >
                  {/* image */}
                  <Image
                    src={item.image}
                    alt={item.text.fa}
                    width={60}
                    height={60}
                  />
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="text-xsp font-bold text-gray-400">
                        محصولات
                      </p>
                      <p className="text-smp font-bold">{item.text.fa}</p>
                    </div>
                    <div className="flex gap-1">
                      <p className="text-smp font-bold">{item.text.en}</p>
                      <HiChevronLeft className="size-4 fill-gray-500" />
                    </div>
                  </div>
                  {/* bottom border */}
                  <span className="invisible absolute bottom-0 h-px w-full grow bg-red-200 bg-gradient-to-r from-white via-red to-white opacity-0 group-hover:visible group-hover:opacity-100" />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* navigation */}
      <div className="group/category-slider_navigation top-4 hidden w-fit gap-2 transition-all group-hover/category_section:flex">
        <button
          className="group/category-slider_navigation_btn absolute bottom-0 left-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <HiChevronLeft className="size-4 fill-gray-600 group-hover/category-slider_navigation_btn:fill-gray-900" />
        </button>
        <button
          className="group/category-slider_navigation_btn absolute bottom-0 right-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <HiChevronRight className="size-4 fill-gray-600 group-hover/category-slider_navigation_btn:fill-gray-900" />
        </button>
      </div>
    </section>
  );
}
