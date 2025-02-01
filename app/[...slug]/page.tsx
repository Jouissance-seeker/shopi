'use client';

import { BreadCrumb } from '@/components/global/bread-crumb';
import { ProductCardActions } from '@/components/global/product-card-actions';
import { Images } from '@/containers/routes/single-product/images';
import { MiniAttributes } from '@/containers/routes/single-product/mini-attributes';
import { MiniDescription } from '@/containers/routes/single-product/mini-description';
import { Price } from '@/containers/routes/single-product/price';
import { Quantity } from '@/containers/routes/single-product/quantity';
import { Title } from '@/containers/routes/single-product/title';
import { productsData } from '@/resources/routes/global/products';

export default function Page() {
  const data = productsData[0];

  return (
    <div className="container">
      <div className="mb-2 flex size-full items-center gap-3">
        <BreadCrumb title="فروشگاه" link={data.category} />
        <span className="h-px grow bg-[#e6e9ee]" />
      </div>
      <div className="gap-5 xl:flex">
        <Images />
        <div>
          <Title en={data.title.en} fa={data.title.fa} />
          <div className="gap-3 md:flex md:flex-row-reverse">
            <div className="relative z-10 h-fit min-w-[300px] rounded-xl border p-3">
              <Price
                discount={data.discount}
                priceWithDiscount={data.priceWithDiscount}
                priceWithoutDiscount={data.priceWithoutDiscount}
              />
              <Quantity quantity={data.quantity} />
              <ProductCardActions type="single-product" data={data} />
            </div>
            <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row-reverse md:mt-0 xl:gap-5">
              <MiniAttributes attributes={data.attributes} />
              <MiniDescription description={data.description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
