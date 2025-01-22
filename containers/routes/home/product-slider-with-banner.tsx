'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi2';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productSliderData } from '@/resources/routes/global/product-slider';
import { cn } from '@/utils/cn';

interface IProductSliderProps {
  image: string;
  category: string;
  path: string;
  position: 'left' | 'right';
}

export default function ProductSliderWithBanner(props: IProductSliderProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section
      dir={props.position === 'right' ? 'ltr' : 'rtl'}
      className="group/product_section container relative z-10 col-span-full grid h-[402px] w-full grid-cols-5 gap-5 overflow-hidden rounded-lg"
    >
      {/* banner */}
      <Link
        href={props.path}
        className="col-span-full flex justify-between rounded-xl bg-red p-3 md:col-span-1 md:flex-col md:items-center md:gap-4"
      >
        <Image
          alt={props.category}
          src={props.image}
          width={150}
          height={150}
          className="md:w-[220px] md:pt-10"
        />
        <div className="flex w-fit flex-col items-center justify-center md:gap-2 md:pb-8">
          <p className="text-smp font-bold text-white lg:text-base">
            مجموعه محصولات
          </p>
          <p className="text-2xl font-bold text-white lg:text-2xl">
            {props.category}
          </p>
        </div>
      </Link>
      <div className="col-span-full md:col-span-4 lg:relative">
        {/* slider */}
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={13}
            ref={swiperRef}
            modules={[Autoplay]}
            id="product-slider"
            className="rounded-xl border border-gray-200 bg-white"
          >
            {productSliderData.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="group !w-[268px] border-l last:border-none"
                >
                  <div className="flex !h-[400px] flex-col items-center justify-center p-5">
                    {/* rate */}
                    <div
                      className={cn(
                        'absolute left-3 top-4 flex flex-col items-center gap-1',
                        {
                          hidden: Boolean(item.rate === 0),
                        },
                      )}
                    >
                      <HiStar className="size-4 fill-green" />
                      <span className="text-smp font-bold text-gray-500">
                        {item.rate}
                      </span>
                    </div>
                    {/* colors */}
                    <div
                      className={cn(
                        'absolute right-3 top-4 flex flex-col items-center gap-1',
                        {
                          hidden: Boolean(item.rate === 0),
                        },
                      )}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {item.colors?.map((item) => (
                          <span
                            key={item}
                            className="size-2 rounded-full bg-gray-200"
                            style={{ backgroundColor: item }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* image / title */}
                    <Link
                      href={item.path}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="relative size-[175px]">
                        <Image src={item.image} alt={item.title} fill />
                      </div>
                      <p className="line-clamp-2 font-bold">{item.title}</p>
                    </Link>
                    {/* price */}
                    <div>
                      <del
                        className={cn(
                          'absolute bottom-8 left-[74px] text-smp text-gray-400',
                          {
                            hidden: Boolean(item.discount === 0),
                          },
                        )}
                      >
                        {item.priceWithDiscount.toLocaleString('fa-IR')}
                      </del>
                      <div>
                        <p className="absolute bottom-1 left-8 text-2xl font-bold text-black">
                          {item.priceWithoutDiscount.toLocaleString('fa-IR')}
                        </p>
                        <p className="absolute bottom-3.5 left-3 -rotate-90 text-[10px] font-bold text-gray-500">
                          تومان
                        </p>
                        <div
                          className={cn(
                            'absolute bottom-9 left-8 flex h-[22px] gap-1 rounded-full rounded-bl-none bg-red px-2',
                            {
                              hidden: Boolean(item.discount === 0),
                            },
                          )}
                        >
                          <p className="pt-0.5 font-bold text-white">
                            {item.discount}
                          </p>
                          <p className="pt-1 text-sm font-bold text-white">%</p>
                        </div>
                      </div>
                    </div>
                    {/* add to cart btn */}
                    <button className="absolute bottom-4 right-4 rounded-lg bg-red p-2">
                      <FiShoppingBag size={20} className="stroke-white" />
                    </button>
                    {/* bottom border */}
                    <span className="invisible absolute bottom-0 h-px w-full grow bg-red-200 bg-gradient-to-r from-white via-red to-white opacity-0 group-hover:visible group-hover:opacity-100" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* navigation */}
        <div className="group/product-slider_navigation hidden w-fit gap-2 transition-all group-hover/product_section:flex">
          <button
            className="group/product-slider_navigation_btn absolute -left-4 bottom-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <HiChevronLeft className="size-4 fill-gray-600 group-hover/product-slider_navigation_btn:fill-gray-900" />
          </button>
          <button
            className="group/product-slider_navigation_btn absolute -right-4 bottom-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <HiChevronRight className="size-4 fill-gray-600 group-hover/product-slider_navigation_btn:fill-gray-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
