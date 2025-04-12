'use client';

import { APIgetProductsForSlider } from '@/actions/routes/home/get-products-for-slider';
import { ProductCard } from '@/components/product-card';

interface IProductsProps {
  data: Awaited<ReturnType<typeof APIgetProductsForSlider>>;
}

export function Products(props: IProductsProps) {
  return (
    <section className="grid w-full grid-cols-1 overflow-hidden rounded-xl border-r border-t sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {props.data.map((item) => (
        <div key={item.id} className="border-b border-l">
          <ProductCard data={item} />
        </div>
      ))}
    </section>
  );
}
