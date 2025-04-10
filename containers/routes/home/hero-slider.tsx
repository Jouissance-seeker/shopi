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
import { APIgetHeroSlider } from '@/actions/routes/home/get-hero-slider';

interface IHeroSliderProps {
  data: Awaited<ReturnType<typeof APIgetHeroSlider>>;
}

export function HeroSlider(props: IHeroSliderProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="hero_slider"
      dir="ltr"
      className="relative col-span-full xl:col-span-3 xl:mx-0 xl:max-w-none xl:p-0"
    >
      <Slider swiperRef={swiperRef} data={props.data} />
      <PaginationAndNavigation swiperRef={swiperRef} />
    </section>
  );
}

interface IPaginationAndNavigationProps {
  swiperRef: any;
}

const PaginationAndNavigation = (props: IPaginationAndNavigationProps) => {
  return (
    <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center">
      <div className="flex w-fit gap-2">
        <button
          className="group/navigation flex size-6 items-center justify-center rounded-md bg-white"
          onClick={() => props.swiperRef.current.swiper.slidePrev()}
        >
          <HiChevronLeft className="fill-gray-600 group-hover/navigation:fill-gray-900" />
        </button>
        <div className="pagination" />
        <button
          className="group/navigation flex size-6 items-center justify-center rounded-md bg-white"
          onClick={() => props.swiperRef.current.swiper.slideNext()}
        >
          <HiChevronRight className="fill-gray-600 group-hover/navigation:fill-gray-900" />
        </button>
      </div>
    </div>
  );
};

interface ISliderProps {
  swiperRef: any;
  data: Awaited<ReturnType<typeof APIgetHeroSlider>>;
}

const Slider = (props: ISliderProps) => {
  return (
    <Swiper
      ref={props.swiperRef}
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
      className="overflow-hidden rounded-2xl"
    >
      {props.data.map((item) => {
        return (
          <SwiperSlide key={item.image}>
            <Link href={item.url}>
              <div className="aspect-h-1 aspect-w-2 bg-gray-100 sm:aspect-h-1 sm:aspect-w-[2.5] ">
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
  );
};
