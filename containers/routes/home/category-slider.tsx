'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardBorderBottom } from '@/components/card-border-bottom';
import { SliderNavigation } from '@/components/slider-navigation';
import { categorySliderData } from '@/resources/routes/home/category-slider';

export default function CategorySlider() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="group/section container relative z-10 col-span-full flex flex-col overflow-hidden">
      <Slider swiperRef={swiperRef} />
      <SliderNavigation swiperRef={swiperRef} />
    </section>
  );
}

interface ISliderProps {
  swiperRef: any;
}

const Slider = (props: ISliderProps) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={13}
      ref={props.swiperRef}
      modules={[Autoplay]}
      id="category-slider"
      className="container"
    >
      {categorySliderData.map((item) => (
        <SwiperSlide key={item.id} className="!w-[268px]">
          <Card data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface ICardProps {
  data: (typeof categorySliderData)[0];
}

const Card = (props: ICardProps) => {
  return (
    <SwiperSlide
      key={props.data.id}
      className="group !w-[268px] overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300"
    >
      <Link
        href={props.data.path}
        className="flex items-center justify-center gap-5 p-5"
      >
        <div className="flex flex-col gap-0.5">
          <p className="text-smp font-bold">{props.data.text.fa}</p>
          <p className="text-sm text-gray-400">{props.data.text.en}</p>
        </div>
        <Image
          src={props.data.image}
          alt={props.data.text.fa}
          width={60}
          height={60}
        />
        <CardBorderBottom />
      </Link>
    </SwiperSlide>
  );
};
