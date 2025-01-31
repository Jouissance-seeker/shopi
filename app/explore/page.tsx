import { BreadCrumb } from '@/components/global/bread-crumb';
import { CheckboxFilter } from '@/containers/routes/explore/checkbox-filter';
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
        <div className="hidden min-w-64 lg:block">
          <div className="sticky top-4 flex flex-col gap-3 overflow-y-auto">
            <CheckboxFilter
              title="دسته بندی"
              items={[
                { text: 'موبایل', id: 1, query: 'category' },
                { text: 'لپ تاپ', id: 2, query: 'category' },
                { text: 'لوازم خانگی', id: 3, query: 'category' },
              ]}
            />
            <CheckboxFilter
              title="برند"
              items={[
                { text: 'اپل', id: 1, query: 'brand' },
                { text: 'سامسونگ', id: 2, query: 'brand' },
                { text: 'هواوی', id: 3, query: 'brand' },
              ]}
            />
            <CheckboxFilter
              title="رنگ"
              items={[
                { text: 'قرمز', id: 1, query: 'color' },
                { text: 'آبی', id: 2, query: 'color' },
                { text: 'سبز', id: 3, query: 'color' },
              ]}
            />
          </div>
        </div>
        <div className="grid flex-1 gap-3">
          <CategorySlider />
          <Products />
        </div>
      </div>
    </div>
  );
}
