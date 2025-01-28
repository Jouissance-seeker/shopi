import { useKillua } from 'killua';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { HiStar, HiTrash } from 'react-icons/hi2';
import { cartSlice } from '@/slices/cart';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';
import { CardBorderBottom } from './card-border-bottom';

interface IProps {
  data: TProduct;
}

export function ProductCard(props: IProps) {
  return (
    <div key={props.data.id} className="group overflow-hidden">
      <div className="flex !h-[400px] w-full flex-col items-center justify-center p-5">
        <Rate data={props.data} />
        <Colors data={props.data} />
        <ImageWithText data={props.data} />
        <Price data={props.data} />
        <Actions data={props.data} />
        <CardBorderBottom />
      </div>
    </div>
  );
}

const Rate = (props: IProps) => {
  return (
    <div
      className={cn('absolute left-3 top-4 flex flex-col items-center gap-1', {
        hidden: Boolean(props.data.rate === 0),
      })}
    >
      <HiStar className="size-4 fill-green" />
      <span className="text-smp font-bold text-gray-500">
        {props.data.rate}
      </span>
    </div>
  );
};

const Colors = (props: IProps) => {
  return (
    <div
      className={cn('absolute right-3 top-4 flex flex-col items-center gap-1', {
        hidden: Boolean(props.data.rate === 0),
      })}
    >
      <div className="grid grid-cols-2 gap-1">
        {props.data.colors?.map((item) => (
          <span
            key={item}
            className="size-2 rounded-full bg-gray-200"
            style={{ backgroundColor: item }}
          />
        ))}
      </div>
    </div>
  );
};

const ImageWithText = (props: IProps) => {
  return (
    <Link href={props.data.path} className="flex flex-col items-center gap-3">
      <div className="relative size-[175px]">
        <Image src={props.data.images[0]} alt={props.data.title.fa} fill />
      </div>
      <p className="line-clamp-2 font-bold">{props.data.title.fa}</p>
    </Link>
  );
};

const Price = (props: IProps) => {
  return (
    <div>
      <del
        className={cn('absolute bottom-9 left-[74px] text-smp text-gray-400', {
          hidden: Boolean(props.data.discount === 0),
        })}
      >
        {props.data.priceWithDiscount.toLocaleString('fa-IR')}
      </del>
      <div>
        <p className="absolute bottom-2 left-8 text-2xl font-bold text-black">
          {props.data.priceWithoutDiscount.toLocaleString('fa-IR')}
        </p>
        <p className="absolute bottom-5 left-3 -rotate-90 text-[10px] font-bold text-gray-500">
          تومان
        </p>
        <div
          className={cn(
            'absolute bottom-10 left-8 flex h-[22px] gap-1 rounded-full rounded-bl-none bg-red px-2',
            {
              hidden: Boolean(props.data.discount === 0),
            },
          )}
        >
          <p className="pt-0.5 font-bold text-white">{props.data.discount}</p>
          <p className="pt-1 text-sm font-bold text-white">%</p>
        </div>
      </div>
    </div>
  );
};

const Actions = (props: IProps) => {
  const localstorageCart = useKillua(cartSlice);

  return localstorageCart.selectors.isInCart(props.data) ? (
    <div className="absolute -bottom-0.5 flex w-full justify-between rounded-lg p-4 font-bold text-gray-900">
      <div className="flex w-full justify-between rounded-lg border bg-white p-3 text-lg text-gray-700">
        <button
          onClick={() => localstorageCart.reducers.increment(props.data)}
          className="text-lg"
        >
          +
        </button>
        <span>{localstorageCart.selectors.quantity(props.data)}</span>
        {localstorageCart.selectors.quantity(props.data) === 1 ? (
          <button onClick={() => localstorageCart.reducers.remove(props.data)}>
            <HiTrash size={20} className="fill-gray-700" />
          </button>
        ) : (
          <button
            onClick={() => localstorageCart.reducers.decrement(props.data)}
            className="text-lg"
          >
            -
          </button>
        )}
      </div>
    </div>
  ) : (
    <button
      className="absolute bottom-4 right-4 rounded-lg bg-red p-2"
      onClick={() => localstorageCart.reducers.add(props.data)}
    >
      <FiShoppingBag size={20} className="stroke-white" />
    </button>
  );
};
