'use server';

import { fetcher } from '@/utils/fetcher';

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

export async function APIgetHeroSlider(): TReturn {
  return fetcher<TReturn>({
    endpoint: '/products',
    method: 'get',
    contentType: 'json',
  });
}
