'use server';

import { fetcher } from '@/utils/fetcher';

type TReturn = Promise<
  [
    {
      image: 'string';
      url: 'string';
    },
  ]
>;

export async function APIgetHeroSlider(): TReturn {
  return fetcher<TReturn>({
    endpoint: '/hero-sliders',
    method: 'get',
    contentType: 'json',
  });
}
