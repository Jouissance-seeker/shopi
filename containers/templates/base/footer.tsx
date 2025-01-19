'use client';

import Image from 'next/image';
import { HiArrowUp } from 'react-icons/hi2';

export function Footer() {
  return (
    <div className="container">
      <Attribute />
      <Content />
      <CopyRight />
    </div>
  );
}

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
    <div className="py-5">
      <ul className="flex justify-between">
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
  return <div className="border-y py-5">hi</div>;
};

const CopyRight = () => {
  return (
    <div className="flex justify-between py-5">
      <p className="text-xsp">توسعه توسط حمید شاهسونی - بهمن ماه 1403</p>
      <button
        className="flex gap-1"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <p className="text-xs font-bold text-gray-500">بزن بریم بالا</p>
        <HiArrowUp size={12} />
      </button>
    </div>
  );
};
