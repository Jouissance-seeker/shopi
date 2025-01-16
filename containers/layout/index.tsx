import { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import Footer from './footer';
import Header from './header';

interface ILayoutProps {
  children: ReactNode;
  font: string;
}

export default function Layout(props: ILayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex flex-col h-dvh', props.font)}>
        <Header />
        <main className="flex-center flex-1">{props.children}</main>
        <Footer />
      </body>
    </html>
  );
}
