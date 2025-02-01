'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUpdateQuery } from '@/hooks/update-query';
import { cn } from '@/utils/cn';

export function Sort() {
  const updateQuery = useUpdateQuery();
  const searchParams = useSearchParams();
  const [activedSort, setActivedSort] = useState(() => {
    const sort = searchParams.get('sort') || 'newest';
    return sort as 'newest' | 'highest' | 'lowest';
  });

  useEffect(() => {
    updateQuery((prev) => ({
      ...prev,
      sort: activedSort,
    }));
  }, [activedSort]);

  return (
    <div>
      <ul className="flex gap-2 text-sm font-medium text-gray-500">
        {[
          { title: 'جدید ترین', value: 'newest' },
          { title: 'گران ترین', value: 'highest' },
          { title: 'ارزان ترین', value: 'lowest' },
        ].map((item) => (
          <li key={item.value} className="hover:text-green">
            <button
              className={cn({
                'text-green font-bold': activedSort === item.value,
              })}
              onClick={() =>
                setActivedSort(item.value as 'newest' | 'highest' | 'lowest')
              }
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
