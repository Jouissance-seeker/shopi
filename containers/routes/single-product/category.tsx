import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft } from 'react-icons/hi2';

interface ICategoryProps {
  category: {
    name: string;
    image: string;
  };
}

export function Category(props: ICategoryProps) {
  return (
    <section>
      <Link
        href={`/explore?category=${props.category.name}`.replace(/\s+/g, '-')}
        className="flex items-center justify-between rounded-lg border p-3"
      >
        <Image
          src={props.category.image}
          alt={props.category.name}
          width={75}
          height={75}
        />
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <p className="text-sm font-bold text-gray-500">
              مشاهده تمام محصولات
            </p>
            <p className="font-bold text-gray-600">{props.category.name}</p>
          </div>
          <HiChevronLeft />
        </div>
      </Link>
    </section>
  );
}
