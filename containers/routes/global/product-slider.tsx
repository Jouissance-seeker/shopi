'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import { useRef } from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@/components/global/product-card';
import { SliderNavigation } from '@/components/global/slider-navigation';
import { productSliderData } from '@/resources/routes/global/product-slider';

interface IProductSliderProps {
  title: string;
  path: string;
}

export function ProductSlider(props: IProductSliderProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section className="group/section container relative z-10 col-span-full flex flex-col gap-5 overflow-hidden">
      {/* head */}
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-bold text-gray-600">{props.title}</h2>
        <span className="h-px grow bg-gradient-to-r from-white via-[#e4e8ef] to-white" />
        <Link
          href={props.path}
          className="flex gap-1 text-sm font-bold transition-all duration-300 hover:text-red"
        >
          <span>مشاهده همه</span>
          <HiChevronLeft className="size-4" />
        </Link>
      </div>
      {/* body */}
      <div>
        {/* slider */}
        <div className="bg-white">
          <Swiper
            slidesPerView="auto"
            spaceBetween={13}
            ref={swiperRef}
            modules={[Autoplay]}
            id="product-slider"
          >
            {productSliderData.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="!w-[268px] rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300"
                >
                  <ProductCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <SliderNavigation swiperRef={swiperRef} />
      </div>
    </section>
  );
}
