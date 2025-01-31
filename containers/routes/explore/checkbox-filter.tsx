'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi2';
import { useUpdateQuery } from '@/hooks/update-query';
import { cn } from '@/utils/cn';

interface ICheckboxFilterProps {
  title: string;
  items: {
    text: string;
    id: number;
    query: string;
  }[];
}

export function CheckboxFilter(props: ICheckboxFilterProps) {
  const [isShow, setIsShow] = useState(true);
  return (
    <section className="rounded-xl border">
      {/* head */}
      <button
        onClick={() => setIsShow((prev) => !prev)}
        className="flex w-full items-center justify-between p-3 text-smp font-medium"
      >
        <p className="text-gray-600">{props.title}</p>
        <HiChevronDown
          size={18}
          className={cn('transition-all', {
            'rotate-180': isShow,
          })}
        />
      </button>
      {/* body */}
      <div
        className={cn('h-0 opacity-0 transition-all overflow-hidden', {
          'h-auto opacity-100': isShow,
        })}
      >
        <div className="flex flex-col gap-1.5 border-t p-3">
          {props.items.map((item) => (
            <Checkbox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ICheckboxProps {
  query: string;
  text: string;
  id: number;
}

const Checkbox = ({ id, query, text }: ICheckboxProps) => {
  const searchParams = useSearchParams();
  const [isChecked, setIsChecked] = useState(false);
  const updateQuery = useUpdateQuery();

  useEffect(() => {
    const paramValues = searchParams.get(query)?.split(',').map(Number) || [];
    setIsChecked(paramValues.includes(id));
  }, [searchParams, query, id]);

  const handleCheck = () => {
    updateQuery((prev) => {
      const currentValues = prev[query]
        ? prev[query].split(',').map(Number)
        : [];
      let updatedValues;
      if (isChecked) {
        updatedValues = currentValues.filter((value: number) => value !== id);
      } else {
        updatedValues = [...currentValues, id];
      }
      return {
        ...prev,
        [query]: updatedValues.length ? updatedValues.join(',') : undefined,
      };
    });
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCheck}
        className={cn(
          'size-[18px] rounded-md border transition-all border-gray-300 bg-gray-100 flex items-center justify-center',
          { 'bg-green': isChecked },
        )}
      >
        {isChecked ? <HiCheck className="fill-white p-0.5" /> : null}
      </button>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};
