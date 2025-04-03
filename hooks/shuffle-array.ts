import { useEffect, useState } from 'react';
import { shuffleArray } from '@/utils/shuffle-array';

export function useShuffledArray<T>(data: T[]): T[] {
  const [shuffledArray, setShuffledArray] = useState<T[]>(data);

  useEffect(() => {
    setShuffledArray(shuffleArray([...data]));
  }, []);

  return shuffledArray;
}
