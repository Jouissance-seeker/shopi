import { BreadCrumb } from '@/components/global/bread-crumb';
import { Images } from '@/containers/routes/single-product/images';
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
      <div className="gap-5 lg:flex">
        <Images />
        <Title en={data.title.en} fa={data.title.fa} />
      </div>
      <div className="gap-3 md:flex md:flex-row-reverse">
        <Price
          discount={data.discount}
          priceWithDiscount={data.priceWithDiscount}
          priceWithoutDiscount={data.priceWithoutDiscount}
        />
        <Quantity quantity={data.quantity} />
        <div className="w-full gap-3 bg-red-200 sm:flex sm:justify-between md:flex-row-reverse">
          <section className="bg-blue-100 md:w-1/2">ویژگی های محصول</section>
          <section className="bg-blue-300 md:w-1/2">
            <p>{data.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
