import { BreadCrumb } from '@/components/global/bread-crumb';
import { Products } from '@/containers/routes/explore/products';
import { Sort } from '@/containers/routes/explore/sort';
import { CategorySlider } from '@/containers/routes/global/category-slider';

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
          <Products />
        </div>
      </div>
    </div>
  );
}
