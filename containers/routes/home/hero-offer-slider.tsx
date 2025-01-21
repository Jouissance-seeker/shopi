'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroOfferSliderData } from '@/resources/routes/home/hero-offer-slider';
import { cn } from '@/utils/cn';

export default function HeroOfferSlider() {
  const swiperRef = useRef<any>(null);

  // countdown timer
  const [timeLeftFromDay, setTimeLeftFromDay] = useState([0, 0, 0]);
  const interval = setInterval(() => {
    const currentTime: any = new Date();
    const endOfDay: any = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const timeDiff = endOfDay - currentTime;
    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDiff / 1000) % 60);
    setTimeLeftFromDay([hoursLeft, minutesLeft, secondsLeft]);
    if (timeDiff < 0) {
      clearInterval(interval);
    }
  }, 1000);

  return (
    <section className="relative z-10 col-span-full overflow-hidden rounded-2xl xl:col-span-1">
      <div className="h-full bg-red">
        <Swiper
          slidesPerView={2}
          className="h-full"
          ref={swiperRef}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          id="hero-offer-slider"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {heroOfferSliderData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex h-full flex-col items-center justify-center p-5 pb-10">
                  {/* navigation */}
                  <div>
                    <div className="absolute left-4 top-4 flex w-fit gap-2">
                      <button
                        className="group/hero-slider_navigation flex size-6 items-center justify-center rounded-md bg-white"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                      >
                        <HiChevronRight className="fill-gray-600 group-hover/hero-slider_navigation:fill-gray-900" />
                      </button>
                      <button
                        className="group/hero-slider_navigation flex size-6 items-center justify-center rounded-md bg-white"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                      >
                        <HiChevronLeft className="fill-gray-600 group-hover/hero-slider_navigation:fill-gray-900" />
                      </button>
                    </div>
                  </div>
                  {/* timer */}
                  <div className="absolute right-4 top-4">
                    <div
                      className={cn(
                        'flex items-center gap-1 transition-all duration-300 invisible opacity-0',
                        {
                          'visible opacity-100': timeLeftFromDay,
                        },
                      )}
                    >
                      <div className="flex size-7 items-center justify-center rounded-md bg-gray-600/30 p-3 text-sm font-bold text-white">
                        {String(timeLeftFromDay[2]).padStart(2, '0')}
                      </div>
                      <p className="font-black text-white">:</p>
                      <div className="flex size-7 items-center justify-center rounded-md bg-gray-600/30 p-3 text-sm font-bold text-white">
                        {String(timeLeftFromDay[1]).padStart(2, '0')}
                      </div>
                      <p className="font-black text-white">:</p>
                      <div className="flex size-7 items-center justify-center rounded-md bg-gray-600/30 p-3 text-sm font-bold text-white">
                        {String(timeLeftFromDay[0]).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  {/* image / title */}
                  <Link
                    href={item.path}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="relative size-[175px] bg-[url('/images/routes/home/hero-offer-slider-wave-bg.svg')] bg-center bg-no-repeat">
                      <Image src={item.image} alt={item.title} fill />
                    </div>
                    <p className="line-clamp-2 font-bold text-white">
                      {item.title}
                    </p>
                  </Link>
                  {/* price */}
                  <div>
                    <del className="absolute bottom-8 left-20 text-smp text-gray-50">
                      {item.priceWithDiscount.toLocaleString('fa-IR')}
                    </del>
                    <div>
                      <p className="absolute bottom-1 left-8 text-2xl font-bold text-white">
                        {item.priceWithoutDiscount.toLocaleString('fa-IR')}
                      </p>
                      <p className="absolute bottom-5 left-2 -rotate-90 text-xs font-bold text-white">
                        تومان
                      </p>
                      <div className="absolute bottom-9 left-8 flex h-[22px] gap-1 rounded-full rounded-bl-none bg-white px-2">
                        <p className="pt-0.5 font-bold text-red">10</p>
                        <p className="pt-1 text-sm font-bold text-red">%</p>
                      </div>
                    </div>
                  </div>
                  {/* add to cart btn */}
                  <button className="absolute bottom-4 right-4 rounded-lg bg-white p-2">
                    <FiShoppingBag size={20} className="stroke-red" />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
