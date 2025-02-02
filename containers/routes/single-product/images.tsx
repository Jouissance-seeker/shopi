'use client';

import 'swiper/css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productsData } from '@/resources/routes/global/products';
import { cn } from '@/utils/cn';

export function Images() {
  const swiperImageMainRef = useRef<any>(null);
  const swiperImagesRef = useRef<any>(null);
  const data = productsData[0];
  const [activedIndex, setActivedIndex] = useState(0);

  return (
    <section className="flex flex-col xl:max-w-[382px]">
      {/* main image */}
      <div className="my-3 flex w-full justify-center">
        <Swiper
          ref={swiperImageMainRef}
          onSwiper={(swiper) => (swiperImageMainRef.current = swiper)}
          onSlideChange={(swiper) => {
            const newIndex = swiper.activeIndex;
            swiperImagesRef.current?.slideTo(newIndex);
            setActivedIndex(newIndex);
          }}
          slidesPerView={1}
          spaceBetween={8}
          className="container"
        >
          {data.images.map((item) => (
            <SwiperSlide key={item}>
              <button className="flex w-full justify-center rounded-lg border p-1">
                <Image
                  src={item}
                  alt={data.title.fa}
                  width={260}
                  height={260}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <Swiper
          slidesPerView="auto"
          onSwiper={(swiper) => (swiperImagesRef.current = swiper)}
          spaceBetween={8}
          ref={swiperImagesRef}
          id="product-images-slider"
          className="container w-fit"
        >
          {data.images.map((item, index) => (
            <SwiperSlide key={item} className="!w-[70px] rounded-lg">
              <button
                onClick={() => {
                  setActivedIndex(index);
                  swiperImagesRef.current?.slideTo(index);
                  swiperImageMainRef.current?.slideTo(index);
                }}
                className={cn('rounded-lg border overflow-hidden', {
                  'border-gray-300': activedIndex === index,
                })}
              >
                <Image src={item} alt={data.title.fa} width={70} height={70} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
