import Image from 'next/image';
import Link from 'next/link';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';
import { CardBorderBottom } from './card-border-bottom';
import { ProductCardActions } from './product-card-actions';

interface IProps {
  data: TProduct;
}

export function ProductCard(props: IProps) {
  return (
    <div key={props.data.id} className="group overflow-hidden">
      <div className="relative flex !h-[370px] w-full flex-col items-center justify-center overflow-hidden p-5">
        <Colors data={props.data} />
        <ImageWithText data={props.data} />
        <Price data={props.data} />
        <ProductCardActions data={props.data} type="product-slider" />
        <CardBorderBottom />
      </div>
    </div>
  );
}

const Colors = (props: IProps) => {
  return (
    <div className="absolute right-3 top-4 flex flex-col items-center gap-1">
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
    <Link
      href={props.data.path}
      className="mb-5 flex flex-col items-center gap-3"
    >
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
        {props.data.priceWithoutDiscount.toLocaleString('fa-IR')}
      </del>
      <div>
        <p className="absolute bottom-2 left-8 text-2xl font-bold text-black">
          {props.data.priceWithDiscount.toLocaleString('fa-IR')}
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
