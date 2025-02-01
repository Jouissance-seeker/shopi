'use client';

import { ProductCard } from '@/components/global/product-card';
import { productsData } from '@/resources/routes/global/products';

export function Products() {
  return (
    <section className="grid w-full grid-cols-1 overflow-hidden rounded-xl border-r border-t sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {productsData.map((item) => (
        <div key={item.id} className="border-b border-l">
          <ProductCard data={item} />
        </div>
      ))}
    </section>
  );
}
