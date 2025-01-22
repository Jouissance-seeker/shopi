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
  title: string;
  path: string;
}

export default function ProductSlider(props: IProductSliderProps) {
  const swiperRef = useRef<any>(null);

  return (
    <section className="group/product_section container relative z-10 col-span-full flex flex-col gap-5 overflow-hidden">
      {/* head */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-gray-600">{props.title}</h2>
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
        <div className="bg-white xl:mx-0 xl:max-w-none xl:p-0">
          <Swiper
            slidesPerView="auto"
            spaceBetween={13}
            ref={swiperRef}
            loop
            modules={[Autoplay]}
            id="product-slider"
          >
            {productSliderData.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="group !w-[268px] overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300"
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
            className="group/product-slider_navigation_btn absolute bottom-0 right-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white xl:rounded-md"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <HiChevronRight className="size-4 fill-gray-600 group-hover/product-slider_navigation_btn:fill-gray-900" />
          </button>
          <button
            className="group/product-slider_navigation_btn absolute bottom-0 left-1 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <HiChevronLeft className="size-4 fill-gray-600 group-hover/product-slider_navigation_btn:fill-gray-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
