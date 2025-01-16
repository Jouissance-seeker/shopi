import Image from 'next/image';
import Link from 'next/link';
import {
  HiMiniBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi2';

export function Mobile() {
  return (
    <div className="container py-2.5 shadow-sm md:hidden">
      <Top />
      <hr className="my-2.5" />
      <Bottom />
    </div>
  );
}

const Top = () => {
  return (
    <div className="flex justify-between">
      {/* logo */}
      <Link href="/">
        <Image
          src="/images/layout/header-logo-mobile.svg"
          alt="لوگو"
          width={80}
          height={20}
        />
      </Link>
      {/* menu */}
      <HiMiniBars3 size={25} className="text-gray-700" />
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1">
        {/* user */}
        <Link href="/auth">
          <HiOutlineUser size={20} className="text-gray-700" />
        </Link>
        {/* cart */}
        <div className="relative mx-0.5 border-x px-2">
          <HiOutlineShoppingCart size={20} className="text-gray-700" />
          <p className="flex-center absolute -top-1.5 right-1 h-3.5 rounded-[3px] bg-red px-[3px] text-[11px] font-bold">
            5
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="جستجوی محصول"
          className="px-2.5 text-right text-xs font-bold text-gray-700"
        />
        <Link href="/explore">
          <HiOutlineMagnifyingGlass size={20} className="text-gray-700" />
        </Link>
      </div>
    </div>
  );
};
