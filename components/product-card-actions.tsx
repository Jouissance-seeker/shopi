import { useKillua } from 'killua';
import { FiShoppingBag } from 'react-icons/fi';
import { HiTrash } from 'react-icons/hi2';
import { cartSlice } from '@/slices/cart';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';

interface IProductCardActionsProps {
  item: TProduct;
  color: 'white' | 'red';
}

export default function ProductCardActions(props: IProductCardActionsProps) {
  const localstorageCart = useKillua(cartSlice);

  return localstorageCart.selectors.isInCart(props.item) ? (
    <div className="absolute -bottom-0.5 flex w-full justify-between rounded-lg p-4 font-bold text-gray-900">
      <div className="flex w-full justify-between rounded-lg p-3 text-lg text-gray-700">
        <button onClick={() => localstorageCart.reducers.increment(props.item)}>
          +
        </button>
        <span>{localstorageCart.selectors.quantity(props.item)}</span>
        {localstorageCart.selectors.quantity(props.item) === 1 ? (
          <button onClick={() => localstorageCart.reducers.remove(props.item)}>
            <HiTrash size={20} className="fill-gray-700" />
          </button>
        ) : (
          <button
            onClick={() => localstorageCart.reducers.decrement(props.item)}
            className="text-lg"
          >
            -
          </button>
        )}
      </div>
    </div>
  ) : (
    <button
      className={cn('absolute bottom-4 right-4 rounded-lg p-2', {
        'bg-white': props.color === 'white',
        'bg-red': props.color === 'red',
      })}
      onClick={() => localstorageCart.reducers.add(props.item)}
    >
      <FiShoppingBag
        size={20}
        className={cn({
          'stroke-red': props.color === 'white',
          'stroke-white': props.color === 'red',
        })}
      />
    </button>
  );
}
