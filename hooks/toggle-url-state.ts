import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useToggleUrlState(key: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [state, setState] = useState(searchParams.has(key));

  useEffect(() => {
    setState(searchParams.has(key));
  }, [searchParams, key]);

  const updateUrl = async (newState: boolean, deleteKeys?: string[]) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (deleteKeys) {
      deleteKeys.forEach((key) => {
        updatedSearchParams.delete(key);
      });
    }
    if (newState) {
      updatedSearchParams.set(key, '');
    } else {
      updatedSearchParams.delete(key);
    }
    router.push(`${pathname}?${updatedSearchParams.toString()}`, {
      scroll: false,
    });
    setState(newState);
  };

  return {
    isShow: state,
    toggle: (options?: { deleteKeys?: string[] }) =>
      updateUrl(!state, options?.deleteKeys),
    hide: (options?: { deleteKeys?: string[] }) =>
      updateUrl(false, options?.deleteKeys),
    show: (options?: { deleteKeys?: string[] }) =>
      updateUrl(true, options?.deleteKeys),
  };
}
