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
      <main className="flex-center my-8 flex-1">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {props.children}
      </main>
      <Footer />
    </>
  );
}
