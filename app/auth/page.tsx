import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa6';
import { Form } from '@/containers/routes/auth/form';

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-between pb-6 pt-20">
      <BackToTop />
      <Form />
      <Copyright />
    </div>
  );
}

const BackToTop = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <FaArrowUp className="fill-red" size={20} />
        <p className="text-sm font-bold text-red">بازگشت به صفحه اصلی</p>
      </div>
    </Link>
  );
};

const Copyright = () => {
  return (
    <p className="text-sm font-medium text-gray-500">توسعه توسط حمید شاهسونی</p>
  );
};
