'use client';

import { BreadCrumb } from '@/components/global/bread-crumb';
import { ProductCard } from '@/components/global/product-card';
import { Sort } from '@/containers/routes/explore/sort';
import { CategorySlider } from '@/containers/routes/global/category-slider';
import { productSliderData } from '@/resources/routes/global/product-slider';

export default function Page() {
  return (
    <div className="relative z-10 flex size-full flex-col gap-3">
      <div className="container flex justify-between gap-3">
        <BreadCrumb title="فروشگاه" />
        <Sort />
      </div>
      <div className="container flex gap-3">
        <p className="hidden min-w-80 bg-red-300 lg:block">hi</p>
        <div className="grid gap-3">
          <CategorySlider />
          <div className="grid w-full grid-cols-1 overflow-hidden rounded-xl border-r border-t sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {productSliderData.map((item) => (
              <div key={item.id} className="border-b border-l">
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
