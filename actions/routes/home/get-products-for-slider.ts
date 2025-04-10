'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  query: {
    orderBy: 'lowest_price' | 'highest_price' | 'name';
  };
}

type TReturn = Promise<
  {
    id: number;
    name: string;
    image: string;
    price: number;
    priceOff: null | number;
    discount: null | number;
    outOfStock: boolean;
  }[]
>;

export async function APIgetProductsForSlider(params: IParams): TReturn {
  return fetcher<TReturn>({
    endpoint: '/products',
    method: 'get',
    contentType: 'json',
    query: params.query,
  });
}
