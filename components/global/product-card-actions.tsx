import { useKillua } from 'killua';
import { FiShoppingBag } from 'react-icons/fi';
import { HiTrash } from 'react-icons/hi2';
import { cartSlice } from '@/slices/cart';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';

interface IProductCardActionsProps {
  data: TProduct;
  type: 'offer-slider' | 'product-slider' | 'single-product';
}

export function ProductCardActions({ data, type }: IProductCardActionsProps) {
  const localstorageCart = useKillua(cartSlice);
  const isInCart = localstorageCart.selectors.isInCart(data);
  const quantity = localstorageCart.selectors.quantity(data);

  const handleAdd = () => localstorageCart.reducers.add(data);
  const handleIncrement = () => localstorageCart.reducers.increment(data);
  const handleDecrement = () => localstorageCart.reducers.decrement(data);
  const handleRemove = () => localstorageCart.reducers.remove(data);

  if (isInCart) {
    return (
      <div
        className={cn(
          'flex w-full justify-between rounded-lg font-bold text-gray-900',
          {
            'absolute -bottom-0.5 p-4': type !== 'single-product',
          },
        )}
      >
        <div
          className={cn(
            'flex w-full justify-between rounded-lg border bg-white fill-gray-700 text-lg text-gray-700',
            {
              'p-4': type === 'single-product',
              'p-3': type !== 'single-product',
            },
          )}
        >
          <button onClick={handleIncrement}>+</button>
          <span>{quantity}</span>
          {quantity === 1 ? (
            <button onClick={handleRemove}>
              <HiTrash size={20} />
            </button>
          ) : (
            <button onClick={handleDecrement} className="text-lg">
              -
            </button>
          )}
        </div>
      </div>
    );
  }

  if (type !== 'single-product') {
    return (
      <button
        className={cn('rounded-lg p-2 absolute bottom-4 right-4', {
          'bg-white': type === 'offer-slider',
          'bg-red': type === 'product-slider',
        })}
        onClick={handleAdd}
      >
        <FiShoppingBag
          size={20}
          className={cn({
            'stroke-red': type === 'offer-slider',
            'stroke-white': type === 'product-slider',
          })}
        />
      </button>
    );
  } else {
    return (
      <button
        className="flex w-full items-center justify-between rounded-lg bg-green p-4 text-lg font-bold"
        onClick={handleAdd}
      >
        <p className="text-white">افزودن به سبد خرید</p>
        <p className="text-white">+</p>
      </button>
    );
  }
}
