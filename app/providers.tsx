'use client';

import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Providers({ children }: IProps) {
  return <Suspense>{children}</Suspense>;
}
