import { BreadCrumb } from '@/components/global/bread-crumb';
import { productSliderData } from '@/resources/routes/global/product-slider';

export default function Page() {
  return (
    <div className="container">
      <div className="flex size-full items-center gap-3">
        <BreadCrumb title="فروشگاه" link={productSliderData[0].category} />
        <span className="h-px grow bg-[#e6e9ee]" />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-between">
        <section className="h-10 w-full bg-red-100">image</section>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <section className="bg-blue-100">title</section>
          <section className="bg-yellow-100">like</section>
        </div>
        <div className="md:flex md:flex-row-reverse">
          <section className="bg-green-100">add to cart</section>
          <div className="sm:flex sm:justify-between md:flex-row-reverse">
            <section className="bg-blue-100">spec</section>
            <section className="bg-red-100">detail</section>
          </div>
        </div>
      </div>
    </div>
  );
}
