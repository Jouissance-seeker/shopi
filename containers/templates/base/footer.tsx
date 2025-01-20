'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUp } from 'react-icons/hi2';

export function Footer() {
  return (
    <div className="container">
      <Info />
      <Attribute />
      <Content />
      <CopyRight />
    </div>
  );
}

const Info = () => {
  return (
    <div className="relative border-t py-5">
      <div className="flex flex-col gap-4 sm:ml-20 md:flex-row">
        {/* logo 1 */}
        <Link href="/">
          <Image
            src="/images/templates/base/footer-logo-1.svg"
            alt="لوگو"
            width={100}
            height={50}
          />
        </Link>
        {/* info */}
        <p className="max-w-sm text-sm font-medium text-gray-400 lg:max-w-md">
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
          باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود
          برساند و ضمانت بازگشت کالا هم داشته باشد.
        </p>
      </div>
      {/* logo 2 */}
      <div>
        <Link href="/">
          <Image
            src="/images/templates/base/footer-logo-2.svg"
            alt="لوگو"
            width={130}
            height={80}
            className="absolute -top-2 left-0 z-10"
          />
        </Link>
        <Image
          src="/images/templates/base/bg-logo-wave.png"
          alt="لوگو"
          width={300}
          height={50}
          className="absolute -top-10 left-3"
        />
      </div>
    </div>
  );
};

const Attribute = () => {
  const data = [
    {
      image: '/images/templates/base/footer-back-guarantee.png',
      title: 'هفت‌ روز‌ ضمانت‌ بازگشت',
      subtitle: 'با خیال راحت خرید کنید',
    },
    {
      image: '/images/templates/base/footer-fast-shipping.png',
      title: 'ارسال سریع تیپاکس',
      subtitle: 'لوجستیک ارسال مرسوله',
    },
    {
      image: '/images/templates/base/footer-notifications-and-rewards.png',
      title: 'اطلاع رسانی و جوایز',
      subtitle: 'تخفیفات ویژه ماه',
    },
    {
      image: '/images/templates/base/footer-powerful-user-panel.png',
      title: 'پنل کاربری قوی',
      subtitle: 'مدیریت سفارش',
    },
    {
      image: '/images/templates/base/footer-smart-wallet.png',
      title: 'کیف پول هوشمند',
      subtitle: 'خبررسانی به کاربران',
    },
  ];

  return (
    <div className="border-t py-5">
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {data.map((item) => (
          <li key={item.title} className="flex items-center gap-3">
            <Image src={item.image} width={40} height={40} alt={item.title} />
            <div>
              <p className="text-sm font-bold text-gray-500">{item.title}</p>
              <p className="text-xs text-gray-400">{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content = () => {
  return (
    <div className="grid grid-cols-2 gap-5 border-y py-5">
      <div className="col-span-full flex max-w-md justify-between md:col-span-1">
        <ul>
          <li>
            <p className="mb-1 text-smp font-bold">دسترسی به سایت</p>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  فروشگاه
                </Link>
              </li>{' '}
              <li>
                <Link
                  href="/offers"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  شگفت انگیز
                </Link>
              </li>{' '}
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  مقالات
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <p className="mb-1 text-smp font-bold">دسترسی به سایت</p>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  فروشگاه
                </Link>
              </li>{' '}
              <li>
                <Link
                  href="/offers"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  شگفت انگیز
                </Link>
              </li>{' '}
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  مقالات
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <p className="mb-1 text-smp font-bold">دسترسی به سایت</p>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  فروشگاه
                </Link>
              </li>{' '}
              <li>
                <Link
                  href="/offers"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  شگفت انگیز
                </Link>
              </li>{' '}
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-gray-400 transition-all hover:text-red"
                >
                  مقالات
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="relative col-span-full md:col-span-1">
        <div className="justify-end lg:flex">
          <ul className="flex max-w-md flex-col gap-1">
            <li className="flex w-full justify-between">
              <p className="w-full text-sm font-bold text-gray-500 sm:ml-20">
                شماره تماس
              </p>
              <div>
                <Link
                  href="tel:021-12345678"
                  className="flex items-center gap-1"
                >
                  <p className="text-lg font-bold text-red">12345678</p>
                  <p className="text-smp font-bold text-gray-400">021</p>
                </Link>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <p className="w-full text-xsp font-bold text-gray-500">ایمیل</p>
              <div>
                <Link
                  href="mailto:info@shopi.com"
                  className="flex items-center gap-1 text-sm font-bold text-gray-400"
                >
                  info@shopi.com
                </Link>
              </div>
            </li>
            <li className="flex w-full justify-between">
              <p className="w-full text-sm font-bold text-gray-500 sm:ml-20">
                آدرس دفتر مرکزی
              </p>
              <div>
                <Link
                  href="https://maps.app.goo.gl/tx37xYbEzzUBiKRF"
                  className="flex w-48 items-center gap-1 text-sm font-bold text-gray-400"
                >
                  تهران , شهرک‌غرب , تقاطع‌ بلوار‌پاکنژاد
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CopyRight = () => {
  return (
    <div className="flex justify-between py-5">
      <p className="text-xsp font-medium text-gray-500">
        توسعه توسط حمید شاهسونی - بهمن ماه 1403
      </p>
      <button
        className="flex gap-1"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <p className="text-xsp font-bold text-gray-500">بزن بریم بالا</p>
        <HiArrowUp size={14} />
      </button>
    </div>
  );
};
