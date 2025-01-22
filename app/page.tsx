import ProductSlider from '@/containers/routes/global/product-slider';
import HeroOfferSlider from '@/containers/routes/home/hero-offer-slider';
import HeroSlider from '@/containers/routes/home/hero-slider';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-8">
      <div className="container grid grid-cols-4 gap-5">
        <HeroSlider />
        <HeroOfferSlider />
      </div>
      <ProductSlider title="جدیدترین محصولات" path="/" />
      <ProductSlider title="پرفروش ترین محصولات" path="/" />
      <ProductSlider title="ارزان ترین محصولات" path="/" />
    </div>
  );
}
