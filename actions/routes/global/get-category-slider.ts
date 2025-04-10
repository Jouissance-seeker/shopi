'use server';

import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<
  [
    {
      image: 'string';
      nameEn: 'string';
      nameFa: 'string';
    },
  ]
>;

export async function APIgetCategorySlider(): TReturn {
  return fetcher<TReturn>({
    endpoint: '/categories',
    method: 'get',
    contentType: 'json',
  });
}
