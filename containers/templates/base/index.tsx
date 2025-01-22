import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface ILayoutProps {
  children: ReactNode;
}

export default function TemplateBase(props: ILayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
