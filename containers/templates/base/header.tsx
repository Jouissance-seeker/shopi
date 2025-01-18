'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  HiChevronLeft,
  HiMiniBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi2';
import { ThreeDots } from 'react-loader-spinner';
import { ToggleSection } from '@/components/toggle-section';
import { CATEGORIES } from '@/constants/categories';
import { NAV } from '@/constants/nav';
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
        <button onClick={() => humbergerMenu.toggle()}>
          <HiMiniBars3 size={25} />
        </button>
        {/* section */}
        <ToggleSection
          title="فهرست"
          isShow={humbergerMenu.isShow}
          onClose={() => humbergerMenu.hide()}
          className="absolute left-0 top-[110px] h-4 w-screen"
        >
          <nav className="text-sm">
            <ul className="w-full">
              {/* main nav */}
              {NAV.map((navItem) => (
                <li
                  key={navItem.text}
                  className="flex border-b p-2 font-medium transition-all hover:bg-gray-50"
                >
                  <Link href={navItem.path}>{navItem.text}</Link>
                </li>
              ))}
              {/* categories */}
              <li>
                <Link
                  href="/shop"
                  className="flex w-full border-b p-2 font-medium transition-all hover:bg-gray-50"
                >
                  {'دسته بندی'}
                </Link>
                <div className="mb-2.5 mr-2.5 overflow-hidden rounded-b-lg border-b border-r">
                  <ul className="max-h-[calc(100dvh_-_320px)] overflow-y-auto">
                    {CATEGORIES.map((category) => (
                      <li
                        key={category.text}
                        className="border-b last:border-b-0"
                      >
                        {/* category */}
                        <Link
                          href={category.path}
                          className="flex w-full border-b p-2 transition-all hover:bg-gray-50"
                        >
                          {category.text}
                        </Link>
                        {/* subcategories */}
                        <ul className="mr-2.5">
                          {category.children.map((child) => (
                            <li
                              key={child.text}
                              className="border-r border-t first:border-t-0"
                            >
                              {/* subcategory */}
                              <Link
                                href={child.link}
                                className="flex border-y p-2 transition-all first:border-t-0 hover:bg-gray-50"
                              >
                                {child.text}
                              </Link>
                              {/* sub-subcategories */}
                              <ul className="mr-2.5">
                                {child.children.map((subChild) => (
                                  <li
                                    key={subChild.text}
                                    className="border-b border-r last:border-b-0"
                                  >
                                    {/* Sub-subcategory Link */}
                                    <Link
                                      href={subChild.link}
                                      className="flex p-2 transition-all hover:bg-gray-50"
                                    >
                                      {subChild.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </ToggleSection>
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
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex items-center justify-between gap-2 border-t pt-3">
      {/* search */}
      <div>
        {/* field */}
        <div className="flex items-center">
          <Link href="/shop">
            <HiOutlineMagnifyingGlass size={20} className="text-gray-700" />
          </Link>
          <input
            type="text"
            placeholder="جستجوی محصول"
            className="px-2.5 text-sm font-bold text-gray-700 placeholder:text-xsp"
            onFocus={() => searchResult.show()}
            onBlur={() => searchResult.hide()}
            onChange={(e) => setSearchValue(e.target.value)}
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
              <div className="p-2 text-smp">
                {searchValue.length ? (
                  <div className="flex-center">
                    <ThreeDots color="#ED1944" width={60} />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-gray-700">
                      بیشترین جستجوها
                    </p>
                    <ul className="flex gap-2">
                      <li>
                        <Link
                          href="/shop?q=گوشی"
                          className="flex items-center gap-0.5 rounded-md border bg-gray-50 px-1.5 py-1 text-xs font-medium"
                        >
                          <p className="text-gray-700">گوشی</p>
                          <HiChevronLeft className="size-3.5 text-gray-700" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?q=لپ تاپ"
                          className="flex items-center gap-0.5 rounded-md border bg-gray-50 px-1.5 py-1 text-xs font-medium"
                        >
                          <p className="text-gray-700">لپ تاپ</p>
                          <HiChevronLeft className="size-3.5 text-gray-700" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?q=ساعت"
                          className="flex items-center gap-0.5 rounded-md border bg-gray-50 px-1.5 py-1 text-xs font-medium"
                        >
                          <p className="text-gray-700">ساعت</p>
                          <HiChevronLeft className="size-3.5 text-gray-700" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {/* cart */}
        <div className="flex items-center">
          {/* toggle btn */}
          <button
            onClick={() => cart.show()}
            className="relative mx-0.5 border-x px-2"
          >
            <HiOutlineShoppingCart size={20} className="text-gray-700" />
            <p className="flex-center absolute -top-1.5 right-1 h-3.5 rounded-[3px] bg-red px-[3px] text-[11px] font-bold">
              0
            </p>
          </button>
          {/* section */}
          <ToggleSection
            title="سبد خرید"
            isShow={cart.isShow}
            onClose={() => cart.hide()}
            className="absolute left-0 top-[110px] h-4 w-screen"
          >
            <div className="flex flex-col items-center gap-3 py-5">
              <Image
                src="/images/templates/base/empty-cart.svg"
                height={125}
                width={125}
                alt="سبد خرید خالی"
              />
              <p className="text-smp font-medium text-gray-700">
                سبد خرید خالی است!
              </p>
            </div>
          </ToggleSection>
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
