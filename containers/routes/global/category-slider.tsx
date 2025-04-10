'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { APIgetCategorySlider } from '@/actions/routes/global/get-category-slider';
import { CardBorderBottom } from '@/components/card-border-bottom';
import { SliderNavigation } from '@/components/slider-navigation';
import { cn } from '@/utils/cn';

interface ICategorySliderProps {
  data: Awaited<ReturnType<typeof APIgetCategorySlider>>;
}

export function CategorySlider(props: ICategorySliderProps) {
  const swiperRef = useRef<any>(null);
  const pathname = usePathname();
  const isPathnameHomepage = pathname === '/';

  return (
    <section
      className={cn(
        'group/section relative z-10 col-span-full flex flex-col overflow-hidden',
        {
          container: isPathnameHomepage,
        },
      )}
    >
      <Slider swiperRef={swiperRef} data={props.data} />
      {isPathnameHomepage ? <SliderNavigation swiperRef={swiperRef} /> : null}
    </section>
  );
}

interface ISliderProps {
  swiperRef: any;
  data: Awaited<ReturnType<typeof APIgetCategorySlider>>;
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
      {props.data.map((item) => (
        <SwiperSlide key={item.nameEn} className="!w-[250px]">
          <Card data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface ICardProps {
  data: Awaited<ReturnType<typeof APIgetCategorySlider>>[number];
}

const Card = (props: ICardProps) => {
  return (
    <SwiperSlide
      key={props.data.nameEn}
      className="group overflow-hidden rounded-xl border bg-white transition-all hover:border-gray-300"
    >
      <Link
        href={`/explore?category=${props.data.nameFa}`.replace(/\s+/g, '-')}
        className="flex items-center justify-between gap-5 p-3"
      >
        <div className="flex items-center gap-3">
          <Image
            src={props.data.image}
            alt={props.data.nameFa}
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-0.5">
            <p className="text-smp font-bold">{props.data.nameFa}</p>
            <p className="text-sm text-gray-400">{props.data.nameEn}</p>
          </div>
        </div>
        <CardBorderBottom />
      </Link>
    </SwiperSlide>
  );
};
