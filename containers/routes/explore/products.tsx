'use client';

import { ProductCard } from '@/components/global/product-card';
import { productSliderData } from '@/resources/routes/global/product-slider';

export function Products() {
  return (
    <section className="grid w-full grid-cols-1 overflow-hidden rounded-xl border-r border-t sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {productSliderData.map((item) => (
        <div key={item.id} className="border-b border-l">
          <ProductCard data={item} />
        </div>
      ))}
    </section>
  );
}
