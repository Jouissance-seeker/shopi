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

  const updateUrl = async (newState: boolean) => {
    if (newState === state) return;
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
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
    toggle: () => updateUrl(!state),
    hide: () => updateUrl(false),
    show: () => updateUrl(true),
  };
}
