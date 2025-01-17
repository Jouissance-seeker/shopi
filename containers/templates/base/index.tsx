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
      <main className="flex-center flex-1">{props.children}</main>
      <Footer />
    </>
  );
}
