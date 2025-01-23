'use client';

import { useKillua } from 'killua';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  HiChevronLeft,
  HiMiniBars3,
  HiMiniXMark,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiTrash,
} from 'react-icons/hi2';
import { RiUser3Line } from 'react-icons/ri';
import { ThreeDots } from 'react-loader-spinner';
import { ToggleSection } from '@/components/toggle-section';
import { CATEGORIES } from '@/constants/templates/base/categories';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cartSlice } from '@/slices/cart';
import { cn } from '@/utils/cn';

export function Header() {
  return (
    <header className="mb-3">
      <Mobile />
      <Desktop />
    </header>
  );
}

const Mobile = () => {
  return (
    <div className="container border-b py-3 lg:hidden">
      <MobileTop />
      <MobileBottom />
    </div>
  );
};

const MobileTop = () => {
  return (
    <div className="flex justify-between">
      {/* humberger menu */}
      <MobileTopHumbergerMenu />
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

const MobileTopHumbergerMenu = () => {
  const humbergerMenuToggleUrlState = useToggleUrlState(
    'humberger-menu-section',
  );

  return (
    <div>
      {/* btn */}
      <button onClick={() => humbergerMenuToggleUrlState.show()}>
        <HiMiniBars3 size={25} />
      </button>
      {/* section */}
      <ToggleSection
        title="فهرست"
        isShow={humbergerMenuToggleUrlState.isShow}
        onClose={() => humbergerMenuToggleUrlState.hide()}
        className="container absolute left-0 top-[110px] z-50 h-4 w-screen"
      >
        <nav className="text-sm">
          <ul className="w-full">
            {/* categories */}
            <li>
              <Link
                href="/shop"
                className="flex w-full border-b p-2 font-medium transition-all hover:bg-gray-50"
              >
                {'دسته بندی'}
              </Link>
              <div className="mb-2.5 mr-2.5 overflow-hidden rounded-b-lg border-b border-r">
                <ul className="max-h-[calc(100dvh_-_320px)] overflow-y-auto scrollbar-hide">
                  {CATEGORIES.map((categoryItem) => (
                    <li
                      key={categoryItem.text}
                      className="border-b last:border-b-0"
                    >
                      <Link
                        href={categoryItem.path}
                        className="flex w-full border-b p-2 transition-all hover:bg-gray-50"
                      >
                        {categoryItem.text}
                      </Link>
                      <ul className="mr-2.5">
                        {categoryItem.children.map((childItem) => (
                          <li
                            key={childItem.text}
                            className="border-r border-t first:border-t-0"
                          >
                            <Link
                              href={childItem.link}
                              className="flex border-y p-2 transition-all first:border-t-0 hover:bg-gray-50"
                            >
                              {childItem.text}
                            </Link>
                            <ul className="mr-2.5">
                              {childItem.children.map((subChildItem) => (
                                <li
                                  key={subChildItem.text}
                                  className="border-b border-r last:border-b-0"
                                >
                                  <Link
                                    href={subChildItem.link}
                                    className="flex p-2 transition-all hover:bg-gray-50"
                                  >
                                    {subChildItem.text}
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
  );
};

const MobileBottom = () => {
  return (
    <div className="flex items-center justify-between gap-2 border-t pt-3">
      {/* search */}
      <MobileBottomSearch />
      <div className="flex items-center gap-1">
        {/* cart */}
        <MobileBottomCart />
        {/* user */}
        <Link href="/auth">
          <HiOutlineUser size={20} />
        </Link>
      </div>
    </div>
  );
};

const MobileBottomSearch = () => {
  const searchResultToggleUrlState = useToggleUrlState('search-result-section');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      {/* field */}
      <div className="flex items-center">
        <Link href="/shop">
          <HiOutlineMagnifyingGlass size={20} />
        </Link>
        <input
          type="text"
          placeholder="جستجوی محصول"
          className="px-2.5 text-sm font-bold placeholder:text-xsp"
          onFocus={() => searchResultToggleUrlState.show()}
          onBlur={() => searchResultToggleUrlState.hide()}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {/* section */}
      <div
        className={cn(
          'absolute z-50 left-0 h-4 w-screen transition-all top-[110px]',
          {
            show: searchResultToggleUrlState.isShow,
            hide: !searchResultToggleUrlState.isShow,
          },
        )}
      >
        <div className="container">
          <div className="rounded-md border border-gray-200 bg-white">
            <div className="p-2 text-smp">
              {searchValue.length ? (
                <div className="flex items-center justify-center">
                  <ThreeDots color="#ED1944" width={60} />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">بیشترین جستجوها</p>
                  <ul className="flex gap-2">
                    {['گوشی', 'لپ تاپ', 'ساعت'].map((item) => (
                      <li key={item}>
                        <Link
                          href={`/shop?q=${item}`}
                          className="flex items-center gap-0.5 rounded-md border bg-gray-50 px-1.5 py-1 text-xs font-medium"
                        >
                          <p>{item}</p>
                          <HiChevronLeft className="size-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileBottomCart = () => {
  const cartToggleUrlState = useToggleUrlState('cart-section');
  const localstorageCart = useKillua(cartSlice);

  return (
    <div className="flex items-center">
      {/* btn */}
      <button
        onClick={() => cartToggleUrlState.show()}
        className="relative mx-0.5 border-x px-2"
      >
        <HiOutlineShoppingCart size={20} />
        <p className="absolute -top-1.5 right-1 flex h-3.5 items-center justify-center rounded-[3px] bg-red px-[3px] text-[11px] font-bold text-white">
          {localstorageCart.selectors.totalItems()}
        </p>
      </button>
      {/* section */}
      <ToggleSection
        title="سبد خرید"
        isShow={cartToggleUrlState.isShow}
        onClose={() => cartToggleUrlState.hide()}
        className="container absolute left-0 top-[110px] z-50 h-4 w-screen"
      >
        {localstorageCart.selectors.isEmpty() ? (
          <div className="flex flex-col items-center py-3">
            <Image
              src="/images/templates/base/empty-cart.svg"
              height={125}
              width={125}
              alt="سبد خرید خالی"
            />
            <p className="text-smp font-medium">سبد خرید خالی است!</p>
          </div>
        ) : (
          <div>
            {/** cart items */}
            {localstorageCart.get().map((item) => (
              <div
                key={item.id}
                className="relative mt-3 flex items-center gap-5 px-3"
              >
                {/* remove btn */}
                <button
                  className="absolute top-0 rounded-md bg-red p-[3px]"
                  onClick={() => localstorageCart.reducers.remove(item)}
                >
                  <HiMiniXMark size={15} className="fill-white" />
                </button>
                {/* image */}
                <Image
                  alt={item.title}
                  src={item.image}
                  width={60}
                  height={60}
                />
                <div className="mb-4 w-full">
                  {/* title */}
                  <p className="mb-2 text-smp font-bold">{item.title}</p>
                  <div className="relative flex flex-col items-end">
                    {/* increment btn / decrement btn / remove btn */}
                    <div className="flex w-24 justify-between rounded-lg border bg-white px-3 py-1.5 font-bold text-gray-700">
                      <button
                        onClick={() =>
                          localstorageCart.reducers.increment(item)
                        }
                      >
                        +
                      </button>
                      <p>{localstorageCart.selectors.quantity(item)}</p>
                      {localstorageCart.selectors.quantity(item) === 1 ? (
                        <button
                          onClick={() => localstorageCart.reducers.remove(item)}
                        >
                          <HiTrash size={16} className="fill-gray-700" />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            localstorageCart.reducers.decrement(item)
                          }
                          className="text-gray-700"
                        >
                          -
                        </button>
                      )}
                    </div>
                    {/* price */}
                    <div className="flex">
                      <del
                        className={cn(
                          'absolute bottom-[20px] left-[118px] text-sm text-gray-400',
                          {
                            hidden: Boolean(item.discount === 0),
                          },
                        )}
                      >
                        {item.priceWithoutDiscount.toLocaleString('fa-IR')}
                      </del>
                      <p className="absolute bottom-3 left-[100px] -rotate-90 text-[10px] font-bold text-black/40">
                        تومان
                      </p>
                      <p className="absolute bottom-0 left-[120px] text-lg font-bold text-black">
                        {item.priceWithDiscount.toLocaleString('fa-IR')}
                      </p>
                    </div>
                    {/* discount */}
                    <div
                      className={cn(
                        'absolute bottom-2 left-[210px] flex h-[22px] gap-1 rounded-md bg-red px-2',
                        {
                          hidden: Boolean(item.discount === 0),
                        },
                      )}
                    >
                      <p className="pt-0.5 text-xsp font-bold text-white">
                        {item.discount}
                      </p>
                      <p className="pt-1 text-xs font-bold text-white">%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/** total price / place order */}
            <div className="flex items-center justify-between border-t py-3">
              <div className="relative flex w-fit flex-col px-4">
                <p className="text-xsp font-bold">مبلغ قابل پرداخت</p>
                <p className="text-xl font-bold text-black">
                  {localstorageCart.selectors
                    .totalPrice()
                    .toLocaleString('fa-IR')}
                </p>
                <p className="absolute -left-1 bottom-3 -rotate-90 text-[10px] font-bold text-black/40">
                  تومان
                </p>
              </div>
              <Link
                href="/checkout"
                className="ml-4 rounded-lg bg-red px-4 py-2 text-white"
                onClick={() => cartToggleUrlState.hide()}
              >
                ثبت سفارش
              </Link>
            </div>
          </div>
        )}
      </ToggleSection>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="container hidden flex-col py-3 lg:flex">
      <DesktopTop />
      <DesktopBottom />
    </div>
  );
};

const DesktopTop = () => {
  return (
    <div className="relative mb-8 mt-6 flex">
      {/* user */}
      <Link href="/auth" className="flex items-center gap-1">
        <RiUser3Line size={20} className="text-black" />
        <p className="font-bold">وارد شوید</p>
      </Link>
      {/* logo */}
      <div>
        <Link href="/">
          <Image
            src="/images/templates/base/header-logo-desktop.svg"
            alt="لوگو"
            width={130}
            height={80}
            className="absolute left-0 z-10"
          />
        </Link>
        <Image
          src="/images/templates/base/bg-logo-wave.png"
          alt="لوگو"
          width={350}
          height={130}
          className="absolute left-0"
        />
      </div>
      {/* call */}
      <Link
        href="tel:021-12345678"
        className="absolute left-52 flex items-center gap-1"
      >
        <p className="text-lg font-bold text-red">12345678</p>
        <p className="text-xs font-bold text-gray-400">021</p>
      </Link>
    </div>
  );
};

const DesktopBottom = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* category */}
        <DesktopBottomCategory />
        {/* cart */}
        <DesktopBottomCart />
      </div>
      <div className="ml-48 flex gap-4">
        {/* search */}
        <DesktopBottomSearch />
        {/* blog */}
        <Link href="/blog" className="z-10 flex items-center gap-2">
          <Image
            src="/images/templates/base/header-blog-icon.svg"
            alt="آیکون بلاگ"
            width={30}
            height={30}
          />
          <div>
            <p className="font-bold">بلاگ شاپی</p>
            <p className="text-xs text-gray-400">مطالعه کنید!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const DesktopBottomCategory = () => {
  const categoriesToggleUrlState = useToggleUrlState('categories-section');
  const [activedCategoryData, setActivedCategoryData] = useState(CATEGORIES[0]);

  return (
    <div
      onMouseEnter={() => categoriesToggleUrlState.show()}
      onMouseLeave={() => categoriesToggleUrlState.hide()}
      className="relative"
    >
      {/* btn */}
      <button className="flex items-center gap-2 rounded-xl bg-red p-3.5">
        <HiMiniBars3 className="text-white" size={24} />
        <p className="font-bold text-white">دسته بندی ها</p>
      </button>
      {/* section */}
      <div
        className={cn(
          'absolute right-0 container z-50 p-0 top-[70px] w-screen transition-all',
          {
            show: categoriesToggleUrlState.isShow,
            hide: !categoriesToggleUrlState.isShow,
          },
        )}
      >
        <div className="flex h-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <ul className="bg-gray py-2">
            {CATEGORIES.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.path}
                  className={cn(
                    'w-32 bg-gray border-y border-transparent p-2.5 text-center flex transition-all hover:bg-white',
                    {
                      'bg-white': activedCategoryData.text === item.text,
                    },
                  )}
                  onMouseEnter={() => setActivedCategoryData(item)}
                >
                  <p className="text-sm font-bold">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="p-2">
            {activedCategoryData.children.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.link}
                  className="flex w-full px-2.5 text-smp font-bold transition-all before:ml-2 before:mt-0.5 before:h-3.5 before:w-[3px] before:rounded-sm  before:bg-red hover:text-red"
                >
                  {item.text}
                </Link>
                <ul className="py-1">
                  {item.children.map((subItem) => (
                    <li key={subItem.text}>
                      <Link
                        href={subItem.link}
                        className="flex w-full px-5 py-0.5 text-xsp font-bold text-gray-500 transition-all hover:text-red"
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DesktopBottomCart = () => {
  const cartToggleUrlState = useToggleUrlState('cart-section');
  const localstorageCart = useKillua(cartSlice);

  return (
    <div
      className="relative"
      onMouseEnter={() => cartToggleUrlState.show()}
      onMouseLeave={() => cartToggleUrlState.hide()}
    >
      {/* btn */}
      <button className="flex items-center justify-between gap-3 rounded-xl border p-3.5">
        <div className="flex items-center gap-2">
          <HiOutlineShoppingCart className="text-gray-700" size={24} />
          <p className="font-bold text-gray-700">سبد خرید</p>
        </div>
        <p className="flex size-6 items-center justify-center rounded-full bg-red text-lg font-bold text-white">
          {localstorageCart.selectors.totalItems()}
        </p>
      </button>
      {/* section */}
      <div
        className={cn(
          'absolute z-50 right-0 top-[70px] w-[400px] transition-all',
          {
            show: cartToggleUrlState.isShow,
            hide: !cartToggleUrlState.isShow,
          },
        )}
      >
        <div className="rounded-2xl border border-gray-200 bg-white">
          {localstorageCart.selectors.isEmpty() ? (
            <div className="flex flex-col items-center py-3">
              <Image
                src="/images/templates/base/empty-cart.svg"
                height={125}
                width={125}
                alt="سبد خرید خالی"
              />
              <p className="text-smp font-medium">سبد خرید خالی است!</p>
            </div>
          ) : (
            <div>
              {/** cart items */}
              {localstorageCart.get().map((item) => (
                <div
                  key={item.id}
                  className="relative mt-3 flex items-center gap-5 px-3"
                >
                  {/* remove btn */}
                  <button
                    className="absolute top-0 rounded-md bg-red p-[3px]"
                    onClick={() => localstorageCart.reducers.remove(item)}
                  >
                    <HiMiniXMark size={15} className="fill-white" />
                  </button>
                  {/* image */}
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={60}
                    height={60}
                  />
                  <div className="mb-4 w-full">
                    {/* title */}
                    <p className="mb-2 text-smp font-bold">{item.title}</p>
                    <div className="relative flex flex-col items-end">
                      {/* increment btn / decrement btn / remove btn */}
                      <div className="flex w-24 justify-between rounded-lg border bg-white px-3 py-1.5 font-bold text-gray-700">
                        <button
                          onClick={() =>
                            localstorageCart.reducers.increment(item)
                          }
                        >
                          +
                        </button>
                        <p>{localstorageCart.selectors.quantity(item)}</p>
                        {localstorageCart.selectors.quantity(item) === 1 ? (
                          <button
                            onClick={() =>
                              localstorageCart.reducers.remove(item)
                            }
                          >
                            <HiTrash size={16} className="fill-gray-700" />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              localstorageCart.reducers.decrement(item)
                            }
                            className="text-gray-700"
                          >
                            -
                          </button>
                        )}
                      </div>
                      {/* price */}
                      <div className="flex">
                        <del
                          className={cn(
                            'absolute bottom-[20px] left-[118px] text-sm text-gray-400',
                            {
                              hidden: Boolean(item.discount === 0),
                            },
                          )}
                        >
                          {item.priceWithoutDiscount.toLocaleString('fa-IR')}
                        </del>
                        <p className="absolute bottom-3 left-[100px] -rotate-90 text-[10px] font-bold text-black/40">
                          تومان
                        </p>
                        <p className="absolute bottom-0 left-[120px] text-lg font-bold text-black">
                          {item.priceWithDiscount.toLocaleString('fa-IR')}
                        </p>
                      </div>
                      {/* discount */}
                      <div
                        className={cn(
                          'absolute bottom-2 left-[210px] flex h-[22px] gap-1 rounded-md bg-red px-2',
                          {
                            hidden: Boolean(item.discount === 0),
                          },
                        )}
                      >
                        <p className="pt-0.5 text-xsp font-bold text-white">
                          {item.discount}
                        </p>
                        <p className="pt-1 text-xs font-bold text-white">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/** total price / place order */}
              <div className="flex items-center justify-between border-t py-3">
                <div className="relative flex w-fit flex-col px-4">
                  <p className="text-xsp font-bold">مبلغ قابل پرداخت</p>
                  <p className="text-xl font-bold text-black">
                    {localstorageCart.selectors
                      .totalPrice()
                      .toLocaleString('fa-IR')}
                  </p>
                  <p className="absolute -left-1 bottom-3 -rotate-90 text-[10px] font-bold text-black/40">
                    تومان
                  </p>
                </div>
                <Link
                  href="/checkout"
                  className="ml-4 rounded-lg bg-red px-4 py-2 text-white"
                  onClick={() => cartToggleUrlState.hide()}
                >
                  ثبت سفارش
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DesktopBottomSearch = () => {
  const searchResultToggleUrlState = useToggleUrlState('search-result-section');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="relative w-72">
      {/* field */}
      <div className="flex w-full items-center justify-between rounded-2xl border border-gray-100 bg-gray p-4 transition-all focus-within:border-gray-200 focus-within:bg-white">
        <input
          className="bg-transparent text-xsp font-bold"
          type="text"
          placeholder="جستجوی محصول ..."
          onFocus={() => searchResultToggleUrlState.show()}
          onBlur={() => searchResultToggleUrlState.hide()}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link href="/shop" className="z-10 flex">
          <HiOutlineMagnifyingGlass size={20} className="text-gray-400" />
        </Link>
      </div>
      {/* section */}
      <div
        className={cn(
          'absolute z-50 left-0 top-[70px] h-4 w-full transition-all',
          {
            show: searchResultToggleUrlState.isShow,
            hide: !searchResultToggleUrlState.isShow,
          },
        )}
      >
        <div className="rounded-xl border border-gray-200 bg-white">
          <div className="p-2 text-smp">
            {searchValue.length ? (
              <div className="flex items-center justify-center">
                <ThreeDots color="#ED1944" width={60} />
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">بیشترین جستجوها</p>
                <ul className="flex gap-2">
                  {['گوشی', 'لپ تاپ', 'ساعت'].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/shop?q=${item}`}
                        className="flex items-center gap-0.5 rounded-md border bg-gray-50 px-1.5 py-1 text-xs font-medium"
                      >
                        <p>{item}</p>
                        <HiChevronLeft className="size-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
