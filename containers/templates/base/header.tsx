'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  HiMiniBars3,
  HiMiniXMark,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi2';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';

export function Header() {
  return (
    <header>
      <Mobile />
      <Desktop />
    </header>
  );
}

const Mobile = () => {
  return (
    <div className="container border-b py-3 md:hidden">
      <MobileTop />
      <MobileBottom />
    </div>
  );
};

const MobileTop = () => {
  const humbergerMenu = useToggleUrlState('humberger-menu-section');

  return (
    <div className="flex justify-between">
      {/* humberger menu */}
      <div>
        {/* toggle btn */}
        <button
          onClick={() =>
            humbergerMenu.toggle({
              deleteKeys: ['search-result-section', 'cart-section'],
            })
          }
        >
          <HiMiniBars3 size={25} className="text-gray-700" />
        </button>
        {/* section */}
        <div
          className={cn(
            'absolute right-0 w-full transition-all top-[110px] h-[calc(100vh-127px)]',
            {
              show: humbergerMenu.isShow,
              hide: !humbergerMenu.isShow,
            },
          )}
        >
          <div className="container">
            <div className="rounded-md border border-gray-200 bg-white">
              {/* head */}
              <div className="flex items-center justify-between border-b p-2">
                <p className="text-smp font-bold text-gray-700">فهرست</p>
                <button
                  onClick={() => humbergerMenu.hide()}
                  className="flex-center size-6 overflow-hidden rounded-md bg-red"
                >
                  <HiMiniXMark size={20} className="fill-white" />
                </button>
              </div>
              {/* body */}
              <div className="p-2 text-smp">یک متن تستی</div>
            </div>
          </div>
        </div>
      </div>
      {/* logo */}
      <Link href="/">
        <Image
          src="/images/templates/base/header-logo-mobile.svg"
          alt="لوگو"
          width={80}
          height={20}
        />
      </Link>
    </div>
  );
};

const MobileBottom = () => {
  const searchResult = useToggleUrlState('search-result-section');
  const cart = useToggleUrlState('cart-section');

  return (
    <div className="flex items-center justify-between gap-2 border-t pt-3">
      {/* search */}
      <div>
        {/* field */}
        <div className="flex items-center">
          <Link href="/explore">
            <HiOutlineMagnifyingGlass size={20} className="text-gray-700" />
          </Link>
          <input
            type="text"
            placeholder="جستجوی محصول"
            className="px-2.5 text-sm font-bold text-gray-700 placeholder:text-xsp"
            onFocus={() => {
              searchResult.show({
                deleteKeys: ['humberger-menu-section', 'cart-section'],
              });
            }}
            onBlur={() => searchResult.hide()}
          />
        </div>
        {/* section */}
        <div
          className={cn(
            'absolute left-0 h-4 w-screen transition-all top-[110px]',
            {
              show: searchResult.isShow,
              hide: !searchResult.isShow,
            },
          )}
        >
          <div className="container">
            <div className="rounded-md border border-gray-200 bg-white">
              <div className="p-2 text-smp">یک متن تستی</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {/* cart */}
        <div className="flex items-center">
          {/* toggle btn */}
          <button
            onClick={() =>
              cart.toggle({
                deleteKeys: ['search-result-section', 'humberger-menu-section'],
              })
            }
            className="relative mx-0.5 border-x px-2"
          >
            <HiOutlineShoppingCart size={20} className="text-gray-700" />
            <p className="flex-center absolute -top-1.5 right-1 h-3.5 rounded-[3px] bg-red px-[3px] text-[11px] font-bold">
              0
            </p>
          </button>
          {/* section */}
          <div
            className={cn(
              'absolute left-0 h-4 w-screen transition-all top-[110px]',
              {
                show: cart.isShow,
                hide: !cart.isShow,
              },
            )}
          >
            <div className="container">
              <div className="rounded-md border border-gray-200 bg-white">
                {/* head */}
                <div className="flex items-center justify-between border-b p-2">
                  <p className="text-smp font-bold text-gray-700">سبد خرید</p>
                  <button
                    onClick={() => cart.hide()}
                    className="flex-center size-6 overflow-hidden rounded-md bg-red"
                  >
                    <HiMiniXMark size={20} className="fill-white" />
                  </button>
                </div>
                {/* body */}
                <div className="p-2 text-smp">یک متن تستی</div>
              </div>
            </div>
          </div>
        </div>
        {/* user */}
        <Link href="/auth">
          <HiOutlineUser size={20} className="text-gray-700" />
        </Link>
      </div>
    </div>
  );
};

const Desktop = () => {
  return <div className="container hidden border-b py-3 md:flex">تستی</div>;
};
