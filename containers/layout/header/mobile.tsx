'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  HiMiniBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi2';
import { cn } from '@/utils/cn';

export function Mobile() {
  return (
    <div className="container border-b py-3 md:hidden">
      <Top />
      <hr className="my-3" />
      <Bottom />
    </div>
  );
}

const Top = () => {
  return (
    <div className="flex justify-between">
      {/* menu */}
      <HiMiniBars3 size={25} className="text-gray-700" />
      {/* logo */}
      <Link href="/">
        <Image
          src="/images/layout/header-logo-mobile.svg"
          alt="لوگو"
          width={80}
          height={20}
        />
      </Link>
    </div>
  );
};

const Bottom = () => {
  const [isShowSearchSection, setIsShowSearchSection] = useState(false);

  return (
    <div className="flex items-center justify-between gap-2">
      <div>
        {/* search */}
        <div className="flex items-center">
          <Link href="/explore">
            <HiOutlineMagnifyingGlass size={20} className="text-gray-700" />
          </Link>
          <input
            type="text"
            placeholder="جستجوی محصول"
            className="px-2.5 text-xs font-bold text-gray-700"
            onFocus={() => setIsShowSearchSection(true)}
            onBlur={() => setIsShowSearchSection(false)}
          />
        </div>
        <div className="absolute left-0 top-3 h-4 w-screen">
          <div className="container">
            <div
              className={cn(
                'mt-[95px] rounded-md border bg-white p-3 transition-all border-gray-200',
                {
                  show: isShowSearchSection,
                  hide: !isShowSearchSection,
                },
              )}
            >
              search section
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {/* cart */}
        <div className="relative mx-0.5 border-x px-2">
          <HiOutlineShoppingCart size={20} className="text-gray-700" />
          <p className="flex-center absolute -top-1.5 right-1 h-3.5 rounded-[3px] bg-red px-[3px] text-[11px] font-bold">
            5
          </p>
        </div>
        {/* user */}
        <Link href="/auth">
          <HiOutlineUser size={20} className="text-gray-700" />
        </Link>
      </div>
    </div>
  );
};
