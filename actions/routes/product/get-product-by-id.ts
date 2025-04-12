'use server';

import { fetcher } from '@/utils/fetcher';

interface IParams {
  path: {
    id: string;
  };
}

type TReturn = Promise<{
  images: string[];
  nameFa: string;
  nameEn: string;
  description: string;
  attributes: Record<string, string>;
  price: number;
  priceOff: number | null;
  discount: number | null;
  quantity: number;
  categoryId: number;
  categoryName: string;
  categoryImage: string;
}>;

export async function APIgetProductById(params: IParams): TReturn {
  return fetcher<TReturn>({
    endpoint: '/products',
    method: 'get',
    contentType: 'json',
    path: params.path.id,
  });
}
