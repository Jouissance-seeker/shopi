'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { bannersData } from '@/resources/routes/home/banners';

export default function Banners() {
  return (
    <section className="container grid grid-cols-1 gap-4 lg:grid-cols-3">
      {bannersData.map((item) => (
        <Link href={item.path} key={item.id}>
          <div className="aspect-h-1 aspect-w-3 overflow-hidden rounded-xl bg-gray-100 sm:aspect-h-1 sm:aspect-w-[2.5]">
            <Image
              fill
              src={item.image}
              className="block size-full object-cover object-center"
              alt="تصویر بنر"
            />
          </div>
        </Link>
      ))}
    </section>
  );
}
